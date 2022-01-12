/**
 * Web UI component for structures.
 */
import {WattToString} from "../../vendor/WattToString";

export class DroidUIStructureSmall {
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
  getHealthBarClass() {
    const health = Math.round((this.structure.getHealthCurrent() / this.structure.getHealthMax()) * 100);
    if (health === 100) {
      return 'is-success';
    } else if (health > 50) {
      return 'is-warning';
    } else {
      return 'is-error';
    }
  }
  render() {
    return `
      <div class="structure-card-wrapper col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="nes-container structure-card">
          <div class="row mb-3 px-1 structure-card-header">
            <div class="col">
              ID: ${this.structure.getId()}
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
          <div class="game-asset-wrapper">
            <canvas id="${this.getCanvasId()}" class="pixel-art-viewer" width="64" height="64">
              Your browser does not support the canvas element.
            </canvas>
          </div>
          <div class="row solo-action-wrapper">
            <div class="col">
                <a
                  href="/structure.html?structure_id=${this.structure.getId()}"
                  class="nes-btn ${this.isCreator() ? 'is-primary' : ''} nes-btn-fluid"
                >
                    ${this.isCreator() ? 'Command' : 'View'}
                </a>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col">${this.structure.getName()}</div>
          </div>
          <div class="details">
            <div class="mb-2 bt-1 pt-2">
              <img src="/img/icons/icon-health.png" alt="Health Icon" class="structure-card-icon">
              ${this.structure.getHealthCurrent()} / ${this.structure.getHealthMax()}
              <progress class="nes-progress ${this.getHealthBarClass()} is-small" value="${this.structure.getHealthCurrent()}" max="${this.structure.getHealthMax()}"></progress>
            </div>
            <div class="mb-2">
              <img src="/img/icons/icon-battery-charge.png" alt="Battery Charge Icon" class="structure-card-icon">
              ${WattToString(this.structure.getBatteryAmount())}
            </div>
            <div class="row gx-2 text-center bt-1 pt-2">
              <div class="col-2">
                <div>
                  <img src="/img/icons/icon-speed.png" alt="Speed Icon" title="Speed" class="structure-condensed-icon">
                </div>
                <div>${this.structure.getSpeed()}</div>
              </div>
              <div class="col-2">
                <div>
                  <img src="/img/icons/icon-accuracy.png" alt="Accuracy Icon" title="Accuracy" class="structure-condensed-icon">
                </div>
                <div>${this.structure.getAccuracy()}</div>
              </div>
              <div class="col-2">
                <div>
                  <img src="/img/icons/icon-mass.png" alt="Mass Icon" title="Mass" class="structure-condensed-icon">
                </div>
                <div>${this.structure.getMass()}</div>
              </div>
              <div class="col-2">
                <div>
                  <img src="/img/icons/icon-strength.png" alt="Strength Icon" title="Strength" class="structure-condensed-icon">
                </div>
                <div>${this.structure.getStrength()}</div>
              </div>
              <div class="col-2">
                <div>
                  <img src="/img/icons/icon-energy.png" alt="Energy Efficiency Icon" title="Energy Efficiency" class="structure-condensed-icon">
                </div>
                <div>${this.structure.getEnergyEfficiency()}</div>
              </div>
              <div class="col-2"></div>
            </div>
            <div class="row gx-2 text-center">
              ${this.structure.hasFeatureAttack() ? `
                <div class="col-2">
                  <div>
                    <img src="/img/icons/icon-attack-melee.png" alt="Melee Attack Icon" title="Melee Attack" class="structure-condensed-icon">
                  </div>
                  <div>${this.structure.getMeleeAttack()}</div>
                </div>
                <div class="col-2">
                  <div>
                    <img src="/img/icons/icon-attack-range.png" alt="Range Attack Icon" title="Range Attack" class="structure-condensed-icon">
                  </div>
                  <div>${this.structure.getRangeAttack()}</div>
                </div>
              ` : ''}
              ${this.structure.hasFeatureDefensive() ? `
                <div class="col-2">
                  <div>
                    <img src="/img/icons/icon-def-melee.png" alt="Melee Defense Icon" title="Melee Defense" class="structure-condensed-icon">
                  </div>
                  <div>${this.structure.getMeleeDefense()}</div>
                </div>
                <div class="col-2">
                  <div>
                    <img src="/img/icons/icon-def-range.png" alt="Range Defense Icon" title="Range Defense" class="structure-condensed-icon">
                  </div>
                  <div>${this.structure.getRangeDefense()}</div>
                </div>
              ` : ''}
              ${this.structure.hasFeatureEngineering() ? `
                <div class="col-2">
                  <div>
                    <img src="/img/icons/icon-eng-build.png" alt="Build Icon" title="Build Rate" class="structure-condensed-icon">
                  </div>
                  <div>${this.structure.getBuildRate()}</div>
                </div>
                <div class="col-2">
                  <div>
                    <img src="/img/icons/icon-eng-restoration.png" alt="Restoration Icon" title="Restoration Rate" class="structure-condensed-icon">
                  </div>
                  <div>${this.structure.getRestorationRate()}</div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  initListeners() {}
}
