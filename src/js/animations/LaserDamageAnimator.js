import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {ExplosionEffectUtil} from "./common/ExplosionEffectUtil";

export class LaserDamageAnimator {

  shake() {
    return function() {
      const n = this.frameCount % this.fpsAdjustFrameNumber(8);
      if (
        n === 0
        || n === 1
        || this.frameCount < this.fpsAdjustFrameNumber(8)
        || this.frameCount > this.fpsAdjustFrameNumber(120)
      ) {
        this.context.drawImage(this.img, this.x, this.y);
      } else if (n === 2 || n === 3) {
        this.context.drawImage(this.img, this.x + 1, this.y - 1);
      } else if (n === 4 || n === 5) {
        this.context.drawImage(this.img, this.x - 1, this.y - 1);
      } else if (n === 6 || n === 7) {
        this.context.drawImage(this.img, this.x + 1, this.y + 1);
      } else if (n > 7) {
        this.context.drawImage(this.img, this.x, this.y);
      }
      if (this.frameCount >= this.fpsAdjustFrameNumber(180)) {
        this.resetFrameCount();
      }
    }
  }

  explosionScript() {
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
      } else if (this.frameCount >= this.fpsAdjustFrameNumber(180)) {
        this.resetFrameCount();
      }

      this.context.shadowBlur = 0;
    }
  }

  /**
   * @param {Structure} structure
   * @return {*[]}
   */
  async animate(structure) {
    const artSet = new StructureArtSet(structure);
    const shake = AnimatedImage.bulkAnimate(
      await artSet.getLayerImages(),
      this.shake(),
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
