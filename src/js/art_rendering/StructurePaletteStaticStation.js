import {ColorRGB} from "../vendor/ColorRGB";
import {StructureRanks} from "../models/StructureRanks";
import {AbstractStructurePalette} from "./AbstractStructurePalette";

export class StructurePaletteStaticStation extends AbstractStructurePalette{
  constructor() {
    super();
    this.moduleBody1 = new ColorRGB(238, 238, 238);
    this.moduleBody2 = new ColorRGB(224, 224, 224);
    this.moduleBody3 = new ColorRGB(189, 189, 189);
    this.moduleBody4 = new ColorRGB(158, 158, 158);

    this.glass1 = new ColorRGB(183, 233, 255);
    this.glass2 = new ColorRGB(128, 216, 255);
    this.glass3 = new ColorRGB(65, 197, 255);
    this.glass4 = new ColorRGB(0, 177, 255);

    this.attackTurret = new ColorRGB(235, 30, 30);

    this.defenseTurret = new ColorRGB(240, 0, 255);

    this.engineeringCraneTower = new ColorRGB(255, 193, 7);
    this.engineeringCraneClaw = new ColorRGB(147, 147, 135);

    this.powerLightColor = [
      new ColorRGB(118, 251, 3),
      new ColorRGB(118, 252, 3),
      new ColorRGB(118, 253, 3),
      new ColorRGB(118, 254, 3),
      new ColorRGB(118, 255, 3)
    ];
  }

  /**
   * @param {Array.<Array>}paletteSwap
   * @param {ColorRGB} primaryColor
   */
  generateModuleBodyPaletteSwap(paletteSwap, primaryColor) {
    const newMainColor = this.moduleBody1.mixColors(primaryColor, 0.60);
    const shades = newMainColor.getShades(4);
    paletteSwap.push([this.moduleBody1, shades[0]]);
    paletteSwap.push([this.moduleBody2, shades[1]]);
    paletteSwap.push([this.moduleBody3, shades[2]]);
    paletteSwap.push([this.moduleBody4, shades[3]]);
  }

  /**
   * @param {Array.<Array>}paletteSwap
   * @param {ColorRGB} primaryColor
   */
  generateGlassPaletteSwap(paletteSwap, primaryColor) {
    const white = new ColorRGB(255, 255, 255);
    const shades = primaryColor
      .getComplimentaryColor()
      .maxIntensity()
      .getMixedColorShades(5, white);
    paletteSwap.push([this.glass4, shades[0]]);
    paletteSwap.push([this.glass3, shades[1]]);
    paletteSwap.push([this.glass2, shades[2]]);
    paletteSwap.push([this.glass1, shades[3]]);
  }

  /**
   * @param {Array.<Array>}paletteSwap
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generateAttackPaletteSwap(paletteSwap, primaryColor, structure) {
    const ranks = (new StructureRanks()).getAttackRanks();

    let color = new ColorRGB(235, 30, 30);
    if (structure.getRangeAttack() > ranks.rankS) {
      color = new ColorRGB(255, 255, 255);
    } else if (structure.getRangeAttack() > ranks.rankA) {
      color = new ColorRGB(235, 30, 235);
    } else if (structure.getRangeAttack() > ranks.rankB) {
      color = new ColorRGB(30, 235, 30);
    } else if (structure.getRangeAttack() > ranks.rankC) {
      color = new ColorRGB(235, 235, 30);
    } else if (structure.getRangeAttack() > ranks.rankD) {
      color = new ColorRGB(235, 148, 30);
    }

    paletteSwap.push([this.attackTurret, color]);
  }

  /**
   * @param {Array.<Array>}paletteSwap
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generateDefensivePaletteSwap(paletteSwap, primaryColor, structure) {
    const ranks = (new StructureRanks()).getAttackRanks();

    let color = new ColorRGB(255, 0, 0);
    if (structure.getRangeAttack() > ranks.rankS) {
      color = new ColorRGB(255, 255, 255);
    } else if (structure.getRangeAttack() > ranks.rankA) {
      color = new ColorRGB(255, 0, 255);
    } else if (structure.getRangeAttack() > ranks.rankB) {
      color = new ColorRGB(0, 255, 0);
    } else if (structure.getRangeAttack() > ranks.rankC) {
      color = new ColorRGB(255, 255, 0);
    } else if (structure.getRangeAttack() > ranks.rankD) {
      color = new ColorRGB(255, 128, 0);
    }

    paletteSwap.push([this.defenseTurret, color]);
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
      color = new ColorRGB(229, 11, 226);
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
   * @param {ColorRGB} primaryColor
   * @param {Structure} structure
   */
  generatePaletteSwap(primaryColor, structure) {
    const paletteSwap = [];
    this.generateModuleBodyPaletteSwap(paletteSwap, primaryColor);
    this.generateGlassPaletteSwap(paletteSwap, primaryColor);
    this.generateAttackPaletteSwap(paletteSwap, primaryColor, structure);
    this.generateDefensivePaletteSwap(paletteSwap, primaryColor, structure);
    this.generateEngineeringPaletteSwap(paletteSwap, primaryColor, structure);
    this.generatePowerPaletteSwap(paletteSwap, primaryColor, structure);
    return paletteSwap;
  }
}
