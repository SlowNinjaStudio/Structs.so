import {ColorRGB} from "../vendor/ColorRGB";
import {StructureRanks} from "../models/StructureRanks";

/**
 * Generates palettes for mobile structures.
 */
export class StructureMobilePalette {
  constructor() {
    this.chassisTop = new ColorRGB(255, 152, 0);
    this.chassisBottom = new ColorRGB(255, 87, 34);
    this.waterFin = new ColorRGB(255, 186, 0);
    this.landTire = new ColorRGB(88, 88, 88);
    this.landHubCap = new ColorRGB(192, 192, 192);
    this.skyWing = new ColorRGB(244, 67, 54);
    this.spaceFlameCore = new ColorRGB(254, 254, 254);
    this.spaceInnerFlame = new ColorRGB(255, 213, 79);
    this.spaceOuterFlame = new ColorRGB(255, 61, 0);
    this.attackGunBarrel = new ColorRGB(158, 158, 158);
    this.attackGunAccent = new ColorRGB(255, 179, 0);
    this.powerLightColor = [
      new ColorRGB(118, 251, 3),
      new ColorRGB(118, 252, 3),
      new ColorRGB(118, 253, 3),
      new ColorRGB(118, 254, 3),
      new ColorRGB(118, 255, 3)
    ];
    this.engineeringCraneArm = new ColorRGB(132, 175, 196);
    this.engineeringCraneClaw = new ColorRGB(220, 232, 238);
    this.defenseInnerShield = new ColorRGB(128, 216, 255);
    this.defenseOuterShield = new ColorRGB(224, 247, 250);
  }

  /**
   * @param {Array.<Array>} paletteSwap
   * @param {ColorRGB} primaryColor
   */
  generateChassisPaletteSwap(paletteSwap, primaryColor) {
    const adjustedColor = primaryColor.clampAvgBrightness(40, 255);
    const shades = adjustedColor.getShades(2);
    paletteSwap.push([this.chassisTop, shades[0]]);
    paletteSwap.push([this.chassisBottom, shades[1]]);
  }

  /**
   * @param {Array.<Array>} paletteSwap
   * @param {ColorRGB} primaryColor
   */
  generateSkyPaletteSwap(paletteSwap, primaryColor) {
    const adjustedColor = primaryColor.clampAvgBrightness(250, 255);
    const shades = adjustedColor.getShades(2);
    paletteSwap.push([this.skyWing, shades[1]]);
  }

  /**
   * @param {Array.<Array>} paletteSwap
   * @param {ColorRGB} primaryColor
   */
  generateWaterPaletteSwap(paletteSwap, primaryColor) {
    const adjustedColor = primaryColor.clampAvgBrightness(250, 255);
    const shades = adjustedColor.getShades(2);
    paletteSwap.push([this.waterFin, shades[1]]);
  }

  /**
   * @param {Array.<Array>} paletteSwap
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generateAttackPaletteSwap(paletteSwap, primaryColor, structure) {
    const ranks = (new StructureRanks()).getAttackRanks();

    let gunAccentColor = new ColorRGB(255, 0, 0);
    let gunBarrelColor = this.attackGunBarrel;
    if (structure.getRangeAttack() > ranks.rankS) {
      gunAccentColor = new ColorRGB(255, 255, 255);
      gunBarrelColor = new ColorRGB(255, 255, 255);
    } else if (structure.getRangeAttack() > ranks.rankA) {
      gunAccentColor = new ColorRGB(0, 186, 255);
    } else if (structure.getRangeAttack() > ranks.rankB) {
      gunAccentColor = new ColorRGB(0, 255, 174);
    } else if (structure.getRangeAttack() > ranks.rankC) {
      gunAccentColor = new ColorRGB(255, 252, 0);
    } else if (structure.getRangeAttack() > ranks.rankD) {
      gunAccentColor = new ColorRGB(255, 179, 0);
    }

    paletteSwap.push([this.attackGunBarrel, gunBarrelColor]);
    paletteSwap.push([this.attackGunAccent, gunAccentColor]);
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
      color = this.engineeringCraneArm;
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
    this.generateChassisPaletteSwap(paletteSwap, primaryColor);
    this.generateSkyPaletteSwap(paletteSwap, primaryColor);
    this.generateWaterPaletteSwap(paletteSwap, primaryColor);
    this.generateAttackPaletteSwap(paletteSwap, primaryColor, structure);
    this.generateDefensivePaletteSwap(paletteSwap, primaryColor, structure);
    this.generateEngineeringPaletteSwap(paletteSwap, primaryColor, structure);
    this.generatePowerPaletteSwap(paletteSwap, primaryColor, structure);
    return paletteSwap;
  }
}
