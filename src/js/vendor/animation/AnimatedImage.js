/**
 * Used for animating a preexisting image.
 */
import {AnimatedEffect} from "./AnimatedEffect";

export class AnimatedImage extends AnimatedEffect {

  /**
   * @param {Image} img the image to animate
   * @param {function} draw the script that animates the image when called repeatedly
   * @param {number} x starting horizontal position on the canvas
   * @param {number} y starting vertical position on the canvas
   */
  constructor(img, draw, x, y) {
    super(draw, x, y);
    this.img = img;
  }

  /**
   * @param {Image[]} imageLayers
   * @param {function} animationScript
   * @param {number} x
   * @param {number} y
   * @return {AnimatedImage[]}
   */
  static bulkAnimate(imageLayers, animationScript, x, y) {
    const animatedObjects = [];
    for (let i = 0; i < imageLayers.length; i++) {
      animatedObjects.push(new AnimatedImage(imageLayers[i], animationScript, x, y));
    }
    return animatedObjects;
  }

}
