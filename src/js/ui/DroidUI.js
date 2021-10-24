import {ColorRGB} from "../vendor/ColorRGB";
import {DroidApi} from "../api/DroidApi";
import {DroidUIMessagePanel} from "./components/DroidUIMessagePanel";
import {DroidUISchematic} from "./components/DroidUISchematic";
import {DroidUINewSchematic} from "./components/DroidUINewSchematic";
import {DroidUISchematicListItem} from "./components/DroidUISchematicListItem";
import {DroidUIStructure} from "./components/DroidUIStructure";
import {DroidUIStructureCommandView} from "./components/DroidUIStructureCommandView";
import {PixelArtViewer} from "../vendor/PixelArtViewer";
import {SchematicPalette} from "../art_rendering/SchematicPalette";
import {StructureArtGenerator} from "../art_rendering/StructureArtGenerator";
import {StructureMobilePalette} from "../art_rendering/StructureMobilePalette";
import {StructureStaticPalette} from "../art_rendering/StructureStaticPalette";
import {DroidUIMessageListItem} from "./components/DroidUIMessageListItem";

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
   * @param {string} creator
   * @param {DroidUIMessagePanel} emptyMessage
   */
  handleLoadStructures(structures, targetElementId, creator = '', emptyMessage = null) {
    this.structures = [];
    const targetElement = document.getElementById(targetElementId);
    let structuresHtml = '';

    for (let i = 0; i < structures.length; i++) {
      const droidUIStructure = new DroidUIStructure(structures[i], creator);

      // Batch drawing by collecting all the HTML first
      structuresHtml += droidUIStructure.render();

      this.structures[i] = {
        'structure': structures[i],
        'droidUIStructure': droidUIStructure,
        'layers': this.structureArtGenerator.generate(structures[i]),
      }
    }

    // Update DOM
    if (structuresHtml === '' && emptyMessage !== null) {
      structuresHtml = emptyMessage.render();
    }
    targetElement.innerHTML = structuresHtml;

    for (let i = 0; i < this.structures.length; i++) {
      /** @type {HTMLCanvasElement} */
      const canvas = document.getElementById(this.structures[i].droidUIStructure.getCanvasId());
      new PixelArtViewer(canvas, this.structures[i].layers, this.getStructurePalette(this.structures[i].structure));
    }
  }

  /**
   * @param {Structure} structure
   * @param {string} targetElementId
   * @param {string} creator
   */
  handleLoadSingleStructure(structure, targetElementId, creator = '') {
    const targetElement = document.getElementById(targetElementId);
    const layers = this.structureArtGenerator.generate(structure);
    const droidUIStructureCommandView = new DroidUIStructureCommandView(structure, creator);

    this.structures[0] = {
      'structure': structure,
      'droidUIStructureCommandView': droidUIStructureCommandView,
      'layers': this.structureArtGenerator.generate(structure),
    }

    targetElement.innerHTML = droidUIStructureCommandView.render();
    droidUIStructureCommandView.initMainMenuEventListeners();

    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(droidUIStructureCommandView.getCanvasId());
    new PixelArtViewer(canvas, layers, this.getStructurePalette(structure));
  }

  /**
   * Load all structures and display them in the target element.
   *
   * @param {string} targetElementId
   * @param {string} creator
   */
  loadStructures(targetElementId, creator = '') {
    this.droidApi.getStructures().then((structures) => {
      this.handleLoadStructures(structures, targetElementId, creator, new DroidUIMessagePanel(
        'No Structures Available',
        `Whoops, an error occurred and the Genesis Library has gone missing.`
      ));
    });
  }

  /**
   * Load structures by the given creator and display them in the target element.
   *
   * @param {string} targetElementId
   * @param {string} creator id
   */
  loadStructuresByCreator(targetElementId, creator) {
    this.droidApi.getStructuresByCreator(creator).then((structures) => {
      this.handleLoadStructures(structures, targetElementId, creator, new DroidUIMessagePanel(
        'No Structures Available',
        `You don't own any structures. Use the Genesis Library structure and a schematic to create your first structure.`
      ));
    });
  }

  /**
   * Load structure a by structure ID.
   *
   * @param {string} targetElementId
   * @param {string} structureId
   * @param {string} creator
   */
  loadSingleStructure(targetElementId, structureId, creator = '') {
    this.droidApi.getSingleStructure(structureId).then((structures) => {
      this.handleLoadSingleStructure(structures.shift(), targetElementId, creator);
    });
  }

  /**
   * Load structures that match the given search string and display them in the target element.
   *
   * @param {string} targetElementId
   * @param {string} searchString
   * @param {string} creator
   */
  searchAndLoadStructures(targetElementId, searchString,  creator = '') {
    this.droidApi.searchStructures(searchString).then((structures) => {
      this.handleLoadStructures(structures, targetElementId, creator, new DroidUIMessagePanel(
        'No Structures Found',
        `No structures found matching your search terms. Try using less or different keywords.`
      ));
    });
  }

  /**
   * Load schematics by the given creator and display them in the target element.
   *
   * @param {string} targetElementId
   * @param {string} creator id
   */
  loadSchematicsByCreator(targetElementId, creator) {
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
      if (schematicsHtml === '') {
        const emptyMessage = new DroidUIMessagePanel(
          'No Schematics Available',
          `You don't own any schematics. To create a schematic go to R&D.`
        );
        schematicsHtml = emptyMessage.render();
      }
      targetElement.innerHTML = schematicsHtml;

      for (let i = 0; i < this.schematics.length; i++) {
        /** @type {HTMLCanvasElement} */
        const canvas = document.getElementById(this.schematics[i].droidUISchematic.getCanvasId());
        new PixelArtViewer(canvas, this.schematics[i].layers, this.getSchematicPalette(this.schematics[i].schematic));
      }
    });
  }

  /**
   * @param {string} schematicsHtml
   * @param {string} searchString
   * @returns {string}
   */
  schematicSelectionListOutputHelper(schematicsHtml, searchString) {
    if (schematicsHtml === '' && searchString === '') {
      const emptyMessage = new DroidUIMessageListItem(
        `There are no compatible schematics for this structure.`
        + ` A compatible schematic must have one ambit (water, land, sky, or space) in common with the current structure.`
      );
      schematicsHtml = emptyMessage.render();
    } else if (schematicsHtml === '' && searchString !== '') {
      const emptyMessage = new DroidUIMessageListItem(
        `No compatible schematics found matching your search terms. Try using less or different keywords.`
      );
      schematicsHtml = emptyMessage.render();
    }
    return schematicsHtml;
  }

  /**
   * @param {string} targetElementId
   * @param {string} targetElementTitleId
   * @param {Structure} structure
   * @param {string} searchString
   */
  loadSchematicSelectionList(targetElementId, targetElementTitleId, structure, searchString = '') {
    const targetElement = document.getElementById(targetElementId);
    const targetElementTitle = document.getElementById(`${targetElementTitleId}`);
    targetElementTitle.innerHTML = 'Select Schematic';

    let schematicsHtml = '';

    this.droidApi.searchSchematicsByStructure(structure.getId(), searchString).then(schematics => {
      for (let i = 0; i < schematics.length; i++) {
        const droidUISchematicListItem = new DroidUISchematicListItem(schematics[i], structure);

        // Batch drawing by collecting all the HTML first
        schematicsHtml += droidUISchematicListItem.render();

        this.schematics[i] = {
          'schematic': schematics[i],
          'droidUISchematicListItem': droidUISchematicListItem,
          'layers': this.structureArtGenerator.generate(schematics[i]),
        }
      }

      // Update DOM
      targetElement.innerHTML = this.schematicSelectionListOutputHelper(schematicsHtml, searchString);

      for (let i = 0; i < this.schematics.length; i++) {
        /** @type {HTMLCanvasElement} */
        const canvas = document.getElementById(this.schematics[i].droidUISchematicListItem.getCanvasId());
        new PixelArtViewer(canvas, this.schematics[i].layers, this.getSchematicPalette(this.schematics[i].schematic));

        this.schematics[i].droidUISchematicListItem.initMainBuildEventListeners();
      }
    });
  }

  /**
   * Load new schematic as generated during the R&D process
   *
   * @param {Schematic} schematic
   * @param {string} targetElementId
   */
  loadNewSchematic(schematic, targetElementId) {
    const targetElement = document.getElementById(targetElementId);

    let schematicsHtml = '';

    const droidUINewSchematic = new DroidUINewSchematic(schematic);
    schematicsHtml += droidUINewSchematic.render();

    this.schematics[0] = {
      'schematic': schematic,
      'droidUINewSchematic': droidUINewSchematic,
      'layers': this.structureArtGenerator.generate(schematic),
    }

    // Update DOM
    if (schematicsHtml === '') {
      // We really shouldn't get here. 
      // Why are you calling loadNewSchematic without a new schematic?
      const emptyMessage = new DroidUIMessagePanel(
        'No Schematics Available',
        `You don't own any schematics. To create a schematic go to R&D.`
      );
      schematicsHtml = emptyMessage.render();
    }
    
    targetElement.innerHTML = schematicsHtml;

    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(this.schematics[0].droidUINewSchematic.getCanvasId());
    new PixelArtViewer(canvas, this.schematics[0].layers, this.getSchematicPalette(this.schematics[0].schematic));
      
  }
}
