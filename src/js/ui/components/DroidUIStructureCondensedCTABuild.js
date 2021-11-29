import {StructureBuild} from "../../compute/StructureBuild";
import {CTA_TYPES} from "../../constants";

export class DroidUIStructureCondensedCTABuild {

  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.structure = structure;
  }

  initProgram() {
    return (new StructureBuild())
  }

  getCTAType() { return CTA_TYPES.BUILD}

  render() {
    return `
      <div class="row gx-2 mt-2">
        <div class="col">
          <a href="#" class="nes-btn nes-btn-fluid is-warning" id="structure_list_build_${this.structure.getId()}" name="${this.structure.getId()}">Build</a>
        </div>
      </div>
    `;
  }
}
