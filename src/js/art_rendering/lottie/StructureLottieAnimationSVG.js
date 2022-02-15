import {StructureArtSet} from "../StructureArtSet";
import {LottieArtConfiguratorFactory} from "./LottieArtConfiguratorFactory";
import {LOTTIE_CUSTOM_EVENTS, LOTTIE_EVENTS} from "../../EventConstants";
import {LottieCustomEventDetailAutoplay} from "./LottieCustomEventDetailAutoplay";

export class StructureLottieAnimationSVG {

  /**
   * Only works with Lottie SVG rendering.
   *
   * @param {string} animationName
   * @param {Structure} structure
   * @param {string} lottieContainerId
   * @param {Object} lottieLoadOptions
   */
  constructor(animationName, structure, lottieContainerId, lottieLoadOptions) {
    this.animationName = animationName;
    this.structure = structure;
    this.lottieContainerId = lottieContainerId;
    this.lottieLoadOptions = lottieLoadOptions;
    this.artConfigurator = (new LottieArtConfiguratorFactory()).make(structure);
    this.structureArtSet = new StructureArtSet(structure);
    this.animation = null;

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
   * Used for raster images.
   *
   * @return {Promise<void>}
   */
  async paletteSwapLottieImages() {
    // Fetch all the SVG groups containing structure art images
    let originalSVGImages = document.querySelectorAll(`#${this.lottieContainerId} g g image`);

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
      const gContainer = originalSVGImages[j].parentNode;
      gContainer.innerHTML = '';

      const svgImage = document.createElementNS('http://www.w3.org/2000/svg','image');
      svgImage.setAttributeNS(null,'height', `${paletteSwapped.height}`);
      svgImage.setAttributeNS(null,'width', `${paletteSwapped.width}`);
      svgImage.setAttributeNS('http://www.w3.org/1999/xlink','href', paletteSwapped.src);
      svgImage.setAttributeNS(null, 'visibility', 'visible');

      gContainer.append(svgImage);
    }
  }

  /**
   * Replace the color of the structure art given the specific structure.
   * Used for vector images.
   *
   * @return {Promise<void>}
   */
  paletteSwapSVGPaths() {
    /** @var {NodeListOf<SVGPathElement>} svgPaths */
    const svgPaths = document.querySelectorAll(`#${this.lottieContainerId} g g path`);
    this.structureArtSet.paletteSwapSVGPaths(svgPaths);
  }

  /**
   * Replace the color of the structure art given the specific structure.
   *
   * @return {Promise<void>}
   */
  async paletteSwapLottie() {
    await this.paletteSwapLottieImages();
    await this.paletteSwapSVGPaths();
  }

  show() {
    this.lottieLoadOptions.container.style.visibility = 'visible';
  }

  hide() {
    this.lottieLoadOptions.container.style.visibility = 'hidden';
  }

  play() {
    this.show();
    this.animation.play();
  }

  stop() {
    this.hide();
    this.animation.stop();
  }

  /**
   * @param {boolean} showAfterCustomized
   * @return {Promise<void>}
   */
  async customizeLottie(showAfterCustomized) {
    // Customize the structure art
    this.configureLottieArt();
    await this.paletteSwapLottie();

    if (showAfterCustomized) {
      // Show the animation now that the art is ready
      this.show();
    }

    // Alert listeners that the animation is ready to be played
    this.lottieLoadOptions.container.dispatchEvent(new CustomEvent(
      LOTTIE_EVENTS.LOTTIE_CUSTOMIZED,
      { animationName: this.animationName }
    ));
  }

  /**
   * Load the animation, customize the structure art and add event listeners.
   *
   * @param {boolean} showAfterInit
   * @param {boolean} autoplay
   */
  init(showAfterInit, autoplay = false) {
    // Hide the lottie container while the art is being loaded customized
    this.hide();

    // Load the lottie animation
    const animation = window.lottie.loadAnimation(this.lottieLoadOptions);

    // If autoplay was originally enabled, automatically play the animation after it's loaded and customized
    if (autoplay) {
      this.lottieLoadOptions.container.addEventListener(LOTTIE_EVENTS.LOTTIE_CUSTOMIZED, function() {
        this.play();
        const detail = new LottieCustomEventDetailAutoplay(this.animationName, this.lottieContainerId);
        document.dispatchEvent(new CustomEvent(LOTTIE_CUSTOM_EVENTS.LOTTIE_AUTOPLAY, { detail }));
      }.bind(this));
    }

    // Once the animation is loaded into the DOM, we can begin customizing it.
    animation.addEventListener('DOMLoaded', this.customizeLottie.bind(this, showAfterInit));

    this.lottieLoadOptions.container.addEventListener(LOTTIE_EVENTS.LOTTIE_PLAY, this.play.bind(this));
    this.lottieLoadOptions.container.addEventListener(LOTTIE_EVENTS.LOTTIE_STOP, this.stop.bind(this));

    this.animation = animation;
  }
}
