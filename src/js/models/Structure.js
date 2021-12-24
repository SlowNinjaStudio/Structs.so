import {AMBITS, FEATURES} from "../Constants";
import {ColorRGB} from "../vendor/ColorRGB";

/**
 * Structure Model
 */
export class Structure {
  constructor() {
    this.accuracy = 0;
    this.ambits = [];
    this.battery = {
      amount: 0,
      denom: ''
    };
    this.build_rate = 0;
    this.capacity_current = 0;
    this.capacity_max = 0;
    this.charge_rate = 0;
    this.charging_slot = [];
    this.charging_slot_count = 0;
    this.creator = '';
    this.description = '';
    this.drain_rate = 0;
    this.energy_efficiency = 0;
    this.energy_to_build = {
      amount: 0,
      denom: ''
    }
    this.generate_rate = 0;
    this.features = [];
    this.hash ='';
    this.health_current = 0;
    this.health_max = 0;
    this.id = '';
    this.input = '';
    this.is_mobile = false;
    this.mass = 0;
    this.melee_attack = 0;
    this.melee_defense = 0;
    this.name = '';
    this.owner = '';
    this.parent_id = '';
    this.primary_color = '';
    this.range_attack = 0;
    this.range_defense = 0;
    this.restoration_rate = 0;
    this.schematic = '';
    this.speed = 0;
    this.storage = [];
    this.strength = 0;
    this.supervisor = '';
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
  getCreator() {
    return this.creator;
  }
  getHealthCurrent() {
    return this.health_current;
  }
  getHealthMax() {
    return this.health_max;
  }
  getBatteryAmount() {
    return this.battery.amount;
  }
  getBatteryDenom() {
    return this.battery.denom;
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
  getPrimaryColorRGB() {
    return ColorRGB.hexToRgb(this.getPrimaryColor());
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

  sharesAmbit(other_ambits) {
    for (var i = 0; i < other_ambits.length; i++) {

      if (this.ambits.includes(other_ambits[i])) { return true };
    }
    return false;
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
  hasFeatureStorage() {
    return this.hasFeature(FEATURES.STORAGE);
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
