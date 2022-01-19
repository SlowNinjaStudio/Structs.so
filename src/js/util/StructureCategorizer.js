import {UNITS} from "../Constants";

export class StructureCategorizer {

  /**
   * @param {Structure[]} structures
   * @param {string} order ASC or DESC
   */
  sortByHealth(structures, order = 'ASC') {
    structures.sort((a, b) => {
      const healthA = Math.round((a.getHealthCurrent() / a.getHealthMax()) * 100);
      const healthB = Math.round((b.getHealthCurrent() / b.getHealthMax()) * 100);
      if (healthA < healthB) {
        return (order === 'ASC') ? -1 : 1;
      } else if (healthB < healthA) {
        return (order === 'ASC') ? 1 : -1;
      } else {
        return 0;
      }
    })
  }

  /**
   * @param {Structure[]} structures
   * @param {string} order ASC or DESC
   */
  sortByBatteryAmount(structures, order = 'ASC') {
    structures.sort((a, b) => {
      const amountA = Math.abs(a.getBatteryAmount());
      const amountB = Math.abs(b.getBatteryAmount());
      if (amountA < amountB) {
        return (order === 'ASC') ? -1 : 1;
      } else if (amountB < amountA) {
        return (order === 'ASC') ? 1 : -1;
      } else {
        return 0;
      }
    })
  }

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

    this.sortByHealth(damaged);

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

    this.sortByBatteryAmount(kiloWatt, 'DESC');
    this.sortByBatteryAmount(megaWatt, 'DESC');
    this.sortByBatteryAmount(gigaWatt, 'DESC');
    this.sortByBatteryAmount(teraWatt, 'DESC');

    return [kiloWatt, megaWatt, gigaWatt, teraWatt];
  }
}
