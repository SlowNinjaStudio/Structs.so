/**
 * Used for animating a preexisting image.
 */
export class AnimatedImage {

  /**
   * @param {string} imagePath
   * @param {function} draw the script that animates the image when called repeatedly
   * @param {number} x starting horizontal position on the canvas
   * @param {number} y starting vertical position on the canvas
   */
  constructor(imagePath, draw, x, y) {
    this.imagePath = imagePath;
    this.draw = draw;
    this.x = x;
    this.y = y;
    this.canvas = null;
    this.context = null;
    this.frameCount = 0;

    // Load the image
    this.img = new Image();
    this.img.src = this.imagePath;
  }

  /**
   * @param {HTMLCanvasElement} canvas
   */
  setCanvas(canvas) {
    this.canvas = canvas;
  }

  /**
   * @param {CanvasRenderingContext2D} context
   */
  setContext(context) {
    this.context = context;
  }

  increaseFrameCount() {
    this.frameCount++;
  }

  /**
   * Used for looping animations.
   */
  resetFrameCount() {
    this.frameCount = 0;
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
