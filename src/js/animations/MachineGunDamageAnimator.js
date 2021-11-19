import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {ExplosionEffectUtil} from "./common/ExplosionEffectUtil";

export class MachineGunDamageAnimator {

  staticStruct() {
    return function() {
      this.context.drawImage(this.img, this.x, this.y);
      if (this.frameCount >= this.fpsAdjustFrameNumber(60)) {
        this.resetFrameCount();
      }
    }
  }

  explosionScript() {
    const singleExplosion = function (x, y, frameCount) {
      const explosionEffect = new ExplosionEffectUtil(this.context);
      explosionEffect.initStroke();
      if (frameCount < this.fpsAdjustFrameNumber(2)) {
        explosionEffect.drawFlash(64, 64, 0.25);
        explosionEffect.drawShockwave(x, y, 6, 2);
      } else if (frameCount < this.fpsAdjustFrameNumber(4)) {
        explosionEffect.drawExplosion(x, y, 3, 1);
      } else if (frameCount < this.fpsAdjustFrameNumber(25)) {
        explosionEffect.drawExplosion(x, y, 6, 2);
      }
    }
    return function() {
      const explosions = [
        {
          frameCountStart: 1,
          x: this.x + 10,
          y: this.y + 32
        },
        {
          frameCountStart: 7,
          x: this.x + 20,
          y: this.y + 42
        },
        {
          frameCountStart: 13,
          x: this.x + 30,
          y: this.y + 32
        },
        {
          frameCountStart: 19,
          x: this.x + 40,
          y: this.y + 42
        },
        {
          frameCountStart: 25,
          x: this.x + 50,
          y: this.y + 32
        }
      ];

      for (let i = 0; i < explosions.length; i++) {
        if (this.frameCount >= explosions[i].frameCountStart) {
          singleExplosion.bind(this)(explosions[i].x, explosions[i].y, this.frameCount - explosions[i].frameCountStart);
        }
      }

      if (this.frameCount >= this.fpsAdjustFrameNumber(60)) {
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

    const staticStruct = AnimatedImage.bulkAnimate(
      await artSet.getLayerImages(),
      this.staticStruct(artSet.getPalette()),
      0,
      0
    );

    return staticStruct.concat([
      new AnimatedEffect(
        this.explosionScript(),
        0,
        0
      ),
    ]);
  }
}
