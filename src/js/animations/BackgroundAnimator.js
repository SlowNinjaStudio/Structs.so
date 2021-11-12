import {AnimatedImage} from '../vendor/animation/AnimatedImage';
import {StructureArtGeneratorBackground} from "../art_rendering/StructureArtGeneratorBackground";

export class BackgroundAnimator {
  constructor() {
    this.structureArtGeneratorBackground = new StructureArtGeneratorBackground();
  }

  backgroundScript() {
    return function () {
      this.context.drawImage(this.img, this.x, this.y);
    }
  }

  /**
   * @param {Structure|Schematic} structure
   * @return {*[]}
   */
  animate(structure) {
    const backgroundLayers = [];
    this.structureArtGeneratorBackground.generate(backgroundLayers, structure);
    return AnimatedImage.bulkAnimate(backgroundLayers, this.backgroundScript(), 0, 0);
  }
}
