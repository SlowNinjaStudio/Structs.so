export class StructureArtGeneratorBackground {
  constructor() {
    this.imgDir = 'img/structures/backgrounds/';
  }

  backgroundDefault(layers) {
    layers.push(`${this.imgDir}structure-bg-default.png`)
  }
  backgroundLand(layers, structure) {
    if (structure.hasAmbitLand()) {
      layers.push(`${this.imgDir}structure-bg-land.png`);
    }
  }
  backgroundSky(layers, structure) {
    if (structure.hasAmbitSky()) {
      layers.push(`${this.imgDir}structure-bg-sky.png`);
    }
  }
  backgroundSpace(layers, structure) {
    if (structure.hasAmbitSpace()) {
      layers.push(`${this.imgDir}structure-bg-space.png`);
    }
  }
  backgroundWater(layers, structure) {
    if (structure.hasAmbitWater()) {
      layers.push(`${this.imgDir}structure-bg-water.png`);
    }
  }
  backgroundLayerFilter(layers) {
    layers.push(`${this.imgDir}structure-bg-lighten-15.png`);
  }

  /**
   * @param {String[]} layers
   * @param {Structure|Schematic} structure
   */
  generate(layers, structure) {
    this.backgroundDefault(layers);
    this.backgroundSpace(layers, structure);
    this.backgroundSky(layers, structure);
    this.backgroundLand(layers, structure);
    this.backgroundWater(layers, structure);
    this.backgroundLayerFilter(layers);
  }
}
