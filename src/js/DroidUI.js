import {ColorRGB} from "./ColorRGB";
import {DroidApi} from "./DroidApi";
import {DroidUIStructure} from "./DroidUIStructure";
import {PixelArtViewer} from "./PixelArtViewer";
import {StructureArtGenerator} from "./StructureArtGenerator";
import {StructureMobilePalette} from "./StructureMobilePalette";
import {StructureStaticPalette} from "./StructureStaticPalette";

/**
 * Web App
 */
export class DroidUI {

  /**
   * @param {DroidApi} droidApi
   * @param {StructureArtGenerator} structureArtGenerator
   * @param {StructureMobilePalette} structureMobilePalette
   * @param {StructureStaticPalette} structureStaticPalette
   */
  constructor(
    droidApi = new DroidApi('http://', 'droid.sh'),
    structureArtGenerator = new StructureArtGenerator(),
    structureMobilePalette = new StructureMobilePalette(),
    structureStaticPalette = new StructureStaticPalette()
  ) {
    this.droidApi = droidApi;
    this.structureArtGenerator = structureArtGenerator;
    this.structureMobilePalette = structureMobilePalette;
    this.structureStaticPalette = structureStaticPalette;
    this.structures = [];
  }

  /**
   * @param {Structure} structure
   */
  getPalette(structure) {
    let palette;
    const primaryColor = ColorRGB.hexToRgb(structure.getPrimaryColor());
    if (structure.isMobile() === true) {
      palette = this.structureMobilePalette.generatePaletteSwap(primaryColor, structure);
    } else {
      palette = this.structureStaticPalette.generatePaletteSwap(primaryColor, structure);
    }
    return palette;
  }

  /**
   * Load all structures and display them in the target element.
   *
   * @param {string} targetElementId
   */
  loadStructures(targetElementId) {
    const targetElement = document.getElementById(targetElementId);

    let structuresHtml = '';

    this.droidApi.getStructures().then(structures => {
      for (let i = 0; i < structures.length; i++) {
        const droidUIStructure = new DroidUIStructure(structures[i]);

        // Batch drawing by collecting all the HTML first
        structuresHtml += droidUIStructure.render();

        this.structures[i] = {
          'structure': structures[i],
          'droidUIStructure': droidUIStructure,
          'layers': this.structureArtGenerator.generate(structures[i]),
        }
      }

      // Update DOM
      targetElement.innerHTML = structuresHtml;

      for (let i = 0; i < this.structures.length; i++) {
        /** @type {HTMLCanvasElement} */
        const canvas = document.getElementById(this.structures[i].droidUIStructure.getCanvasId());
        new PixelArtViewer(canvas, this.structures[i].layers, this.getPalette(this.structures[i].structure));
        console.log(this.structures[i].structure);
      }
    });
  }
}
