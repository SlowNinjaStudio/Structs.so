export class StructureArtGeneratorMobileMech {
  constructor() {
    this.imgDir = 'img/structures/mobile/mech/';
  }

  /* Base */
  base(layers) {
    layers.push(`${this.imgDir}mobile-mech-body.png`);
  }

  /* Ambit Parts */
  sky(layers, structure) {
    if (structure.hasAmbitSky()) {
      layers.push(`${this.imgDir}mobile-mech-sky.png`);
    }
  }
  space(layers, structure) {
    if (structure.hasAmbitSpace()) {
      layers.push(`${this.imgDir}mobile-mech-space.png`);
    }
  }
  water(layers, structure) {
    if (structure.hasAmbitWater()) {
      layers.push(`${this.imgDir}mobile-mech-water.png`);
    }
  }

  /* Feature Parts */
  attack(layers, structure) {
    if (structure.hasFeatureAttack()) {
      layers.push(`${this.imgDir}mobile-mech-attack.png`);
    }
  }
  defensive(layers, structure) {
    if (structure.hasFeatureDefensive()) {
      layers.push(`${this.imgDir}mobile-mech-defense.png`);
    }
  }
  engineering(layers, structure) {
    if (structure.hasFeatureEngineering()) {
      layers.push(`${this.imgDir}mobile-mech-eng.png`);
    }
  }
  power(layers, structure) {
    if (structure.hasFeaturePower()) {
      layers.push(`${this.imgDir}mobile-mech-power.png`);
    }
  }

  generate(layers, structure) {
    this.base(layers);

    this.space(layers, structure);
    this.sky(layers, structure);
    this.water(layers, structure);

    this.attack(layers, structure);
    this.power(layers, structure);
    this.engineering(layers, structure);
    this.defensive(layers, structure);
  }
}
