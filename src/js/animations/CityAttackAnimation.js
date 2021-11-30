import {AttackAnimation} from "./AttackAnimation";
import {BackgroundAnimator} from "./BackgroundAnimator";
import {PostDamageSmokeAnimator} from "./PostDamageSmokeAnimator";
import {CityShootingAnimator} from "./CityShootingAnimator";
import {LaserDamageAnimator} from "./LaserDamageAnimator";

export class CityAttackAnimation extends AttackAnimation {

  /**
   * @param {string} canvasId
   * @param {Structure} attackingStructure
   * @param {Structure} defendingStructure
   */
  constructor(canvasId, attackingStructure, defendingStructure) {
    super(
      canvasId,
      attackingStructure,
      defendingStructure,
      new BackgroundAnimator(),
      new CityShootingAnimator(),
      new LaserDamageAnimator(),
      new PostDamageSmokeAnimator(),
      1,
      1,
      3
    );
  }
}
