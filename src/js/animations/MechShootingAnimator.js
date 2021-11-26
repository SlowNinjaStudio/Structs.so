import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {FEATURES} from "../constants";
import {AbstractStructureAnimator} from "./AbstractStructureAnimator";

export class MechShootingAnimator extends AbstractStructureAnimator {

  constructor() {
    super(30);
  }

  cannonFireScript() {
    const animationLengthInFrames = this.animationLengthInFrames;
    return function() {
      this.context.drawImage(this.img, this.x, this.y);
      if (this.frameCount === this.fpsAdjustFrameNumber(4)) {
        this.x = 2;
      }
      if (this.frameCount === this.fpsAdjustFrameNumber(8)) {
        this.x = 1;
      }
      if (this.frameCount === this.fpsAdjustFrameNumber(10)) {
        this.x = 0;
      }
      if (this.frameCount >= this.fpsAdjustFrameNumber(animationLengthInFrames)) {
        this.resetFrameCount();
      }
    };
  }

  mechKickBackScript() {
    const animationLengthInFrames = this.animationLengthInFrames;
    return function() {
      this.context.drawImage(this.img, this.x, this.y);
      if (this.frameCount === this.fpsAdjustFrameNumber(6)) {
        this.x = 1;
      }
      if (this.frameCount === this.fpsAdjustFrameNumber(10)) {
        this.x = 0;
      }
      if (this.frameCount >= this.fpsAdjustFrameNumber(animationLengthInFrames)) {
        this.resetFrameCount();
      }
    }
  }

  bulletScript() {
    const animationLengthInFrames = this.animationLengthInFrames;
    return function() {
      this.context.fillStyle = '#ffff00';
      this.context.shadowColor = '#aaaa00';
      this.context.shadowBlur = 4;

      if (this.frameCount < this.fpsAdjustFrameNumber(4)) {
        this.context.fillRect(this.x, this.y, 11, 2);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(6)) {
        this.context.fillRect(this.x, this.y, 5, 2);
      } else if (this.frameCount >= this.fpsAdjustFrameNumber(animationLengthInFrames)) {
        this.resetFrameCount();
      }

      this.context.shadowBlur = 0;
    }
  }

  muzzleFlashScript() {
    const animationLengthInFrames = this.animationLengthInFrames;
    return function() {
      this.context.strokeStyle = '#ffff00';
      this.context.shadowColor = '#aaaa00';
      this.context.shadowBlur = 4;

      if (this.frameCount < this.fpsAdjustFrameNumber(4)) {
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 3, 7, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(6)) {
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 1, 3, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
      } else if (this.frameCount >= this.fpsAdjustFrameNumber(animationLengthInFrames)) {
        this.resetFrameCount();
      }

      this.context.shadowBlur = 0;
    }
  }

  shellCasingScript() {
    const animationLengthInFrames = this.animationLengthInFrames;
    return function() {
      const trajectory = (x) => (Math.pow(x, 2) / 10) + this.y;
      const x = this.x + this.frameCount;
      const y = trajectory(this.fpsAdjustFrameCount(this.frameCount));

      this.context.fillStyle = '#ffff00';
      this.context.fillRect(x, y, 2, 1);

      if (this.frameCount >= this.fpsAdjustFrameNumber(animationLengthInFrames)) {
        this.resetFrameCount();
      }
    }
  }

  /**
   * @param {Structure} structure
   * @return {Promise<AnimatedEffect[]>}
   */
  async animate(structure) {
    const artSet = new StructureArtSet(structure);

    const mechKickBack = AnimatedImage.bulkAnimate(
      await artSet.getStructureLayerImages(),
      this.mechKickBackScript(artSet.getPalette()),
      0,
      0
    );

    const attackImages = await artSet.getStructureFeatureImages(FEATURES.ATTACK);

    return mechKickBack.concat([
      new AnimatedImage(
        attackImages[0],
        this.cannonFireScript(),
        0,
        0
      ),
      new AnimatedEffect(
        this.muzzleFlashScript(),
        12,
        25
      ),
      new AnimatedEffect(
        this.bulletScript(),
        1,
        24
      ),
      new AnimatedEffect(
        this.shellCasingScript(),
        24,
        24
      )
    ]);
  }
}
