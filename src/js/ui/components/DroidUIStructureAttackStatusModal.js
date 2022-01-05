/**
 * Web UI component for structures.
 */
import {DroidUIComputeStatus} from "./DroidUIComputeStatus";
import {Computer} from "../../compute/Computer";
import {DroidUIStructureHealthProgress} from "./DroidUIStructureHealthProgress";
import {DroidUIStructureCondensedCTANone} from "./DroidUIStructureCondensedCTANone";
import {DroidUIStructureCondensed} from "./DroidUIStructureCondensed";
import {AttackAnimationFactory} from "../../animations/AttackAnimationFactory";
import {DroidUIArtOverlay} from "./DroidUIArtOverlay";
import {AnimationEngine} from "../../vendor/animation/AnimationEngine";
import {ANIMATION_EVENTS} from "../../Constants";

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

    this.uiStructure = new DroidUIStructureCondensed(
      this.target_structure,
      this.performing_structure,
      this.target_structure,
      new DroidUIStructureCondensedCTANone(),
      'build-status-modal-'
    );

    this.computeStatus = new DroidUIComputeStatus(true);

    this.healthStatus = new DroidUIStructureHealthProgress();

    this.backdrop = document.getElementById("backdrop");

    this.attackAnimation = (new AttackAnimationFactory()).make(
      'canvas-attack-animation',
      program.performing_structure,
      program.target_structure
    );

    this.attackEndOverlay = new DroidUIArtOverlay(
      `art-overlay-attack-${program.target_structure.id}`,
      'Attack Complete',
      `/structure.html?structure_id=${program.target_structure.id}`
    );
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
              <div class="container-fluid">
                <div class="row justify-content-center mb-4">
                  <div class="col-auto animation-wrapper">
                    <canvas id="canvas-attack-animation" width="64" height="64" style="width:256px;"></canvas>
                    ${this.attackEndOverlay.render()}
                  </div>
                </div>
              </div>
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
    document.getElementById('attack-status-dialog-cancel-button').addEventListener('click', function () {
      this.destroyModal();
      (new Computer()).stop_process(this.process_id);
    }.bind(this));


    document.addEventListener(
      AnimationEngine.eventName(ANIMATION_EVENTS.END,`ATTACK_POST_DAMAGE_${this.target_structure.id}`),
      function () {
        const overlay = document.getElementById(this.attackEndOverlay.id);
        if ((typeof overlay != 'undefined') && overlay != null) {
          overlay.style.display = 'block';
          overlay.style.opacity = '0.8';
        }
      }.bind(this)
    );
  }
}
