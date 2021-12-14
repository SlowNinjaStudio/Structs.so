import {ANIMATION_NAMES} from "../../AnimationNameConstants";

export class DroidUIAmbitButtonPanel {

  /**
   * @param {Structure} structure
   * @param {LottieCustomPlayer} lottieCustomPlayer
   */
  constructor(structure, lottieCustomPlayer) {
    this.structure = structure;
    this.lottieCustomPlayer = lottieCustomPlayer;
  }

  render() {
    return `
      <div class="col-auto">
        <div class="row justify-content-center">
          <div class="col p-0">
            <a
              id="ambitSpaceButton"
              href="javascript: void(0)"
              class="ambit-button ${ this.structure.hasAmbitSpace() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-ambit-space-no-border.png" alt="Space Ambit Button">
            </a>
          </div>
          <div class="col p-0">
            <a
              id="ambitSkyButton"
              href="javascript: void(0)"
              class="ambit-button ${ this.structure.hasAmbitSky() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-ambit-sky-no-border.png" alt="Sky Ambit Button">
            </a>
          </div>
          <div class="col p-0">
            <a
              id="ambitLandButton"
              href="javascript: void(0)"
              class="ambit-button ${ this.structure.hasAmbitLand() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-ambit-land-no-border.png" alt="Land Ambit Button">
            </a>
          </div>
          <div class="col p-0">
            <a
              id="ambitWaterButton"
              href="javascript: void(0)"
              class="ambit-button last-ambit-button ${ this.structure.hasAmbitWater() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-ambit-water-no-border.png" alt="Water Ambit Button">
            </a>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * @param {string} targetElementId
   */
  init(targetElementId) {
    document.getElementById(targetElementId).innerHTML = this.render();
    if (this.structure.hasAmbitSpace()) {
      this.lottieCustomPlayer.registerPlayAnimationButton('ambitSpaceButton', ANIMATION_NAMES.STATION.IDLE.SPACE);
    }
    if (this.structure.hasAmbitSky()) {
      this.lottieCustomPlayer.registerPlayAnimationButton('ambitSkyButton', ANIMATION_NAMES.STATION.IDLE.SKY);
    }
    if (this.structure.hasAmbitLand()) {
      this.lottieCustomPlayer.registerPlayAnimationButton('ambitLandButton', ANIMATION_NAMES.STATION.IDLE.LAND);
    }
    if (this.structure.hasAmbitWater()) {
      this.lottieCustomPlayer.registerPlayAnimationButton('ambitWaterButton', ANIMATION_NAMES.STATION.IDLE.WATER);
    }
  }
}
