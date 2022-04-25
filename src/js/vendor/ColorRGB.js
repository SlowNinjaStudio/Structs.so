export class ColorRGBError extends Error {
  constructor(message = '') {
    super(message);
    this.name = "ColorRGBError";
  }
}

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
   * @param rgbString rgb(\d, \d, \d)
   * @return {ColorRGB}
   */
  static makeFromRGBString(rgbString) {
    const matches = rgbString.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);

    if (matches.length < 4) {
      throw new ColorRGBError('Invalid RGB string');
    }

    return new ColorRGB(
      parseInt(matches[1]),
      parseInt(matches[2]),
      parseInt(matches[3])
    );
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
   * Mix a color into the current color at different ratios.
   *
   * @param {number} numShades
   * @param {ColorRGB} otherColor
   */
  getMixedColorShades(numShades, otherColor) {
    const shades = [];
    for (let i = 0; i <= numShades; i++) {
      const ratio = i / numShades;
      shades.push(this.mixColors(otherColor, ratio));
    }
    return shades;
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
   * @param {number} channelValue
   * @returns {number}
   */
  clampChannel(channelValue) {
    return Math.min(255, Math.max(0, Math.round(channelValue)));
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
      this.clampChannel(this.r * adjustment),
      this.clampChannel(this.g * adjustment),
      this.clampChannel(this.b * adjustment)
    );
  }

  /**
   * @return {ColorRGB}
   */
  maxIntensity() {
    const maxChannel = Math.max(this.r, this.g, this.b);
    const adjustment = 255 / maxChannel;
    return new ColorRGB(
      this.clampChannel(this.r * adjustment),
      this.clampChannel(this.g * adjustment),
      this.clampChannel(this.b * adjustment),
    );
  }

  toString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  /**
   * Whether or not two colors are the same.
   *
   * @param {ColorRGB} color
   * @return {boolean}
   */
  isEqual(color) {
    return (this.r === color.r && this.g === color.g && this.b === color.b);
  }

  /**
   * Get an equal number of lighter and darker shades using the current color as the median.
   *
   * @param {number} numShadesPerSide
   * @return {ColorRGB[]}
   */
  getLighterAndDarkerShades(numShadesPerSide) {
    if (numShadesPerSide < 1) {
      throw 'Numbers of shades per side must be greater than or equal to 1.';
    }
    const numShades = numShadesPerSide + 2; // 1 color is always the base color and 1 color is always the mix in color
    const white = new ColorRGB(255, 255, 255);
    const black = new ColorRGB( 0, 0, 0);
    const lighter = this.getMixedColorShades(numShades, white);
    const darker = this.getMixedColorShades(numShades, black);
    return lighter.reverse().slice(1, lighter.length - 1).concat(darker.slice(0, darker.length - 1));
  }

}
