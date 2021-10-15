/**
 * Web UI component for schematic.
 */
export class DroidUISchematic {
  constructor(schematic, idPrefix = '') {
    this.schematic = schematic;
    this.idPrefix = idPrefix;
  }
  getCanvasId() {
    return `${this.idPrefix}schematic-${this.schematic.getId()}`;
  }
  render() {
    return `
      <div class="structure-card-wrapper col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="nes-container structure-card">
          <div class="game-asset-wrapper">
            <canvas id="${this.getCanvasId()}" class="pixel-art-viewer" width="64" height="64">
              Your browser does not support the canvas element.
            </canvas>
          </div>
          <div class="nes-container with-title">
            <h3 class="title">Attributes</h3>
            <div class="details">
              <h4>${this.schematic.getName()}</h4>
              <p>${this.schematic.getDescription()}</p>
              <br>
              <div><span class="attribute-label">Structure ID:</span> ${this.schematic.getId()}</div>
              <div><span class="attribute-label">Ambits:</span> ${this.schematic.getAmbits()}</div>
              <div><span class="attribute-label">Energy to Build:</span> Requires ${this.schematic.getEnergyToBuildAmount()} ${this.schematic.getEnergyToBuildDenom()}</div>
              <br>
              <div><span class="attribute-label">Max Health:</span> ${this.schematic.getHealthMax()}</div>
              <div><span class="attribute-label">Max Speed:</span> ${this.schematic.getSpeed()}</div>
              <div><span class="attribute-label">Max Accuracy:</span> ${this.schematic.getAccuracy()}</div>
              <div><span class="attribute-label">Max Mass:</span> ${this.schematic.getMass()}</div>
              <div><span class="attribute-label">Max Strength:</span> ${this.schematic.getStrength()}</div>
              <div><span class="attribute-label">Max Energy Efficiency:</span> ${this.schematic.getEnergyEfficiency()}</div>
            </div>
          </div>
          ${(this.schematic.hasFeatureAttack()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Attack Systems</h3>
              <div class="details">
                <div><span class="attribute-label">Max Melee Attack:</span> ${this.schematic.getMeleeAttack()}</div>
                <div><span class="attribute-label">Max Range Attack:</span> ${this.schematic.getRangeAttack()}</div>
              </div>
            </div>
          ` : ''}
          ${(this.schematic.hasFeatureDefensive()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Defensive Systems</h3>
              <div class="details">
                <div><span class="attribute-label">Max Melee Defense:</span> ${this.schematic.getMeleeDefense()}</div>
                <div><span class="attribute-label">Max Range Defense:</span> ${this.schematic.getRangeDefense()}</div>
              </div>
            </div>
          ` : ''}
          ${(this.schematic.hasFeatureEngineering()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Engineering Systems</h3>
              <div class="details">
                <div><span class="attribute-label">Max Build Rate:</span> ${this.schematic.getBuildRate()}</div>
                <div><span class="attribute-label">Max Restoration Rate:</span> ${this.schematic.getRestorationRate()}</div>
              </div>
            </div>
          ` : ''}
          ${(this.schematic.hasFeaturePower()) ?
            `<div class="nes-container with-title">
              <h3 class="title">Power Systems</h3>
              <div class="details">
                <div><span class="attribute-label">Max Generation Rate:</span> ${this.schematic.getGenerationRate()}</div>
                <div><span class="attribute-label">Max Charge Rate:</span> ${this.schematic.getChargeRate()}</div>
                <div><span class="attribute-label">Max Drain Rate:</span> ${this.schematic.getDrainRate()}</div>
              </div>
            </div>`
          : ''}
        </div>
      </div>
    `;
  }
}
