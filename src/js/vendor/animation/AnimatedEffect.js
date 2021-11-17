/**
 * Used for animated effects like gun fire.
 */
export class AnimatedEffect {

  /**
   * @param {function} draw the script draws and animates the effect when called repeatedly
   * @param {number} x starting horizontal position on the canvas
   * @param {number} y starting vertical position on the canvas
   */
  constructor(draw, x, y) {
    this.draw = draw;
    this.x = x;
    this.y = y;
    this.canvas = null;
    this.context = null;
    this.frameCount = 0;
    this.loopCount = 0;
  }

  /**
   * @param {HTMLCanvasElement} canvas
   */
  setCanvas(canvas) {
    this.canvas = canvas;
  }

  /**
   * @param {CanvasRenderingContext2D} context
   */
  setContext(context) {
    this.context = context;
  }

  increaseFrameCount() {
    this.frameCount++;
  }

  /**
   * Used for looping animations.
   */
  resetFrameCount() {
    this.frameCount = 0;
    if (this.loopCount >= 1000) {
      this.loopCount = 0;
    } else {
      this.loopCount++;
    }
  }

}
