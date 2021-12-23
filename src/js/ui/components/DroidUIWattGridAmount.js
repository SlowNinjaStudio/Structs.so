/**
 * Web UI component for large Watt Grid Balance.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {WattToString} from "../../vendor/WattToString";
import {REFRESH_TIME} from "../../Constants";


export class DroidUIWattGridAmount {
  /**
   * @param {Instance} instance
   */
  constructor(instance) {
    this.instance = instance;

    this.currentBalance = 0;
    this.lastBalance = 0;
    this.changeRate = 0;

    this.refresher;

    this.initiated = false;

    this.droidUi = new DroidUI();

    this.sectionWrapper;
  }

  render() {
    return `
      <div class="col">
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">My Struct Grid</p>
            ⚡️${(this.initiated) ? WattToString(this.currentBalance.amount) : 'Loading...'}
           </section>
           <section class="nes-container with-title">
            <p class="title">Change Rate</p>
            ⚡️${(this.initiated) ? WattToString((this.changeRate  / REFRESH_TIME.WATT_GRID_AMOUNT) * 3.6e+6, true) : 'Calculating...'}
            </section>
        </div>
      </div>

    `;
  }

  init(id) {
    this.sectionWrapper = document.getElementById(id);
    this.sectionWrapper.innerHTML = this.render();
    this.refresher =  setInterval(this.reload.bind(this), REFRESH_TIME.WATT_GRID_AMOUNT);
  }

  async reload() {

    this.currentBalance = await this.droidUi.droidApi.getWattGridTotal(this.instance.address);

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
