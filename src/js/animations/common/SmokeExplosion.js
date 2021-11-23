import {MoreMath} from "../../vendor/MoreMath";

export class SmokeExplosion {
  constructor(x, y, numSmokeBranches, frameCountStart) {
    this.x = x;
    this.y = y;
    this.numSmokeBranches = numSmokeBranches;
    this.smokeBranches = this.generateSmokeBranches(this.numSmokeBranches);
    this.frameCountStart = frameCountStart;
  }

  /**
   * @param {number} numSmokeBranches
   * @return {number[]}
   */
  generateSmokeBranches(numSmokeBranches) {
    const smokeBranches = [];
    const denominator = 12;
    for (let i = 0; i < numSmokeBranches; i++) {
      const numerator = MoreMath.getRandomInt(0, 24);
      smokeBranches.push((numerator / denominator) * Math.PI);
    }
    return smokeBranches;
  }

  /**
   * @param {number} currentFrameCount
   * @return {boolean}
   */
  shouldStart(currentFrameCount) {
    return (currentFrameCount >= this.frameCountStart);
  }

}
