/**
 * Web UI component for structures.
 */
import {DroidUICommandMenu} from "./DroidUICommandMenu";
import {WattToString} from "../../vendor/WattToString";

export class DroidUIStructureCommandView {
  /**
   *
   * @param {Structure} structure
   * @param {string} creator
   * @param {string} idPrefix
   */
  constructor(structure, creator = '', idPrefix = '') {
    this.structure = structure;
    this.creator = creator;
    this.idPrefix = idPrefix;
    this.droidUICommandMenu = new DroidUICommandMenu(structure);
  }

  /**
   * @return {Schematic|Structure}
   */
  getDisplayObject() {
    return this.structure;
  }

  getCanvasId() {
    return `${this.idPrefix}structure-${this.structure.getId()}`;
  }

  isCreator() {
    return  this.structure.getCreator() === '' || this.structure.getCreator() === this.creator;
  }

  render() {
    return `
      <div class="structure-card-wrapper col-sm-12 col-md-6 col-lg-4">
        <div class="nes-container structure-card">
          <div id="structureViewPlayer"></div>
          <!-- Static Viewer div class="game-asset-wrapper">
            <canvas id="${this.getCanvasId()}" class="pixel-art-viewer" width="64" height="64">
              Your browser does not support the canvas element.
            </canvas>
          </div -->
          ${this.isCreator() ? `
            <div class="commands nes-container with-title">
              <h3 class="title">Command Menu</h3>
              <div id="command-container">
                ${this.droidUICommandMenu.renderMainMenu()}
              </div>
            </div>
          ` : `
            <div class="nes-container with-title">
              <h3 class="title">Structure</h3>
              <div class="details">
                <h4>${this.structure.getName()}</h4>
                <p>${this.structure.getDescription()}</p>
              </div>
            </div>
          `}
        </div>
      </div>
      <div class="structure-card-wrapper col-sm-12 col-md-6 col-lg-4">
        <div class="nes-container structure-card">
          <div class="nes-container with-title">
            <h3 class="title">Attributes</h3>
            <div class="details">
              ${this.isCreator() ? `
                <h4>${this.structure.getName()}</h4>
                <p>${this.structure.getDescription()}</p>
              ` : ''}
              <br>
              <div><span class="attribute-label">Structure ID:</span> ${this.structure.getId()}</div>
              <div><span class="attribute-label">Ambits:</span>
                ${this.structure.hasAmbitWater() ? `
                  <img src="/img/icons/icon-ambit-water.png" alt="Water" title="Water"/> Water
                ` : ''}
                ${this.structure.hasAmbitLand() ? `
                  <img src="/img/icons/icon-ambit-land.png" alt="Land" title="Land"/> Land
                ` : ''}
                ${this.structure.hasAmbitSky() ? `
                  <img src="/img/icons/icon-ambit-sky.png" alt="Sky" title="Sky"/> Sky
                ` : ''}
                ${this.structure.hasAmbitSpace() ? `
                  <img src="/img/icons/icon-ambit-space.png" alt="Space" title="Space"/> Space
                ` : ''}
              </div>
              <div>
                <img src="/img/icons/icon-health.png" alt="Health Icon" class="structure-card-icon">
                <span class="attribute-label">Health:</span> ${this.structure.getHealthCurrent()} / ${this.structure.getHealthMax()}
              </div>
              <div>
                <img src="/img/icons/icon-battery-charge.png" alt="Battery Charge Icon" class="structure-card-icon">
                <span class="attribute-label">Battery Charge:</span> ${WattToString(this.structure.getBatteryAmount())}
              </div>
              <br>
              <div>
                <img src="/img/icons/icon-speed.png" alt="Speed Icon" class="structure-card-icon">
                <span class="attribute-label">Speed:</span> ${this.structure.getSpeed()}
              </div>
              <div>
                <img src="/img/icons/icon-accuracy.png" alt="Accuracy Icon" class="structure-card-icon">
                <span class="attribute-label">Accuracy:</span> ${this.structure.getAccuracy()}
              </div>
              <div>
                <img src="/img/icons/icon-mass.png" alt="Mass Icon" class="structure-card-icon">
                <span class="attribute-label">Mass:</span> ${this.structure.getMass()}
              </div>
              <div>
                <img src="/img/icons/icon-strength.png" alt="Strength Icon" class="structure-card-icon">
                <span class="attribute-label">Strength:</span> ${this.structure.getStrength()}
              </div>
              <div>
                <img src="/img/icons/icon-energy.png" alt="Energy Icon" class="structure-card-icon">
                <span class="attribute-label">Energy Efficiency:</span> ${this.structure.getEnergyEfficiency()}
              </div>
            </div>
          </div>
          </div>
      </div>
      <div class="structure-card-wrapper col-sm-12 col-md-6 col-lg-4">
        <div class="nes-container structure-card">
          ${(this.structure.hasFeatureAttack()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Attack Systems</h3>
              <div class="details">
                <div>
                  <img src="/img/icons/icon-attack-melee.png" alt="Melee Attack Icon" class="structure-card-icon">
                  <span class="attribute-label">Melee Attack:</span> ${this.structure.getMeleeAttack()}
                </div>
                <div>
                  <img src="/img/icons/icon-attack-range.png" alt="Range Attack Icon" class="structure-card-icon">
                  <span class="attribute-label">Range Attack:</span> ${this.structure.getRangeAttack()}
                </div>
              </div>
            </div>
          ` : ''}
          ${(this.structure.hasFeatureDefensive()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Defensive Systems</h3>
              <div class="details">
                <div>
                  <img src="/img/icons/icon-def-melee.png" alt="Melee Defense Icon" class="structure-card-icon">
                  <span class="attribute-label">Melee Defense:</span> ${this.structure.getMeleeDefense()}
                </div>
                <div>
                  <img src="/img/icons/icon-def-range.png" alt="Range Defense Icon" class="structure-card-icon">
                  <span class="attribute-label">Range Defense:</span> ${this.structure.getRangeDefense()}
                </div>
              </div>
            </div>
          ` : ''}
          ${(this.structure.hasFeatureEngineering()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Engineering Systems</h3>
              <div class="details">
                <div>
                  <img src="/img/icons/icon-eng-build.png" alt="Build Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Build Rate:</span> ${this.structure.getBuildRate()}
                </div>
                <div>
                  <img src="/img/icons/icon-eng-restoration.png" alt="Restoration Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Restoration Rate:</span> ${this.structure.getRestorationRate()}
                </div>
              </div>
            </div>
          ` : ''}
          ${(this.structure.hasFeaturePower()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Power Systems</h3>
              <div class="details">
                <div>
                  <img src="/img/icons/icon-power-generate.png" alt="Generation Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Generation Rate:</span> ${this.structure.getGenerationRate()}
                </div>
                <div>
                  <img src="/img/icons/icon-power-charge.png" alt="Charge Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Charge Rate:</span> ${this.structure.getChargeRate()}
                </div>
                <div>
                  <img src="/img/icons/icon-power-drain.png" alt="Drain Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Drain Rate:</span> ${this.structure.getDrainRate()}
                </div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }
}
