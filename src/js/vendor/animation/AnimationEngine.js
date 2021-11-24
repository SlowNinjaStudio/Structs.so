/**
 * An animation engine to assist with canvas animation.
 */
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

    if (this.options.hasOwnProperty('flipHorizontally') && this.options.flipHorizontally) {
      this.context.translate(this.canvas.width, 0);
      this.context.scale(-1, 1);
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
   * Draw all registered animated objects to the canvas.
   *
   * @params {number} maxLoops the max number of times to loop each animation
   */
  draw(maxLoops = -1) {
    if (maxLoops >= 0 && this.loopCount >= maxLoops) {
      this.pause();
      return void(0);
    }

    // Need to clear the canvas with every new frame, otherwise new objects will be drawn on top of old objects.
    this.clearCanvas();

    for (let i = 0; i < this.animatedObjects.length; i++) {
      this.animatedObjects[i].increaseFrameCount(); // Increase the frame count so that objects know how many frames have passed.
      this.animatedObjects[i].draw();
      this.loopCount = this.animatedObjects[i].loopCount;
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
    //return maxLoops < 0 ? null : this.getAnimationLength() * maxLoops;
  }

  /**
   * Pause the animation.
   */
  pause() {
    clearInterval(this.interval);
  }

  /**
   * The animation length in milliseconds.
   *
   * @return {number}
   */
  getAnimationLength() {
    let animationLengthInFrames = 0;
    for (let i = 0; i < this.animatedObjects.length; i++) {
      animationLengthInFrames = Math.max(animationLengthInFrames, this.animatedObjects[i].getAnimationLengthInFrames());
    }
    return Math.round((animationLengthInFrames / this.fps) * 1000);
  }

}
