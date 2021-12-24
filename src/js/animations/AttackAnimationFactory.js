import {StructureClassifier} from "../art_rendering/StructureClassifier";
import {STRUCTURE_TYPES} from "../Constants";
import {CarAttackAnimation} from "./CarAttackAnimation";
import {MechAttackAnimation} from "./MechAttackAnimation";
import {StationAttackAnimation} from "./StationAttackAnimation";
import {CityAttackAnimation} from "./CityAttackAnimation";

export class AttackAnimationFactory {
  constructor() {
    this.structureClassifier = new StructureClassifier();
  }

  /**
   * @param {string} canvasId
   * @param {Structure} attackingStructure
   * @param {Structure} defendingStructure
   * @return {AttackAnimation}
   */
  make(canvasId, attackingStructure, defendingStructure) {
    const type = this.structureClassifier.getType(attackingStructure);
    let animation;
    if (type === STRUCTURE_TYPES.CAR) {
      animation = new CarAttackAnimation(canvasId, attackingStructure, defendingStructure);
    } else if (type === STRUCTURE_TYPES.MECH) {
      animation = new MechAttackAnimation(canvasId, attackingStructure, defendingStructure);
    } else if (type === STRUCTURE_TYPES.STATION) {
      animation = new StationAttackAnimation(canvasId, attackingStructure, defendingStructure);
    } else {
      animation = new CityAttackAnimation(canvasId, attackingStructure, defendingStructure);
    }
    return animation;
  }
}
