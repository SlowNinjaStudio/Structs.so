import {AnimatedImage} from '../vendor/animation/AnimatedImage';

export class AnimationBackground {
  backgroundScript() {
    return function () {
      this.context.drawImage(this.img, this.x, this.y);
    }
  }

  make() {
    const backgroundImagePaths = [
      '/img/structures/backgrounds/structure-bg-default.png',
      '/img/structures/backgrounds/structure-bg-land.png',
      '/img/structures/backgrounds/structure-bg-lighten-15.png'
    ];
    return AnimatedImage.bulkAnimate(backgroundImagePaths, this.backgroundScript(), 0, 0);
  }

}
