/**
 * Web UI component for large Watt Balance.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {WattToString} from "../../vendor/WattToString";


export class DroidUIWattRank {
  /**
   * @param {Instance} instance
   */
  constructor(instance) {
    this.instance = instance;

    this.currentRank = 0;
    this.activeDroidCount = 0;
    this.sectionWrapper;

    this.droidUi = new DroidUI();
  }

  render() {
    return `
      <div class="col">
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">Droid Rank</p>
            ️${this.currentRank} / ${this.activeDroidCount}
            </section>
        </div>
      </div>

    `;
  }

  async init(id) {
    this.sectionWrapper = document.getElementById(id);

    await this.reload()
  }

  async reload() {
    const instances = await this.droidUi.droidApi.getInstancesByAWUM();
    this.activeDroidCount = instances.length;
    for (let x = 0; x < instances.length; x++) {
      if (instances[x].address == this.instance.address) {
        this.currentRank = (x + 1);
        break;
      }
    }

    this.sectionWrapper.innerHTML = this.render();

    setTimeout(this.reload.bind(this));
  }
}
