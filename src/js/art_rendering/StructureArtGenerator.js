/**
 * Assembles the art for a structure or schematic using images and layers.
 */
import {StructureArtGeneratorBackground} from "./StructureArtGeneratorBackground";
import {StructureArtGeneratorFactory} from "./StructureArtGeneratorFactory";

export class StructureArtGenerator {
  constructor() {
    this.structureArtGeneratorBackground = new StructureArtGeneratorBackground();
    this.structureArtGeneratorFactory = new StructureArtGeneratorFactory();
  }

  /**
   * Generate only the background art for a given structure or schematic.
   *
   * @param {Structure|Schematic} structure
   */
  generateBackground(structure) {
    let layers = [];
    this.structureArtGeneratorBackground.generate(layers, structure);
    return layers;
  }

  /**
   * Generate only the structure art for a given structure or schematic.
   *
   * @param {Structure|Schematic} structure
   */
  generateStructure(structure) {
    let layers = [];
    const generator = this.structureArtGeneratorFactory.make(structure);
    generator.generate(layers, structure);
    return layers;
  }

  /**
   * Generate the art for a given structure or schematic.
   * @param {Structure|Schematic} structure
   */
  generate(structure) {
    let layers = [];
    this.structureArtGeneratorBackground.generate(layers, structure);
    const generator = this.structureArtGeneratorFactory.make(structure);
    generator.generate(layers, structure);
    return layers;
  }
}
