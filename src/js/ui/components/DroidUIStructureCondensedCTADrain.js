import {StructureDrain} from "../../compute/StructureDrain";
import {CTA_TYPES} from "../../constants";

export class DroidUIStructureCondensedCTADrain {

  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.structure = structure;
  }

  initProgram() {
    return (new StructureDrain())
  }

  getCTAType() { return CTA_TYPES.DRAIN}

  render() {
    return `
      <div class="row gx-2 mt-2">
        <div class="col">
          <a href="#" class="nes-btn nes-btn-fluid is-warning" id="structure_list_drain_${this.structure.getId()}" name="${this.structure.getId()}">Drain</a>
        </div>
      </div>
    `;
  }
}
