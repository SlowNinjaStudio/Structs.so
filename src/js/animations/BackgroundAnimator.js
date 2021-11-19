import {AnimatedImage} from '../vendor/animation/AnimatedImage';
import {StructureArtSet} from "../art_rendering/StructureArtSet";

export class BackgroundAnimator {
  backgroundScript() {
    return function () {
      this.context.drawImage(this.img, this.x, this.y);
    }
  }

  /**
   * @param {Structure|Schematic} structure
   * @return {*[]}
   */
  async animate(structure) {
    const artSet = new StructureArtSet(structure);
    return AnimatedImage.bulkAnimate(await artSet.getBackgroundLayerImages(), this.backgroundScript(), 0, 0);
  }
}
