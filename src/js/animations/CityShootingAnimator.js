import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";

export class CityShootingAnimator {

  staticStruct() {
    return function() {
      this.context.drawImage(this.img, this.x, this.y);

      if (this.frameCount >= this.fpsAdjustFrameNumber(30)) {
        this.resetFrameCount();
      }
    }
  }

  laserScript() {
    return function() {
      this.context.fillStyle = '#ffffcc';
      this.context.shadowColor = '#aaaa00';
      this.context.shadowBlur = 4;

      if (this.frameCount < this.fpsAdjustFrameNumber(12)) {
      } else if (this.frameCount < this.fpsAdjustFrameNumber(16)) {
        this.context.fillRect(this.x, this.y, 11, 2);
      } else if (this.frameCount < this.fpsAdjustFrameNumber(100)) {
        this.context.fillRect(this.x - 22, this.y, 33, 2);
      } else if (this.frameCount >= this.fpsAdjustFrameNumber(180)) {
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
      this.context.fillStyle = '#ffff99';

      if (this.frameCount < this.fpsAdjustFrameNumber(4)) {
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 2, 2, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(8)) {
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 1, 1, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(12)) {
        this.context.fillStyle = `rgba(0, 0, 0, 0.25)`;
        this.context.shadowBlur = 0;
        this.context.fillRect(0, 0, 64, 64);

        this.context.fillStyle = '#ffff99';
        this.context.shadowBlur = 4;
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 2, 2, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(100)) {
        this.context.fillStyle = `rgba(0, 0, 0, 0.50)`;
        this.context.shadowBlur = 0;
        this.context.fillRect(0, 0, 64, 64);

        this.context.fillStyle = '#ffff99';
        this.context.shadowBlur = 4;
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 3, 3, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(104)) {
        this.context.fillStyle = `rgba(0, 0, 0, 0.25)`;
        this.context.shadowBlur = 0;
        this.context.fillRect(0, 0, 64, 64);

        this.context.fillStyle = '#ffff99';
        this.context.shadowBlur = 4;
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 1, 1, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();
      } else if (this.frameCount >= this.fpsAdjustFrameNumber(180)) {
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
      8,
      0
    );

    return staticStruct.concat([
      new AnimatedEffect(
        this.muzzleFlashScript(),
        28,
        28
      ),
      new AnimatedEffect(
        this.laserScript(),
        17,
        27
      )
    ]);
  }
}
