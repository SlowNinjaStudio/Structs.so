/**
 * Web UI component for structures.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {DroidUIModelInput} from "./DroidUIModalInput";


export class DroidUICommandMenu {
  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.structure = structure;

    this.ChargeSlotConnectCallBack = async function(){
      let instance = new Instance()
      await instance.initActive()
      let droidID = document.getElementById('modal_input').value

      await instance.performConnectChargeSlot(this.structure, this.structure.charging_slot.filter(x => x!="").length, droidID)

      // Reload the page with fresh structure data
      const droidUi = new DroidUI();
      droidUi.loadStructureView('structure', this.structure.id, instance.address);
    }

    this.ChargeSlotDisconnectCallBack = async function(){
      let instance = new Instance()
      await instance.initActive()
      let droidID = document.getElementById('modal_input').value

      await instance.performConnectChargeSlot(this.structure, this.structure.charging_slot.indexOf(droidID), "")

      // Reload the page with fresh structure data
      const droidUi = new DroidUI();
      droidUi.loadStructureView('structure', this.structure.id, instance.address);

    }

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
              class="nes-btn ${this.structure.hasFeatureAttack() ? 'is-error' : 'is-disabled' } nes-btn-fluid"
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
              class="nes-btn ${ this.structure.hasFeaturePower() ? 'is-success' : 'is-disabled' } nes-btn-fluid"
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


  renderPowerSubmenu() {
    return `
      <div class="row">
        <div class="col">
            <a
              id="drain-structure-command"
              href="#offcanvas"
              class="nes-btn is-success nes-btn-fluid"
              data-bs-toggle="offcanvas"
              role="button"
            >
              Drain Target
            </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <a
              id="charge-command"
              href="javascript:void(0)"
              class="nes-btn is-success nes-btn-fluid"
            >
              Charging Ports
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

  renderPowerSlotSubmenu() {
    let menu = '';

    if (this.structure.charging_slot.filter(x => x!="").length < this.structure.charging_slot_count) {
      menu += `
        <div class="row">
          <div class="col">
              <a
                id="charge-slot-connect-command"
                href="javascript:void(0)"
                class="nes-btn is-success nes-btn-fluid"
              >
                Connect Slot
              </a>
          </div>
        </div>
      `;
    } else {
      menu += `
        <div class="row">
          <div class="col">
              <a
                id="no-charging-slots-command"

                class="nes-btn is-disabled nes-btn-fluid"
               >
                No Slot Available
              </a>
          </div>
        </div>
      `;
    }

    for (let x = 0; x < this.structure.charging_slot.length; x++) {
      if (this.structure.charging_slot[x] != "") {
        menu += `
        <div class="row">
          <div class="col">
              <a
                id="charge-slot-disconnect-command-${x}-${ this.structure.charging_slot[x] }"
                title = "${x}"
                href="javascript:void(0)"
                class="nes-btn is-error nes-btn-fluid"
              >
                ${ this.structure.charging_slot[x].substring(0,10) }...
              </a>
          </div>
        </div>
      `;
      }
    }

    menu += `
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

    return menu;
  }

  initMainMenuEventListeners() {
    if (this.structure.hasFeatureEngineering()) {
      document.getElementById('engineering-command').addEventListener('click', function() {
        const commandMenu = new DroidUICommandMenu(this.structure);
        document.getElementById('command-container').innerHTML = commandMenu.renderEngineeringSubmenu();
        commandMenu.initEngineeringSubmenuEventListeners();
      }.bind(this));
    }

    if (this.structure.hasFeaturePower()) {
      document.getElementById('power-command').addEventListener('click', function() {
        const commandMenu = new DroidUICommandMenu(this.structure);
        document.getElementById('command-container').innerHTML = commandMenu.renderPowerSubmenu();
        commandMenu.initPowerSubmenuEventListeners();
      }.bind(this));
    }

    if (this.structure.hasFeatureAttack()) {
      document.getElementById('attack-command').addEventListener('click', function() {
        const droidUi = new DroidUI();

        const searchHandler = async function() {
          const searchString = document.getElementById('offcanvas-search-input').value;
          droidUi.loadStructureSelectionListFromTargeting(
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

        droidUi.loadStructureSelectionListFromTargeting('offcanvas-body', 'offcanvas-title', this.structure, 'attack');

      }.bind(this));
    }

  }

  initEngineeringSubmenuEventListeners() {
    const droidUi = new DroidUI();

    const searchHandler = async function() {
      const instance = new Instance();
      await instance.lazyLoad();

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
        const searchString = document.getElementById('offcanvas-search-input').value;
        droidUi.loadStructureSelectionListFromTargeting(
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

      droidUi.loadStructureSelectionListFromTargeting('offcanvas-body', 'offcanvas-title', this.structure, 'repair');

    }.bind(this));

  }


  initPowerSubmenuEventListeners() {
    const droidUi = new DroidUI();

    const searchHandler = async function() {
      const searchString = document.getElementById('offcanvas-search-input').value;
      droidUi.loadStructureSelectionListFromTargeting(
        'offcanvas-body',
        'offcanvas-title',
        this.structure,
        'drain',
        searchString
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

    document.getElementById('charge-command').addEventListener('click', function() {
      droidUi.loadSchematicSelectionList('offcanvas-body', 'offcanvas-title', this.structure, instance.address);
    }.bind(this));

    document.getElementById('main-menu-command').addEventListener('click', function() {
      const commandMenu = new DroidUICommandMenu(this.structure);
      document.getElementById('command-container').innerHTML = commandMenu.renderMainMenu();
      commandMenu.initMainMenuEventListeners();
    }.bind(this));


    document.getElementById('drain-structure-command').addEventListener('click', function() {
      const droidUi = new DroidUI();

      const searchHandler = async function() {
        const searchString = document.getElementById('offcanvas-search-input').value;
        droidUi.loadStructureSelectionListFromTargeting(
          'offcanvas-body',
          'offcanvas-title',
          this.structure,
          'drain',
          searchString
        );
      }.bind(this);
      document.getElementById('offcanvas-search-btn').addEventListener('click', searchHandler);
      document.getElementById('offcanvas-search-input').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          searchHandler(event);
        }
      });

      droidUi.loadStructureSelectionListFromTargeting('offcanvas-body', 'offcanvas-title', this.structure, 'drain');

    }.bind(this));

    document.getElementById('charge-command').addEventListener('click', function() {
      const commandMenu = new DroidUICommandMenu(this.structure);
      document.getElementById('command-container').innerHTML = commandMenu.renderPowerSlotSubmenu();
      commandMenu.initPowerSlotSubmenuEventListeners();
    }.bind(this));

  }


  initPowerSlotSubmenuEventListeners() {

    document.getElementById('main-menu-command').addEventListener('click', function() {
      const commandMenu = new DroidUICommandMenu(this.structure);
      document.getElementById('command-container').innerHTML = commandMenu.renderMainMenu();
      commandMenu.initMainMenuEventListeners();
    }.bind(this));

    if (this.structure.charging_slot.filter(x => x!="").length < this.structure.charging_slot_count) {
      // button to connect a new slot
      document.getElementById('charge-slot-connect-command').addEventListener('click', function () {
        let instance = new Instance();
        instance.lazyLoad();

        let slotInputModal = new DroidUIModelInput('connect-charge-slot-modal', 'Connect Charging Slot', '', '<h5 class="modal-title">Droid ID</h5>', instance.address, 'Connect', 'Cancel', this.ChargeSlotConnectCallBack.bind(this))
        // confirmButtonCallback = null,
        // cancelButtonCallback = null
        slotInputModal.init('modal-container');
        slotInputModal.show();

      }.bind(this));
    }

    for (let x = 0; x < this.structure.charging_slot.length; x++) {
      if (this.structure.charging_slot[x] != "") {
        document.getElementById("charge-slot-disconnect-command-" + x + '-' + this.structure.charging_slot[x]).addEventListener('click', function (event) {
          let instance = new Instance();
          instance.lazyLoad();

          let slotInputModal = new DroidUIModelInput('connect-charge-slot-modal', 'Disconnect Slot', '', '<h5 class="modal-title">Droid ID</h5>', this.structure.charging_slot[x], 'Disconnect', 'Cancel', this.ChargeSlotDisconnectCallBack.bind(this))
          // confirmButtonCallback = null,
          // cancelButtonCallback = null
          slotInputModal.init('modal-container');
          slotInputModal.show();

        }.bind(this));

      }
    }

  }





}
