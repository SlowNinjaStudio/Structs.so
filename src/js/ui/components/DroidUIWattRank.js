/**
 * Web UI component for large Watt Balance.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {WattToString} from "../../vendor/WattToString";
import {REFRESH_TIME} from "../../Constants";
import {Droid} from "../../models/Droid";


export class DroidUIWattRank {
  /**
   * @param {Instance} instance
   */
  constructor(instance) {
    this.instance = instance;
    this.instances;

    this.foundX = 0;

    this.sectionWrapper;

    this.droidUi = new DroidUI();
  }

  render() {
    return `
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">Droid Rank</p>
            ️${this.renderDroids()}
            </section>
        </div>
    `;
  }

  renderDroids() {
    let rendered = '';
    let found = false;
    let endpoint = 0;

    if (typeof this.instances != '' && this.instances != null) {
      for (let x = 0; x < Math.min(this.instances.length, 10); x++) {
        rendered += `
            <p>
              <section class="nes-container with-title is-centered">
                  <p class="title center">#${x+1}</p>
                   ${(this.instances[x].name == '') ? (this.instances[x].address).substring(5,15) : this.instances[x].name}
                  <div class="game-asset-wrapper">
                      <canvas id="${this.instances[x].address}_rank_droid" class="pixel-art-viewer" width="64" height="64">
                          Your browser does not support the canvas element.
                      </canvas>
                  </div>
                  ${WattToString(parseInt(this.instances[x].wattUnderManagement))}
              </section>
            </p>
        `
        if (this.instances[x].address == this.instance.address) {
          found = true;
          this.foundX = x;
        }
        endpoint = x;
      }

      for(let x = endpoint; x < this.instances.length; x++) {
        if (this.instances[x].address == this.instance.address) {
          rendered += `
              <p>
                <section class="nes-container with-title is-centered">
                    <p class="title center">#${x+1}</p>
                     ${(this.instances[x].name == '') ? (this.instances[x].address).substring(5,15) : this.instances[x].name}
                    <div class="game-asset-wrapper">
                        <canvas id="${this.instances[x].address}_rank_droid" class="pixel-art-viewer" width="64" height="64">
                            Your browser does not support the canvas element.
                        </canvas>
                    </div>
                    ${WattToString(parseInt(this.instances[x].wattUnderManagement))}
                </section>
              </p>
            `
          this.foundX = x;
          break;
        }
      }
    }
    return rendered;
  }

  async init(id) {
    this.sectionWrapper = document.getElementById(id);

    await this.reload()
  }

  async reload() {
    this.instances = await this.droidUi.droidApi.getInstancesByAWUM();

    this.sectionWrapper.innerHTML = this.render();

    if (typeof this.instances != '' && this.instances != null) {
      this.droidUi.loadDroidToTarget(this.instances[this.foundX].address + '_rank_droid',this.instances[this.foundX].address)

      for (let x = 0; x < Math.min(this.instances.length, 10); x++) {
        this.droidUi.loadDroidToTarget(this.instances[x].address + '_rank_droid',this.instances[x].address)
      }
    }

    setTimeout(this.reload.bind(this), REFRESH_TIME.WATT_RANK);
  }
}
