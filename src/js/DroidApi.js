import {JsonAjaxer} from "./JsonAjaxer";
import {StructureFactory} from "./StructureFactory";

/**
 * API Gateway for the Droid API
 */
export class DroidApi {
  constructor(scheme, domain, ajax) {
    this.scheme = scheme;
    this.domain = domain;
    this.ajax = (ajax !== undefined) ? ajax: new JsonAjaxer();
  }
  getStructures() {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure`)
      .then(data => {
        const structureFactory = new StructureFactory();
        const structures = [];
        for (let i = 0; i < data.Structure.length; i ++) {
          structures[i] = structureFactory.make(data.Structure[i]);
        }
        return structures;
      })
  }
}
