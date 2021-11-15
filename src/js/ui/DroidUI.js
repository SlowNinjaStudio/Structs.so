import {ColorRGB} from "../vendor/ColorRGB";
import {DroidApi} from "../api/DroidApi";
import {DroidUIMessagePanel} from "./components/DroidUIMessagePanel";
import {DroidUISchematic} from "./components/DroidUISchematic";
import {DroidUINewSchematic} from "./components/DroidUINewSchematic";
import {DroidUISchematicCondensed} from "./components/DroidUISchematicCondensed";
import {DroidUIStructure} from "./components/DroidUIStructure";
import {DroidUIStructureCommandView} from "./components/DroidUIStructureCommandView";
import {PixelArtViewer} from "../vendor/PixelArtViewer";
import {StructureArtGenerator} from "../art_rendering/StructureArtGenerator";
import {DroidUIMessageListItem} from "./components/DroidUIMessageListItem";
import {DroidUISchematicCondensedCTABuild} from "./components/DroidUISchematicCondensedCTABuild";
import {DroidUIWattReceivedModal} from "./components/DroidUIWattReceivedModal";
import {DroidUISchematicRDPatentedModal} from "./components/DroidUISchematicRDPatentedModal";
import {DroidUIStructureBuildStatusModal} from "./components/DroidUIStructureBuildStatusModal";
import {Droid} from "../models/Droid";
import {DroidUIDroid} from "./components/DroidUIDroid";
import {DroidArtGenerator} from "../art_rendering/DroidArtGenerator";
import {DroidPalette} from "../art_rendering/DroidPalette";
import {DroidUIStructureCondensedCTABuild} from "./components/DroidUIStructureCondensedCTABuild";
import {Schematic} from "../models/Schematic";
import {Structure} from "../models/Structure";
import {DroidUIStructureAttackStatusModal} from "./components/DroidUIStructureAttackStatusModal";
import {DroidUIStructureRepairStatusModal} from "./components/DroidUIStructureRepairStatusModal";
import {DroidUIStructureCTAFactory} from "./components/DroidUIStructureCTAFactory";
import {StructurePaletteFactory} from "../art_rendering/StructurePaletteFactory";
import {DroidUIStructureDrainStatusModal} from "./components/DroidUIStructureDrainStatusModal";
import {StructureArtSet} from "../art_rendering/StructureArtSet";
import {DroidUIStructureCondensed} from "./components/DroidUIStructureCondensed";




/**
 * Web App
 */
export class DroidUI {

  /**
   * @param {DroidApi} droidApi
   */
  constructor(droidApi = new DroidApi('https://', 'droid.sh')) {
    this.droidApi = droidApi;
    this.droidArtGenerator = new DroidArtGenerator();
    this.droidPalette = new DroidPalette();
    this.structureArtGenerator = new StructureArtGenerator();
    this.structurePaletteFactory = new StructurePaletteFactory();
    this.schematics = [];
  }

  /**
   * @param {Array.<Schematic>}schematics
   * @param {string} targetElementId
   * @param {string} creator
   * @param {DroidUIMessagePanel} emptyMessage
   */
  handleLoadSchematics(schematics, targetElementId, creator = '', emptyMessage = null) {
    const schematicElements = [];
    const targetElement = document.getElementById(targetElementId);
    let schematicsHtml = '';

    // Batch drawing by collecting all the HTML first
    for (let i = 0; i < schematics.length; i++) {
      const droidUISchematic = new DroidUISchematic(schematics[i], creator);
      schematicsHtml += droidUISchematic.render();
      schematicElements[i] = droidUISchematic;
    }

    // Update DOM
    if (schematicsHtml === '' && emptyMessage !== null) {
      schematicsHtml = emptyMessage.render();
    }
    targetElement.innerHTML = schematicsHtml;

    for (let i = 0; i < schematicElements.length; i++) {
      /** @type {HTMLCanvasElement} */
      const canvas = document.getElementById(schematicElements[i].getCanvasId());
      const artSet = new StructureArtSet(schematicElements[i].schematic)
      new PixelArtViewer(canvas, artSet.getLayers(), artSet.getPalette());
      schematicElements[i].initBuildEventListeners();
    }
  }

  /**
   * @param {Array.<Structure>}structures
   * @param {string} targetElementId
   * @param {string} creator
   * @param {DroidUIMessagePanel} emptyMessage
   */
  handleLoadStructures(structures, targetElementId, creator = '', emptyMessage = null) {
    const structureElements = [];
    const targetElement = document.getElementById(targetElementId);
    let structuresHtml = '';

    // Batch drawing by collecting all the HTML first
    for (let i = 0; i < structures.length; i++) {
      const droidUIStructure = new DroidUIStructure(structures[i], creator);
      structuresHtml += droidUIStructure.render();
      structureElements[i] = droidUIStructure;
    }

    // Update DOM
    if (structuresHtml === '' && emptyMessage !== null) {
      structuresHtml = emptyMessage.render();
    }
    targetElement.innerHTML = structuresHtml;

    // Render the pixel art
    for (let i = 0; i < structureElements.length; i++) {
      /** @type {HTMLCanvasElement} */
      const canvas = document.getElementById(structureElements[i].getCanvasId());
      const artSet = new StructureArtSet(structureElements[i].structure);
      new PixelArtViewer(canvas, artSet.getLayers(), artSet.getPalette());
    }
  }

  /**
   * @param {Structure} structure
   * @param {string} targetElementId
   * @param {string} creator
   */
  handleLoadSingleStructure(structure, targetElementId, creator = '') {
    const targetElement = document.getElementById(targetElementId);
    const droidUIStructureCommandView = new DroidUIStructureCommandView(structure, creator);
    const artSet = new StructureArtSet(structure)

    targetElement.innerHTML = droidUIStructureCommandView.render();
    droidUIStructureCommandView.initMainMenuEventListeners();

    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(droidUIStructureCommandView.getCanvasId());
    new PixelArtViewer(canvas, artSet.getLayers(), artSet.getPalette());
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
   * Load structures that match the given search string for the given creator and display them in the target element.
   *
   * @param {string} targetElementId
   * @param {string} searchString
   * @param {string} creator
   */
  searchAndLoadStructuresByCreator(targetElementId, searchString,  creator = '') {
    const searchStringWithCreator = `${searchString} ${creator}`;
    this.searchAndLoadStructures(targetElementId, searchStringWithCreator,  creator);
  }

  /**
   * Load schematics that match the given search string and display them in the target element.
   *
   * @param {string} targetElementId
   * @param {string} searchString
   * @param {string} creator
   */
  searchAndLoadSchematics(targetElementId, searchString,  creator = '') {
    this.droidApi.searchSchematics(searchString).then((schematics) => {
      this.handleLoadSchematics(schematics, targetElementId, creator, new DroidUIMessagePanel(
        'No Schematics Found',
        `No schematics found matching your search terms. Try using less or different keywords.`
      ));
    });
  }

  /**
   * Load schematics that match the given search string for the given creator and display them in the target element.
   *
   * @param {string} targetElementId
   * @param {string} searchString
   * @param {string} creator
   */
  searchAndLoadSchematicsByCreator(targetElementId, searchString,  creator = '') {
    const searchStringWithCreator = `${searchString} ${creator}`;
    this.searchAndLoadSchematics(targetElementId, searchStringWithCreator,  creator);
  }

  /**
   * Load schematics by the given creator and display them in the target element.
   *
   * @param {string} targetElementId
   * @param {string} creator id
   */
  loadSchematicsByCreator(targetElementId, creator) {
    this.droidApi.getSchematicsByCreator(creator).then(schematics => {
      this.handleLoadSchematics(schematics, targetElementId, creator, new DroidUIMessagePanel(
        'No Schematics Available',
        `You don't own any schematics. To create a schematic go to R&D.`
      ));
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
   * @param {string} structuresHtml
   * @param {string} searchString
   * @returns {string}
   */
  structureSelectionListOutputHelper(structuresHtml, searchString) {
    if (structuresHtml === '' && searchString === '') {
      const emptyMessage = new DroidUIMessageListItem(
        `There are no compatible structures that can build this schematic.`
        + ` A compatible structure must have one ambit (water, land, sky, or space) in common with the current schematic.`
      );
      structuresHtml = emptyMessage.render();
    } else if (structuresHtml === '' && searchString !== '') {
      const emptyMessage = new DroidUIMessageListItem(
        `No compatible structures found matching your search terms. Try using less or different keywords.`
      );
      structuresHtml = emptyMessage.render();
    }
    return structuresHtml;
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
      const schematicElements = [];

      // Batch drawing by collecting all the HTML first
      for (let i = 0; i < schematics.length; i++) {
        const droidUISchematicCondensed = new DroidUISchematicCondensed(
          schematics[i],
          structure,
          new DroidUISchematicCondensedCTABuild(schematics[i])
        );
        schematicsHtml += droidUISchematicCondensed.render();
        schematicElements[i] = droidUISchematicCondensed;
      }

      // Update DOM
      targetElement.innerHTML = this.schematicSelectionListOutputHelper(schematicsHtml, searchString);

      // Render Pixel Art
      for (let i = 0; i < schematicElements.length; i++) {
        /** @type {HTMLCanvasElement} */
        const canvas = document.getElementById(schematicElements[i].getCanvasId());
        const artSet = new StructureArtSet(schematicElements[i].schematic);
        new PixelArtViewer(canvas, artSet.getLayers(), artSet.getPalette());
        schematicElements[i].initMainBuildEventListeners();
      }
    });
  }


  /**
   * @param {string} targetElementId
   * @param {string} targetElementTitleId
   * @param {Schematic} schematic
   * @param {string} searchString
   */
  loadStructureSelectionListFromSchematic(targetElementId, targetElementTitleId, schematic, searchString = '') {
    const targetElement = document.getElementById(targetElementId);
    const targetElementTitle = document.getElementById(`${targetElementTitleId}`);
    targetElementTitle.innerHTML = 'Select Structure';

    let structuresHtml = '';

    this.droidApi.searchStructuresBySchematic(schematic.getId(), searchString, schematic.getCreator())
      .then(structures => {
          const structuresList = [];
          for (let i = 0; i < structures.length; i++) {

            const droidUIStructureCondensed = new DroidUIStructureCondensed(
              structures[i],
              structures[i],
              schematic,
              new DroidUIStructureCondensedCTABuild(structures[i])
            );

            // Batch drawing by collecting all the HTML first
            structuresHtml += droidUIStructureCondensed.render();

            structuresList[i] = {
              'structure': structures[i],
              'droidUIStructureCondensed': droidUIStructureCondensed,
              'layers': this.structureArtGenerator.generate(structures[i]),
            }
          }

          // Update DOM
          targetElement.innerHTML = this.structureSelectionListOutputHelper(structuresHtml, searchString);

          for (let i = 0; i < structuresList.length; i++) {
            /** @type {HTMLCanvasElement} */
            const canvas = document.getElementById(structuresList[i].droidUIStructureCondensed.getCanvasId());
            new PixelArtViewer(canvas, structuresList[i].layers, this.structurePaletteFactory.generatePaletteSwap(structuresList[i].structure));

            structuresList[i].droidUIStructureCondensed.initMainBuildEventListeners();
          }
        }
      );
  }

  /**
   * @param {string} targetElementId
   * @param {string} targetElementTitleId
   * @param {Structure} structure
   * @param {string} callToActionType
   * @param {string} searchString
   */
  loadStructureSelectionListFromStructure(targetElementId, targetElementTitleId, structure, callToActionType, searchString = '') {
    const targetElement = document.getElementById(targetElementId);
    const targetElementTitle = document.getElementById(`${targetElementTitleId}`);
    targetElementTitle.innerHTML = 'Select Structure';

    let structuresHtml = '';

    this.droidApi.searchStructures(searchString)
      .then(structures => {
          const structuresList = [];
          for (let i = 0; i < structures.length; i++) {

            const droidUIStructureCondensed = new DroidUIStructureCondensed(
              structures[i],
              structure,
              structures[i],
              (new DroidUIStructureCTAFactory()).make(callToActionType, structures[i])
            );

            // Batch drawing by collecting all the HTML first
            structuresHtml += droidUIStructureCondensed.render();

            structuresList[i] = {
              'structure': structures[i],
              'droidUIStructureCondensed': droidUIStructureCondensed,
              'layers': this.structureArtGenerator.generate(structures[i]),
            }
          }

          // Update DOM
          targetElement.innerHTML = this.structureSelectionListOutputHelper(structuresHtml, searchString);

          for (let i = 0; i < structuresList.length; i++) {
            /** @type {HTMLCanvasElement} */
            const canvas = document.getElementById(structuresList[i].droidUIStructureCondensed.getCanvasId());
            new PixelArtViewer(canvas, structuresList[i].layers, this.structurePaletteFactory.generatePaletteSwap(structuresList[i].structure));

            structuresList[i].droidUIStructureCondensed.initSubEventListeners(callToActionType);
          }
        }
      );
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
    new PixelArtViewer(
      canvas,
      this.schematics[0].layers,
      this.structurePaletteFactory.generatePaletteSwap(this.schematics[0].schematic)
    );

    droidUINewSchematic.initMainPatentEventListeners();
  }

  /**
   * Load and display the watt received message
   *
   * @param{number} amount
   */
  loadWattReceivedModal(amount) {
     let watt_received_modal = new DroidUIWattReceivedModal(amount);

     document.getElementById('modal-container').innerHTML = watt_received_modal.render();

     watt_received_modal.initEventListeners();
     watt_received_modal.showModal();
  }

  /**
   * Load and display the Patented Success modal after confirmed Schematic creation on chain
   *
   * @param {Schematic} schematic
   */
  loadSchematicPatentedModal(schematic) {
    let schematic_patented_modal = new DroidUISchematicRDPatentedModal(schematic);

    document.getElementById('modal-container').innerHTML = schematic_patented_modal.render();

    this.renderPixelArtStructure(schematic, schematic_patented_modal.schematicCondensed);

    schematic_patented_modal.initEventListeners();
    schematic_patented_modal.showModal();
  }

  /**
   * Load and display the Schematic Build modal while the build process is ongoing
   *
   * @param {Schematic} schematic
   * @param {Structure} structure
   * @param {StructureBuild} program
   * @param {number} processId
   */
  loadStructureBuildStatusModal(schematic, structure, program, processId){
    let structureBuildStatusModal = new DroidUIStructureBuildStatusModal(schematic, structure, program, processId)

    document.getElementById('modal-container').innerHTML = structureBuildStatusModal.render();
    this.renderPixelArtStructure(schematic, structureBuildStatusModal.uiSchematic);

    structureBuildStatusModal.initEventListeners();
    structureBuildStatusModal.showModal();
  }

  /**
   * Load and display the Structure Attack modal while the attack process is ongoing
   *
   * @param {StructureAttack} program
   * @param {number} processId
   */
  loadStructureAttackStatusModal(program, processId){
    let structureAttackStatusModal = new DroidUIStructureAttackStatusModal(program, processId)

    document.getElementById('modal-container').innerHTML = structureAttackStatusModal.render();
    this.renderPixelArtStructure(program.target_structure, structureAttackStatusModal.uiStructure);

    structureAttackStatusModal.initEventListeners();
    structureAttackStatusModal.showModal();
  }

  /**
   * Load and display the Structure Repair modal while process is ongoing
   *
   * @param {StructureRepair} program
   */
  loadStructureRepairStatusModal(program){
    let structureRepairStatusModal = new DroidUIStructureRepairStatusModal(program)

    document.getElementById('modal-container').innerHTML = structureRepairStatusModal.render();
    this.renderPixelArtStructure(program.target_structure, structureRepairStatusModal.uiStructure);

    structureRepairStatusModal.initEventListeners();
    structureRepairStatusModal.showModal();
  }

  /**
   * Load and display the Structure Drain modal while process is ongoing
   *
   * @param {StructureDrain} program
   */
  loadStructureDrainStatusModal(program){
    let structureDrainStatusModal = new DroidUIStructureDrainStatusModal(program)

    document.getElementById('modal-container').innerHTML = structureDrainStatusModal.render();
    (new DroidUI()).renderPixelArtStructure(program.target_structure, structureDrainStatusModal.uiStructure);

    structureDrainStatusModal.initEventListeners();
    structureDrainStatusModal.showModal();
  }

  /**
   * @param {Structure|Schematic} structure
   * @param droidUIComponent
   */
  renderPixelArtStructure(structure, droidUIComponent) {
    const canvas = document.getElementById(droidUIComponent.getCanvasId());
    const artSet = new StructureArtSet(structure);
    new PixelArtViewer(canvas, artSet.getLayers(), artSet.getPalette());
  }

  /**
   * @param {string} targetElementId
   * @param {string} droidHash
   */
  loadDroid(targetElementId, droidHash) {
    const targetElement = document.getElementById(targetElementId);
    const droid = new Droid(droidHash);
    const droidUIDroid = new DroidUIDroid(droid);
    const layers = this.droidArtGenerator.generate(droid);

    targetElement.innerHTML = droidUIDroid.render();

    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(droidUIDroid.getCanvasId());

    const palette = this.droidPalette.generatePaletteSwap(ColorRGB.hexToRgb(droid.getPrimaryColor()));
    new PixelArtViewer(canvas, layers, palette);
  }
}
