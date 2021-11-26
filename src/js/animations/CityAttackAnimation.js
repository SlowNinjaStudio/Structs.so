import {AttackAnimationInterface} from "./AttackAnimationInterface";
import {BackgroundAnimator} from "./BackgroundAnimator";
import {PostDamageSmokeAnimator} from "./PostDamageSmokeAnimator";
import {AnimationEngine} from "../vendor/animation/AnimationEngine";
import {ANIMATION_EVENTS} from "../constants";
import {CityShootingAnimator} from "./CityShootingAnimator";
import {LaserDamageAnimator} from "./LaserDamageAnimator";

export class CityAttackAnimation extends AttackAnimationInterface {

  /**
   * @param {string} canvasId
   * @param {Structure} attackingStructure
   * @param {Structure} defendingStructure
   */
  constructor(canvasId, attackingStructure, defendingStructure) {
    super(canvasId, attackingStructure, defendingStructure);
    this.backgroundAnimator = new BackgroundAnimator();
    this.cityShootingAnimator = new CityShootingAnimator();
    this.laserDamageAnimator = new LaserDamageAnimator();
    this.postDamageSmokeAnimator = new PostDamageSmokeAnimator();
  }

  async init() {
    const background1 = await this.backgroundAnimator.animate(this.attackingStructure);
    const cityShooting = await this.cityShootingAnimator.animate(this.attackingStructure);
    const animationEngineAttack = new AnimationEngine(
      this.canvasId,
      { flipHorizontally: true, animationLabel: `ATTACK_${this.defendingStructure.getId()}` },
    );
    animationEngineAttack.registerAnimatedObjects(background1);
    animationEngineAttack.registerAnimatedObjects(cityShooting);

    const background2 = await this.backgroundAnimator.animate(this.defendingStructure);
    const laserDamage = await this.laserDamageAnimator.animate(this.defendingStructure);
    const animationEngineDamage = new AnimationEngine(
      this.canvasId,
      { animationLabel: `ATTACK_DAMAGE_${this.defendingStructure.getId()}` }
    );
    animationEngineDamage.registerAnimatedObjects(background2);
    animationEngineDamage.registerAnimatedObjects(laserDamage);
    document.addEventListener(
      AnimationEngine.eventName(ANIMATION_EVENTS.END, `ATTACK_${this.defendingStructure.getId()}`), function () {
      animationEngineDamage.play(1);
    })

    const background3 = await this.backgroundAnimator.animate(this.defendingStructure);
    const postDamageSmoke = await this.postDamageSmokeAnimator.animate(this.defendingStructure);
    const animationEnginePostDamage = new AnimationEngine(this.canvasId);
    animationEnginePostDamage.registerAnimatedObjects(background3);
    animationEnginePostDamage.registerAnimatedObjects(postDamageSmoke);
    document.addEventListener(AnimationEngine.eventName(ANIMATION_EVENTS.END, `ATTACK_DAMAGE_${this.defendingStructure.getId()}`), function () {
      animationEnginePostDamage.play(10);
    })

    this.playFunction = function() {
      animationEngineAttack.play(1);
    }
  }

  play() {
    this.playFunction();
  }
}
