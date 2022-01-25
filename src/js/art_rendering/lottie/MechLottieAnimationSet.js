import {StructureLottieAnimationSet} from "./StructureLottieAnimationSet";
import {StructureLottieAnimationSVG} from "./StructureLottieAnimationSVG";
import {ANIMATION_NAMES} from "../../AnimationNameConstants";

export class MechLottieAnimationSet extends StructureLottieAnimationSet {

  /**
   * @param {Structure} structure
   * @param {string} idleSpaceContainerId
   * @param {string} idleSkyContainerId
   * @param {string} idleLandContainerId
   * @param {string} idleWaterContainerId
   * @param {string} featureIdleAttackContainerId
   * @param {string} featureIdleDefensiveContainerId
   * @param {string} featureIdleEngineeringContainerId
   * @param {string} featureIdlePowerContainerId
   */
  constructor(
    structure,
    idleSpaceContainerId,
    idleSkyContainerId,
    idleLandContainerId,
    idleWaterContainerId,
    featureIdleAttackContainerId,
    featureIdleDefensiveContainerId,
    featureIdleEngineeringContainerId,
    featureIdlePowerContainerId
  ) {
    const idleSpace = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.MECH.IDLE.SPACE,
      structure,
      idleSpaceContainerId,
      {
        container: document.getElementById(idleSpaceContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/mech/idle/space/mech-idle-space.json'
      }
    );

    const idleSky = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.MECH.IDLE.SKY,
      structure,
      idleSkyContainerId,
      {
        container: document.getElementById(idleSkyContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/mech/idle/sky/mech-idle-sky.json'
      }
    );

    const idleLand = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.MECH.IDLE.LAND,
      structure,
      idleLandContainerId,
      {
        container: document.getElementById(idleLandContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/mech/idle/land/mech-idle-land.json'
      }
    );

    const idleWater = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.MECH.IDLE.WATER,
      structure,
      idleWaterContainerId,
      {
        container: document.getElementById(idleWaterContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/mech/idle/water/mech-idle-water.json'
      }
    );

    /** TODO: Change feature idle paths to real paths */
    const featureIdleAttack = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.MECH.FEATURE_IDLE.ATTACK,
      structure,
      featureIdleAttackContainerId,
      {
        container: document.getElementById(featureIdleAttackContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/mech/idle/space/mech-idle-space.json'
      }
    );

    const featureIdleDefensive = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.MECH.FEATURE_IDLE.DEFENSIVE,
      structure,
      featureIdleDefensiveContainerId,
      {
        container: document.getElementById(featureIdleDefensiveContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/mech/idle/sky/mech-idle-sky.json'
      }
    );

    const featureIdleEngineering = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.MECH.FEATURE_IDLE.ENGINEERING,
      structure,
      featureIdleEngineeringContainerId,
      {
        container: document.getElementById(featureIdleEngineeringContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/mech/idle/land/mech-idle-land.json'
      }
    );

    const featureIdlePower = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.MECH.FEATURE_IDLE.POWER,
      structure,
      featureIdlePowerContainerId,
      {
        container: document.getElementById(featureIdlePowerContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/mech/idle/water/mech-idle-water.json'
      }
    );

    super(
      idleSpace,
      idleSky,
      idleLand,
      idleWater,
      featureIdleAttack,
      featureIdleDefensive,
      featureIdleEngineering,
      featureIdlePower
    );
  }
}
