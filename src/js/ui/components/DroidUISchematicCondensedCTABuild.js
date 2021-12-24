import {StructureBuild} from "../../compute/StructureBuild";

export class DroidUISchematicCondensedCTABuild {

  /**
   * @param {Schematic} schematic
   */
  constructor(schematic) {
    this.schematic = schematic;
  }

  initProgram() {
    return (new StructureBuild())
  }

  render() {
    return `
      <div class="row gx-2 mt-2">
        <div class="col">
          <a href="#" class="nes-btn nes-btn-fluid is-warning" id="schematic_list_build_${this.schematic.getId()}" name="${this.schematic.getId()}">Build</a>
        </div>
      </div>
    `;
  }
}
