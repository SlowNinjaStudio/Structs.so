/**
 * Web UI component for targeting structures.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {DroidUIModelInput} from "./DroidUIModalInput";


export class DroidUITargetMenu {
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
              id="target-attack-command"
              href="#offcanvas"
              data-bs-toggle="offcanvas"
              role="button"
              class="nes-btn is-error nes-btn-fluid"
            >
              Attack This
            </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <a
              id="target-repair-structure-command"
              href="#offcanvas"
              data-bs-toggle="offcanvas"
              role="button"
              class="nes-btn is-warning ${ (this.structure.health_current < this.structure.health_max) ? '' : 'is-disabled' } nes-btn-fluid"
              ${ (this.structure.health_current < this.structure.health_max) ? '' : 'disabled=disabled' }
            >
              Repair This
            </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <a
              id="target-drain-structure-command"
              href="#offcanvas"
              class="nes-btn is-success ${ (this.structure.health_current == 0) ? '' : 'is-disabled' } nes-btn-fluid"
              data-bs-toggle="offcanvas"
              role="button"
              ${ (this.structure.health_current == 0) ? '' : 'disabled=disabled' }
            >
              Drain This
            </a>
        </div>
      </div>
    `;
  }


  initMainMenuEventListeners() {



    document.getElementById('target-attack-command').addEventListener('click', function() {
      const droidUi = new DroidUI();

      const searchHandler = async function() {
        const searchString = document.getElementById('offcanvas-search-input').value;
        droidUi.loadStructureSelectionListFromPerforming(
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

      droidUi.loadStructureSelectionListFromPerforming('offcanvas-body', 'offcanvas-title', this.structure, 'attack');

    }.bind(this));


    document.getElementById('target-repair-structure-command').addEventListener('click', function() {
      const droidUi = new DroidUI();

      const searchHandler = async function() {
        const searchString = document.getElementById('offcanvas-search-input').value;
        droidUi.loadStructureSelectionListFromPerforming(
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

      droidUi.loadStructureSelectionListFromPerforming('offcanvas-body', 'offcanvas-title', this.structure, 'repair');

    }.bind(this));


    document.getElementById('target-drain-structure-command').addEventListener('click', function() {
      const droidUi = new DroidUI();

      const searchHandler = async function() {
        const searchString = document.getElementById('offcanvas-search-input').value;
        droidUi.loadStructureSelectionListFromPerforming(
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

      droidUi.loadStructureSelectionListFromPerforming('offcanvas-body', 'offcanvas-title', this.structure, 'drain');

    }.bind(this));

  }



}
