export class StructureArtGeneratorStaticStation {
  constructor() {
    this.imgDir = 'img/structures/static/station/';
  }

  /* Base */
  base(layers) {
    layers.push(`${this.imgDir}static-station-base.png`);
  }

  /* Ambit Parts */
  space(layers, structure) {
    if (structure.hasAmbitSpace()) {
      layers.push(`${this.imgDir}static-station-space.png`);
    }
  }
  sky(layers, structure) {
    if (structure.hasAmbitSky()) {
      layers.push(`${this.imgDir}static-station-sky.png`);
    }
  }
  land(layers, structure) {
    if (structure.hasAmbitLand()) {
      layers.push(`${this.imgDir}static-station-land.png`);
    }
  }
  water(layers, structure) {
    if (structure.hasAmbitWater()) {
      layers.push(`${this.imgDir}static-station-water.png`);
    }
  }

  /* Feature Parts */
  attack(layers, structure) {
    if (structure.hasFeatureAttack()) {
      layers.push(`${this.imgDir}static-station-attack.png`);
    }
  }
  defensive(layers, structure) {
    if (structure.hasFeatureDefensive()) {
      layers.push(`${this.imgDir}static-station-defense.png`);
    }
  }
  engineering(layers, structure) {
    if (structure.hasFeatureEngineering()) {
      layers.push(`${this.imgDir}static-station-eng.png`);
    }
  }
  power(layers, structure) {
    if (structure.hasFeaturePower()) {
      layers.push(`${this.imgDir}static-station-power.png`);
    }
  }

  generate(layers, structure) {
    this.base(layers);

    this.attack(layers, structure);
    this.engineering(layers, structure);
    this.defensive(layers, structure);
    this.power(layers, structure);

    this.water(layers, structure);
    this.land(layers, structure);
    this.sky(layers, structure);
    this.space(layers, structure);
  }
}
