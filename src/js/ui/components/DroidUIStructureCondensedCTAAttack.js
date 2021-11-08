import {StructureAttack} from "../../compute/StructureAttack";

export class DroidUIStructureCondensedCTAAttack {

  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.structure = structure;
  }

  initProgram() {
    return (new StructureAttack())
  }

  render() {
    return `
      <div class="row gx-2 mt-2">
        <div class="col">
          <a href="#" class="nes-btn nes-btn-fluid is-warning" id="structure_list_attack_${this.structure.getId()}" name="${this.structure.getId()}">Attack</a>
        </div>
      </div>
    `;
  }
}
