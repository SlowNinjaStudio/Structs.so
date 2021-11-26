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
    const animationBackgroundComboTest1 = await this.backgroundAnimator.animate(this.attackingStructure);
    const animatedMechShootingComboTest = await this.mechShootingAnimator.animate(this.attackingStructure);
    const animationEngineAttack = new AnimationEngine(
      this.canvasId,
      { flipHorizontally: true, animationLabel: 'ATTACK' },
    );
    animationEngineAttack.registerAnimatedObjects(animationBackgroundComboTest1);
    animationEngineAttack.registerAnimatedObjects(animatedMechShootingComboTest);

    const animationBackgroundComboTest2 = await this.backgroundAnimator.animate(this.defendingStructure);
    const shellDamageComboTest = await this.shellDamageAnimator.animate(this.defendingStructure);
    const animationEngineDamage = new AnimationEngine(
      this.canvasId,
      { animationLabel: 'ATTACK_DAMAGE' }
    );
    animationEngineDamage.registerAnimatedObjects(animationBackgroundComboTest2);
    animationEngineDamage.registerAnimatedObjects(shellDamageComboTest);
    document.addEventListener(AnimationEngine.eventName(ANIMATION_EVENTS.END, 'ATTACK'), function () {
      animationEngineDamage.play(6);
    })

    const animationBackgroundComboTest3 = await this.backgroundAnimator.animate(this.defendingStructure);
    const postDamageSmokeComboTest = await this.postDamageSmokeAnimator.animate(this.defendingStructure);
    const animationEnginePostDamage = new AnimationEngine(this.canvasId);
    animationEnginePostDamage.registerAnimatedObjects(animationBackgroundComboTest3);
    animationEnginePostDamage.registerAnimatedObjects(postDamageSmokeComboTest);
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
