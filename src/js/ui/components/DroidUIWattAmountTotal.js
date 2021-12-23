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
            ⚡️${(this.initiated) ? WattToString(this.currentBalance) : 'Loading...'}
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

    // Get the wallet balances
    const walletBalances = await this.droidUi.droidApi.getWattTotal();
    this.currentBalance = parseInt(walletBalances.amount)
    // Then add all the structure balances
    const instanceBalances =  await this.droidUi.droidApi.getInstancesByAWUM();
    if (typeof instanceBalances != '' && instanceBalances != null) {
      for (let x = 0; x < instanceBalances.length; x++) {
        this.currentBalance += parseInt(instanceBalances[x].wattUnderManagement)
      }
    }

    this.sectionWrapper.innerHTML = this.render();

    if (this.initiated) {
      this.lastBalance    = (parseInt(this.currentBalance) + parseInt(this.lastBalance)) / 2
      this.changeRate     = (this.currentBalance - this.lastBalance)

    } else {
      this.lastBalance = this.currentBalance
      this.initiated = true;
    }

  }
}

