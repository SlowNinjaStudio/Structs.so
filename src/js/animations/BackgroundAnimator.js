import {AnimatedImage} from '../vendor/animation/AnimatedImage';
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {AbstractStructureAnimator} from "./AbstractStructureAnimator";

export class BackgroundAnimator extends AbstractStructureAnimator {

  /**
   * @param {Structure|Schematic} structure
   * @return {Promise<AnimatedEffect[]>}
   */
  async animate(structure) {
    const artSet = new StructureArtSet(structure);
    return AnimatedImage.bulkAnimate(await artSet.getBackgroundLayerImages(), this.staticScript(), 0, 0);
  }
}
