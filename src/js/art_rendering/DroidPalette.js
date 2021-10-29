import {ColorRGB} from "../vendor/ColorRGB";

/**
 * Generates palettes for mobile structures.
 */
export class DroidPalette {
  constructor() {
    this.red1 = new ColorRGB(255, 122, 122);
    this.red2 = new ColorRGB(255, 0, 0); // Primary
    this.red3 = new ColorRGB(206, 0, 0);
    this.red4 = new ColorRGB(146, 0, 0);
    this.red5 = new ColorRGB(94, 0, 0);
    this.red6 = new ColorRGB(66, 0, 0);

    this.lightGray1 = new ColorRGB(208, 208, 208);
    this.lightGray2 = new ColorRGB(162, 162, 162);
    this.lightGray3 = new ColorRGB(185, 185, 185);
    this.lightGray4 = new ColorRGB(133, 133, 133);

    this.darkGray1 = new ColorRGB(80, 80, 80);
    this.darkGray2 = new ColorRGB(60, 60, 60);
    this.darkGray3 = new ColorRGB(54, 54, 54);
    this.darkGray4 = new ColorRGB(45, 45, 45);
    this.darkGray5 = new ColorRGB(25, 25, 25);
  }

  /**
   * @param {Array.<Array>} paletteSwap
   * @param {ColorRGB} primaryColor
   */
  generateRedPaletteSwap(paletteSwap, primaryColor) {
    const maxIntensity = primaryColor.maxIntensity();
    const lightMaxIntensity = maxIntensity.mixColors(new ColorRGB(255, 255, 255));
    const shades = maxIntensity.getShades(5);

    paletteSwap.push([this.red1, lightMaxIntensity]);
    paletteSwap.push([this.red2, shades[0]]);
    paletteSwap.push([this.red3, shades[1]]);
    paletteSwap.push([this.red4, shades[2]]);
    paletteSwap.push([this.red5, shades[3]]);
    paletteSwap.push([this.red6, shades[4]]);
  }

  /**
   * @param {ColorRGB} primaryColor
   */
  generatePaletteSwap(primaryColor) {
    const paletteSwap = [];
    this.generateRedPaletteSwap(paletteSwap, primaryColor);
    return paletteSwap;
  }
}
