export class CoordinateError extends Error {

  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = "CoordinateError";
  }

}

export class Coordinate {
  constructor(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * @param {Event} event
   * @return {Coordinate}
   * @throws {CoordinateError}
   */
  static makeFromEvent(event) {
    if (event instanceof TouchEvent && event.changedTouches.length > 0) {
      return new Coordinate(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
    } else if (event instanceof MouseEvent) {
      return new Coordinate(event.pageX, event.pageY);
    } else {
      throw new CoordinateError('Unknown event type');
    }
  }
}

export class Rectangle {

  /**
   * @param {Number} width
   * @param {Number} height
   * @param {Number} x
   * @param {Number} y
   */
  constructor(width, height, x = 0, y = 0) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Coordinate} point
   * @return {boolean}
   */
  isPointInside(point) {
    return this.x <= point.x && point.x <= this.x + this.width
      && this.y <= point.y && point.y <= this.y + this.height;
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

  /**
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
