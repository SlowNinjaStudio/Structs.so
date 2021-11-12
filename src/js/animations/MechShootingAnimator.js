import {AnimatedImage} from "../vendor/animation/AnimatedImage";
import {AnimatedEffect} from "../vendor/animation/AnimatedEffect";
import {StructureArtGeneratorFactory} from "../art_rendering/StructureArtGeneratorFactory";

export class MechShootingAnimator {
  constructor() {
    this.structureArtGeneratorFactory = new StructureArtGeneratorFactory();
  }

  cannonFireScript() {
    return function() {
      this.context.drawImage(this.img, this.x, this.y);
      if (this.frameCount === 4) {
        this.x = 2;
      }
      if (this.frameCount === 8) {
        this.x = 1;
      }
      if (this.frameCount === 10) {
        this.x = 0;
      }
      if (this.frameCount === 30) {
        this.resetFrameCount();
      }
    };
  }

  mechKickBackScript() {
    return function() {
      this.context.drawImage(this.img, this.x, this.y);
      if (this.frameCount === 6) {
        this.x = 1;
      }
      if (this.frameCount === 10) {
        this.x = 0;
      }
      if (this.frameCount === 30) {
        this.resetFrameCount();
      }
    }
  }

  bulletScript() {
    return function() {
      this.context.fillStyle = '#ffff00';
      this.context.shadowColor = '#aaaa00';
      this.context.shadowBlur = 4;

      if (this.frameCount < 4) {
        this.context.fillRect(this.x, this.y, 11, 2);
      } else if (this.frameCount < 6) {
        this.context.fillRect(this.x, this.y, 5, 2);
      } else if (this.frameCount === 30) {
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

      if (this.frameCount < 4) {
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 3, 7, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
      } else if (this.frameCount < 6) {
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 1, 3, Math.PI, 0, 2 * Math.PI);
        this.context.stroke();
      } else if (this.frameCount === 30) {
        this.resetFrameCount();
      }

      this.context.shadowBlur = 0;
    }
  }

  shellCasingScript() {
    return function() {
      const trajectory = (x) => (Math.pow(x, 2) / 10) + this.y;
      const x = this.x + this.frameCount;
      const y = trajectory(this.frameCount);

      this.context.fillStyle = '#ffff00';
      this.context.fillRect(x, y, 2, 1);

      if (this.frameCount === 30) {
        this.resetFrameCount();
      }
    }
  }

  /**
   * @param {Structure} mechStructure
   * @return {*[]}
   */
  animate(mechStructure) {
    const artGenerator = this.structureArtGeneratorFactory.make(mechStructure);
    const mechConfiguration = [];
    artGenerator.generate(mechConfiguration, mechStructure);

    const mechKickBack = AnimatedImage.bulkAnimate(mechConfiguration, this.mechKickBackScript(), 0, 0);

    return mechKickBack.concat([
      new AnimatedImage(
        '/img/structures/mobile/mech/mobile-mech-attack.png',
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
