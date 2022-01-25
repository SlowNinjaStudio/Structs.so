export class DroidUIFeatureButtonPanel {

  /**
   * @param {Structure} structure
   * @param {string} attackAnimationName
   * @param {string} defensiveAnimationName
   * @param {string} engineeringAnimationName
   * @param {string} powerAnimationName
   */
  constructor(
    structure,
    attackAnimationName,
    defensiveAnimationName,
    engineeringAnimationName,
    powerAnimationName
  ) {
    this.structure = structure;
    this.attackAnimationName = attackAnimationName;
    this.defensiveAnimationName = defensiveAnimationName;
    this.engineeringAnimationName = engineeringAnimationName;
    this.powerAnimationName = powerAnimationName;
    this.attackButtonId = 'featureAttackButton';
    this.defensiveButtonId = 'featureDefensiveButton';
    this.engineeringButtonId = 'featureEngineeringButton';
    this.powerButtonId = 'featurePowerButton';
  }

  render() {
    return `
      <div class="col-auto">
        <div class="row justify-content-center">
          <div class="col p-0">
            <a
              id="${this.attackButtonId}"
              href="javascript: void(0)"
              class="feature-button ${ this.structure.hasFeatureAttack() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-attack-range.png" alt="Attack Feature Button">
            </a>
          </div>
          <div class="col p-0">
            <a
              id="${this.defensiveButtonId}"
              href="javascript: void(0)"
              class="feature-button ${ this.structure.hasFeatureDefensive() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-def-range.png" alt="Defensive Feature Button">
            </a>
          </div>
          <div class="col p-0">
            <a
              id="${this.engineeringButtonId}"
              href="javascript: void(0)"
              class="feature-button ${ this.structure.hasFeatureEngineering() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-eng-build.png" alt="Engineering Feature Button">
            </a>
          </div>
          <div class="col p-0">
            <a
              id="${this.powerButtonId}"
              href="javascript: void(0)"
              class="feature-button last-ambit-button ${ this.structure.hasFeaturePower() ? '' : 'disabled' }"
            >
              <img src="/img/icons/icon-power-charge.png" alt="Power Feature Button">
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
