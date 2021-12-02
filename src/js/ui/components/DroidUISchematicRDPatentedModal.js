/**
 * Web UI modal component for research results.
 */
import {DroidUINewSchematicCondensed} from "./DroidUINewSchematicCondensed"

export class DroidUISchematicRDPatentedModal {
  /**
   * @param {Schematic} schematic
   */
  constructor(schematic) {
    this.schematic = schematic;
    this.schematicCondensed = new DroidUINewSchematicCondensed(this.schematic);
  }

  render() {
    return `
      <div id="patent-status-dialog" class="modal" tabindex="0">
        <div class="modal-dialog">
          <div class="modal-content align-items-center">
            <div class="modal-header">
               <h6 class="modal-title">🎉Schematic Patented🎉</h6>
            </div>
            <div class="modal-body">
                ${this.schematicCondensed.render()}
            </div>
            <div class="modal-footer">
              <div class="col">
                <button class="nes-btn is-success" id="patent-status-dialog-button">Celebratory Robo-Click</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  showModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("patent-status-dialog").style.display = "block"
    document.getElementById("patent-status-dialog").classList.add("show")
  }

  destroyModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("patent-status-dialog").style.display = "none"
    document.getElementById("patent-status-dialog").classList.remove("show")

    document.getElementById("modal-container").innerHTML  = ""
  }

  initEventListeners() {
    document.getElementById('patent-status-dialog-button').addEventListener('click', function() {
      this.destroyModal()
    }.bind(this));
  }

}
