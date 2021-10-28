import {Instance} from "../../models/Instance";

export class DroidUIDroid {
  /**
   *
   * @param {Droid} droid
   * @param {string} idPrefix
   */
  constructor(droid, idPrefix = '') {
    this.droid = droid;
    this.idPrefix = idPrefix;

      this.instance;

    setTimeout(async function() {
      this.instance = new Instance();
      await this.instance.init();
      document.getElementById('droid_panel_battery').innerHTML = ((await this.instance.queryBalance()).amount) + 'watt';
    }.bind(this), 600);

  }

  getCanvasId() {
    return `${this.idPrefix}droid`;
  }

  render() {
    return `
      <div class="droid container p-2">
        <div class="row mb-5">
          <div class="col text-center">
            <div class="game-asset-wrapper">
              <canvas id="${this.getCanvasId()}" class="pixel-art-viewer" width="64" height="64">
                Your browser does not support the canvas element.
              </canvas>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col nes-container with-title">
            <h3 class="title">Details</h3>
            <div class="droid-details">
            <div class="row">
              <div class="col-auto droid-detail-label px-0">
                ID:
              </div>
              <div class="col text-break px-1">
                ${this.droid.hash}
              </div>
            </div>
            <div class="row">
              <div class="col-auto droid-detail-label px-0">
                <img src="img/icons/icon-battery-charge.png" alt="Battery"> Battery:
              </div>
              <div class="col text-break px-1" id="droid_panel_battery">

              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }



}
