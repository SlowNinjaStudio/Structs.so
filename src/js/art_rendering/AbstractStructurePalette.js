import {ColorRGB} from "../vendor/ColorRGB";

export class AbstractStructurePalette {
  constructor() {
    this.powerLightColor = [];
  }

  /**
   * @param {Array.<Array>}paletteSwap
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generatePowerPaletteSwap(paletteSwap, primaryColor, structure) {
    const maxSlots = 5;
    const slots = Math.min(structure.getChargingSlotCount(), maxSlots);
    let used = Math.min(structure.getChargingSlotUsedCount(), slots);
    const offSlots = maxSlots - slots;
    let i = 0;
    while(i < offSlots) {
      paletteSwap.push([this.powerLightColor[i], new ColorRGB(20, 44, 0)]);
      i++;
    }
    used = used + i;
    while(i < used) {
      paletteSwap.push([this.powerLightColor[i], new ColorRGB(255, 0, 0)]);
      i++;
    }
  }
}
