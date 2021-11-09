export class StructureArtGeneratorMobileCar {
  constructor() {
    this.imgDir = 'img/structures/mobile/car/';
  }

  /* Base */
  base(layers) {
    layers.push(`${this.imgDir}mobile-car-chassis.png`);
  }

  /* Ambit Parts */
  land(layers, structure) {
    if (structure.hasAmbitLand()) {
      layers.push(`${this.imgDir}mobile-car-land.png`);
    }
  }
  sky(layers, structure) {
    if (structure.hasAmbitSky()) {
      layers.push(`${this.imgDir}mobile-car-sky.png`);
      layers.push(`${this.imgDir}mobile-car-space.png`);
    }
  }
  space(layers, structure) {
    if (structure.hasAmbitSpace()) {
      layers.push(`${this.imgDir}mobile-car-space.png`);
    }
  }
  water(layers, structure) {
    if (structure.hasAmbitWater()) {
      layers.push(`${this.imgDir}mobile-car-water.png`);
    }
  }

  /* Feature Parts */
  attack(layers, structure) {
    if (structure.hasFeatureAttack()) {
      layers.push(`${this.imgDir}mobile-car-attack.png`);
    }
  }
  defensive(layers, structure) {
    if (structure.hasFeatureDefensive()) {
      layers.push(`${this.imgDir}mobile-car-defense.png`);
    }
  }
  engineering(layers, structure) {
    if (structure.hasFeatureEngineering()) {
      layers.push(`${this.imgDir}mobile-car-engineering.png`);
    }
  }
  power(layers, structure) {
    if (structure.hasFeaturePower()) {
      layers.push(`${this.imgDir}mobile-car-power.png`);
    }
  }

  generate(layers, structure) {
    this.base(layers);

    this.land(layers, structure);
    this.sky(layers, structure);
    this.space(layers, structure);
    this.water(layers, structure);

    this.attack(layers, structure);
    this.defensive(layers, structure);
    this.engineering(layers, structure);
    this.power(layers, structure);
  }
}
