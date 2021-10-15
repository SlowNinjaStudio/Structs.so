import {Ranks} from "../vendor/Ranks";

export class StructureRanks {
  constructor() {
    this.accuracyMax = 255;
    this.energyEfficiencyMax = 255;
    this.massMax = 255;
    this.speedMax = 255;
    this.strengthMax = 255;
  }

  // Based on range attack max
  getAttackRanks() {
    return Ranks.make(this.speedMax + this.accuracyMax);
  }

  // Based on range defense max
  getDefensiveRanks() {
    return Ranks.make(this.massMax + this.accuracyMax);
  }

  // Based on build rate max
  getEngineeringRanks() {
    return Ranks.make(this.massMax + this.strengthMax);
  }

  // Based on generate rate max
  getPowerRanks() {
    return Ranks.make(this.energyEfficiencyMax + this.massMax);
  }
}
