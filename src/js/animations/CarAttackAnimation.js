import {AttackAnimationInterface} from "./AttackAnimationInterface";
import {BackgroundAnimator} from "./BackgroundAnimator";
import {PostDamageSmokeAnimator} from "./PostDamageSmokeAnimator";
import {AnimationEngine} from "../vendor/animation/AnimationEngine";
import {ANIMATION_EVENTS} from "../constants";
import {CarShootingAnimator} from "./CarShootingAnimator";
import {MachineGunDamageAnimator} from "./MachineGunDamageAnimator";

export class CarAttackAnimation extends AttackAnimationInterface {

  /**
   * @param {string} canvasId
   * @param {Structure} attackingStructure
   * @param {Structure} defendingStructure
   */
  constructor(canvasId, attackingStructure, defendingStructure) {
    super(canvasId, attackingStructure, defendingStructure);
    this.backgroundAnimator = new BackgroundAnimator();
    this.carShootingAnimator = new CarShootingAnimator();
    this.machineGunDamageAnimator = new MachineGunDamageAnimator();
    this.postDamageSmokeAnimator = new PostDamageSmokeAnimator();
  }

  async init() {
    const background1 = await this.backgroundAnimator.animate(this.attackingStructure);
    const carShooting = await this.carShootingAnimator.animate(this.attackingStructure);
    const animationEngineAttack = new AnimationEngine(
      this.canvasId,
      { flipHorizontally: true, animationLabel: 'ATTACK' },
    );
    animationEngineAttack.registerAnimatedObjects(background1);
    animationEngineAttack.registerAnimatedObjects(carShooting);

    const background2 = await this.backgroundAnimator.animate(this.defendingStructure);
    const machineGunDamage = await this.machineGunDamageAnimator.animate(this.defendingStructure);
    const animationEngineDamage = new AnimationEngine(
      this.canvasId,
      { animationLabel: 'ATTACK_DAMAGE' }
    );
    animationEngineDamage.registerAnimatedObjects(background2);
    animationEngineDamage.registerAnimatedObjects(machineGunDamage);
    document.addEventListener(AnimationEngine.eventName(ANIMATION_EVENTS.END, 'ATTACK'), function () {
      animationEngineDamage.play(3);
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
      animationEngineAttack.play(3);
    }
  }

  play() {
    this.playFunction();
  }
}
