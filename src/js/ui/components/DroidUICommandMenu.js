/**
 * Web UI component for structures.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";

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
              href="#offcanvas"
              data-bs-toggle="offcanvas"
              role="button"
              class="nes-btn ${this.structure.hasFeatureAttack() ? 'is-warning' : 'is-disabled' } nes-btn-fluid"
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
              id="repair-structure-command"
              href="#offcanvas"
              data-bs-toggle="offcanvas"
              role="button"
              class="nes-btn is-warning nes-btn-fluid"
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

    if (this.structure.hasFeatureAttack()) {
      document.getElementById('attack-command').addEventListener('click', function() {
        const droidUi = new DroidUI();

        const searchHandler = async function() {
          const instance = new Instance();
          await instance.init();

          const searchString = document.getElementById('offcanvas-search-input').value;
          droidUi.loadStructureSelectionList(
            'offcanvas-body',
            'offcanvas-title',
            this.structure,
            'attack',
            searchString
          );
        }.bind(this);
        document.getElementById('offcanvas-search-btn').addEventListener('click', searchHandler);
        document.getElementById('offcanvas-search-input').addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
            searchHandler(event);
          }
        });


        droidUi.loadStructureSelectionList('offcanvas-body', 'offcanvas-title', this.structure, 'attack');

      }.bind(this));
    }

  }

  initEngineeringSubmenuEventListeners() {
    const droidUi = new DroidUI();



    const searchHandler = async function() {
      const instance = new Instance();
      await instance.init();

      const searchString = document.getElementById('offcanvas-search-input').value;
      droidUi.loadSchematicSelectionList(
        'offcanvas-body',
        'offcanvas-title',
        this.structure,
        instance.address + ' ' + searchString
      );
    }.bind(this);
    document.getElementById('offcanvas-search-btn').addEventListener('click', searchHandler);
    document.getElementById('offcanvas-search-input').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        searchHandler(event);
      }
    });

    const instance = new Instance();
    instance.lazyLoad();

    document.getElementById('build-from-schematic-command').addEventListener('click', function() {
      droidUi.loadSchematicSelectionList('offcanvas-body', 'offcanvas-title', this.structure, instance.address);
    }.bind(this));

    document.getElementById('main-menu-command').addEventListener('click', function() {
      const commandMenu = new DroidUICommandMenu(this.structure);
      document.getElementById('command-container').innerHTML = commandMenu.renderMainMenu();
      commandMenu.initMainMenuEventListeners();
    }.bind(this));


    document.getElementById('repair-structure-command').addEventListener('click', function() {
      const droidUi = new DroidUI();

      const searchHandler = async function() {
        const instance = new Instance();
        await instance.init();

        const searchString = document.getElementById('offcanvas-search-input').value;
        droidUi.loadStructureSelectionList(
          'offcanvas-body',
          'offcanvas-title',
          this.structure,
          'repair',
          searchString
        );
      }.bind(this);
      document.getElementById('offcanvas-search-btn').addEventListener('click', searchHandler);
      document.getElementById('offcanvas-search-input').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          searchHandler(event);
        }
      });


      droidUi.loadStructureSelectionList('offcanvas-body', 'offcanvas-title', this.structure, 'repair');

    }.bind(this));
  }
}
