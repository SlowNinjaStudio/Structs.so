export class StructureLottieAnimationSet {
  /**
   * @param {StructureLottieAnimationSVG} idleSpace
   * @param {StructureLottieAnimationSVG} idleSky
   * @param {StructureLottieAnimationSVG} idleLand
   * @param {StructureLottieAnimationSVG} idleWater
   */
  constructor(
    idleSpace,
    idleSky,
    idleLand,
    idleWater
  ) {
    this.idleSpace = idleSpace;
    this.idleSky = idleSky;
    this.idleLand = idleLand;
    this.idleWater = idleWater;
  }
}
