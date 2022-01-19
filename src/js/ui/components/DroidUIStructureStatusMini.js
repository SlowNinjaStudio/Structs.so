/**
 * Web UI component for structures.
 */
import {WattToString} from "../../vendor/WattToString";
import {STATUS_TYPES} from "../../Constants";

export class DroidUIStructureStatusMini {
  /**
   *
   * @param {Structure} structure
   * @param {string} statusType
   * @param {string} creator
   * @param {string} idPrefix
   */
  constructor(structure, statusType, creator = '', idPrefix = '') {
    this.structure = structure;
    this.statusType = statusType;
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
      <div class="structure-card-wrapper-mini">
        <div class="nes-container structure-card is-mini-status">
          <div class="mb-1 structure-card-header">
            <div class="col">
              ${this.structure.getId()}
            </div>
          </div>
          <a href="/structure.html?structure_id=${this.structure.getId()}">
            <div class="game-asset-wrapper">
              <canvas id="${this.getCanvasId()}" class="pixel-art-viewer" width="64" height="64">
                Your browser does not support the canvas element.
              </canvas>
            </div>
          </a>
          <div class="details">
            ${ (this.statusType === STATUS_TYPES.HEALTH) ? `
              <div class="pt-2 text-center">
                <progress class="nes-progress ${this.getHealthBarClass()} is-small" value="${this.structure.getHealthCurrent()}" max="${this.structure.getHealthMax()}"></progress>
              </div>
            ` : ''}
            ${ (this.statusType === STATUS_TYPES.BATTERY_CHARGE) ? `
              <div class="pt-2">
                <img src="/img/icons/icon-battery-charge.png" alt="Battery Charge Icon" class="structure-card-icon">
                ${WattToString(this.structure.getBatteryAmount())}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  initListeners() {}
}
