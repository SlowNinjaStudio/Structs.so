import {ColorRGB} from "../vendor/ColorRGB";
import {StructureRanks} from "../models/StructureRanks";

export class StructurePaletteMobileMech {
  constructor() {
    this.mechBody1 = new ColorRGB(255, 201, 122);
    this.mechBody2 = new ColorRGB(255, 152, 0);
    this.mechBody3 = new ColorRGB(194, 116, 0);
    this.mechBody4 = new ColorRGB(143, 85, 0);

    this.mechGlass1 = new ColorRGB(168, 202, 252);
    this.mechGlass2 = new ColorRGB(118, 173, 255);
    this.mechGlass3 = new ColorRGB(53, 134, 255);

    this.attackGunBarrel = new ColorRGB(212, 0, 0);

    this.defenseInnerShield = new ColorRGB(58, 138, 255);
    this.defenseOuterShield = new ColorRGB(199, 222, 255);

    this.engineeringCraneArm = new ColorRGB(255, 210, 0);
    this.engineeringCraneClaw = new ColorRGB(122, 122, 122);

    this.powerLightColor = [
      new ColorRGB(118, 251, 3),
      new ColorRGB(118, 252, 3),
      new ColorRGB(118, 253, 3),
      new ColorRGB(118, 254, 3),
      new ColorRGB(118, 255, 3)
    ];
  }

  /**
   * @param {Array.<Array>} paletteSwap
   * @param {ColorRGB} primaryColor
   */
  generateMechBodyPaletteSwap(paletteSwap, primaryColor) {
    const adjustedColor = primaryColor.clampAvgBrightness(80, 255);
    const white = new ColorRGB(255, 255, 255);
    const lighterShade = adjustedColor.mixColors(white, 0.5);
    const shades = adjustedColor.getShades(3);
    paletteSwap.push([this.mechBody1, lighterShade]);
    paletteSwap.push([this.mechBody2, shades[0]]);
    paletteSwap.push([this.mechBody3, shades[1]]);
    paletteSwap.push([this.mechBody4, shades[2]]);
  }

  /**
   * @param {Array.<Array>} paletteSwap
   * @param {ColorRGB} primaryColor
   */
  generateMechGlassPaletteSwap(paletteSwap, primaryColor) {
    const white = new ColorRGB(255, 255, 255);
    const shades = primaryColor
      .getComplimentaryColor()
      .maxIntensity()
      .clampAvgBrightness(100, 200)
      .getMixedColorShades(5, white);
    paletteSwap.push([this.mechGlass3, shades[0]]);
    paletteSwap.push([this.mechGlass2, shades[1]]);
    paletteSwap.push([this.mechGlass1, shades[2]]);
  }

  /**
   * @param {Array.<Array>} paletteSwap
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generateAttackPaletteSwap(paletteSwap, primaryColor, structure) {
    const ranks = (new StructureRanks()).getAttackRanks();

    let gunBarrelColor = this.attackGunBarrel;
    if (structure.getRangeAttack() > ranks.rankS) {
      gunBarrelColor = new ColorRGB(255, 255, 255);
    } else if (structure.getRangeAttack() > ranks.rankA) {
      gunBarrelColor = new ColorRGB(0, 186, 255);
    } else if (structure.getRangeAttack() > ranks.rankB) {
      gunBarrelColor = new ColorRGB(0, 255, 174);
    } else if (structure.getRangeAttack() > ranks.rankC) {
      gunBarrelColor = new ColorRGB(255, 252, 0);
    } else if (structure.getRangeAttack() > ranks.rankD) {
      gunBarrelColor = new ColorRGB(255, 179, 0);
    }

    paletteSwap.push([this.attackGunBarrel, gunBarrelColor]);
  }

  /**
   * @param {Array.<Array>} paletteSwap
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generateDefensivePaletteSwap(paletteSwap, primaryColor, structure) {
    const complimentaryColor = primaryColor.getComplimentaryColor();
    const adjustedColor = complimentaryColor.clampAvgBrightness(240, 255);
    const shieldShades = adjustedColor.getShades(10);
    const ranks = (new StructureRanks()).getDefensiveRanks();

    let outerShieldColor = shieldShades[4];
    let innerShieldColor = shieldShades[6];
    if (structure.getRangeDefense() > ranks.rankS) {
      outerShieldColor = new ColorRGB(255, 255, 255);
      innerShieldColor = new ColorRGB(40, 40, 40);
    } else if (structure.getRangeDefense() > ranks.rankA) {
      outerShieldColor = shieldShades[0];
      innerShieldColor = shieldShades[2];
    } else if (structure.getRangeDefense() > ranks.rankB) {
      outerShieldColor = shieldShades[1];
      innerShieldColor = shieldShades[3];
    } else if (structure.getRangeDefense() > ranks.rankC) {
      outerShieldColor = shieldShades[2];
      innerShieldColor = shieldShades[4];
    } else if (structure.getRangeDefense() > ranks.rankD) {
      outerShieldColor = shieldShades[3];
      innerShieldColor = shieldShades[5];
    }

    paletteSwap.push([this.defenseOuterShield, outerShieldColor]);
    paletteSwap.push([this.defenseInnerShield, innerShieldColor]);
  }

  /**
   * @param {Array.<Array>}paletteSwap
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generateEngineeringPaletteSwap(paletteSwap, primaryColor, structure) {
    const ranks = (new StructureRanks()).getEngineeringRanks();

    let color = new ColorRGB(194, 15, 15);
    if (structure.getBuildRate() > ranks.rankS) {
      color = new ColorRGB(20, 20, 20);
    } else if (structure.getBuildRate() > ranks.rankA) {
      color = new ColorRGB(132, 175, 196);
    } else if (structure.getBuildRate() > ranks.rankB) {
      color = new ColorRGB(82, 148, 68);
    } else if (structure.getBuildRate() > ranks.rankC) {
      color = new ColorRGB(240, 198, 5);
    } else if (structure.getBuildRate() > ranks.rankD) {
      color = new ColorRGB(230, 124, 0);
    }

    paletteSwap.push([this.engineeringCraneArm, color]);
  }

  /**
   * @param {Array.<Array>}paletteSwap
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generatePowerPaletteSwap(paletteSwap, primaryColor, structure) {
    const maxSlots = 5;
    const slots = Math.min(structure.getChargingSlotCount(), maxSlots);
    const offSlots = maxSlots - slots;
    for (let i = 0; i < offSlots; i++) {
      paletteSwap.push([this.powerLightColor[i], new ColorRGB(20, 44, 0)]);
    }
  }

  /**
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generatePaletteSwap(primaryColor, structure) {
    const paletteSwap = [];
    this.generateMechBodyPaletteSwap(paletteSwap, primaryColor);
    this.generateMechGlassPaletteSwap(paletteSwap, primaryColor);
    this.generateAttackPaletteSwap(paletteSwap, primaryColor, structure);
    this.generateDefensivePaletteSwap(paletteSwap, primaryColor, structure);
    this.generateEngineeringPaletteSwap(paletteSwap, primaryColor, structure);
    this.generatePowerPaletteSwap(paletteSwap, primaryColor, structure);
    return paletteSwap;
  }
}
