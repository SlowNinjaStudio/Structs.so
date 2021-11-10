/**
 * Web UI component for structures.
 */
import {DroidUI} from "../DroidUI";
import {DroidUISchematicCondensedCTANone} from "./DroidUISchematicCondensedCTANone";
import {DroidUISchematicCondensed} from "./DroidUISchematicCondensed";
import {DroidUIComputeStatus} from "./DroidUIComputeStatus";
import {Computer} from "../../compute/Computer";

export class DroidUIStructureBuildStatusModal {
  /**
   * @param {Schematic} schematic
   * @param {Structure} structure
   * @param {StructureBuild} program
   * @param {number} processId
   */
  constructor(schematic, structure, program, processId) {

    this.schematic = schematic;
    this.structure = structure;
    this.program = program;
    this.process_id = processId;

    this.uiSchematic = new DroidUISchematicCondensed(
      this.schematic,
      this.structure,
      new DroidUISchematicCondensedCTANone(),
      'build-status-modal-'
    );

    this.computeStatus = new DroidUIComputeStatus(true);

    this.backdrop = document.getElementById("backdrop");
  }

  render() {
    return `
      <div id="build-status-dialog" class="modal" tabindex="0">
        <div class="modal-dialog">
          <div class="modal-content ">
            <div class="modal-header">
               <h6 class="modal-title">🏭 Building Structure 🏭️</h6>
            </div>
            <div class="modal-body">
              ${this.uiSchematic.render()}
              <div id="compute_status" class="row">${this.computeStatus.render()}</div>
            </div>
            <div class="modal-footer">
               <div class="dialog-menu row text-center">
                <div class="col">
                  <button class="nes-btn is-error" id="build-status-dialog-cancel-button">Cancel</button>
                </div>
                <div class="col">
                  <a href="#" class="nes-btn is-disabled" disabled="disabled" id="build-status-dialog-view-button">View</a>
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

    this.backdrop.style.display = "block"

    const buildStatusDialog = document.getElementById("build-status-dialog")
    buildStatusDialog.style.display = "block"
    buildStatusDialog.classList.add("show")
  }

  destroyModal() {
    this.backdrop.style.display = "none"

    const buildStatusDialog = document.getElementById("build-status-dialog")
    buildStatusDialog.style.display = "none"
    buildStatusDialog.classList.remove("show")

    document.getElementById("modal-container").innerHTML  = ""
  }

  initEventListeners() {
    document.getElementById('build-status-dialog-cancel-button').addEventListener('click', function() {
      this.destroyModal();
      (new Computer()).stop_process(this.process_id);
    }.bind(this));
  }

}
