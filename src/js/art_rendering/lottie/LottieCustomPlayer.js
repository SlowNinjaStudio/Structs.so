import {MoreMath} from "../../vendor/MoreMath";

export class LottieCustomPlayer {
  constructor() {
    this.animations = [];
    this.currentAnimationIndex = null;
  }

  stopAll() {
    this.currentAnimationIndex = null;
    for(let i = 0; i < this.animations.length; i ++) {
      this.animations[i].stop();
    }
  }

  checkHasAnimations() {
    if (this.animations.length === 0) {
      throw Error('No animations to play');
    }
  }

  /**
   * @param {string} animationName
   */
  play(animationName) {
    this.checkHasAnimations();
    this.stopAll();
    for(let i = 0; i < this.animations.length; i ++) {
      if (this.animations[i].animationName === animationName) {
        this.animations[i].play();
        this.currentAnimationIndex = i;
        break;
      }
    }
  }

  playRandom() {
    this.checkHasAnimations();
    this.stopAll();
    const randomIndex = MoreMath.getRandomInt(0, this.animations.length - 1);
    this.animations[randomIndex].play();
    this.currentAnimationIndex = randomIndex;
  }

  getNextAnimationIndex() {
    this.checkHasAnimations();
    let nextIndex = 0;
    if (
      typeof this.currentAnimationIndex === 'number'
      && this.currentAnimationIndex + 1 < this.animations.length
    ) {
      nextIndex = this.currentAnimationIndex + 1;
    }
    return nextIndex;
  }

  playNext() {
    const nextIndex = this.getNextAnimationIndex();
    this.stopAll();
    this.animations[nextIndex].play();
    this.currentAnimationIndex = nextIndex;
  }

  /**
   * @param {StructureLottieAnimationSVG} animation
   */
  registerAnimation(animation) {
    this.animations.push(animation);
    this.currentAnimationIndex = this.animations.length - 1;
  }

  /**
   * @param {string} animationToShow
   * @param {boolean} autoplay
   */
  init(animationToShow = '', autoplay = false) {
    let randomIndex = -1;
    if (animationToShow === '') {
      randomIndex = MoreMath.getRandomInt(0, this.animations.length - 1);
    }

    for (let i = 0; i < this.animations.length; i++) {
      let show = false;
      let play = false;
      if (randomIndex === i || (animationToShow !== '' && this.animations[i].animationName === animationToShow)) {
        show = true;
        if (autoplay) {
          play = true;
          this.currentAnimationIndex = i;
        }
      }
      this.animations[i].init(show, play);
    }
  }

  registerPlayAnimationButton(buttonId, animationName) {
    document.getElementById(buttonId).addEventListener('click', function() {
      this.play(animationName);
    }.bind(this));
  }

  registerPlayRandomButton(buttonId) {
    document.getElementById(buttonId).addEventListener('click', function() {
      this.playRandom();
    }.bind(this));
  }

  registerPlayNextButton(buttonId) {
    document.getElementById(buttonId).addEventListener('click', function() {
      this.playNext();
    }.bind(this));
  }
}
