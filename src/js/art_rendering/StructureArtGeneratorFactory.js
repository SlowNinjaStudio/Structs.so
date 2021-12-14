import {StructureArtGeneratorMobileCar} from "./StructureArtGeneratorMobileCar";
import {StructureArtGeneratorMobileMech} from "./StructureArtGeneratorMobileMech";
import {StructureArtGeneratorStaticStation} from "./StructureArtGeneratorStaticStation";
import {StructureArtGeneratorStaticCity} from "./StructureArtGeneratorStaticCity";
import {StructureClassifier} from "./StructureClassifier";
import {STRUCTURE_TYPES} from "../Constants";

export class StructureArtGeneratorFactory {
  constructor() {
    this.structureClassifier = new StructureClassifier();
  }

  /**
   * @param {Structure|Schematic} structure
   * @return {StructureArtGeneratorStaticCity|StructureArtGeneratorMobileCar|StructureArtGeneratorStaticStation|StructureArtGeneratorMobileMech}
   */
  make(structure) {
    const type = this.structureClassifier.getType(structure);
    let generator;
    if (type === STRUCTURE_TYPES.CAR) {
      generator = new StructureArtGeneratorMobileCar();
    } else if (type === STRUCTURE_TYPES.MECH) {
      generator = new StructureArtGeneratorMobileMech();
    } else if (type === STRUCTURE_TYPES.STATION) {
      generator = new StructureArtGeneratorStaticStation();
    } else {
      generator = new StructureArtGeneratorStaticCity();
    }
    return generator;
  }
}
