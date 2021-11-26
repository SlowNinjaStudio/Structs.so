import {NotImplementedError} from "../vendor/NotImplementedError";

export class AbstractStructureAnimator {

  /**
   * @param {number} animationLengthInFrames
   */
  constructor(animationLengthInFrames = 0) {
    this.animationLengthInFrames = animationLengthInFrames;
  }

  /**
   * @return {number} the animation length in frames
   */
  getAnimationLengthInFrames() {
    return this.animationLengthInFrames;
  }

  /**
   * Display an image that doesn't need to change.
   *
   * @return {(function(): void)|*}
   */
  staticScript() {
    return function () {
      this.context.drawImage(this.img, this.x, this.y);
      this.resetFrameCount(true);
    }
  }

  /**
   * @param {Schematic|Structure} structure
   * @return {Promise<AnimatedEffect[]>}
   */
  async animate(structure) {
    throw new NotImplementedError();
  }

  /**
   * Shakes the image.
   *
   * @return {(function(): void)|*}
   */
  /**
   * Shakes the image.
   *
   * @param {number} startFrame
   * @param {number} endFrame
   * @return {(function(): void)|*}
   */
  shake(startFrame, endFrame) {
    const animationLengthInFrames = this.animationLengthInFrames;
    return function() {
      const n = this.frameCount % this.fpsAdjustFrameNumber(8);
      if (
        n === 0
        || n === 1
        || this.frameCount < this.fpsAdjustFrameNumber(startFrame)
        || this.frameCount > this.fpsAdjustFrameNumber(endFrame)
      ) {
        this.context.drawImage(this.img, this.x, this.y);
      } else if (n === 2 || n === 3) {
        this.context.drawImage(this.img, this.x + 1, this.y - 1);
      } else if (n === 4 || n === 5) {
        this.context.drawImage(this.img, this.x - 1, this.y - 1);
      } else if (n === 6 || n === 7) {
        this.context.drawImage(this.img, this.x + 1, this.y + 1);
      } else if (n > 7) {
        this.context.drawImage(this.img, this.x, this.y);
      }
      if (this.frameCount >= this.fpsAdjustFrameNumber(animationLengthInFrames)) {
        this.resetFrameCount();
      }
    }
  }
}
