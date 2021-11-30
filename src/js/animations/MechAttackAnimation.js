import {AttackAnimation} from "./AttackAnimation";
import {BackgroundAnimator} from "./BackgroundAnimator";
import {MechShootingAnimator} from "./MechShootingAnimator";
import {ShellDamageAnimator} from "./ShellDamageAnimator";
import {PostDamageSmokeAnimator} from "./PostDamageSmokeAnimator";

export class MechAttackAnimation extends AttackAnimation {

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
      new MechShootingAnimator(),
      new ShellDamageAnimator(),
      new PostDamageSmokeAnimator(),
      6,
      6,
      3
    );
  }
}
