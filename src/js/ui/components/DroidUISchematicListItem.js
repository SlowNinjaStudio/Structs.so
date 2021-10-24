import {Computer, processes, next_process_id} from "../../compute/Computer";
import {StructureBuild} from "../../compute/StructureBuild";
import {AMBITS, FEATURES, CONFIG} from "../../constants";
import {secondsToString} from "../../vendor/SecondsToString"

import {DroidUIComputeStatus} from "./DroidUIComputeStatus"

export class DroidUISchematicListItem {

  /**
   * @param {Schematic} schematic
   * @param {string} idPrefix
   */
  constructor(schematic, structure, idPrefix = '') {
    this.schematic = schematic;
    this.idPrefix = idPrefix;

    this.computer = new Computer();

    this.program = new StructureBuild();
    this.program.setSchematic(schematic);
    this.program.setPerformingStructure(structure);

    this.compute_status;
  }
  getCanvasId() {
    return `${this.idPrefix}schematic-list-item-${this.schematic.getId()}`;
  }
  render() {
    return `
      <div class="structure-list-item container text-center p-2">
        <div class="row gx-2 mb-2">
          <div class="col-auto">
            <div class="game-asset-wrapper">
              <canvas id="${this.getCanvasId()}" class="pixel-art-viewer" width="64" height="64">
                Your browser does not support the canvas element.
              </canvas>
            </div>
          </div>
          <div class="col text-start text-truncate">
            <div class="row">
              <div class="col-auto text-truncate">
                <span class="attribute-label">ID:</span> ${this.schematic.getId()}
              </div>
              <div class="col text-end">
                ${this.schematic.hasAmbitWater() ? `
                  <img src="/img/icons/icon-ambit-water.png" alt="Water" title="Water"/>
                ` : ''}
                ${this.schematic.hasAmbitLand() ? `
                  <img src="/img/icons/icon-ambit-land.png" alt="Land" title="Land"/>
                ` : ''}
                ${this.schematic.hasAmbitSky() ? `
                  <img src="/img/icons/icon-ambit-sky.png" alt="Sky" title="Sky"/>
                ` : ''}
                ${this.schematic.hasAmbitSpace() ? `
                  <img src="/img/icons/icon-ambit-space.png" alt="Space" title="Space"/>
                ` : ''}
              </div>
            </div>
            <div class="row">
              <div class="col text-truncate">
                <span class="attribute-label">Name:</span> ${this.schematic.getName()} - ${this.schematic.getDescription()}
              </div>
            </div>
            <div class="row">
              <div class="col text-truncate">
                <span class="attribute-label">Requires:</span> ${this.schematic.getEnergyToBuildAmount()} ${this.schematic.getEnergyToBuildDenom()}
              </div>
            </div>
            <div class="row">
              <div class="col text-truncate">
                <span class="attribute-label">Est. Time:</span> ${secondsToString(this.program.generateDifficulty() / CONFIG.INITIAL_HASHRATE)}
              </div>
            </div>
          </div>
        </div>
        <div class="row gx-2">
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-health.png" alt="Health Icon" title="Max Health" class="structure-list-icon">
            </div>
            <div>${this.schematic.getHealthMax()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-speed.png" alt="Speed Icon" title="Max Speed" class="structure-list-icon">
            </div>
            <div>${this.schematic.getSpeed()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-accuracy.png" alt="Accuracy Icon" title="Max Accuracy" class="structure-list-icon">
            </div>
            <div>${this.schematic.getAccuracy()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-mass.png" alt="Mass Icon" title="Max Mass" class="structure-list-icon">
            </div>
            <div>${this.schematic.getMass()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-strength.png" alt="Strength Icon" title="Max Strength" class="structure-list-icon">
            </div>
            <div>${this.schematic.getStrength()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-energy.png" alt="Energy Efficiency Icon" title="Max Energy Efficiency" class="structure-list-icon">
            </div>
            <div>${this.schematic.getEnergyEfficiency()}</div>
          </div>
        </div>
        <div class="row gx-2">
          ${this.schematic.hasFeatureAttack() ? `
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-attack-melee.png" alt="Melee Attack Icon" title="Max Melee Attack" class="structure-list-icon">
              </div>
              <div>${this.schematic.getMeleeAttack()}</div>
            </div>
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-attack-range.png" alt="Range Attack Icon" title="Max Range Attack" class="structure-list-icon">
              </div>
              <div>${this.schematic.getRangeAttack()}</div>
            </div>
          ` : ''}
          ${this.schematic.hasFeatureDefensive() ? `
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-def-melee.png" alt="Melee Defense Icon" title="Max Melee Defense" class="structure-list-icon">
              </div>
              <div>${this.schematic.getMeleeDefense()}</div>
            </div>
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-def-range.png" alt="Range Defense Icon" title="Max Range Defense" class="structure-list-icon">
              </div>
              <div>${this.schematic.getRangeDefense()}</div>
            </div>
          ` : ''}
          ${this.schematic.hasFeatureEngineering() ? `
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-eng-build.png" alt="Build Icon" title="Max Build Rate" class="structure-list-icon">
              </div>
              <div>${this.schematic.getBuildRate()}</div>
            </div>
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-eng-restoration.png" alt="Restoration Icon" title="Max Restoration Rate" class="structure-list-icon">
              </div>
              <div>${this.schematic.getRestorationRate()}</div>
            </div>
          ` : ''}
        </div>
        <div class="row gx-2 mt-2">
          <div class="col">
            <a href="#" class="nes-btn nes-btn-fluid is-warning" id="schematic_list_build_${this.schematic.getId()}" name="${this.schematic.getId()}">Build</a>
          </div>
        </div>
      </div>
    `;
  }

  initMainBuildEventListeners() {
  
      document.getElementById('schematic_list_build_' + this.schematic.getId()).addEventListener('click', function() {
      
        // Hide the selector
        // Move this into the DroidUI if it's not already there. 
        document.getElementById('offcanvas').classList.remove('show');
        
        //Move this into DroidUI
        document.getElementById('build-status-dialog').showModal();

        this.compute_status = new DroidUIComputeStatus();
        this.compute_status.init('compute_status', this.program);

        let new_process_id = this.computer.add_process(this.program);
        this.computer.run_process(new_process_id);

        this.compute_status.setProcessID(new_process_id);       

      }.bind(this));
    
  }
}
