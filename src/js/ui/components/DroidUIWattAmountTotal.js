/**
 * Web UI component for large Watt Balance.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {WattToString} from "../../vendor/WattToString";


export class DroidUIWattAmountTotal {
  /**
   * @param {Instance} instance
   */
  constructor(instance) {
    this.instance = instance;

    this.currentBalance = 0;
    this.sectionWrapper;

    this.droidUi = new DroidUI();
  }

  render() {
    return `
      <div class="col">
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">Total Watt Across Network</p>
            ⚡️${WattToString(this.currentBalance.amount)}
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
    this.currentBalance = await this.droidUi.droidApi.getWattTotal();
    this.sectionWrapper.innerHTML = this.render();

    setTimeout(this.reload.bind(this));
  }
}

