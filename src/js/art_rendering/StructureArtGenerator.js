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
