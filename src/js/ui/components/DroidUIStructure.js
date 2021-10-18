/**
 * Web UI component for structures.
 */
export class DroidUIStructure {
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
  getCanvasId() {
    return `${this.idPrefix}structure-${this.structure.getId()}`;
  }
  isCreator() {
    return  this.structure.getCreator() === '' || this.structure.getCreator() === this.creator;
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
          <div class="nes-container with-title">
            <h3 class="title">Attributes</h3>
            <div class="details">
              <h4>${this.structure.getName()}</h4>
              <p>${this.structure.getDescription()}</p>
              <br>
              <div><span class="attribute-label">Structure ID:</span> ${this.structure.getId()}</div>
              <div><span class="attribute-label">Health:</span> ${this.structure.getHealthCurrent()} / ${this.structure.getHealthMax()}</div>
              <div><span class="attribute-label">Battery Charge:</span> ${this.structure.getBatteryAmount()} ${this.structure.getBatteryDenom()}</div>
              <div><span class="attribute-label">Ambits:</span> ${this.structure.getAmbits()}</div>
              <br>
              <div><span class="attribute-label">Speed:</span> ${this.structure.getSpeed()}</div>
              <div><span class="attribute-label">Accuracy:</span> ${this.structure.getAccuracy()}</div>
              <div><span class="attribute-label">Mass:</span> ${this.structure.getMass()}</div>
              <div><span class="attribute-label">Strength:</span> ${this.structure.getStrength()}</div>
              <div><span class="attribute-label">Energy Efficiency:</span> ${this.structure.getEnergyEfficiency()}</div>
            </div>
          </div>
          ${(this.structure.hasFeatureAttack()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Attack Systems</h3>
              <div class="details">
                <div><span class="attribute-label">Melee Attack:</span> ${this.structure.getMeleeAttack()}</div>
                <div><span class="attribute-label">Range Attack:</span> ${this.structure.getRangeAttack()}</div>
              </div>
            </div>
          ` : ''}
          ${(this.structure.hasFeatureDefensive()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Defensive Systems</h3>
              <div class="details">
                <div><span class="attribute-label">Melee Defense:</span> ${this.structure.getMeleeDefense()}</div>
                <div><span class="attribute-label">Range Defense:</span> ${this.structure.getRangeDefense()}</div>
              </div>
            </div>
          ` : ''}
          ${(this.structure.hasFeatureEngineering()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Engineering Systems</h3>
              <div class="details">
                <div><span class="attribute-label">Build Rate:</span> ${this.structure.getBuildRate()}</div>
                <div><span class="attribute-label">Restoration Rate:</span> ${this.structure.getRestorationRate()}</div>
              </div>
            </div>
          ` : ''}
          ${(this.structure.hasFeaturePower()) ?
            `<div class="nes-container with-title">
              <h3 class="title">Power Systems</h3>
              <div class="details">
                <div><span class="attribute-label">Generation Rate:</span> ${this.structure.getGenerationRate()}</div>
                <div><span class="attribute-label">Charge Rate:</span> ${this.structure.getChargeRate()}</div>
                <div><span class="attribute-label">Drain Rate:</span> ${this.structure.getDrainRate()}</div>
              </div>
            </div>`
          : ''}
        </div>
      </div>
    `;
  }
}
