import {JsonAjaxer} from "../vendor/JsonAjaxer";
import {StructureFactory} from "../models/StructureFactory";
import {SchematicFactory} from "../models/SchematicFactory";

/**
 * API Gateway for the Droid API
 */
export class DroidApi {

  /**
   * @param {string} scheme example https://
   * @param {string} domain example coindroids.com
   * @param {Object} ajax AJAX handling class
   * @param {} loadTestMultiply multiply the incoming data by this amount
   */
  constructor(scheme, domain, ajax, loadTestMultiply = 1) {
    this.scheme = scheme;
    this.domain = domain;
    this.ajax = (ajax !== undefined) ? ajax: new JsonAjaxer();
    this.loadTestMultiply = loadTestMultiply;
  }

  /**
   * Used for load testing
   *
   * @param {Array} dataArray
   * @param {number} multiplier multiply the incoming data by this amount
   * @returns {*[]}
   */
  multiplyDataLoad(dataArray, multiplier) {
    let product = [];
    for (let j = 0; j < multiplier; j++) {
      product = product.concat(dataArray);
    }
    return product;
  }

  /**
   * @returns {Promise<*[]>}
   */
  getStructures() {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure`)
      .then(data => {
        const structureFactory = new StructureFactory();
        const structures = [];
        let rawStructures = data.Structure;

        if (this.loadTestMultiply > 1) {
          rawStructures = this.multiplyDataLoad(rawStructures, this.loadTestMultiply);
        }

        for (let i = 0; i < rawStructures.length; i ++) {
          structures[i] = structureFactory.make(rawStructures[i]);
          structures[i].id = i;
        }

        return structures;
      })
  }

  /**
   * @param {string} creator id
   * @returns {Promise<*[]>}
   */
  getSchematicsByCreator(creator) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Schematic/creator/${creator}`)
      .then(data => {
        const schematicFactory = new SchematicFactory();
        const schematics = [];
        let rawSchematics = data.Schematic;

        if (this.loadTestMultiply > 1) {
          rawSchematics = this.multiplyDataLoad(rawSchematics, this.loadTestMultiply);
        }

        for (let i = 0; i < rawSchematics.length; i ++) {
          schematics[i] = schematicFactory.make(rawSchematics[i]);
          schematics[i].id = i;
        }

        return schematics;
      })
  }
}
