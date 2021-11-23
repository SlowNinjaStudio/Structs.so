import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";

export class StationShootingAnimator {

  staticStruct() {
    return function() {
      this.context.drawImage(this.img, this.x, this.y);

      if (this.frameCount >= this.fpsAdjustFrameNumber(30)) {
        this.resetFrameCount();
      }
    }
  }

  muzzleFlashScript() {
    const muzzleSmokeOrb = function (context, x, y, frameCount) {
      const smokeStrokeColor = '#dcdcdc';
      const smokeShadowColor = '#5a5a5a';
      const smokeShadowBlue = 4;
      const smokeFillColor = '#b4b4b4';

      context.strokeStyle = smokeStrokeColor;
      context.shadowColor = smokeShadowColor;
      context.shadowBlur = smokeShadowBlue;
      context.fillStyle = smokeFillColor;

      context.beginPath();
      context.ellipse(x - Math.sqrt(frameCount), y - Math.sqrt(frameCount), 2, 2, Math.PI, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
    }

    const muzzleFlash = function(context, x, y, frameCount) {
      context.strokeStyle = '#ffff00';
      context.shadowColor = '#aaaa00';
      context.shadowBlur = 4;
      context.fillStyle = '#ffff99';

      if (frameCount < 1) {
        context.fillStyle = `rgba(255, 255, 255, 0.10)`;
        context.fillRect(0, 0, 64, 64);

        context.beginPath();
        context.ellipse(x, y, 2, 1, Math.PI / 4, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
      } else if (frameCount < 2) {
        context.beginPath();
        context.ellipse(x, y, 3, 2, Math.PI / 4, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
      } else if (frameCount < 3) {
        context.beginPath();
        context.ellipse(x, y, 3, 2, Math.PI / 4, 0, 2 * Math.PI);
        context.stroke();
      }
    }

    return function() {
      if (this.frameCount < 100) {
        for(let i = 0; i < 6; i++) {
          muzzleSmokeOrb(this.context, this.x, this.y, (this.frameCount + (30 / i)) % 30);
        }
      }

      if (this.frameCount < 92) {
        muzzleFlash(this.context, this.x, this.y, this.frameCount % 7);
      }

      if (this.frameCount >= this.fpsAdjustFrameNumber(180)) {
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

    const staticStruct = AnimatedImage.bulkAnimate(
      await artSet.getStructureLayerImages(),
      this.staticStruct(artSet.getPalette()),
      24,
      0
    );

    return staticStruct.concat([
      new AnimatedEffect(
        this.muzzleFlashScript(),
        25,
        31
      )
    ]);
  }
}
