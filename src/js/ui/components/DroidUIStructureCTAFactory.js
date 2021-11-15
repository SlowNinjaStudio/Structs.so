import {DroidUIStructureCondensedCTANone} from "./DroidUIStructureCondensedCTANone";
import {DroidUIStructureCondensedCTAAttack} from "./DroidUIStructureCondensedCTAAttack";
import {DroidUIStructureCondensedCTARepair} from "./DroidUIStructureCondensedCTARepair";
import {DroidUIStructureCondensedCTADrain} from "./DroidUIStructureCondensedCTADrain";

export class DroidUIStructureCTAFactory {

  constructor() {
  }

  /**
   * I don't this is exactly what you meant, but it's a start.
   *
   * @param {string} callToActionType
   * @param {Structure} targetStructure
   */
  make(callToActionType, targetStructure) {
    let cta = new DroidUIStructureCondensedCTANone();
    switch (callToActionType){
      case 'attack':
        cta = new DroidUIStructureCondensedCTAAttack(targetStructure)
        break;
      case 'repair':
        cta = new DroidUIStructureCondensedCTARepair(targetStructure)
        break;
      case 'drain':
        cta = new DroidUIStructureCondensedCTADrain(targetStructure)
        break;
    }
    return cta;
  }
}
