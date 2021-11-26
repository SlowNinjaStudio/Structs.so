import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {ExplosionEffectUtil} from "./common/ExplosionEffectUtil";
import {AbstractStructureAnimator} from "./AbstractStructureAnimator";

export class ShellDamageAnimator extends AbstractStructureAnimator {

  constructor() {
    super(30);
  }

  explosionScript() {
    const animationLengthInFrames = this.animationLengthInFrames;
    return function() {
      let x = this.x;
      let y = this.y;
      let position = this.loopCount % 3;

      if (position === 1) {
        x = 32;
        y = 42;
      } else if (position === 2) {
        x = 22;
        y = 32;
      } else if (position === 0) {
        x = 42;
        y = 37;
      }

      const explosionEffect = new ExplosionEffectUtil(this.context);
      explosionEffect.initStroke();
      if (this.frameCount < this.fpsAdjustFrameNumber(2)) {
        explosionEffect.drawFlash(64, 64, 0.5);
        explosionEffect.drawShockwave(x, y, 14, 6);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(4)) {
        explosionEffect.drawFlash(64, 64, 0.25);
        explosionEffect.drawShockwave(x, y, 6, 2);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(8)) {
        explosionEffect.drawExplosion(x, y, 7, 3);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(10)) {
        explosionEffect.drawExplosion(x, y, 14, 6);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(12)) {
        explosionEffect.drawExplosion(x, y, 21, 9);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(14)) {
        explosionEffect.drawShockwave(x, y, 28, 12);
      } else if (this.frameCount >= this.fpsAdjustFrameNumber(animationLengthInFrames)) {
        this.resetFrameCount();
      }

      this.context.shadowBlur = 0;
    }
  }

  /**
   * @param {Structure} structure
   * @return {Promise<AnimatedEffect[]>}
   */
  async animate(structure) {
    const artSet = new StructureArtSet(structure);
    const shake = AnimatedImage.bulkAnimate(
      await artSet.getLayerImages(),
      this.shake(0, 8),
      0,
      0
    );

    return shake.concat([
      new AnimatedEffect(
        this.explosionScript(),
        32,
        32
      ),
    ]);
  }
}
