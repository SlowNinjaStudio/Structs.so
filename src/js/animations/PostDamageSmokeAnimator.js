import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {MoreMath} from "../vendor/MoreMath";
import {ColorRGB} from "../vendor/ColorRGB";
import {SmokeExplosion} from "./common/SmokeExplosion";

export class PostDamageSmokeAnimator {

  staticStructure() {
    return function() {
      this.context.drawImage(this.img, this.x, this.y);
      if (this.frameCount >= 1000) {
        this.resetFrameCount();
      }
    }
  }

  explosionScript() {
    const smokeOrb = function (context, x, y, frameCount, thetaInRadians) {
      const animationLength = 60;
      const alpha = (frameCount < animationLength / 2) ? 1 : ((animationLength - frameCount) / animationLength);
      if (frameCount > animationLength) {
        return;
      }

      let smokeStrokeColor = new ColorRGB(220, 220, 220);
      let smokeShadowColor = '#5a5a5a';
      let smokeShadowBlur = 4;
      let smokeFillColor = new ColorRGB(180, 180, 180);
      if (frameCount < 0) {
        smokeStrokeColor = new ColorRGB(150, 50, 0);
        smokeShadowColor = 'rgba(80, 80, 80, 1)';
        smokeFillColor = new ColorRGB(240, 240, 0);
      }

      context.strokeStyle = `rgba(${smokeStrokeColor.r}, ${smokeStrokeColor.g}, ${smokeStrokeColor.b}, ${alpha})`;
      context.shadowColor = smokeShadowColor;
      context.shadowBlur = smokeShadowBlur;
      context.fillStyle = `rgba(${smokeFillColor.r}, ${smokeFillColor.g}, ${smokeFillColor.b}, ${alpha})`;

      const coordinate = MoreMath.parametricEquationOfTheCircle(x, y, Math.pow(frameCount, (1/2)), thetaInRadians);

      context.beginPath();
      context.ellipse(coordinate.x, coordinate.y, 2, 2, Math.PI, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
    }

    /** @type {SmokeExplosion[]} explosions */
    const explosions = [];

    for (let i = 1; i <= 29; i++) {
      explosions.push(new SmokeExplosion(
        MoreMath.getRandomInt(5, 55),
        MoreMath.getRandomInt(5, 55),
        MoreMath.getRandomInt(3, 7),
        i * 6,
        16,
        20
      ));
    }

    return function() {
      for (let i = 0; i < explosions.length; i++) {
        const explosion = explosions[i];
        if (explosion.shouldStart(this.frameCount)) {
          for (let j = 0; j < explosion.smokeBranches.length; j++) {
            smokeOrb(this.context, explosion.x, explosion.y, this.frameCount - explosion.frameCountStart, explosion.smokeBranches[j]);
          }
        }
      }

      if (this.frameCount >= this.fpsAdjustFrameNumber(180)) {
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
    const struct = AnimatedImage.bulkAnimate(
      await artSet.getLayerImages(),
      this.staticStructure(),
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
