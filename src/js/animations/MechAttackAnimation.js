import {AttackAnimationInterface} from "./AttackAnimationInterface";
import {BackgroundAnimator} from "./BackgroundAnimator";
import {MechShootingAnimator} from "./MechShootingAnimator";
import {ShellDamageAnimator} from "./ShellDamageAnimator";
import {PostDamageSmokeAnimator} from "./PostDamageSmokeAnimator";
import {AnimationEngine} from "../vendor/animation/AnimationEngine";
import {ANIMATION_EVENTS} from "../constants";

export class MechAttackAnimation extends AttackAnimationInterface {

  /**
   * @param {string} canvasId
   * @param {Structure} attackingStructure
   * @param {Structure} defendingStructure
   */
  constructor(canvasId, attackingStructure, defendingStructure) {
    super(canvasId, attackingStructure, defendingStructure);
    this.backgroundAnimator = new BackgroundAnimator();
    this.mechShootingAnimator = new MechShootingAnimator();
    this.shellDamageAnimator = new ShellDamageAnimator();
    this.postDamageSmokeAnimator = new PostDamageSmokeAnimator();
  }

  async init() {
    const background1 = await this.backgroundAnimator.animate(this.attackingStructure);
    const mechShooting = await this.mechShootingAnimator.animate(this.attackingStructure);
    const animationEngineAttack = new AnimationEngine(
      this.canvasId,
      { flipHorizontally: true, animationLabel: 'ATTACK' },
    );
    animationEngineAttack.registerAnimatedObjects(background1);
    animationEngineAttack.registerAnimatedObjects(mechShooting);

    const background2 = await this.backgroundAnimator.animate(this.defendingStructure);
    const shellDamage = await this.shellDamageAnimator.animate(this.defendingStructure);
    const animationEngineDamage = new AnimationEngine(
      this.canvasId,
      { animationLabel: 'ATTACK_DAMAGE' }
    );
    animationEngineDamage.registerAnimatedObjects(background2);
    animationEngineDamage.registerAnimatedObjects(shellDamage);
    document.addEventListener(AnimationEngine.eventName(ANIMATION_EVENTS.END, 'ATTACK'), function () {
      animationEngineDamage.play(6);
    })

    const background3 = await this.backgroundAnimator.animate(this.defendingStructure);
    const postDamageSmoke = await this.postDamageSmokeAnimator.animate(this.defendingStructure);
    const animationEnginePostDamage = new AnimationEngine(this.canvasId);
    animationEnginePostDamage.registerAnimatedObjects(background3);
    animationEnginePostDamage.registerAnimatedObjects(postDamageSmoke);
    document.addEventListener(AnimationEngine.eventName(ANIMATION_EVENTS.END, 'ATTACK_DAMAGE'), function () {
      animationEnginePostDamage.play();
    })

    this.playFunction = function() {
      animationEngineAttack.play(6);
    }
  }

  play() {
    this.playFunction();
  }
}
