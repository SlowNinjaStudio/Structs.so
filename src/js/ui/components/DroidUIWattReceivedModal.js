/**
 * Web UI component for structures.
 */
import {DroidUI} from "../DroidUI";

export class DroidUIWattReceivedModal {
  /**
   * @param {number} amount
   */
  constructor(amount) {
    this.amount = amount
  }

  render() {
    return `
      <div id="watt-received-dialog" class="modal" tabindex="0">
        <div class="modal-dialog">
          <div class="modal-content align-items-center">
            <div class="modal-header">
               <h6 class="modal-title">⚡️Transmission Received⚡️</h6>
            </div>
            <div class="modal-body">
              <h2><span id="amount_received">${this.amount}</span></h2>
            </div>
            <div class="modal-footer">
              <div class="col">
                <button class="nes-btn is-success" id="watt-received-dialog-button">Celebratory Robo-Click</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    `;
  }

  showModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("watt-received-dialog").style.display = "block"
    document.getElementById("watt-received-dialog").classList.add("show")
  }

  destroyModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("watt-received-dialog").style.display = "none"
    document.getElementById("watt-received-dialog").classList.remove("show")

    document.getElementById("modal-container").innerHTML  = ""
  }

  initEventListeners() {
    document.getElementById('watt-received-dialog-button').addEventListener('click', function() {
      this.destroyModal()
    }.bind(this));
  }

}
