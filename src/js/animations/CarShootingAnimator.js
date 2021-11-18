import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {FEATURES} from "../constants";

export class CarShootingAnimator {

  cannonFireScript() {
    return function() {
      this.context.drawImage(this.img, this.x, this.y);
      if (this.frameCount % 6 === this.fpsAdjustFrameNumber(2)) {
        this.x = 2;
      }
      if (this.frameCount % 6 === this.fpsAdjustFrameNumber(4)) {
        this.x = 1;
      }
      if (this.frameCount % 6 === this.fpsAdjustFrameNumber(5)) {
        this.x = 0;
      }
      if (this.frameCount >= this.fpsAdjustFrameNumber(30)) {
        this.resetFrameCount();
      }
    };
  }

  carKickBackScript() {

    return function() {
      this.context.drawImage(this.img, this.x, this.y);
      if (this.frameCount % 6 === this.fpsAdjustFrameNumber(3)) {
        this.x = 1;
      }
      if (this.frameCount % 6 === this.fpsAdjustFrameNumber(5)) {
        this.x = 0;
      }
      if (this.frameCount >= this.fpsAdjustFrameNumber(30)) {
        this.resetFrameCount();
      }
    }
  }

  bulletScript() {
    return function() {
      this.context.fillStyle = '#ffff00';
      this.context.shadowColor = '#aaaa00';
      this.context.shadowBlur = 4;

      if (this.frameCount % 6 < this.fpsAdjustFrameNumber(2)) {
        this.context.fillRect(this.x, this.y, 16, 2);
      } else if (this.frameCount % 6 < this.fpsAdjustFrameNumber(3)) {
        this.context.fillRect(this.x, this.y, 10, 2);
      } else if (this.frameCount >= this.fpsAdjustFrameNumber(30)) {
        this.resetFrameCount();
      }

      this.context.shadowBlur = 0;
    }
  }

  muzzleFlashScript() {
    return function() {
      this.context.strokeStyle = '#ffff00';
      this.context.shadowColor = '#aaaa00';
      this.context.shadowBlur = 4;

      if (this.frameCount % 6 < this.fpsAdjustFrameNumber(2)) {
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 2, 4, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
      } else if (this.frameCount % 6 < this.fpsAdjustFrameNumber(3)) {
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 1, 3, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
      } else if (this.frameCount >= this.fpsAdjustFrameNumber(30)) {
        this.resetFrameCount();
      }

      this.context.shadowBlur = 0;
    }
  }

  shellCasingScript() {
    return function() {

      for (let i = 0; i < this.frameCount; i = i + 12) {
        const trajectory = (x) => (Math.pow(x, 2) / 10) + this.y;
        const x = this.x + this.frameCount - i;
        const y = trajectory(this.fpsAdjustFrameCount(this.frameCount - i));

        this.context.fillStyle = '#ffff00';
        this.context.fillRect(x + i / 3, y, 2, 1);
      }

      if (this.frameCount >= this.fpsAdjustFrameNumber(30)) {
        this.resetFrameCount();
      }
    }
  }

  /**
   * @param {Structure} structure
   * @return {*[]}
   */
  async animate(structure) {
    const artSet = new StructureArtSet(structure);

    const kickBack = AnimatedImage.bulkAnimate(
      await artSet.getStructureLayerImages(),
      this.carKickBackScript(artSet.getPalette()),
      0,
      0
    );

    const attackImages = await artSet.getStructureFeatureImages(FEATURES.ATTACK);

    return kickBack.concat([
      new AnimatedImage(
        attackImages[0],
        this.cannonFireScript(),
        0,
        0
      ),
      new AnimatedEffect(
        this.muzzleFlashScript(),
        17,
        34
      ),
      new AnimatedEffect(
        this.bulletScript(),
        1,
        33
      ),
      new AnimatedEffect(
        this.shellCasingScript(),
        26,
        33
      )
    ]);
  }
}
