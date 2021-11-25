import {MoreMath} from "../../vendor/MoreMath";

export class SmokeExplosion {

  /**
   * @param {number} x explosion origin x-coordinate
   * @param {number} y explosion origin y-coordinate
   * @param {number} numSmokeBranches the number of smoke orbs this explosion produces
   * @param frameCountStart the frame number from to start showing this animation
   * @param arcRangeStart the explosion expands in a circle, but can be limited to a certain arc range
   * @param arcRangeEnd the explosion expands in a circle, but can be limited to a certain arc range
   * @param arcSegments determines how many different directions smoke orbs can go in
   */
  constructor(
    x,
    y,
    numSmokeBranches,
    frameCountStart,
    arcRangeStart = 0,
    arcRangeEnd = 24,
    arcSegments = 24
  ) {
    this.x = x;
    this.y = y;
    this.numSmokeBranches = numSmokeBranches;
    this.frameCountStart = frameCountStart;
    this.arcRangeStart = arcRangeStart;
    this.arcRangeEnd = arcRangeEnd;
    this.arcSegments = arcSegments;
    this.smokeBranches = this.generateSmokeBranches(this.numSmokeBranches);
  }

  /**
   * @param {number} numSmokeBranches
   * @return {number[]}
   */
  generateSmokeBranches(numSmokeBranches) {
    const smokeBranches = [];
    const denominator = Math.round(this.arcSegments / 2);
    for (let i = 0; i < numSmokeBranches; i++) {
      const numerator = MoreMath.getRandomInt(this.arcRangeStart, this.arcRangeEnd);
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
