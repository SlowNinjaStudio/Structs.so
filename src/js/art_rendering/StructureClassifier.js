import {STRUCTURE_TYPES} from "../Constants";

export class StructureClassifier {

  /**
   * @param {Structure|Schematic} structure
   * @return {string}
   */
  getType(structure) {
    let type = STRUCTURE_TYPES.CITY;
    if (structure.isMobile() && structure.getMass() < 50) {
      type = STRUCTURE_TYPES.CAR;
    } else if (structure.isMobile() && structure.getMass() >= 50) {
      type = STRUCTURE_TYPES.MECH;
    } else if (!structure.isMobile() && structure.getMass() < 50) {
      type = STRUCTURE_TYPES.STATION;
    }
    return type;
  }

}
