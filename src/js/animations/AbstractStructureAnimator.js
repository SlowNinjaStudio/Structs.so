import {NotImplementedError} from "../vendor/NotImplementedError";

export class AbstractStructureAnimator {

  /**
   * @param {number} animationLengthInFrames
   */
  constructor(animationLengthInFrames) {
    this.animationLengthInFrames = animationLengthInFrames;
  }

  /**
   * @return {number} the animation length in frames
   */
  getAnimationLengthInFrames() {
    return this.animationLengthInFrames;
  }

  /**
   * @param {Schematic|Structure} structure
   * @return {Promise<AnimatedEffect[]>}
   */
  async animate(structure) {
    throw new NotImplementedError();
  }
}
