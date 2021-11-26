/**
 * An animation engine to assist with canvas animation.
 */
import {ANIMATION_EVENTS} from "../../constants";

export class AnimationEngine {

  /**
   * @param {string} canvasId
   * @param {object} options
   * @param {number} fps the animation speed in frames per second
   */
  constructor(canvasId, options = {}, fps = 60) {
    this.canvasId = canvasId;
    this.canvas = document.getElementById(this.canvasId);
    this.context = this.canvas.getContext('2d');
    this.options = options;
    this.fps = fps;
    this.refreshRate = Math.round(1000 / this.fps);
    this.animatedObjects = [];
    this.interval = null;
    this.loopCount = 0;
    this.animationLabel = '';

    if (this.options.hasOwnProperty('flipHorizontally') && this.options.flipHorizontally) {
      this.context.translate(this.canvas.width, 0);
      this.context.scale(-1, 1);
    }

    if (this.options.hasOwnProperty('animationLabel') && this.options.animationLabel) {
      this.animationLabel = this.options.animationLabel;
    }
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
    object.setFPS(this.fps);
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
   * @param {string} animationEventType
   * @param {string} name
   * @return {string}
   */
  static eventName(animationEventType, name) {
    return `${animationEventType}_${name.toUpperCase()}`;
  }

  /**
   * Draw all registered animated objects to the canvas.
   *
   * @params {number} maxLoops the max number of times to loop each animation
   */
  draw(maxLoops = -1) {
    if (maxLoops >= 0 && this.loopCount >= maxLoops) {
      this.pause();
      if (this.animationLabel !== '') {
        document.dispatchEvent(new Event(AnimationEngine.eventName(ANIMATION_EVENTS.END, this.animationLabel)));
      }
      return void(0);
    }

    // Need to clear the canvas with every new frame, otherwise new objects will be drawn on top of old objects.
    this.clearCanvas();

    for (let i = 0; i < this.animatedObjects.length; i++) {
      this.animatedObjects[i].increaseFrameCount(); // Increase the frame count so that objects know how many frames have passed.
      this.animatedObjects[i].draw();
      this.loopCount = Math.max(this.loopCount, this.animatedObjects[i].loopCount);
    }
  }

  /**
   * Play the animation by running each animated objects' draw script.
   *
   * @params {number} maxLoops the max number of times to loop each animation
   * @return {number} the length of the animation in milliseconds or null if maxLoops is negative
   */
  play(maxLoops = -1) {
    this.interval = setInterval(this.draw.bind(this, maxLoops), this.refreshRate);
  }

  /**
   * Pause the animation.
   */
  pause() {
    clearInterval(this.interval);
  }
}
