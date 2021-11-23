import {Computer} from "../../compute/Computer";
import {CONFIG} from "../../constants";
import {secondsToString} from "../../vendor/SecondsToString"
import {DroidUIStructureCondensedCTANone} from "./DroidUIStructureCondensedCTANone";
import {DroidUIStructureCondensedCTAAttack} from "./DroidUIStructureCondensedCTAAttack";
import {DroidUIStructureCondensedCTABuild} from "./DroidUIStructureCondensedCTABuild";
import {DroidUIStructureCondensedCTARepair} from "./DroidUIStructureCondensedCTARepair";

export class DroidUIStructureCondensed {

  /**
   * @param {Structure} displayStructure
   * @param {Structure} performingStructure
   * @param {Schematic|Structure} targetObject
   * @param {DroidUIStructureCondensedCTANone|DroidUIStructureCondensedCTABuild|DroidUIStructureCondensedCTAAttack|DroidUIStructureCondensedCTARepair|DroidUIStructureCondensedCTADrain} callToAction
   * @param {string} idPrefix
   */
  constructor(
    displayStructure,
    performingStructure,
    targetObject,
    callToAction = new DroidUIStructureCondensedCTANone(),
    idPrefix = ''
  ) {
    this.structure = displayStructure;
    this.baseObject = targetObject;

    this.idPrefix = idPrefix;
    this.callToAction = callToAction;

    this.computer = new Computer();

    this.program = this.callToAction.initProgram();

    this.program.setPerformingStructure(performingStructure);
    this.program.setTargetObject(targetObject);

  }

  /**
   * @return {Schematic|Structure}
   */
  getDisplayObject() {
    return this.structure;
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
}
