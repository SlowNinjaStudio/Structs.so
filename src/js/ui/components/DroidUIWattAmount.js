/**
 * Web UI component for large Watt Balance.
 */
import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {WattToString} from "../../vendor/WattToString";
import {REFRESH_TIME} from "../../Constants";


export class DroidUIWattAmount {
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

    this.sectionWrapper;
  }

  render() {
    return `
      <div class="col">
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">Droid Watt</p>
            ⚡️${(this.initiated) ? WattToString(this.currentBalance.amount) : 'Loading...'}
           </section>
           <section class="nes-container with-title">
            <p class="title">Change Rate</p>
            ⚡️${(this.initiated) ? WattToString((this.changeRate  / REFRESH_TIME.WATT_AMOUNT) * 3.6e+6, true) : 'Calculating...'}
            </section>
        </div>
      </div>

    `;
  }

  init(id) {
    this.sectionWrapper = document.getElementById(id);
    this.sectionWrapper.innerHTML = this.render();
    this.refresher =  setInterval(this.reload.bind(this), REFRESH_TIME.WATT_AMOUNT);
  }

  async reload() {

    this.currentBalance = await this.instance.queryBalance();

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
