import {UNITS} from "../Constants";

export class StructureCategorizer {

  /**
   * @param {Structure[]} structures
   * @return {Structure[][]}
   */
  categorizeByHealth(structures) {
    const damaged = [];

    for (let i = 0; i < structures.length; i++) {
      if (Math.round(structures[i].getHealthCurrent()) !== Math.round(structures[i].getHealthMax())) {
        damaged.push(structures[i]);
      }
    }

    return [damaged];
  }

  /**
   * @param {Structure[]} structures
   * @return {Structure[][]}
   */
  categorizeByWatt(structures) {
    const teraWatt = [];
    const gigaWatt = [];
    const megaWatt = [];
    const kiloWatt = [];

    for (let i = 0; i < structures.length; i++) {
      const watt = structures[i].getBatteryAmount();

      if (watt >= UNITS.TERA) {
        teraWatt.push(structures[i]);
      } else if (watt > UNITS.GIGA) {
        gigaWatt.push(structures[i]);
      } else if (watt > UNITS.MEGA) {
        megaWatt.push(structures[i]);
      } else if (watt > UNITS.KILO) {
        kiloWatt.push(structures[i]);
      }
    }

    return [kiloWatt, megaWatt, gigaWatt, teraWatt];
  }
}
