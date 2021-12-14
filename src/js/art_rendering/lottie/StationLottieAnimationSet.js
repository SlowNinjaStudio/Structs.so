import {StructureLottieAnimationSet} from "./StructureLottieAnimationSet";
import {StructureLottieAnimationSVG} from "./StructureLottieAnimationSVG";
import {ANIMATION_NAMES} from "../../AnimationNameConstants";

export class StationLottieAnimationSet extends StructureLottieAnimationSet {

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
      ANIMATION_NAMES.STATION.IDLE.SPACE,
      structure,
      idleSpaceContainerId,
      {
        container: document.getElementById(idleSpaceContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/station/idle/space/station-idle-space.json'
      }
    );

    const idleSky = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.STATION.IDLE.SKY,
      structure,
      idleSkyContainerId,
      {
        container: document.getElementById(idleSkyContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/station/idle/sky/station-idle-sky.json'
      }
    );

    const idleLand = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.STATION.IDLE.LAND,
      structure,
      idleLandContainerId,
      {
        container: document.getElementById(idleLandContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/station/idle/land/station-idle-land.json'
      }
    );

    const idleWater = new StructureLottieAnimationSVG(
      ANIMATION_NAMES.STATION.IDLE.WATER,
      structure,
      idleWaterContainerId,
      {
        container: document.getElementById(idleWaterContainerId),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/station/idle/water/station-idle-water.json'
      }
    );

    super(idleSpace, idleSky, idleLand, idleWater);
  }
}
