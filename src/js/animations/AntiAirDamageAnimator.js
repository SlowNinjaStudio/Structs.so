import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {ExplosionEffectUtil} from "./common/ExplosionEffectUtil";

export class AntiAirDamageAnimator {

  shake() {
    return function() {
      this.context.drawImage(this.img, this.x, this.y);
      // const n = this.frameCount % this.fpsAdjustFrameNumber(7);
      // if (n === 0 || n === 1) {
      //   this.context.drawImage(this.img, this.x, this.y);
      // } else if (n === 2 || n === 3) {
      //   this.context.drawImage(this.img, this.x + 1, this.y - 1);
      // } else if (n === 4 || n === 5) {
      //   this.context.drawImage(this.img, this.x - 1, this.y - 1);
      // } else if (n === 6 || n === 7) {
      //   this.context.drawImage(this.img, this.x + 1, this.y + 1);
      // } else if (n > 7) {
      //   this.context.drawImage(this.img, this.x, this.y);
      // }
      if (this.frameCount >= this.fpsAdjustFrameNumber(92)) {
        this.resetFrameCount();
      }
    }
  }

  explosionScript() {
    const muzzleSmokeOrb = function (context, x, y, frameCount, directionX = 1, directionY = 1) {
      const smokeStrokeColor = '#dcdcdc';
      const smokeShadowColor = '#5a5a5a';
      const smokeShadowBlue = 4;
      const smokeFillColor = '#b4b4b4';

      context.strokeStyle = smokeStrokeColor;
      context.shadowColor = smokeShadowColor;
      context.shadowBlur = smokeShadowBlue;
      context.fillStyle = smokeFillColor;

      context.beginPath();
      context.ellipse(x + (directionX * Math.sqrt(frameCount)), y - Math.sqrt(frameCount), 2, 2, Math.PI, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
    }
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
      } else if (this.frameCount >= this.fpsAdjustFrameNumber(30)) {
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
      this.shake(artSet.getPalette()),
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
