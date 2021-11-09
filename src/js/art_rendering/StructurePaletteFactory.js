import {STRUCTURE_TYPES} from "../constants";
import {StructureClassifier} from "./StructureClassifier";
import {StructurePaletteMobileCar} from "./StructurePaletteMobileCar";
import {StructurePaletteStaticCity} from "./StructurePaletteStaticCity";
import {StructurePaletteStaticStation} from "./StructurePaletteStaticStation";
import {StructurePaletteMobileMech} from "./StructurePaletteMobileMech";

export class StructurePaletteFactory {
  constructor() {
    this.structureClassifier = new StructureClassifier();
  }

  /**
   * @param {Structure|Schematic} structure
   * @return {StructurePaletteStaticCity|StructurePaletteMobileCar}
   */
  make(structure) {
    const type = this.structureClassifier.getType(structure);
    let palette;
    if (type === STRUCTURE_TYPES.CAR) {
      palette = new StructurePaletteMobileCar();
    } else if (type === STRUCTURE_TYPES.MECH) {
      palette = new StructurePaletteMobileMech();
    } else if (type === STRUCTURE_TYPES.STATION) {
      palette = new StructurePaletteStaticStation()
    } else {
      palette = new StructurePaletteStaticCity()
    }
    return palette;
  }
}
