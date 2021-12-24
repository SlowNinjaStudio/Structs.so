import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {MoreMath} from "../vendor/MoreMath";
import {SmokeExplosion} from "./common/SmokeExplosion";
import {AbstractStructureAnimator} from "./AbstractStructureAnimator";

export class PostDamageSmokeAnimator extends AbstractStructureAnimator {

  constructor() {
    super(180);
  }

  explosionScript() {
    const animationLengthInFrames = this.animationLengthInFrames;

    /** @type {SmokeExplosion[]} explosions */
    const explosions = [];

    for (let i = 1; i <= 25; i++) {
      explosions.push(new SmokeExplosion(
        MoreMath.getRandomInt(5, 55),
        MoreMath.getRandomInt(5, 55),
        MoreMath.getRandomInt(3, 6),
        i * 7,
        16,
        20
      ));
    }

    return function() {
      for (let i = 0; i < explosions.length; i++) {
        const explosion = explosions[i];
        if (explosion.shouldStart(this.frameCount)) {
          for (let j = 0; j < explosion.smokeBranches.length; j++) {
            explosion.smokeOrb(
              this.context,
              explosion.x,
              explosion.y,
              this.frameCount - explosion.frameCountStart,
              explosion.smokeBranches[j]
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
      this.staticScript(),
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
