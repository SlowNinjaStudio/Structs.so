/**
 * Web UI component for structures.
 */
import {DroidUI} from "../DroidUI";

export class DroidUICommandMenu {
  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.structure = structure;
  }

  renderMainMenu() {
    return `
      <div class="row">
        <div class="col">
            <a
              id="attack-command"
              href="javascript:void(0)"
              class="nes-btn ${this.structure.hasFeatureAttack() ? 'is-disabled' : 'is-disabled' } nes-btn-fluid"
            >
              Attack
            </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <a
              id="engineering-command"
              href="javascript:void(0)"
              class="nes-btn ${ this.structure.hasFeatureEngineering() ? 'is-warning' : 'is-disabled' } nes-btn-fluid"
            >
              Engineer
            </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <a
              id="power-command"
              href="javascript:void(0)"
              class="nes-btn ${ this.structure.hasFeaturePower() ? 'is-disabled' : 'is-disabled' } nes-btn-fluid"
            >
              Power
            </a>
        </div>
      </div>
    `;
  }

  renderEngineeringSubmenu() {
    return `
      <div class="row">
        <div class="col">
            <a
              id="build-from-schematic-command"
              href="#offcanvas"
              class="nes-btn is-warning nes-btn-fluid"
              data-bs-toggle="offcanvas"
              role="button"
            >
              Build from Schematic
            </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <a
              id="build-from-schematic-command"
              href="javascript:void(0)"
              class="nes-btn is-disabled nes-btn-fluid"
            >
              Repair Target
            </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <a
              id="main-menu-command"
              href="javascript:void(0)"
              class="nes-btn nes-btn-fluid"
            >
              Back
            </a>
        </div>
      </div>
    `;
  }

  initMainMenuEventListeners() {
    if (this.structure.hasFeatureEngineering()) {
      document.getElementById('engineering-command').addEventListener('click', function() {
        const commandMenu = new DroidUICommandMenu(this.structure);
        document.getElementById('command-container').innerHTML = commandMenu.renderEngineeringSubmenu();
        commandMenu.initEngineeringSubmenuEventListeners();
      }.bind(this));
    }
  }

  initEngineeringSubmenuEventListeners() {
    document.getElementById('build-from-schematic-command').addEventListener('click', function() {
      const ui = new DroidUI();
      ui.loadSchematicSelectionList('structure-selection', this.structure.getId());
    }.bind(this));
    document.getElementById('main-menu-command').addEventListener('click', function() {
      const commandMenu = new DroidUICommandMenu(this.structure);
      document.getElementById('command-container').innerHTML = commandMenu.renderMainMenu();
      commandMenu.initMainMenuEventListeners();
    }.bind(this));
  }
}
