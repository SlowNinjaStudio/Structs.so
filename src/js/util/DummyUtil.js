import {AMBITS, FEATURES} from "../constants";
import {Structure} from "../models/Structure";

export class DummyUtil {

  static getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  static getDummyStructure(
    isMobile = true,
    ambits = [AMBITS.LAND],
    features = [FEATURES.ATTACK],
    mass = null,
    color = ''
  ) {
    const dummy = new Structure();
    dummy.accuracy = this.getRandomInt(255);
    dummy.ambits = ambits;
    dummy.battery = {
      amount: this.getRandomInt(255),
      denom: 'watt'
    };
    dummy.build_rate = this.getRandomInt(255);
    dummy.capacity_current = this.getRandomInt(255);
    dummy.capacity_max = 255;
    dummy.charge_rate = this.getRandomInt(255);
    dummy.charging_slot = [];
    dummy.charging_slot_count = this.getRandomInt(5);
    dummy.creator = 'droid1kmwlh69n4mkx2ekg8ju55l0sss5jvum7caxgej';
    dummy.description = 'A Dummy Structure';
    dummy.drain_rate = this.getRandomInt(255);
    dummy.energy_efficiency = this.getRandomInt(255);
    dummy.energy_to_build = {
      amount: this.getRandomInt(255),
      denom: 'watt'
    }
    dummy.generate_rate = this.getRandomInt(255);
    dummy.features = features;
    dummy.hash ='111516c319e11d51c85e25d49faa5c855161440fcd81ed08eb4e09b5bb1ce64e';
    dummy.health_current = this.getRandomInt(255);
    dummy.health_max = 255;
    dummy.id = this.getRandomInt(1000);
    dummy.input = '';
    dummy.is_mobile = isMobile;
    dummy.mass = mass ? mass : this.getRandomInt(255);
    dummy.melee_attack = this.getRandomInt(255);
    dummy.melee_defense = this.getRandomInt(255);
    dummy.name = 'Dummy Struct';
    dummy.owner = 'droid1kmwlh69n4mkx2ekg8ju55l0sss5jvum7caxgej';
    dummy.parent_id = '';
    dummy.primary_color = color !== '' ? color : this.getRandomColor();
    dummy.range_attack = this.getRandomInt(255);
    dummy.range_defense = this.getRandomInt(255);
    dummy.restoration_rate = this.getRandomInt(255);
    dummy.schematic = '';
    dummy.speed = this.getRandomInt(255);
    dummy.storage = [];
    dummy.strength = this.getRandomInt(255);
    dummy.supervisor = 'droid1kmwlh69n4mkx2ekg8ju55l0sss5jvum7caxgej';
    return dummy;
  }
}
