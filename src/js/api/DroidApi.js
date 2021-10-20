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
   */
  constructor(scheme, domain, ajax = null) {
    this.scheme = scheme;
    this.domain = domain;
    this.ajax = (ajax !== null) ? ajax: new JsonAjaxer();
  }

  /**
   * @param data response data
   * @returns {Array.<Structure>}
   */
  structureResponseHandler(data) {
    const structureFactory = new StructureFactory();
    const structures = [];
    const rawStructures = Array.isArray(data.Structure) ? data.Structure : [data.Structure];

    for (let i = 0; i < rawStructures.length; i ++) {
      structures[i] = structureFactory.make(rawStructures[i]);
    }

    return structures;
  }

  /**
   * @returns {Promise<Structure[]>}
   */
  getStructures() {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param {string} creator id
   * @returns {Promise<Structure[]>}
   */
  getStructuresByCreator(creator) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/creator/${creator}`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param {string} structureId id
   * @returns {Promise<Structure[]>}
   */
  getSingleStructure(structureId) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/${structureId}`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param searchString
   * @returns {Promise<Structure[]>}
   */
  searchStructures(searchString) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/search/${encodeURIComponent(searchString)}`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param data response data
   * @returns {Schematic[]}
   */
  schematicResponseHandler(data) {
    const schematicFactory = new SchematicFactory();
    const schematics = [];
    const rawSchematics = data.Schematic;

    for (let i = 0; i < rawSchematics.length; i ++) {
      schematics[i] = schematicFactory.make(rawSchematics[i]);
    }

    return schematics;
  }

  /**
   * @param {string} creator id
   * @returns {Promise<Schematic[]>}
   */
  getSchematicsByCreator(creator) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Schematic/creator/${creator}`)
      .then(this.schematicResponseHandler.bind(this));
  }

  /**
   * @param {string} structureId
   * @param {string} searchString
   * @returns {Promise<Schematic[]>}
   */
  searchSchematicsByStructure(structureId, searchString) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Schematic/search/${structureId}/${encodeURIComponent(searchString)}`)
      .then(this.schematicResponseHandler.bind(this));
  }
}
