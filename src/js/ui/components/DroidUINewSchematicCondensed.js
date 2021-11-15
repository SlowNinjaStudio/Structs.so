export class DroidUINewSchematicCondensed {

  /**
   * @param {Schematic} schematic
   * @param {string} idPrefix
   */
  constructor(
    schematic,
    idPrefix = ''
  ) {
    this.schematic = schematic;
    this.idPrefix = idPrefix;
  }
  getCanvasId() {
    return `${this.idPrefix}schematic-list-item-${this.schematic.hash}`;
  }
  render() {
    return `
      <div class="structure-condensed container text-center p-2">
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
                <span class="attribute-label">Est. Required ⚡️:</span> ${this.schematic.getEnergyToBuildAmount()} ${this.schematic.getEnergyToBuildDenom()}
              </div>
            </div>
            <div class="row">
              <div class="col text-truncate">
              </div>
            </div>
          </div>
        </div>
        <div class="row gx-2">
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-health.png" alt="Health Icon" title="Max Health" class="structure-condensed-icon">
            </div>
            <div>${this.schematic.getHealthMax()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-speed.png" alt="Speed Icon" title="Max Speed" class="structure-condensed-icon">
            </div>
            <div>${this.schematic.getSpeed()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-accuracy.png" alt="Accuracy Icon" title="Max Accuracy" class="structure-condensed-icon">
            </div>
            <div>${this.schematic.getAccuracy()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-mass.png" alt="Mass Icon" title="Max Mass" class="structure-condensed-icon">
            </div>
            <div>${this.schematic.getMass()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-strength.png" alt="Strength Icon" title="Max Strength" class="structure-condensed-icon">
            </div>
            <div>${this.schematic.getStrength()}</div>
          </div>
          <div class="col-2">
            <div>
              <img src="/img/icons/icon-energy.png" alt="Energy Efficiency Icon" title="Max Energy Efficiency" class="structure-condensed-icon">
            </div>
            <div>${this.schematic.getEnergyEfficiency()}</div>
          </div>
        </div>
        <div class="row gx-2">
          ${this.schematic.hasFeatureAttack() ? `
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-attack-melee.png" alt="Melee Attack Icon" title="Max Melee Attack" class="structure-condensed-icon">
              </div>
              <div>${this.schematic.getMeleeAttack()}</div>
            </div>
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-attack-range.png" alt="Range Attack Icon" title="Max Range Attack" class="structure-condensed-icon">
              </div>
              <div>${this.schematic.getRangeAttack()}</div>
            </div>
          ` : ''}
          ${this.schematic.hasFeatureDefensive() ? `
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-def-melee.png" alt="Melee Defense Icon" title="Max Melee Defense" class="structure-condensed-icon">
              </div>
              <div>${this.schematic.getMeleeDefense()}</div>
            </div>
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-def-range.png" alt="Range Defense Icon" title="Max Range Defense" class="structure-condensed-icon">
              </div>
              <div>${this.schematic.getRangeDefense()}</div>
            </div>
          ` : ''}
          ${this.schematic.hasFeatureEngineering() ? `
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-eng-build.png" alt="Build Icon" title="Max Build Rate" class="structure-condensed-icon">
              </div>
              <div>${this.schematic.getBuildRate()}</div>
            </div>
            <div class="col-2">
              <div>
                <img src="/img/icons/icon-eng-restoration.png" alt="Restoration Icon" title="Max Restoration Rate" class="structure-condensed-icon">
              </div>
              <div>${this.schematic.getRestorationRate()}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }
}
