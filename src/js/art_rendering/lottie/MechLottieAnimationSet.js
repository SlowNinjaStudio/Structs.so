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
   */
  constructor(
    structure,
    idleSpaceContainerId,
    idleSkyContainerId,
    idleLandContainerId,
    idleWaterContainerId
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

    super(idleSpace, idleSky, idleLand, idleWater);
  }
}
