/**
 * Assembles the art for a structure using images and layers.
 */
export class StructureArtGenerator {
  constructor() {
    this.imgDir = 'img/structures/';
    this.backgroundsDir = 'backgrounds/';
    this.mobileDir = 'mobile/';
    this.staticDir = 'static/';
  }

  /* Backgrounds */
  backgroundDefault(layers) {
    layers.push(`${this.imgDir}${this.backgroundsDir}structure-bg-default.png`)
  }
  backgroundLand(layers, structure) {
    if (structure.hasAmbitLand()) {
      layers.push(`${this.imgDir}${this.backgroundsDir}structure-bg-land.png`);
    }
  }
  backgroundSky(layers, structure) {
    if (structure.hasAmbitSky()) {
      layers.push(`${this.imgDir}${this.backgroundsDir}structure-bg-sky.png`);
    }
  }
  backgroundSpace(layers, structure) {
    if (structure.hasAmbitSpace()) {
      layers.push(`${this.imgDir}${this.backgroundsDir}structure-bg-space.png`);
    }
  }
  backgroundWater(layers, structure) {
    if (structure.hasAmbitWater()) {
      layers.push(`${this.imgDir}${this.backgroundsDir}structure-bg-water.png`);
    }
  }
  backgroundLayerFilter(layers) {
    layers.push(`${this.imgDir}${this.backgroundsDir}structure-bg-lighten-15.png`);
  }

  /* Mobile Structure Base */
  mobileStructureChassis(layers) {
    layers.push(`${this.imgDir}${this.mobileDir}structure-mobile-chassis.png`);
  }

  /* Mobile Structure Ambit Parts */
  mobileStructureLand(layers, structure) {
    if (structure.hasAmbitLand()) {
      layers.push(`${this.imgDir}${this.mobileDir}structure-mobile-land.png`);
    }
  }
  mobileStructureSky(layers, structure) {
    if (structure.hasAmbitSky()) {
      layers.push(`${this.imgDir}${this.mobileDir}structure-mobile-sky.png`);
    }
  }
  mobileStructureSpace(layers, structure) {
    if (structure.hasAmbitSpace()) {
      layers.push(`${this.imgDir}${this.mobileDir}structure-mobile-space.png`);
    }
  }
  mobileStructureWater(layers, structure) {
    if (structure.hasAmbitWater()) {
      layers.push(`${this.imgDir}${this.mobileDir}structure-mobile-water.png`);
    }
  }

  /* Mobile Structure Feature Parts */
  mobileStructureAttack(layers, structure) {
    if (structure.hasFeatureAttack()) {
      layers.push(`${this.imgDir}${this.mobileDir}structure-mobile-attack.png`);
    }
  }
  mobileStructureDefensive(layers, structure) {
    if (structure.hasFeatureDefensive()) {
      layers.push(`${this.imgDir}${this.mobileDir}structure-mobile-defense.png`);
    }
  }
  mobileStructureEngineering(layers, structure) {
    if (structure.hasFeatureEngineering()) {
      layers.push(`${this.imgDir}${this.mobileDir}structure-mobile-engineering.png`);
    }
  }
  mobileStructurePower(layers, structure) {
    if (structure.hasFeaturePower()) {
      layers.push(`${this.imgDir}${this.mobileDir}structure-mobile-power.png`);
    }
  }

  mobileStructure(layers, structure) {
    this.mobileStructureChassis(layers);

    this.mobileStructureLand(layers, structure);
    this.mobileStructureSky(layers, structure);
    this.mobileStructureSpace(layers, structure);
    this.mobileStructureWater(layers, structure);

    this.mobileStructureAttack(layers, structure);
    this.mobileStructureDefensive(layers, structure);
    this.mobileStructureEngineering(layers, structure);
    this.mobileStructurePower(layers, structure);
  }

  /* Static Structure Base */
  staticStructureBuildings(layers) {
    layers.push(`${this.imgDir}${this.staticDir}structure-static-buildings.png`);
  }

  /* Static Structure Ambit Parts */
  staticStructureSky(layers, structure) {
    if (structure.hasAmbitSky()) {
      layers.push(`${this.imgDir}${this.staticDir}structure-static-buildings-base.png`);
      layers.push(`${this.imgDir}${this.staticDir}structure-static-sky.png`);
    }
  }
  staticStructureSpace(layers, structure) {
    if (structure.hasAmbitSpace()) {
      layers.push(`${this.imgDir}${this.staticDir}structure-static-buildings-base.png`);
      layers.push(`${this.imgDir}${this.staticDir}structure-static-space.png`);
    }
  }
  staticStructureWater(layers, structure) {
    if (structure.hasAmbitWater()) {
      layers.push(`${this.imgDir}${this.staticDir}structure-static-buildings-base.png`);
      layers.push(`${this.imgDir}${this.staticDir}structure-static-water.png`);
    }
  }

  /* Static Structure Feature Parts */
  staticStructureAttack(layers, structure) {
    if (structure.hasFeatureAttack()) {
      layers.push(`${this.imgDir}${this.staticDir}structure-static-attack.png`);
    }
  }
  staticStructureDefensive(layers, structure) {
    if (structure.hasFeatureDefensive()) {
      layers.push(`${this.imgDir}${this.staticDir}structure-static-defense.png`);
    }
  }
  staticStructureEngineering(layers, structure) {
    if (structure.hasFeatureEngineering()) {
      layers.push(`${this.imgDir}${this.staticDir}structure-static-engineering.png`);
    }
  }
  staticStructurePower(layers, structure) {
    if (structure.hasFeaturePower()) {
      layers.push(`${this.imgDir}${this.staticDir}structure-static-power.png`);
    }
  }

  staticStructure(layers, structure) {
    this.staticStructureBuildings(layers);

    this.staticStructureSky(layers, structure);
    this.staticStructureSpace(layers, structure);
    this.staticStructureWater(layers, structure);

    this.staticStructureAttack(layers, structure);
    this.staticStructureDefensive(layers, structure);
    this.staticStructureEngineering(layers, structure);
    this.staticStructurePower(layers, structure);
  }

  /**
   * Generate the art for a given structure.
   * @param {Structure} structure
   */
  generate(structure) {
    let layers = [];
    this.backgroundDefault(layers);
    this.backgroundSpace(layers, structure);
    this.backgroundSky(layers, structure);
    this.backgroundLand(layers, structure);
    this.backgroundWater(layers, structure);
    this.backgroundLayerFilter(layers);
    if (structure.isMobile()) {
      this.mobileStructure(layers, structure);
    } else {
      this.staticStructure(layers, structure);
    }
    return layers;
  }
}
