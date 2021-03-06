import {DroidUIComputeStatus} from "./DroidUIComputeStatus";
import {Instance} from "../../models/Instance"
import {Structure} from "../../models/Structure"

import {DroidUISchematicRDForm} from "./DroidUISchematicRDForm"
import {DroidUISchematicCondensed} from "./DroidUISchematicCondensed";
import {DroidUISchematicCondensedCTANone} from "./DroidUISchematicCondensedCTANone";
import {DroidUI} from "../DroidUI";



/**
 * Web UI component for newly designed schematic.
 */
export class DroidUINewSchematic {
  constructor(schematic, instance, idPrefix = '') {
    this.schematic = schematic;
    this.idPrefix = idPrefix;
  }
  getCanvasId() {
    return `${this.idPrefix}schematic-${this.schematic.getHash()}`;
  }
  render() {
    return `
      <div class="schematic-result-wrapper">
        <div class="nes-container schematic-result-card">
          <div class="new-schematic-asset-wrapper">
            <canvas id="${this.getCanvasId()}" class="pixel-art-viewer" width="64" height="64">
              Your browser does not support the canvas element.
            </canvas>
          </div>
         <div class="nes-container with-title container-fluid">
            <div class="row">
              <div class="nes-field col">
                <label for="new_schematic_name">Name</label>
                <input type="text" id="new_schematic_name" class="nes-input" value="" >
              </div>
            </div>
            <div class="row">
              <div class="nes-field col">
                <label for="new_schematic_description">Description</label>
                <input type="text" id="new_schematic_description" class="nes-input" value="">
              </div>
            </div>
            <div class="row solo-action-wrapper">
              <div class="col">
                <a href="javascript:void(0)" id="new_schematic_patent_${this.schematic.getHash()}" class="nes-btn is-primary nes-btn-fluid">Patent</a>
              </div>
            </div>
          </div>

          <div class="nes-container with-title">
            <h3 class="title">Attributes</h3>
            <div class="details">

              <div><span class="attribute-label">Ambits:</span>
                ${this.schematic.hasAmbitWater() ? `
                  <img src="/img/icons/icon-ambit-water.png" alt="Water" title="Water"/> Water
                ` : ''}
                ${this.schematic.hasAmbitLand() ? `
                  <img src="/img/icons/icon-ambit-land.png" alt="Land" title="Land"/> Land
                ` : ''}
                ${this.schematic.hasAmbitSky() ? `
                  <img src="/img/icons/icon-ambit-sky.png" alt="Sky" title="Sky"/> Sky
                ` : ''}
                ${this.schematic.hasAmbitSpace() ? `
                  <img src="/img/icons/icon-ambit-space.png" alt="Space" title="Space"/> Space
                ` : ''}
              </div>
              <div><span class="attribute-label">Energy to Build:</span> Requires ${this.schematic.getEnergyToBuildAmount()} ${this.schematic.getEnergyToBuildDenom()}</div>
              <br>
              <div>
                <img src="/img/icons/icon-health.png" alt="Health Icon" class="structure-card-icon">
                <span class="attribute-label">Max Health:</span> ${this.schematic.getHealthMax()}
              </div>
              <div>
                <img src="/img/icons/icon-speed.png" alt="Speed Icon" class="structure-card-icon">
                <span class="attribute-label">Max Speed:</span> ${this.schematic.getSpeed()}
              </div>
              <div>
                <img src="/img/icons/icon-accuracy.png" alt="Accuracy Icon" class="structure-card-icon">
                <span class="attribute-label">Max Accuracy:</span> ${this.schematic.getAccuracy()}
              </div>
              <div>
                <img src="/img/icons/icon-mass.png" alt="Mass Icon" class="structure-card-icon">
                <span class="attribute-label">Max Mass:</span> ${this.schematic.getMass()}
              </div>
              <div>
                <img src="/img/icons/icon-strength.png" alt="Strength Icon" class="structure-card-icon">
                <span class="attribute-label">Max Strength:</span> ${this.schematic.getStrength()}
              </div>
              <div>
                <img src="/img/icons/icon-energy.png" alt="Energy Efficiency Icon" class="structure-card-icon">
                <span class="attribute-label">Max Energy Efficiency:</span> ${this.schematic.getEnergyEfficiency()}
              </div>
            </div>
          </div>
          ${(this.schematic.hasFeatureAttack()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Attack Systems</h3>
              <div class="details">
                <div>
                  <img src="/img/icons/icon-attack-melee.png" alt="Melee Attack Icon" class="structure-card-icon">
                  <span class="attribute-label">Max Melee Attack:</span> ${this.schematic.getMeleeAttack()}
                </div>
                <div>
                  <img src="/img/icons/icon-attack-range.png" alt="Range Attack Icon" class="structure-card-icon">
                  <span class="attribute-label">Max Range Attack:</span> ${this.schematic.getRangeAttack()}
                </div>
              </div>
            </div>
          ` : ''}
          ${(this.schematic.hasFeatureDefensive()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Defensive Systems</h3>
              <div class="details">
                <div>
                  <img src="/img/icons/icon-def-melee.png" alt="Melee Defense Icon" class="structure-card-icon">
                  <span class="attribute-label">Max Melee Defense:</span> ${this.schematic.getMeleeDefense()}
                </div>
                <div>
                  <img src="/img/icons/icon-def-range.png" alt="Range Defense Icon" class="structure-card-icon">
                  <span class="attribute-label">Max Range Defense:</span> ${this.schematic.getRangeDefense()}
                </div>
              </div>
            </div>
          ` : ''}
          ${(this.schematic.hasFeatureEngineering()) ? `
            <div class="nes-container with-title">
              <h3 class="title">Engineering Systems</h3>
              <div class="details">
                <div>
                  <img src="/img/icons/icon-eng-build.png" alt="Build Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Max Build Rate:</span> ${this.schematic.getBuildRate()}
                </div>
                <div>
                  <img src="/img/icons/icon-eng-restoration.png" alt="Restoration Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Max Restoration Rate:</span> ${this.schematic.getRestorationRate()}
                </div>
              </div>
            </div>
          ` : ''}
          ${(this.schematic.hasFeaturePower()) ?
            `<div class="nes-container with-title">
              <h3 class="title">Power Systems</h3>
              <div class="details">
                <div>
                  <img src="/img/icons/icon-power-generate.png" alt="Generation Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Max Generation Rate:</span> ${this.schematic.getGenerationRate()}
                </div>
                <div>
                  <img src="/img/icons/icon-power-charge.png" alt="Charge Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Max Charge Rate:</span> ${this.schematic.getChargeRate()}
                </div>
                <div>
                  <img src="/img/icons/icon-power-drain.png" alt="Drain Rate Icon" class="structure-card-icon">
                  <span class="attribute-label">Max Drain Rate:</span> ${this.schematic.getDrainRate()}
                </div>
              </div>
            </div>`
          : ''}
        </div>
      </div>
    `;
  }

  initMainPatentEventListeners() {
    document.getElementById('new_schematic_patent_' + this.schematic.getHash()).addEventListener('click', async function() {
      console.log('patenting new..');
      const instance = new Instance();
      await instance.init();

      const personalization = {
        name: document.getElementById('new_schematic_name').value,
        description: document.getElementById('new_schematic_description').value
      }

      const fee = {
        amount: [
          {
            denom: "watt",
            amount: "1",
          },
        ],
        gas: "180000",
      };

      try {
        let tx_results = await instance.performPatent(this.schematic, personalization, fee)

        if (typeof tx_results.data != 'undefined') {
          let rd_form = new DroidUISchematicRDForm();

          rd_form.clearAll()
          //Move this into DroidUI

          this.schematic.name = personalization.name;
          this.schematic.description = personalization.description;

          (new DroidUI()).loadSchematicPatentedModal(this.schematic);
        }
      } catch(err) {
        console.log(err)
      }
    }.bind(this));
  }
}
