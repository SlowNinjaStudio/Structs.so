import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {ExplosionEffectUtil} from "./common/ExplosionEffectUtil";
import {AbstractStructureAnimator} from "./AbstractStructureAnimator";

export class LaserDamageAnimator extends AbstractStructureAnimator {

  constructor() {
    super(180);
  }

  explosionScript() {
    const animationLengthInFrames = this.animationLengthInFrames;
    return function() {
      let x = this.x;
      let y = this.y;

      const explosionEffect = new ExplosionEffectUtil(this.context);
      explosionEffect.initStroke();

      if (
        this.frameCount > this.fpsAdjustFrameNumber(8)
        && this.frameCount < this.fpsAdjustFrameNumber(100)
      ) {
        const speed = 4;
        explosionEffect.drawExplosion(x, y, Math.round(((7/3) * this.frameCount) / speed), Math.round(this.frameCount / speed));
      }

      if (this.frameCount > this.fpsAdjustFrameNumber(8)) {
        const speed = 2;
        explosionEffect.drawShockwave(x, y, Math.round(((7/3) * this.frameCount) / speed), Math.round(this.frameCount / speed));
      }

      if (this.frameCount < this.fpsAdjustFrameNumber(4)) {
        explosionEffect.drawFlash(64, 64, 0.5);
        explosionEffect.drawShockwave(x, y, 14, 6);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(8)) {
        explosionEffect.drawFlash(64, 64, 0.25);
        explosionEffect.drawShockwave(x, y, 6, 2);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(109)) {
      } else if (this.frameCount < this.fpsAdjustFrameNumber(110)) {
        explosionEffect.drawFlash(64, 64, 0.25);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(114)) {
        explosionEffect.drawFlash(64, 64, 0.50);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(120)) {
        explosionEffect.drawFlash(64, 64, 1);
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
      this.shake(8, 120),
      0,
      0
    );

    return shake.concat([
      new AnimatedEffect(
        this.explosionScript(),
        32,
        42
      ),
    ]);
  }
}
