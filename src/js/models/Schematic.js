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
  getHash() {
    return this.hash;
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

  /* Build Schematic from Hash Rather than API */
  schematicFromHash(hash, input) {

    this.hash = hash;
    this.input = input;

    this.is_mobile = hash.substring(16,17) == '1'
    this.is_stationary = !this.is_mobile

    this.energy_efficiency = parseInt(hash.substring(17,19), 16)
    this.mass              = parseInt(hash.substring(19,21), 16)
    this.strength          = parseInt(hash.substring(21,23), 16)
    this.speed             = parseInt(hash.substring(23,25), 16)
    this.accuracy          = parseInt(hash.substring(25,27), 16)


    this.energy_to_build = { amount:( this.speed + this.accuracy + this.mass + this.strength), denom:"watt"}

    let hasEngineeringSystems = hash.substring(0,3) == "111"
    let hasStorageSystems     = hash.substring(3,5) == "11"
    let hasDefensiveSystems   = hash.substring(5,6) == "1"
    let hasAttackSystems      = hash.substring(6,7) == "1"
    let hasPowerSystems       = hash.substring(7,8) == "1"


    if (hasPowerSystems) {
      this.features.push(FEATURES.POWER)
    }

    if (hasAttackSystems) {
      this.features.push(FEATURES.ATTACK)
    }

    if (hasDefensiveSystems) {
      this.features.push(FEATURES.DEFENSIVE)
    }

    if (hasStorageSystems) {
      this.features.push(FEATURES.STORAGE)
    }

    if (hasEngineeringSystems) {
      this.features.push(FEATURES.ENGINEERING)
    }

    let ambitSpace  = hash.substring(8,11)  == "111"
    let ambitSky    = hash.substring(11,13) == "11"
    let ambitWater  = hash.substring(13,15) == "11"
    let ambitLand   = hash.substring(15,16) == "1"

    if (ambitLand) {
      this.ambits.push(AMBITS.LAND)
    }

    if (ambitWater) {
      this.ambits.push(AMBITS.WATER)
    }

    if (ambitSky) {
      this.ambits.push(AMBITS.SKY)
    }

    if (ambitSpace) {
      this.ambits.push(AMBITS.SPACE)
    }

    // These could theoretically be skipped if wanting to do faster
    // hashing but for the sake of prettier pictures let's do it
    if (this.mass == 0) { console.log('this schema sucks')}
    if (this.strength == 0) { console.log('this schema sucks')}
    if ((this.mass + this.accuracy) == 0) { console.log('this schema sucks')}
    if ((this.mass + this.strength) == 0) { console.log('this schema sucks')}
    if ((this.speed * this.accuracy) == 0)  { console.log('this schema sucks')}

    if (this.is_mobile) {
      this.melee_attack  = (this.strength * this.mass) % (this.speed * this.accuracy)

      this.melee_defense = (this.strength + this.speed + this.accuracy)
      this.range_defense = (this.strength + this.speed) % (this.mass + this.accuracy)
    } else {
      this.melee_attack  = 0

      this.melee_defense = (this.strength + this.speed)
      this.range_defense = (this.strength + this.speed) % this.mass
    }

    this.range_attack = (this.speed + this.accuracy)

    if (hasPowerSystems) {
      this.generate_rate = this.energy_efficiency + this.mass
      this.charge_rate   = this.energy_efficiency * this.accuracy
      this.drain_rate    = this.energy_efficiency * this.speed

      this.charging_slot_count = (this.speed * this.energy_efficiency) % 5

    } else {
      this.generate_rate = 0
      this.charge_rate   = 0
      this.drain_rate    = 0

      this.charging_slot_count = 0;
    }

    if (hasEngineeringSystems) {
      this.build_rate       = (this.speed * this.accuracy) % (this.mass  + this.strength)
      this.restoration_rate = (this.speed * this.accuracy) % this.strength
    } else {
      this.build_rate       = 0
      this.restoration_rate = 0
    }

    if (hasStorageSystems) {
      this.capacity_max  = this.mass - this.strength
    } else {
      this.capacity_max  = 0
    }

    this.health_max = this.mass + this.strength

    this.primary_color   = hash.substring(52,58);
    this.secondary_color = hash.substring(58,64);
  }
}
