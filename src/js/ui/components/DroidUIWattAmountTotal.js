/**
 * Web UI component for large Watt Balance.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {WattToString} from "../../vendor/WattToString";
import {REFRESH_TIME} from "../../Constants";


export class DroidUIWattAmountTotal {
  /**
   * @param {Instance} instance
   */
  constructor(instance) {
    this.instance = instance;

    this.currentBalance = 0;
    this.lastBalance = 0;
    this.changeRate = 0;

    this.sectionWrapper;

    this.initiated = false;
    this.refresher;

    this.droidUi = new DroidUI();
  }

  render() {
    return `
      <div class="col">
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">Total Watt Across Network</p>
            ⚡️${(this.initiated) ? WattToString(this.currentBalance.amount) : 'Loading...'}
          </section>
          <section class="nes-container with-title">
            <p class="title">Change Rate</p>
            ⚡️️${(this.initiated) ? WattToString((this.changeRate  / REFRESH_TIME.WATT_AMOUNT_TOTAL) * 3.6e+6, true) : 'Calculating...'}
            </section>
        </div>
      </div>

    `;
  }

  async init(id) {
    this.sectionWrapper = document.getElementById(id);
    this.sectionWrapper.innerHTML = this.render();

    this.refresher =  setInterval(this.reload.bind(this), REFRESH_TIME.WATT_AMOUNT_TOTAL);
  }

  async reload() {
    this.currentBalance = await this.droidUi.droidApi.getWattTotal();

    this.sectionWrapper.innerHTML = this.render();

    if (this.initiated) {
      this.lastBalance    = (parseInt(this.currentBalance.amount) + parseInt(this.lastBalance)) / 2
      this.changeRate     = (this.currentBalance.amount - this.lastBalance)

    } else {
      this.lastBalance = this.currentBalance.amount
      this.initiated = true;
    }

  }
}

