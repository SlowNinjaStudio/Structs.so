export class AbstractLottieArtConfigurator {

  landBackground() {
    if (!this.structure.hasAmbitLand()) {
      this.disabledAttributes.set('ambit_land', true);
    }
  }

  skyBackground() {
    if (!this.structure.hasAmbitSky()) {
      this.disabledAttributes.set('ambit_sky', true);
    }
  }

  spaceBackground() {
    if (!this.structure.hasAmbitSpace()) {
      this.disabledAttributes.set('ambit_space', true);
    }
  }

  waterBackground() {
    if (!this.structure.hasAmbitWater()) {
      this.disabledAttributes.set('ambit_water', true);
    }
  }

  land() {
    if (!this.structure.hasAmbitLand()) {
      this.disabledAttributes.set(`${this.structureLayerPrefix}_land`, true);
    }
  }

  sky() {
    if (!this.structure.hasAmbitSky()) {
      this.disabledAttributes.set(`${this.structureLayerPrefix}_sky`, true);
    }
  }

  space() {
    if (!this.structure.hasAmbitSpace()) {
      this.disabledAttributes.set(`${this.structureLayerPrefix}_space`, true);
    }
  }

  water() {
    if (!this.structure.hasAmbitWater()) {
      this.disabledAttributes.set(`${this.structureLayerPrefix}_water`, true);
    }
  }

  attack() {
    if (!this.structure.hasFeatureAttack()) {
      this.disabledAttributes.set(`${this.structureLayerPrefix}_attack`, true);
    }
  }

  defensive() {
    if (!this.structure.hasFeatureDefensive()) {
      this.disabledAttributes.set(`${this.structureLayerPrefix}_defensive`, true);
    }
  }

  engineering() {
    if (!this.structure.hasFeatureEngineering()) {
      this.disabledAttributes.set(`${this.structureLayerPrefix}_engineering`, true);
    }
  }

  power() {
    if (!this.structure.hasFeaturePower()) {
      this.disabledAttributes.set(`${this.structureLayerPrefix}_power`, true);
    }
  }

  initBackground() {
    this.landBackground();
    this.skyBackground();
    this.spaceBackground();
    this.waterBackground();
  }

  initStructure() {
    this.land();
    this.sky();
    this.space();
    this.water();

    this.attack();
    this.defensive();
    this.engineering();
    this.power();
  }

  init() {
    this.initBackground();
    this.initStructure();
  }

  /**
   * @param {Structure} structure
   * @param {string} structureLayerPrefix
   */
  constructor(structure, structureLayerPrefix) {
    this.structure = structure;
    this.structureLayerPrefix = structureLayerPrefix;
    this.disabledAttributes = new Map();
    this.init();
  }

  /**
   * @param {string} selector
   * @return {boolean}
   */
  shouldHideElement(selector) {
    return this.disabledAttributes.has(selector);
  }
}
