/**
 * Library for working with RGB colors
 */
export class ColorRGB {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  /**
   * Return the RGB complimentary color for the given RGB color.
   *
   * @return {ColorRGB}
   */
  getComplimentaryColor() {
    return new ColorRGB(
      255 - this.r,
      255 - this.g,
      255 - this.b
    );
  }

  /**
   * Generate a grey based on the luminosity of the given color.
   *
   * @return {ColorRGB}
   */
  getGrey() {
    const avg = Math.round((this.r + this.g + this.b) / 3);
    return new ColorRGB(
      avg,
      avg,
      avg
    );
  }

  /**
   * Mix a color into the current color.
   *
   * @param {ColorRGB} otherColor
   * @param {number} ratio a number between 0 - 1, the amount of the other color to mix in.
   */
  mixColors(otherColor, ratio = 0.5) {
    return new ColorRGB(
      Math.round(this.r * (1 - ratio) + otherColor.r * ratio),
      Math.round(this.g * (1 - ratio) + otherColor.g * ratio),
      Math.round(this.b * (1 - ratio) + otherColor.b * ratio)
    );
  }

  /**
   * Get darker shades of the current color.
   *
   * @param {number} numShades the number of shades to generate
   * @param {boolean} lightToDark whether or not the shades are ordered light to dark or from dark to light
   * @return {Array.<ColorRGB>}
   */
  getShades(numShades, lightToDark = true) {
    const shades = [];

    for (let i = 0; i < numShades; i++) {
      const numerator = lightToDark ? numShades - i : i + 1;
      shades.push(new ColorRGB(
        Math.round(this.r * (numerator / numShades)),
        Math.round(this.g * (numerator / numShades)),
        Math.round(this.b * (numerator / numShades))
      ));
    }
    return shades;
  }

  /**
   * Convert a hex color code to RGB.
   *
   * @param {string} hex color code
   * @returns {ColorRGB}
   */
  static hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return new ColorRGB(
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    );
  }

  /**
   * Ensures that the color is within a certain range of brightness.
   *
   * @param {number} min
   * @param {number} max
   * @returns {ColorRGB}
   */
  clampAvgBrightness(min, max) {
    if (min < 0 || max < 0 || min >= max) {
      throw 'Invalid min or max';
    }
    const avg = (this.r + this.g + this.b) / 3;
    let adjustment = 1;
    if (avg < min) {
      adjustment = min / avg;
    } else if (avg > max) {
      adjustment = max / avg;
    }
    return new ColorRGB(
      Math.min(255, Math.max(0, Math.round(this.r * adjustment))),
      Math.min(255, Math.max(0, Math.round(this.g * adjustment))),
      Math.min(255, Math.max(0, Math.round(this.b * adjustment)))
    );
  }
}
