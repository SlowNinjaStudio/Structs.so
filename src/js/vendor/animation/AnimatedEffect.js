/**
 * Used for animated effects like gun fire.
 */
export class AnimatedEffect {

  /**
   * @param {function} draw the script draws and animates the effect when called repeatedly
   * @param {number} x starting horizontal position on the canvas
   * @param {number} y starting vertical position on the canvas
   * @param {number} fpsAnimatedAt the original frames per second the animation was created for
   */
  constructor(draw, x, y, fpsAnimatedAt= 60) {
    this.draw = draw;
    this.x = x;
    this.y = y;
    this.fpsAnimatedAt = fpsAnimatedAt;
    this.canvas = null;
    this.context = null;
    this.fps = 0;
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

  /**
   * @param {number} fps
   */
  setFPS(fps) {
    this.fps = Math.round(fps);
  }

  /**
   * Adjust the given frame number reference to match the current frame rate.
   *
   * @param {number} frameNumber any number that relates to the animation frames
   * @return {number} the number adjusted to the current fps
   */
  fpsAdjustFrameNumber(frameNumber) {
    return Math.round((this.fps / this.fpsAnimatedAt) * frameNumber);
  }

  /**
   * Adjust the given frame count to match the current frame rate.
   *
   * @param {number} frameCount the frame count
   * @return {number} the number adjusted to the current fps
   */
  fpsAdjustFrameCount(frameCount) {
    return Math.round((this.fpsAnimatedAt / this.fps) * frameCount);
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
