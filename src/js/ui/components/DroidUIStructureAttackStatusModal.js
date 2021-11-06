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

export class DroidUIStructureAttackStatusModal {
  /**
   * @param {number} amount
   */
  constructor(program, process_id) {

    this.performing_structure = program.performing_structure;
    this.structure = program.target_structure;
    this.target_structure = program.target_structure;
    this.program = program;
    this.process_id = process_id;

    this.uiStructure = new DroidUIStructureCondensed(
      this.target_structure,
      this.performing_structure,
      new DroidUISchematicCondensedCTANone(),
      'build-status-modal-'
    );

    this.computeStatus = new DroidUIComputeStatus(true);

    this.healthStatus = new DroidUIStructureHealthProgress();

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

    document.getElementById("backdrop").style.display = "block"
    document.getElementById("attack-status-dialog").style.display = "block"
    document.getElementById("attack-status-dialog").classList.add("show")
  }

  destroyModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("attack-status-dialog").style.display = "none"
    document.getElementById("attack-status-dialog").classList.remove("show")

    document.getElementById("modal-container").innerHTML  = ""
  }

  initEventListeners() {
    document.getElementById('attack-status-dialog-cancel-button').addEventListener('click', function() {
      this.destroyModal();
      (new Computer()).stop_process(this.process_id);
    }.bind(this));
  }

}
