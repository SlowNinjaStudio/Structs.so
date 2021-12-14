export class DroidUIAmbitButtonPanel {

  /**
   * @param {Structure} structure
   * @param {string} spaceAnimationName
   * @param {string} skyAnimationName
   * @param {string} landAnimationName
   * @param {string} waterAnimationName
   */
  constructor(
    structure,
    spaceAnimationName,
    skyAnimationName,
    landAnimationName,
    waterAnimationName
  ) {
    this.structure = structure;
    this.spaceAnimationName = spaceAnimationName;
    this.skyAnimationName = skyAnimationName;
    this.landAnimationName = landAnimationName;
    this.waterAnimationName = waterAnimationName;
    this.spaceButtonId = 'ambitSpaceButton';
    this.skyButtonId = 'ambitSkyButton';
    this.landButtonId = 'ambitLandButton';
    this.waterButtonId = 'ambitWaterButton';
  }

  render() {
    return `
      <div class="col-auto">
        <div class="row justify-content-center">
          <div class="col p-0">
            <a
              id="${this.spaceButtonId}"
              href="javascript: void(0)"
              class="ambit-button ${ this.structure.hasAmbitSpace() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-ambit-space-no-border.png" alt="Space Ambit Button">
            </a>
          </div>
          <div class="col p-0">
            <a
              id="${this.skyButtonId}"
              href="javascript: void(0)"
              class="ambit-button ${ this.structure.hasAmbitSky() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-ambit-sky-no-border.png" alt="Sky Ambit Button">
            </a>
          </div>
          <div class="col p-0">
            <a
              id="${this.landButtonId}"
              href="javascript: void(0)"
              class="ambit-button ${ this.structure.hasAmbitLand() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-ambit-land-no-border.png" alt="Land Ambit Button">
            </a>
          </div>
          <div class="col p-0">
            <a
              id="${this.waterButtonId}"
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
}
