import {Computer} from "../../compute/Computer";
import {StructureBuild} from "../../compute/StructureBuild";
import {CONFIG} from "../../constants";
import {secondsToString} from "../../vendor/SecondsToString"

import {DroidUIComputeStatus} from "./DroidUIComputeStatus"
import {DroidUIStructureCondensedCTANone} from "./DroidUIStructureCondensedCTANone";
import {DroidUI} from "../DroidUI";

import {Instance} from "../../models/Instance"
import {DroidUIStructureCondensedCTAAttack} from "./DroidUIStructureCondensedCTAAttack";
import {StructureAttack} from "../../compute/StructureAttack";
import {StructureRepair} from "../../compute/StructureRepair"
import {DroidUIStructureCondensedCTABuild} from "./DroidUIStructureCondensedCTABuild";
import {DroidUIStructureCondensedCTARepair} from "./DroidUIStructureCondensedCTARepair";
import {DroidUIStructureHealthProgress} from "./DroidUIStructureHealthProgress";

export class DroidUIStructureCondensed {

  /**
   * @param {Structure} structure
   * @param {Schematic|Structure} baseObject
   * @param {DroidUIStructureCondensedCTANone|DroidUIStructureCondensedCTABuild|DroidUIStructureCondensedCTAAttack|DroidUIStructureCondensedCTARepair} callToAction
   * @param {string} idPrefix
   * @param {DroidUIComputeStatus} computeStatus
   */
  constructor(
    structure,
    baseObject,
    callToAction = new DroidUIStructureCondensedCTANone(),
    idPrefix = '',
    computeStatus = null
  ) {
    this.structure = structure;

    this.idPrefix = idPrefix;
    this.callToAction = callToAction;

    this.computer = new Computer();

    if (callToAction instanceof DroidUIStructureCondensedCTABuild) {
      this.schematic = baseObject;
      this.program = new StructureBuild();
      this.program.setSchematic(baseObject);
      this.program.setPerformingStructure(structure);

      this.compute_status = computeStatus;

    } else if  (callToAction instanceof DroidUIStructureCondensedCTAAttack) {
      this.program = new StructureAttack();
      this.program.setPerformingStructure(baseObject);
      this.program.setTargetStructure(structure)

      this.compute_status = computeStatus;

    } else if  (callToAction instanceof DroidUIStructureCondensedCTARepair) {
      this.program = new StructureRepair();
      this.program.setPerformingStructure(baseObject);
      this.program.setTargetStructure(structure)

      this.compute_status = computeStatus;
    }
  }
  getCanvasId() {
    return `${this.idPrefix}structure-condensed-${this.structure.getId()}`;
  }
  render() {
    return `
      <div class="structure-condensed container text-center p-2">
        <div class="row gx-2 mb-2">
          <div class="col-auto">
            <div class="structure-asset game-asset-wrapper">
              <canvas id="${this.getCanvasId()}" class="pixel-art-viewer" width="64" height="64">
                Your browser does not support the canvas element.
              </canvas>
            </div>
          </div>
          <div class="col text-start text-truncate">
            <div class="row">
              <div class="col-auto text-truncate">
                <span class="attribute-label">ID:</span> ${this.structure.getId()}
              </div>
              <div class="col text-end">
                ${this.structure.hasAmbitWater() ? `
                  <img src="/img/icons/icon-ambit-water.png" alt="Water" title="Water"/>
                ` : ''}
                ${this.structure.hasAmbitLand() ? `
                  <img src="/img/icons/icon-ambit-land.png" alt="Land" title="Land"/>
                ` : ''}
                ${this.structure.hasAmbitSky() ? `
                  <img src="/img/icons/icon-ambit-sky.png" alt="Sky" title="Sky"/>
                ` : ''}
                ${this.structure.hasAmbitSpace() ? `
                  <img src="/img/icons/icon-ambit-space.png" alt="Space" title="Space"/>
                ` : ''}
              </div>
            </div>
            <div class="row">
              <div class="col text-truncate">
                <span class="attribute-label">Name:</span> ${this.structure.getName()} - ${this.structure.getDescription()}
              </div>
            </div>
            <div class="row">
              <div class="col text-truncate">
                <span class="attribute-label">Est. Time:</span> ${(typeof this.program != 'undefined') ? secondsToString(this.program.generateDifficulty() / CONFIG.INITIAL_HASHRATE) : ''}
              </div>
            </div>
          </div>
        </div>
        <div class="row gx-2">
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-health.png" alt="Health Icon" title="Max Health" class="structure-condensed-icon">
            </div>
            <div>${this.structure.getHealthMax()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-speed.png" alt="Speed Icon" title="Max Speed" class="structure-condensed-icon">
            </div>
            <div>${this.structure.getSpeed()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-accuracy.png" alt="Accuracy Icon" title="Max Accuracy" class="structure-condensed-icon">
            </div>
            <div>${this.structure.getAccuracy()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-mass.png" alt="Mass Icon" title="Max Mass" class="structure-condensed-icon">
            </div>
            <div>${this.structure.getMass()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-strength.png" alt="Strength Icon" title="Max Strength" class="structure-condensed-icon">
            </div>
            <div>${this.structure.getStrength()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-energy.png" alt="Energy Efficiency Icon" title="Max Energy Efficiency" class="structure-condensed-icon">
            </div>
            <div>${this.structure.getEnergyEfficiency()}</div>
          </div>
        </div>
        <div class="row gx-2">
          ${this.structure.hasFeatureAttack() ? `
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-attack-melee.png" alt="Melee Attack Icon" title="Max Melee Attack" class="structure-condensed-icon">
              </div>
              <div>${this.structure.getMeleeAttack()}</div>
            </div>
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-attack-range.png" alt="Range Attack Icon" title="Max Range Attack" class="structure-condensed-icon">
              </div>
              <div>${this.structure.getRangeAttack()}</div>
            </div>
          ` : ''}
          ${this.structure.hasFeatureDefensive() ? `
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-def-melee.png" alt="Melee Defense Icon" title="Max Melee Defense" class="structure-condensed-icon">
              </div>
              <div>${this.structure.getMeleeDefense()}</div>
            </div>
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-def-range.png" alt="Range Defense Icon" title="Max Range Defense" class="structure-condensed-icon">
              </div>
              <div>${this.structure.getRangeDefense()}</div>
            </div>
          ` : ''}
          ${this.structure.hasFeatureEngineering() ? `
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-eng-build.png" alt="Build Icon" title="Max Build Rate" class="structure-condensed-icon">
              </div>
              <div>${this.structure.getBuildRate()}</div>
            </div>
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-eng-restoration.png" alt="Restoration Icon" title="Max Restoration Rate" class="structure-condensed-icon">
              </div>
              <div>${this.structure.getRestorationRate()}</div>
            </div>
          ` : ''}
        </div>
        ${this.callToAction.render()}
      </div>
    `;
  }

  initMainBuildEventListeners() {

      document.getElementById('structure_list_build_' + this.structure.getId()).addEventListener('click', async function() {
        // Hide the selector
        // Move this into the DroidUI if it's not already there.
        window.bootstrap.Offcanvas.getInstance(document.getElementById('offcanvas')).hide();

        let instance = new Instance();
        await instance.init();
        this.program.instance = instance.address;

        let new_process_id = this.computer.add_process(this.program);

        (new DroidUI()).loadStructureBuildStatusModal(this.schematic, this.structure, this.program, new_process_id)

        this.computer.run_process(new_process_id);

      }.bind(this));

  }

  initMainAttackEventListeners() {

    document.getElementById('structure_list_attack_' + this.structure.getId()).addEventListener('click', async function() {
      // Hide the selector
      // Move this into the DroidUI if it's not already there.
      window.bootstrap.Offcanvas.getInstance(document.getElementById('offcanvas')).hide();

      let instance = new Instance();
      await instance.init();
      this.program.instance = instance.address;

      let new_process_id = this.computer.add_process(this.program);


      (new DroidUI()).loadStructureAttackStatusModal(this.program, new_process_id)
      this.computer.run_process(new_process_id);

    }.bind(this));
  }

  initMainRepairEventListeners() {

    document.getElementById('structure_list_repair_' + this.structure.getId()).addEventListener('click', async function() {
      // Hide the selector
      // Move this into the DroidUI if it's not already there.
      window.bootstrap.Offcanvas.getInstance(document.getElementById('offcanvas')).hide();


      let instance = new Instance();
      await instance.init();
      this.program.instance = instance.address;


      (new DroidUI()).loadStructureRepairStatusModal(this.program)

      let compute_status = new DroidUIComputeStatus();
      compute_status.updateStatus(50, 1, 100)

      document.getElementById('repair-status-dialog-view-button').href = '/structure.html?structure_id=' + this.program.target_structure.id;


      const fee = {
        amount: [
          {
            denom: "watt",
            amount: "1",
          },
        ],
        gas: "180000",
      };

      instance.performRepair(this.program, fee).then((result) => {
        let tx_result_parsed = JSON.parse(result.rawLog);

        let tx_result_processed = (new StructureRepair()).processResult(tx_result_parsed[0]);
        (new DroidUIStructureHealthProgress()).incrementHealth(tx_result_processed.targetRepairAmount);
        console.log(tx_result_parsed)
        let compute_status = new DroidUIComputeStatus();
        compute_status.setComplete();

        document.getElementById('repair-status-dialog-view-button').disabled = ""
        document.getElementById('repair-status-dialog-view-button').classList.remove('is-disabled')
        document.getElementById('repair-status-dialog-view-button').classList.add('is-success')


      });

    }.bind(this));
  }
}
