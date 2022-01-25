import {StructureClassifier} from "../StructureClassifier";
import {STRUCTURE_TYPES} from "../../Constants";
import {LottieArtConfiguratorCar} from "./LottieArtConfiguratorCar";
import {LottieArtConfiguratorMech} from "./LottieArtConfiguratorMech";
import {LottieArtConfiguratorCity} from "./LottieArtConfiguratorCity";
import {StationLottieAnimationSet} from "./StationLottieAnimationSet";
import {CityLottieAnimationSet} from "./CityLottieAnimationSet";
import {CarLottieAnimationSet} from "./CarLottieAnimationSet";
import {MechLottieAnimationSet} from "./MechLottieAnimationSet";

export class StructureLottieAnimationSetFactory {
  constructor() {
    this.structureClassifier = new StructureClassifier();
  }

  /**
   * @param {Structure} structure
   * @param {string} idleSpaceContainerId
   * @param {string} idleSkyContainerId
   * @param {string} idleLandContainerId
   * @param {string} idleWaterContainerId
   * @param {string} featureIdleAttackContainerId
   * @param {string} featureIdleDefensiveContainerId
   * @param {string} featureIdleEngineeringContainerId
   * @param {string} featureIdlePowerContainerId
   * @return {LottieArtConfiguratorCity|LottieArtConfiguratorCar|StationLottieAnimationSet|LottieArtConfiguratorMech}
   */
  make(
    structure,
    idleSpaceContainerId,
    idleSkyContainerId,
    idleLandContainerId,
    idleWaterContainerId,
    featureIdleAttackContainerId,
    featureIdleDefensiveContainerId,
    featureIdleEngineeringContainerId,
    featureIdlePowerContainerId
  ) {
    const type = this.structureClassifier.getType(structure);
    let animationSet;
    if (type === STRUCTURE_TYPES.CAR) {
      animationSet = new CarLottieAnimationSet(
        structure,
        idleSpaceContainerId,
        idleSkyContainerId,
        idleLandContainerId,
        idleWaterContainerId,
        featureIdleAttackContainerId,
        featureIdleDefensiveContainerId,
        featureIdleEngineeringContainerId,
        featureIdlePowerContainerId
      );
    } else if (type === STRUCTURE_TYPES.MECH) {
      animationSet = new MechLottieAnimationSet(
        structure,
        idleSpaceContainerId,
        idleSkyContainerId,
        idleLandContainerId,
        idleWaterContainerId,
        featureIdleAttackContainerId,
        featureIdleDefensiveContainerId,
        featureIdleEngineeringContainerId,
        featureIdlePowerContainerId
      );
    } else if (type === STRUCTURE_TYPES.STATION) {
      animationSet = new StationLottieAnimationSet(
        structure,
        idleSpaceContainerId,
        idleSkyContainerId,
        idleLandContainerId,
        idleWaterContainerId,
        featureIdleAttackContainerId,
        featureIdleDefensiveContainerId,
        featureIdleEngineeringContainerId,
        featureIdlePowerContainerId
      );
    } else {
      animationSet = new CityLottieAnimationSet(
        structure,
        idleSpaceContainerId,
        idleSkyContainerId,
        idleLandContainerId,
        idleWaterContainerId,
        featureIdleAttackContainerId,
        featureIdleDefensiveContainerId,
        featureIdleEngineeringContainerId,
        featureIdlePowerContainerId
      );
    }
    return animationSet;
  }
}
