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
}
