import {StructureDrain} from "../../compute/StructureDrain";

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
