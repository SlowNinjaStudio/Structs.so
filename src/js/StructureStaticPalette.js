import {ColorRGB} from "./ColorRGB";
import {StructureRanks} from "./StructureRanks";

/**
 * Generates palettes for static structures.
 */
export class StructureStaticPalette {
  constructor() {
    this.buildingsLeft = new ColorRGB(224, 224, 224);
    this.buildingsCenterLeft = new ColorRGB(158, 158, 158);
    this.buildingsCenter = new ColorRGB(238, 238, 238);
    this.buildingsCenterStripe = new ColorRGB(85, 85, 85);
    this.buildingsCenterRight = new ColorRGB(224, 224, 224);
    this.buildingsRight = new ColorRGB(189, 189, 189);
    this.buildingsBaseTop = new ColorRGB(176, 190, 197);
    this.buildingsBaseBottom = new ColorRGB(96, 125, 139);
    this.skyInnerFlame = new ColorRGB(255, 235, 59);
    this.skyOuterFlame = new ColorRGB(213, 0, 0);
    this.defenseInnerShield = new ColorRGB(128, 216, 255);
    this.defenseOuterShield = new ColorRGB(224, 247, 250);
    this.powerLightColor = [
      new ColorRGB(118, 251, 3),
      new ColorRGB(118, 252, 3),
      new ColorRGB(118, 253, 3),
      new ColorRGB(118, 254, 3),
      new ColorRGB(118, 255, 3)
    ];
    this.engineeringCraneTower = new ColorRGB(255, 193, 7);
    this.engineeringCraneClaw = new ColorRGB(147, 147, 135);
    this.attackTurret = new ColorRGB(124, 146, 90);
  }

  /**
   * @param {Array.<Array>}paletteSwap
   * @param {ColorRGB} primaryColor
   */
  generateBuildingsPaletteSwap(paletteSwap, primaryColor) {
    const newMainColor = this.buildingsCenter.mixColors(primaryColor, 0.60);
    const shades = newMainColor.getShades(5);
    paletteSwap.push([this.buildingsCenter, shades[0]]);
    paletteSwap.push([this.buildingsLeft, shades[1]]);
    paletteSwap.push([this.buildingsRight, shades[2]]);
    paletteSwap.push([this.buildingsCenterLeft, shades[3]]);
    paletteSwap.push([this.buildingsCenterStripe, shades[4]]);
  }

  /**
   * @param {Array.<Array>}paletteSwap
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generateAttackPaletteSwap(paletteSwap, primaryColor, structure) {
    const ranks = (new StructureRanks()).getAttackRanks();

    let color = new ColorRGB(146, 131, 90);
    if (structure.getRangeAttack() > ranks.rankS) {
      color = new ColorRGB(255, 255, 255);
    } else if (structure.getRangeAttack() > ranks.rankA) {
      color = new ColorRGB(90, 112, 146);
    } else if (structure.getRangeAttack() > ranks.rankB) {
      color = new ColorRGB(90, 140, 146);
    } else if (structure.getRangeAttack() > ranks.rankC) {
      color = new ColorRGB(90, 146, 120);
    } else if (structure.getRangeAttack() > ranks.rankD) {
      color = new ColorRGB(124, 146, 90);
    }

    paletteSwap.push([this.attackTurret, color]);
  }

  /**
   * @param {Array.<Array>}paletteSwap
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
      color = new ColorRGB(31, 11, 229);
    } else if (structure.getBuildRate() > ranks.rankB) {
      color = new ColorRGB(82, 148, 68);
    } else if (structure.getBuildRate() > ranks.rankC) {
      color = new ColorRGB(240, 198, 5);
    } else if (structure.getBuildRate() > ranks.rankD) {
      color = new ColorRGB(230, 124, 0);
    }

    paletteSwap.push([this.engineeringCraneTower, color]);
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
    this.generateBuildingsPaletteSwap(paletteSwap, primaryColor);
    this.generateAttackPaletteSwap(paletteSwap, primaryColor, structure);
    this.generateDefensivePaletteSwap(paletteSwap, primaryColor, structure);
    this.generateEngineeringPaletteSwap(paletteSwap, primaryColor, structure);
    this.generatePowerPaletteSwap(paletteSwap, primaryColor, structure);
    return paletteSwap;
  }
}
