import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {MoreMath} from "../vendor/MoreMath";
import {SmokeExplosion} from "./common/SmokeExplosion";
import {AbstractStructureAnimator} from "./AbstractStructureAnimator";

export class AntiAirDamageAnimator extends AbstractStructureAnimator {

  constructor() {
    super(180);
  }

  shake() {
    const animationLengthInFrames = this.getAnimationLengthInFrames();
    return function() {
      const n = this.frameCount % this.fpsAdjustFrameNumber(8);
      if (
        n === 0
        || n === 1
        || this.frameCount < this.fpsAdjustFrameNumber(8)
        || this.frameCount > this.fpsAdjustFrameNumber(78)
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
      if (this.frameCount >= this.fpsAdjustFrameNumber(animationLengthInFrames)) {
        this.resetFrameCount();
      }
    }
  }

  explosionScript() {

    /** @type {SmokeExplosion[]} explosions */
    const explosions = [];

    for (let i = 1; i <= 13; i++) {
      explosions.push(new SmokeExplosion(
        MoreMath.getRandomInt(5, 55),
        MoreMath.getRandomInt(5, 55),
        MoreMath.getRandomInt(3, 7),
        i * 6
      ));
    }

    const animationLengthInFrames = this.getAnimationLengthInFrames();

    return function() {
      if (this.frameCount % 6 === 5 && this.frameCount < 78) {
        this.context.fillStyle = `rgba(255, 255, 255, 0.25)`;
        this.context.fillRect(0, 0, 64, 64);
      }

      for (let i = 0; i < explosions.length; i++) {
        const explosion = explosions[i];
        if (explosion.shouldStart(this.frameCount)) {
          for (let j = 0; j < explosion.smokeBranches.length; j++) {
            explosion.smokeOrb(
              this.context,
              explosion.x,
              explosion.y,
              this.frameCount - explosion.frameCountStart,
              explosion.smokeBranches[j],
              4
            );
          }
        }
      }

      if (this.frameCount >= this.fpsAdjustFrameNumber(animationLengthInFrames)) {
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
    const struct = AnimatedImage.bulkAnimate(
      await artSet.getLayerImages(),
      this.shake(),
      0,
      0
    );

    return struct.concat([
      new AnimatedEffect(
        this.explosionScript(),
        32,
        32
      ),
    ]);
  }
}
