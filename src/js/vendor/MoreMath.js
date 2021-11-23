export class Coordinate {
  constructor(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

export class MoreMath {
  /**
   * @param {number} number
   * @param {number} digits The number of digits to appear after the decimal point
   * @return {number}
   */
  static roundDecimals(number, digits) {
    const precision = Math.pow(10, digits);
    return Math.round(number * precision) / precision;
  }

  /**
   * @param {number} xOrigin
   * @param {number} yOrigin
   * @param {number} radius
   * @param {number} thetaInRadians
   * @return {Coordinate}
   */
  static parametricEquationOfTheCircle(xOrigin, yOrigin, radius, thetaInRadians) {
    const xCircle = xOrigin + radius * Math.cos(thetaInRadians);
    const yCircle = yOrigin + radius * Math.sin(thetaInRadians);
    return new Coordinate(
      this.roundDecimals(xCircle, 2),
      this.roundDecimals(yCircle, 2)
    )
  }
}
