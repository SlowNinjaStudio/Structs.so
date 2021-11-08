/**
 * Web UI component for structures.
 */
import {DroidUI} from "../DroidUI";
import {DroidUISchematicCondensedCTANone} from "./DroidUISchematicCondensedCTANone";
import {DroidUISchematicCondensed} from "./DroidUISchematicCondensed";
import {DroidUIComputeStatus} from "./DroidUIComputeStatus";
import {Computer} from "../../compute/Computer";
import {DroidUIStructureCondensed} from "./DroidUIStructureCondensed";
import {DroidUIStructureHealthProgress} from "./DroidUIStructureHealthProgress";

export class DroidUIStructureRepairStatusModal {
  /**
   * @param {StructureRepair} program
   */
  constructor(program) {

    this.performing_structure = program.performing_structure;
    this.structure = program.target_structure;
    this.target_structure = program.target_structure;

    this.program = program;


    this.uiStructure = new DroidUIStructureCondensed(
      this.target_structure,
      this.performing_structure,
      new DroidUISchematicCondensedCTANone(),
      'repair-status-modal-'
    );

    this.computeStatus = new DroidUIComputeStatus(true);

    this.healthStatus = new DroidUIStructureHealthProgress();

    this.backdrop = document.getElementById("backdrop");

  }

  render() {
    return `
      <div id="repair-status-dialog" class="modal" tabindex="0">
        <div class="modal-dialog">
          <div class="modal-content ">
            <div class="modal-header">
               <h7 class="modal-title">🛠 Repairing Structure 🛠️</h7>
            </div>
            <div class="modal-body">
              ${this.uiStructure.render()}
              <div id="health_status" class="row">${this.healthStatus.render()}</div>
              <div id="compute_status" class="row">${this.computeStatus.render()}</div>
            </div>
            <div class="modal-footer">
               <div class="dialog-menu row text-center">
                <div class="col">
                  <button class="nes-btn is-error" id="repair-status-dialog-cancel-button">Close</button>
                </div>
                <div class="col">
                  <a href="#" class="nes-btn is-disabled" disabled="disabled" id="repair-status-dialog-view-button">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    `;
  }

  showModal() {

    this.healthStatus.init(this.program);

    this.backdrop.style.display = "block"

    const repairStatusDialog = document.getElementById("repair-status-dialog")
    repairStatusDialog.style.display = "block"
    repairStatusDialog.classList.add("show")
  }

  destroyModal() {
    this.backdrop.style.display = "none"

    const repairStatusDialog = document.getElementById("repair-status-dialog")
    repairStatusDialog.style.display = "none"
    repairStatusDialog.classList.remove("show")

    document.getElementById("modal-container").innerHTML  = ""
  }

  initEventListeners() {
    document.getElementById('repair-status-dialog-cancel-button').addEventListener('click', function() {
      this.destroyModal();
    }.bind(this));
  }

}
