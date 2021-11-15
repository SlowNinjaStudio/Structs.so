import {StructureArtGenerator} from "./StructureArtGenerator";
import {StructurePaletteFactory} from "./StructurePaletteFactory";

/**
 * The art components need to display a structure.
 */
export class StructureArtSet {
  constructor(structure) {
    this.structure = structure;
    this.structureArtGenerator = new StructureArtGenerator();
    this.structurePaletteFactory = new StructurePaletteFactory();
  }

  /**
   * @return {String[]} The paths of the layers that make up the structure art.
   */
  getLayers() {
    return this.structureArtGenerator.generate(this.structure);
  }

  /**
   * @return {array} Color swap palette based on the structures color.
   */
  getPalette() {
    return this.structurePaletteFactory.generatePaletteSwap(this.structure);
  }
}
