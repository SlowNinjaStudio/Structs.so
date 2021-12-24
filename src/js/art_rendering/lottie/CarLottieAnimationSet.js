import {StructureLottieAnimationSet} from "./StructureLottieAnimationSet";
import {StructureLottieAnimationSVG} from "./StructureLottieAnimationSVG";
import {ANIMATION_NAMES} from "../../AnimationNameConstants";

export class CarLottieAnimationSet extends StructureLottieAnimationSet {

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
      ANIMATION_NAMES.CAR.IDLE.SPACE,
      structure,
      idleSpaceContainerId,
      {
        container: document.getElementById(idleSpaceContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/car/idle/space/car-idle-space.json'
      }
    );

    const idleSky = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.CAR.IDLE.SKY,
      structure,
      idleSkyContainerId,
      {
        container: document.getElementById(idleSkyContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/car/idle/sky/car-idle-sky.json'
      }
    );

    const idleLand = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.CAR.IDLE.LAND,
      structure,
      idleLandContainerId,
      {
        container: document.getElementById(idleLandContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/car/idle/land/car-idle-land.json'
      }
    );

    const idleWater = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.CAR.IDLE.WATER,
      structure,
      idleWaterContainerId,
      {
        container: document.getElementById(idleWaterContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/car/idle/water/car-idle-water.json'
      }
    );

    super(idleSpace, idleSky, idleLand, idleWater);
  }
}
