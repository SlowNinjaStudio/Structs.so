export class DroidUIStructureCondensedCTARepair {

  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.structure = structure;
  }

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
