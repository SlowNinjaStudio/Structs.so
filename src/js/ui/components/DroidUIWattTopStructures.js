/**
 * Web UI component for large Watt Balance.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {WattToString} from "../../vendor/WattToString";
import {REFRESH_TIME} from "../../Constants";
import {Droid} from "../../models/Droid";


export class DroidUIWattTopStructures {
  /**
   * @param {Instance} instance
   */
  constructor(instance) {
    this.instance = instance;
    this.structures;

    this.foundX = 0;

    this.sectionWrapper;

    this.droidUi = new DroidUI();
  }

  render() {
    return `
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">Struct Rank</p>
              <ol>
                  ️${this.renderStructures()}
              </ol>
            </section>
        </div>
    `;
  }

  renderStructures() {
    let rendered = '';
    let found = false;
    let endpoint = 0;

    if (typeof this.structures != '' && this.structures != null) {
      for (let x = 0; x < Math.min(this.structures.length, 10); x++) {
        rendered += `
          <li>
            <a href="/structure.html?structure_id=${this.structures[x].id}">
                ${(this.structures[x].name == '') ? (this.structures[x].hash).substring(5,15) : this.structures[x].name}

                (${WattToString(parseInt(this.structures[x].battery.amount))})
            </a>
          </li>
        `
      }

    }
    return rendered;
  }

  async init(id) {
    this.sectionWrapper = document.getElementById(id);

    await this.reload()
  }

  async reload() {
    this.structures = await this.droidUi.droidApi.getTopTenStructures();
    this.sectionWrapper.innerHTML = this.render();

    setTimeout(this.reload.bind(this), REFRESH_TIME.WATT_STRUCTURE_RANK);
  }
}
