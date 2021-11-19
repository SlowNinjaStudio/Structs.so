import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";

export class ShellDamageAnimator {

  shake() {
    return function() {
      const n = this.frameCount % this.fpsAdjustFrameNumber(30);
      if (n === 0 || n === 1) {
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
      if (this.frameCount >= this.fpsAdjustFrameNumber(30)) {
        this.resetFrameCount();
      }
    }
  }

  explosionScript() {
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

      this.context.strokeStyle = '#ffff00';
      this.context.shadowColor = '#aaaa00';
      this.context.shadowBlur = 4;

      if (this.frameCount < this.fpsAdjustFrameNumber(2)) {
        this.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
        this.context.fillRect(0, 0, 64, 64);

        this.context.beginPath();
        this.context.ellipse(x, y, 14, 6, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();

        this.context.beginPath();
        this.context.ellipse(x, y, 14, 14, Math.PI, 0, Math.PI);
        this.context.stroke();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(4)) {
        this.context.fillStyle = 'rgba(255, 255, 255, 0.25)';
        this.context.fillRect(0, 0, 64, 64);

        this.context.beginPath();
        this.context.ellipse(x, y, 6, 2, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();

        this.context.fillStyle = '#ffffcc';
        this.context.beginPath();
        this.context.ellipse(x, y, 6, 6, Math.PI, 0, Math.PI);
        this.context.stroke();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(8)) {
        this.context.fillStyle = '#ffff99';
        this.context.beginPath();
        this.context.ellipse(x, y, 7, 3, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();

        this.context.fillStyle = '#ffffcc';
        this.context.beginPath();
        this.context.ellipse(x, y, 7, 7, Math.PI, 0, Math.PI);
        this.context.stroke();
        this.context.fill();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(10)) {
        this.context.fillStyle = '#ffff99';
        this.context.beginPath();
        this.context.ellipse(x, y, 14, 6, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();

        this.context.fillStyle = '#ffffcc';
        this.context.beginPath();
        this.context.ellipse(x, y, 14, 14, Math.PI, 0, Math.PI);
        this.context.stroke();
        this.context.fill();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(12)) {
        this.context.fillStyle = '#ffff99';
        this.context.beginPath();
        this.context.ellipse(x, y, 21, 9, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();

        this.context.fillStyle = '#ffffcc';
        this.context.beginPath();
        this.context.ellipse(x, y, 21, 21, Math.PI, 0, Math.PI);
        this.context.stroke();
        this.context.fill();
      } else if (this.frameCount < this.fpsAdjustFrameNumber(14)) {
        this.context.beginPath();
        this.context.ellipse(x, y, 28, 12, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();

        this.context.beginPath();
        this.context.ellipse(x, y, 28, 28, Math.PI, 0, Math.PI);
        this.context.stroke();
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
