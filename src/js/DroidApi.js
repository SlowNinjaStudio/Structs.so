import {JsonAjaxer} from "./JsonAjaxer";
import {StructureFactory} from "./StructureFactory";

/**
 * API Gateway for the Droid API
 */
export class DroidApi {
  constructor(scheme, domain, ajax, loadTestMultiply = 1) {
    this.scheme = scheme;
    this.domain = domain;
    this.ajax = (ajax !== undefined) ? ajax: new JsonAjaxer();
    this.loadTestMultiply = loadTestMultiply;
  }
  multiplyDataLoad(dataArray, multiplier) {
    let product = [];
    for (let j = 0; j < multiplier; j++) {
      product = product.concat(dataArray);
    }
    return product;
  }
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
}
