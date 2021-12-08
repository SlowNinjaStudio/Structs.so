import {StructureArtSet} from "../StructureArtSet";
import {LottieArtConfiguratorFactory} from "./LottieArtConfiguratorFactory";

export class StructureLottieAnimationSVG {

  /**
   * Only works with Lottie SVG rendering.
   *
   * @param {Structure} structure
   * @param {string} lottieContainerId
   * @param {Object} lottieLoadOptions
   */
  constructor(structure, lottieContainerId, lottieLoadOptions) {
    this.structure = structure;
    this.lottieContainerId = lottieContainerId;
    this.lottieLoadOptions = lottieLoadOptions;
    this.artConfigurator = (new LottieArtConfiguratorFactory()).make(structure);
    this.structureArtSet = new StructureArtSet(structure);

    // Autoplay must be handled manually as we need to customize the structure art first
    this.lottieLoadOptions.autoplay = false;
  }

  /**
   * Hides components that are not part of the current structure configuration.
   */
  configureLottieArt() {
    const gContainers = document.querySelectorAll(`#${this.lottieContainerId} g g`);
    for (let i = 0 ; i < gContainers.length; i ++) {
      const gContainer = gContainers[i];
      if (this.artConfigurator.shouldHideElement(gContainer.className.baseVal)) {
        gContainer.style.display = 'none';
      }
    }
  }

  /**
   * Replace the color of the structure art given the specific structure.
   *
   * @return {Promise<void>}
   */
  async paletteSwapLottie() {

    // Fetch all the SVG groups containing structure art images
    const gContainers = document.querySelectorAll(`#${this.lottieContainerId} g g`);

    for (let i = 0; i < gContainers.length; i++) {
      const gContainer = gContainers[i];
      const originalSVGImages = gContainer.querySelectorAll('image');
      const htmlImages = [];

      // For each SVG image, load it into an HTML image object for easier processing
      for (let j = 0; j < originalSVGImages.length; j++) {
        const originalSVGImage = originalSVGImages[j];
        const htmlImage = new Image();
        htmlImage.decoding = 'sync';
        htmlImage.src = originalSVGImage.href.baseVal;
        await htmlImage.decode();
        htmlImages.push(htmlImage);
      }

      // Palette swap the images
      const swappedImages = this.structureArtSet.paletteSwapImages(htmlImages);

      // Write the palette swapped images back to SVG image objects and replace the original SVG images
      for (let j = 0; j < swappedImages.length; j++) {
        const paletteSwapped = swappedImages[j];
        gContainer.innerHTML = '';

        const svgImage = document.createElementNS('http://www.w3.org/2000/svg','image');
        svgImage.setAttributeNS(null,'height', `${paletteSwapped.height}`);
        svgImage.setAttributeNS(null,'width', `${paletteSwapped.width}`);
        svgImage.setAttributeNS('http://www.w3.org/1999/xlink','href', paletteSwapped.src);
        svgImage.setAttributeNS(null, 'visibility', 'visible');

        gContainer.append(svgImage);
      }
    }
  }

  /**
   * Load the animation and customize the structure art.
   *
   * @return {*} Lottie AnimationItem
   */
  init(autoplay = false) {
    const lottieContainer = this.lottieLoadOptions.container;
    const lottieAnimation = this;

    // Hide the lottie container while the art is being loaded customized
    lottieContainer.style.visibility = 'hidden';

    // Load the lottie animation
    const animation = window.lottie.loadAnimation(this.lottieLoadOptions);

    // If autoplay was originally enabled, automatically play the animation after it's loaded and customized
    if (autoplay) {
      lottieContainer.addEventListener('lottieStructureArtReady', async function() {
        animation.play();
      });
    }

    // Once the animation is loaded into the DOM, we can begin customizing it.
    animation.addEventListener('DOMLoaded', async function() {

      // Customize the structure art
      lottieAnimation.configureLottieArt();
      await lottieAnimation.paletteSwapLottie();

      // Show the animation now that the art is ready
      lottieContainer.style.visibility = 'visible';

      // Alert listeners that the animation is ready to be played
      lottieContainer.dispatchEvent(new CustomEvent('lottieStructureArtReady', { animationName: 'hello' }));
    });

    return animation;
  }
}
