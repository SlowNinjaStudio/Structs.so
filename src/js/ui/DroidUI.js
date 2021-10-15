import {ColorRGB} from "../vendor/ColorRGB";
import {DroidApi} from "../api/DroidApi";
import {DroidUISchematic} from "./components/DroidUISchematic";
import {DroidUIStructure} from "./components/DroidUIStructure";
import {PixelArtViewer} from "../vendor/PixelArtViewer";
import {SchematicPalette} from "../art_rendering/SchematicPalette";
import {StructureArtGenerator} from "../art_rendering/StructureArtGenerator";
import {StructureMobilePalette} from "../art_rendering/StructureMobilePalette";
import {StructureStaticPalette} from "../art_rendering/StructureStaticPalette";

/**
 * Web App
 */
export class DroidUI {

  /**
   * @param {DroidApi} droidApi
   * @param {StructureArtGenerator} structureArtGenerator
   * @param {StructureMobilePalette} structureMobilePalette
   * @param {StructureStaticPalette} structureStaticPalette
   * @param {SchematicPalette} schematicPalette
   */
  constructor(
    droidApi = new DroidApi('http://', 'droid.sh'),
    structureArtGenerator = new StructureArtGenerator(),
    structureMobilePalette = new StructureMobilePalette(),
    structureStaticPalette = new StructureStaticPalette(),
    schematicPalette = new SchematicPalette()
  ) {
    this.droidApi = droidApi;
    this.structureArtGenerator = structureArtGenerator;
    this.structureMobilePalette = structureMobilePalette;
    this.structureStaticPalette = structureStaticPalette;
    this.schematicPalette = schematicPalette;
    this.structures = [];
    this.schematics = [];
  }

  /**
   * @param {Structure} structure
   */
  getStructurePalette(structure) {
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
   * @param {Schematic} schematic
   */
  getSchematicPalette(schematic) {
    const primaryColor = ColorRGB.hexToRgb(schematic.getPrimaryColor());
    return this.schematicPalette.generatePaletteSwap(primaryColor);
  }

  /**
   * @param {Array.<Structure>}structures
   * @param {string} targetElementId
   */
  handleLoadStructures(structures, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    let structuresHtml = '';

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
      new PixelArtViewer(canvas, this.structures[i].layers, this.getStructurePalette(this.structures[i].structure));
      console.log(this.structures[i].structure);
    }
  }

  /**
   * Load all structures and display them in the target element.
   *
   * @param {string} targetElementId
   */
  loadStructures(targetElementId) {
    this.droidApi.getStructures().then((structures) => {
      this.handleLoadStructures(structures, targetElementId);
    });
  }

  /**
   * Load structures by the given creator and display them in the target element.
   *
   * @param {string} creator id
   * @param {string} targetElementId
   */
  loadStructuresByCreator(creator, targetElementId) {
    this.droidApi.getStructuresByCreator(creator).then((structures) => {
      this.handleLoadStructures(structures, targetElementId);
    });
  }

  /**
   * Load schematics by the given creator and display them in the target element.
   *
   * @param {string} creator id
   * @param {string} targetElementId
   */
  loadSchematicsByCreator(creator, targetElementId) {
    const targetElement = document.getElementById(targetElementId);

    let schematicsHtml = '';

    this.droidApi.getSchematicsByCreator(creator).then(schematics => {
      for (let i = 0; i < schematics.length; i++) {
        const droidUISchematic = new DroidUISchematic(schematics[i]);

        // Batch drawing by collecting all the HTML first
        schematicsHtml += droidUISchematic.render();

        this.schematics[i] = {
          'schematic': schematics[i],
          'droidUISchematic': droidUISchematic,
          'layers': this.structureArtGenerator.generate(schematics[i]),
        }
      }

      // Update DOM
      targetElement.innerHTML = schematicsHtml;

      for (let i = 0; i < this.schematics.length; i++) {
        /** @type {HTMLCanvasElement} */
        const canvas = document.getElementById(this.schematics[i].droidUISchematic.getCanvasId());
        new PixelArtViewer(canvas, this.schematics[i].layers, this.getSchematicPalette(this.schematics[i].schematic));
        console.log(this.schematics[i].schematic);
      }
    });
  }
}
