/**
 * Web UI component for structures.
 */
import {DroidUI} from "../DroidUI";
import {DroidUISchematicCondensedCTANone} from "./DroidUISchematicCondensedCTANone";
import {DroidUISchematicCondensed} from "./DroidUISchematicCondensed";
import {DroidUIComputeStatus} from "./DroidUIComputeStatus";
import {Computer} from "../../compute/Computer";
import {DroidUIStructureCondensedTarget} from "./DroidUIStructureCondensedTarget";
import {DroidUIStructureHealthProgress} from "./DroidUIStructureHealthProgress";
import {DroidUIStructureCondensedCTAAttack} from "./DroidUIStructureCondensedCTAAttack";
import {DroidUIStructureCondensedCTANone} from "./DroidUIStructureCondensedCTANone";

export class DroidUIStructureAttackStatusModal {

  /**
   * @param {StructureAttack} program
   * @param {number} processId
   */
  constructor(program, processId) {

    this.performing_structure = program.performing_structure;
    this.structure = program.target_structure;
    this.target_structure = program.target_structure;
    this.program = program;
    this.process_id = processId;

    this.uiStructure = new DroidUIStructureCondensedTarget(
      this.target_structure,
      this.performing_structure,
      new DroidUIStructureCondensedCTANone(),
      'build-status-modal-'
    );

    this.computeStatus = new DroidUIComputeStatus(true);

    this.healthStatus = new DroidUIStructureHealthProgress();

    this.backdrop = document.getElementById("backdrop");

  }

  render() {
    return `
      <div id="attack-status-dialog" class="modal" tabindex="0">
        <div class="modal-dialog">
          <div class="modal-content ">
            <div class="modal-header">
               <h7 class="modal-title">🔪 Attacking Structure 🔪️</h7>
            </div>
            <div class="modal-body">
              ${this.uiStructure.render()}
              <div id="health_status" class="row">${this.healthStatus.render()}</div>
              <div id="compute_status" class="row">${this.computeStatus.render()}</div>
            </div>
            <div class="modal-footer">
               <div class="dialog-menu row text-center">
                <div class="col">
                  <button class="nes-btn is-error" id="attack-status-dialog-cancel-button">Cancel</button>
                </div>
                <div class="col">
                  <a href="#" class="nes-btn is-disabled" disabled="disabled" id="attack-status-dialog-view-button">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    `;
  }

  showModal() {
    this.computeStatus.setProgram(this.program);
    this.computeStatus.setProcessID(this.process_id);

    this.healthStatus.init(this.program);

    this.backdrop.style.display = "block"

    const attackStatusDialog = document.getElementById("attack-status-dialog")
    attackStatusDialog.style.display = "block"
    attackStatusDialog.classList.add("show")
  }

  destroyModal() {
    this.backdrop.style.display = "none"

    const attackStatusDialog = document.getElementById("attack-status-dialog")
    attackStatusDialog.style.display = "none"
    attackStatusDialog.classList.remove("show")

    document.getElementById("modal-container").innerHTML  = ""
  }

  initEventListeners() {
    document.getElementById('attack-status-dialog-cancel-button').addEventListener('click', function() {
      this.destroyModal();
      (new Computer()).stop_process(this.process_id);
    }.bind(this));
  }

}
