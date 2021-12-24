import {AttackAnimation} from "./AttackAnimation";
import {BackgroundAnimator} from "./BackgroundAnimator";
import {PostDamageSmokeAnimator} from "./PostDamageSmokeAnimator";
import {CarShootingAnimator} from "./CarShootingAnimator";
import {MachineGunDamageAnimator} from "./MachineGunDamageAnimator";

export class CarAttackAnimation extends AttackAnimation {

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
      new CarShootingAnimator(),
      new MachineGunDamageAnimator(),
      new PostDamageSmokeAnimator(),
      3,
      3,
      3
    );
  }
}
