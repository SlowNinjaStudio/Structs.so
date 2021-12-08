import {StructureClassifier} from "../StructureClassifier";
import {STRUCTURE_TYPES} from "../../constants";
import {LottieArtConfiguratorCar} from "./LottieArtConfiguratorCar";
import {LottieArtConfiguratorMech} from "./LottieArtConfiguratorMech";
import {LottieArtConfiguratorStation} from "./LottieArtConfiguratorStation";
import {LottieArtConfiguratorCity} from "./LottieArtConfiguratorCity";

export class LottieArtConfiguratorFactory {
  constructor() {
    this.structureClassifier = new StructureClassifier();
  }

  /**
   * @param {Structure} structure
   * @return {AbstractLottieArtConfigurator}
   */
  make(structure) {
    const type = this.structureClassifier.getType(structure);
    let configurator;
    if (type === STRUCTURE_TYPES.CAR) {
      configurator = new LottieArtConfiguratorCar(structure);
    } else if (type === STRUCTURE_TYPES.MECH) {
      configurator = new LottieArtConfiguratorMech(structure);
    } else if (type === STRUCTURE_TYPES.STATION) {
      configurator = new LottieArtConfiguratorStation(structure);
    } else {
      configurator = new LottieArtConfiguratorCity(structure);
    }
    return configurator;
  }
}
