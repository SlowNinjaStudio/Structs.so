import {StructureRepair} from "../../compute/StructureRepair";
import {CTA_TYPES} from "../../constants";

export class DroidUIStructureCondensedCTARepair {

  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.structure = structure;
  }

  initProgram() {
    return (new StructureRepair())
  }

  getCTAType() { return CTA_TYPES.REPAIR}

  render() {
    return `
      <div class="row gx-2 mt-2">
        <div class="col">
          <a href="#" class="nes-btn nes-btn-fluid is-warning" id="structure_list_repair_${this.structure.getId()}" name="${this.structure.getId()}">Repair</a>
        </div>
      </div>
    `;
  }
}
