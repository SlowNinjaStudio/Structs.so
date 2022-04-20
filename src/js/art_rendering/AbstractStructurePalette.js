import {ColorRGB} from "../vendor/ColorRGB";

export class AbstractStructurePalette {
  constructor() {
    this.attackFeatureColor = [
      new ColorRGB(232, 170, 158),
      new ColorRGB(231, 110, 85),
      new ColorRGB(232, 39, 0),
      new ColorRGB(173, 29, 0),
      new ColorRGB(117, 20, 0)
    ];
    this.attackFeatureComplementaryColor = [
      new ColorRGB(174, 232, 209),
      new ColorRGB(116, 232, 186),
      new ColorRGB(0, 232, 141),
      new ColorRGB(0, 173, 104),
      new ColorRGB(0, 117, 70)
    ];

    this.defensiveFeatureColor = [
      new ColorRGB(224, 247, 250),
      new ColorRGB(112, 234, 250),
      new ColorRGB(0, 221, 250),
      new ColorRGB(0, 167, 189),
      new ColorRGB(0, 110, 125)
    ];
    this.defensiveFeatureComplementaryColor = [
      new ColorRGB(250, 214, 187),
      new ColorRGB(250, 179, 125),
      new ColorRGB(250, 108, 0),
      new ColorRGB(189, 82, 0),
      new ColorRGB(125, 54, 0)
    ];

    this.engineeringFeatureColor = [
      new ColorRGB(255, 224, 130),
      new ColorRGB(225, 208, 69),
      new ColorRGB(255, 193, 7),
      new ColorRGB(191, 145, 6),
      new ColorRGB(128, 97, 4)
    ];
    this.engineeringFeatureComplementaryColor = [
      new ColorRGB(194, 205, 255),
      new ColorRGB(130, 153, 255),
      new ColorRGB(8, 52, 255),
      new ColorRGB(6, 40, 191),
      new ColorRGB(4, 27, 128)
    ];

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
