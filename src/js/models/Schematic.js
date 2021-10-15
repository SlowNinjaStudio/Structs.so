import {AMBITS, FEATURES} from "../constants";

/**
 * Schematic Model
 */
export class Schematic {
  constructor() {
    this.accuracy = 0;
    this.ambits = [];
    this.build_rate = 0;
    this.capacity_max = 0;
    this.charge_rate = 0;
    this.charging_slot_count = 0;
    this.creator = '';
    this.description = '';
    this.drain_rate = 0;
    this.energy_efficiency = 0;
    this.energy_to_build = {
      amount: 0,
      denom: ''
    }
    this.features = [];
    this.generate_rate = 0;
    this.hash ='';
    this.health_max = 0;
    this.id = '';
    this.input = '';
    this.is_mobile = false;
    this.is_stationary = true;
    this.mass = 0;
    this.melee_attack = 0;
    this.melee_defense = 0;
    this.name = '';
    this.owner = '';
    this.primary_color = '';
    this.range_attack = 0;
    this.range_defense = 0;
    this.restoration_rate = 0;
    this.secondary_color = '';
    this.speed = 0;
    this.strength = 0;
  }

  /* Base Attributes */
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }
  getEnergyToBuildAmount() {
    return this.energy_to_build.amount;
  }
  getEnergyToBuildDenom() {
    return this.energy_to_build.denom;
  }
  getHealthMax() {
    return this.health_max;
  }
  getAmbits() {
    return this.ambits.join(', ');
  }
  getSpeed() {
    return this.speed;
  }
  getAccuracy() {
    return this.accuracy;
  }
  getMass() {
    return this.mass;
  }
  getStrength() {
    return this.strength;
  }
  getEnergyEfficiency() {
    return this.energy_efficiency;
  }
  getPrimaryColor() {
    return this.primary_color;
  }

  isMobile() {
    return this.is_mobile;
  }

  hasAmbit(ambit) {
    return this.ambits.includes(ambit);
  }
  hasAmbitLand() {
    return this.hasAmbit(AMBITS.LAND);
  }
  hasAmbitSky() {
    return this.hasAmbit(AMBITS.SKY);
  }
  hasAmbitSpace() {
    return this.hasAmbit(AMBITS.SPACE);
  }
  hasAmbitWater() {
    return this.hasAmbit(AMBITS.WATER);
  }

  hasFeature(feature) {
    return this.features.includes(feature);
  }
  hasFeatureAttack() {
    return this.hasFeature(FEATURES.ATTACK);
  }
  hasFeatureDefensive() {
    return this.hasFeature(FEATURES.DEFENSIVE);
  }
  hasFeatureEngineering() {
    return this.hasFeature(FEATURES.ENGINEERING);
  }
  hasFeaturePower() {
    return this.hasFeature(FEATURES.POWER);
  }

  /* Attack */
  getMeleeAttack() {
    return this.melee_attack;
  }
  getRangeAttack() {
    return this.range_attack;
  }

  /* Defensive */
  getMeleeDefense() {
    return this.melee_defense;
  }
  getRangeDefense() {
    return this.range_defense;
  }

  /* Engineering */
  getBuildRate() {
    return this.build_rate;
  }
  getRestorationRate() {
    return this.restoration_rate;
  }

  /* Power */
  getChargingSlotCount () {
    return parseInt(this.charging_slot_count);
  }
  getGenerationRate() {
    return this.generate_rate;
  }
  getChargeRate() {
    return this.charge_rate;
  }
  getDrainRate() {
    return this.drain_rate;
  }
}
