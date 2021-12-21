/**
 * Web UI component for large Watt Balance.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {WattToString} from "../../vendor/WattToString";


export class DroidUIWattAmount {
  /**
   * @param {Instance} instance
   */
  constructor(instance) {
    this.instance = instance;

    this.currentBalance = 0;
    this.sectionWrapper;
  }

  render() {
    return `
      <div class="col">
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">Droid Watt</p>
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
    this.currentBalance = await this.instance.queryBalance();
    this.sectionWrapper.innerHTML = this.render();

    setTimeout(this.reload.bind(this));
  }
}
