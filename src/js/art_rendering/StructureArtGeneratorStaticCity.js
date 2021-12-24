export class StructureArtGeneratorStaticCity {
  constructor() {
    this.imgDir = 'img/structures/static/city/';
  }

  /* Base */
  base(layers) {
    layers.push(`${this.imgDir}static-city-buildings.png`);
  }

  /* Ambit Parts */
  sky(layers, structure) {
    if (structure.hasAmbitSky()) {
      layers.push(`${this.imgDir}static-city-buildings-base.png`);
      layers.push(`${this.imgDir}static-city-sky.png`);
    }
  }
  space(layers, structure) {
    if (structure.hasAmbitSpace()) {
      layers.push(`${this.imgDir}static-city-buildings-base.png`);
      layers.push(`${this.imgDir}static-city-space.png`);
    }
  }
  water(layers, structure) {
    if (structure.hasAmbitWater()) {
      layers.push(`${this.imgDir}static-city-buildings-base.png`);
      layers.push(`${this.imgDir}static-city-water.png`);
    }
  }

  /* Feature Parts */
  attack(layers, structure) {
    if (structure.hasFeatureAttack()) {
      layers.push(`${this.imgDir}static-city-attack.png`);
    }
  }
  defensive(layers, structure) {
    if (structure.hasFeatureDefensive()) {
      layers.push(`${this.imgDir}static-city-defense.png`);
    }
  }
  engineering(layers, structure) {
    if (structure.hasFeatureEngineering()) {
      layers.push(`${this.imgDir}static-city-engineering.png`);
    }
  }
  power(layers, structure) {
    if (structure.hasFeaturePower()) {
      layers.push(`${this.imgDir}static-city-power.png`);
    }
  }

  generate(layers, structure) {
    this.base(layers);

    this.sky(layers, structure);
    this.space(layers, structure);
    this.water(layers, structure);

    this.attack(layers, structure);
    this.defensive(layers, structure);
    this.engineering(layers, structure);
    this.power(layers, structure);
  }
}
