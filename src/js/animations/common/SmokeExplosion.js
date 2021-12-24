import {MoreMath} from "../../vendor/MoreMath";
import {ColorRGB} from "../../vendor/ColorRGB";

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

  smokeOrb(context, x, y, frameCount, thetaInRadians, flareEndFrame = 0) {
    const animationLength = 60;
    const alpha = (frameCount < animationLength / 2) ? 1 : ((animationLength - frameCount) / animationLength);
    if (frameCount > animationLength) {
      return;
    }

    let smokeStrokeColor = new ColorRGB(220, 220, 220);
    let smokeShadowColor = '#5a5a5a';
    let smokeShadowBlur = 4;
    let smokeFillColor = new ColorRGB(180, 180, 180);
    if (frameCount < flareEndFrame) {
      smokeStrokeColor = new ColorRGB(150, 50, 0);
      smokeShadowColor = 'rgba(80, 80, 80, 1)';
      smokeFillColor = new ColorRGB(240, 240, 0);
    }

    context.strokeStyle = `rgba(${smokeStrokeColor.r}, ${smokeStrokeColor.g}, ${smokeStrokeColor.b}, ${alpha})`;
    context.shadowColor = smokeShadowColor;
    context.shadowBlur = smokeShadowBlur;
    context.fillStyle = `rgba(${smokeFillColor.r}, ${smokeFillColor.g}, ${smokeFillColor.b}, ${alpha})`;

    const coordinate = MoreMath.parametricEquationOfTheCircle(x, y, Math.pow(frameCount, (1/2)), thetaInRadians);

    context.beginPath();
    context.ellipse(coordinate.x, coordinate.y, 2, 2, Math.PI, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  }

}
