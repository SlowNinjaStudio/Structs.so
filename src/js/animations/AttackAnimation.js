import {NotImplementedError} from "../vendor/NotImplementedError";
import {AnimationEngine} from "../vendor/animation/AnimationEngine";
import {ANIMATION_EVENTS} from "../Constants";

export class AttackAnimation {

  /**
   * @param {string} canvasId
   * @param {Structure} attackingStructure
   * @param {Structure} defendingStructure
   * @param {AbstractStructureAnimator} backgroundAnimator
   * @param {AbstractStructureAnimator} attackAnimator
   * @param {AbstractStructureAnimator} damageAnimator
   * @param {AbstractStructureAnimator} postDamageAnimator
   * @param {number} attackLoops
   * @param {number} damageLoops
   * @param {number} postDamageLoops
   */
  constructor(
    canvasId,
    attackingStructure,
    defendingStructure,
    backgroundAnimator,
    attackAnimator,
    damageAnimator,
    postDamageAnimator,
    attackLoops,
    damageLoops,
    postDamageLoops
  ) {
    this.canvasId = canvasId;
    this.attackingStructure = attackingStructure;
    this.defendingStructure = defendingStructure;

    this.backgroundAnimator = backgroundAnimator;
    this.attackAnimator = attackAnimator;
    this.damageAnimator = damageAnimator;
    this.postDamageAnimator = postDamageAnimator;

    this.attackLoops = attackLoops;
    this.damageLoops = damageLoops;
    this.postDamageLoops = postDamageLoops;

    this.playFunction = () => { throw new NotImplementedError(); };
  }

  /**
   * Init sets the playFunction and must be called before play.
   *
   * @return {Promise<void>}
   */
  async init() {
    const attackLoops = this.attackLoops;
    const damageLoops = this.damageLoops;
    const postDamageLoops = this.postDamageLoops;

    const background1 = await this.backgroundAnimator.animate(this.attackingStructure);
    const stationShooting = await this.attackAnimator.animate(this.attackingStructure);
    const animationEngineAttack = new AnimationEngine(
      this.canvasId,
      { flipHorizontally: true, animationLabel: `ATTACK_${this.defendingStructure.getId()}` },
    );
    animationEngineAttack.registerAnimatedObjects(background1);
    animationEngineAttack.registerAnimatedObjects(stationShooting);

    const background2 = await this.backgroundAnimator.animate(this.defendingStructure);
    const antiAirDamage = await this.damageAnimator.animate(this.defendingStructure);
    const animationEngineDamage = new AnimationEngine(
      this.canvasId,
      { animationLabel: `ATTACK_DAMAGE_${this.defendingStructure.getId()}` }
    );
    animationEngineDamage.registerAnimatedObjects(background2);
    animationEngineDamage.registerAnimatedObjects(antiAirDamage);
    document.addEventListener(
      AnimationEngine.eventName(ANIMATION_EVENTS.END, `ATTACK_${this.defendingStructure.getId()}`),
      function () {
        animationEngineDamage.play(damageLoops);
      }
    );

    const background3 = await this.backgroundAnimator.animate(this.defendingStructure);
    const postDamageSmoke = await this.postDamageAnimator.animate(this.defendingStructure);
    const animationEnginePostDamage = new AnimationEngine(
      this.canvasId,
      { animationLabel: `ATTACK_POST_DAMAGE_${this.defendingStructure.getId()}` }
    );
    animationEnginePostDamage.registerAnimatedObjects(background3);
    animationEnginePostDamage.registerAnimatedObjects(postDamageSmoke);
    document.addEventListener(
      AnimationEngine.eventName(ANIMATION_EVENTS.END, `ATTACK_DAMAGE_${this.defendingStructure.getId()}`),
      function () {
        animationEnginePostDamage.play(postDamageLoops);
      }
    );

    this.playFunction = function() {
      animationEngineAttack.play(attackLoops);
    }
  }

  play() {
    this.playFunction();
  }
}
