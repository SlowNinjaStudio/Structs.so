import {ColorRGB} from "../vendor/ColorRGB";

/**
 * Generates palettes for schematics.
 */
export class SchematicPalette {
  constructor() {
    this.outline = new ColorRGB(0,0,0);
    this.backgroundOutline = new ColorRGB(38,38,38);
  }

  /**
   * @param {ColorRGB} primaryColor
   */
  generatePaletteSwap(primaryColor) {
    const baseColor = primaryColor.clampAvgBrightness(100, 180);
    const newOutline = new ColorRGB(255, 255, 255);
    return [
      [this.outline, newOutline],
      [this.backgroundOutline, newOutline],
      [newOutline, baseColor, 'EXCEPT_TARGET']
    ];
  }
}
