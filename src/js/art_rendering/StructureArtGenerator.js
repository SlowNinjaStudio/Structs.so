/**
 * Assembles the art for a structure or schematic using images and layers.
 */
import {StructureArtGeneratorFactory} from "./StructureArtGeneratorFactory";

export class StructureArtGenerator {
  constructor() {
    this.imgDir = 'img/structures/';
    this.backgroundsDir = 'backgrounds/';
    this.structureArtGeneratorFactory = new StructureArtGeneratorFactory();
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

  /**
   * Generate the art for a given structure or schematic.
   * @param {Structure|Schematic} structure
   */
  generate(structure) {
    let layers = [];
    this.backgroundDefault(layers);
    this.backgroundSpace(layers, structure);
    this.backgroundSky(layers, structure);
    this.backgroundLand(layers, structure);
    this.backgroundWater(layers, structure);
    this.backgroundLayerFilter(layers);

    const generator = this.structureArtGeneratorFactory.make(structure);
    generator.generate(layers, structure);

    return layers;
  }
}
