/**
 * Used for animating a preexisting image.
 */
import {AnimatedEffect} from "./AnimatedEffect";

export class AnimatedImage extends AnimatedEffect {

  /**
   * @param {string} imagePath
   * @param {function} draw the script that animates the image when called repeatedly
   * @param {number} x starting horizontal position on the canvas
   * @param {number} y starting vertical position on the canvas
   */
  constructor(imagePath, draw, x, y) {
    super(draw, x, y);
    this.imagePath = imagePath;

    // Load the image
    this.img = new Image();
    this.img.decoding = 'sync';
    this.img.src = this.imagePath;
  }

  /**
   * @param imageLayerPaths
   * @param animationScript
   * @param x
   * @param y
   * @return {*[]}
   */
  static bulkAnimate(imageLayerPaths, animationScript, x, y) {
    const animatedObjects = [];
    for (let i = 0; i < imageLayerPaths.length; i++) {
      animatedObjects.push(new AnimatedImage(imageLayerPaths[i], animationScript, x, y));
    }
    return animatedObjects;
  }

}
