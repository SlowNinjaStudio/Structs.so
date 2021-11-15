import {Uint8ClampedArrayUtil} from "../Uint8ClampArrayUtil";

/**
 * An animation engine to assist with canvas animation.
 */
export class AnimationEngine {

  /**
   * @param {string} canvasId
   * @param {object} options
   * @param {number} refreshRate the animation speed
   */
  constructor(canvasId, options = {}, refreshRate = 20) {
    this.canvasId = canvasId;
    this.canvas = document.getElementById(this.canvasId);
    this.context = this.canvas.getContext('2d');
    this.options = options;
    this.refreshRate = refreshRate;
    this.animatedObjects = [];
    this.interval = null;
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * Register an animated object to be drawn on each refresh.
   *
   * @param {AnimatedImage|AnimatedEffect} object
   */
  registerAnimatedObject(object) {
    object.setCanvas(this.canvas);
    object.setContext(this.context);
    this.animatedObjects.push(object);
  }

  /**
   * Bulk register animated objects.
   *
   * @param {Array.<AnimatedImage|AnimatedEffect>} objects
   */
  registerAnimatedObjects(objects) {
    for (let i = 0; i < objects.length; i++) {
      this.registerAnimatedObject(objects[i]);
    }
  }

  /**
   * Flip the animation horizontally.
   */
  flipHorizontally() {
    let imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const newData = Uint8ClampedArrayUtil.flipHorizontal(imageData.data, 64);
    for (let i = 0; i < imageData.data.length; i++) {
      imageData.data[i] = newData[i];
    }
    this.context.putImageData(imageData, 0, 0);
  }

  /**
   * Draw all registered animated objects to the canvas.
   */
  draw() {
    // Need to clear the canvas with every new frame, otherwise new objects will be drawn on top of old objects.
    this.clearCanvas();

    for (let i = 0; i < this.animatedObjects.length; i++) {
      this.animatedObjects[i].increaseFrameCount(); // Increase the frame count so that objects know how many frames have passed.
      this.animatedObjects[i].draw();
    }

    if (this.options.hasOwnProperty('flipHorizontally') && this.options.flipHorizontally) {
      this.flipHorizontally();
    }
  }

  /**
   * Play the animation by running each animated objects' draw script.
   */
  play() {
    console.log('play');
    this.interval = setInterval(this.draw.bind(this), this.refreshRate);
  }

  /**
   * Pause the animation.
   */
  pause() {
    clearInterval(this.interval);
  }

}
