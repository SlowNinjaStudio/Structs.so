import {AttackAnimation} from "./AttackAnimation";
import {BackgroundAnimator} from "./BackgroundAnimator";
import {PostDamageSmokeAnimator} from "./PostDamageSmokeAnimator";
import {StationShootingAnimator} from "./StationShootingAnimator";
import {AntiAirDamageAnimator} from "./AntiAirDamageAnimator";

export class StationAttackAnimation extends AttackAnimation {

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
      new StationShootingAnimator(),
      new AntiAirDamageAnimator(),
      new PostDamageSmokeAnimator(),
      1,
      1,
      3
    );
  }
}
