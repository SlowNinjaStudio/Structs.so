export class StructureLottieAnimationSet {
  /**
   * @param {StructureLottieAnimationSVG} idleSpace
   * @param {StructureLottieAnimationSVG} idleSky
   * @param {StructureLottieAnimationSVG} idleLand
   * @param {StructureLottieAnimationSVG} idleWater
   * @param {StructureLottieAnimationSVG} featureIdleAttack
   * @param {StructureLottieAnimationSVG} featureIdleDefensive
   * @param {StructureLottieAnimationSVG} featureIdleEngineering
   * @param {StructureLottieAnimationSVG} featureIdlePower
   */
  constructor(
    idleSpace,
    idleSky,
    idleLand,
    idleWater,
    featureIdleAttack,
    featureIdleDefensive,
    featureIdleEngineering,
    featureIdlePower
  ) {
    this.idleSpace = idleSpace;
    this.idleSky = idleSky;
    this.idleLand = idleLand;
    this.idleWater = idleWater;
    this.featureIdleAttack = featureIdleAttack;
    this.featureIdleDefensive = featureIdleDefensive;
    this.featureIdleEngineering = featureIdleEngineering;
    this.featureIdlePower = featureIdlePower;
  }
}
