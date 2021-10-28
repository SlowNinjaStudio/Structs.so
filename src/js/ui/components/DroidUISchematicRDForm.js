import {Computer, processes, next_process_id} from "../../compute/Computer";
import {SchematicRD} from "../../compute/SchematicRD";
import {AMBITS, FEATURES} from "../../constants";
import {secondsToString} from "../../vendor/SecondsToString"
import {Instance} from "../../models/Instance"

import {DroidUIComputeStatus} from "./DroidUIComputeStatus"

/**
 * Web UI component for schematic.
 */
export class DroidUISchematicRDForm {
  constructor() {
    this.program = new SchematicRD();
    this.computer = new Computer();

    this.compute_status = new DroidUIComputeStatus();

    this.instance = new Instance();
    this.instance.lazyLoad();
  }
  render() {
    return `
      <div class="col">
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">Design Schematic</p>
            <p>
              <label>
                <input type="radio" class="nes-radio changing-option" id="form_mobility_mobile" name="form_mobility" value="Mobile" checked />
                <span>Mobile</span>
              </label>

              <label>
                <input type="radio" class="nes-radio changing-option" id="form_mobility_stationary" name="form_mobility" value="Stationary" />
                <span>Stationary</span>
              </label>
            </p>
            <p>
              <div class="nes-container with-title">
                <p class="title">Ambit(s)</p>
                <div class="nes-field">
                  <label for="form_ambit_land">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_ambit_land" name="ambits[0]" value="LAND"/>
                    <span>(<img src="/img/icons/icon-ambit-land.png" alt="Land Ambit Icon">)Land</span>
                  </label>

                  <label for="form_ambit_water">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_ambit_water" name="ambits[1]" value="WATER"/>
                    <span>(<img src="/img/icons/icon-ambit-water.png" alt="Water Ambit Icon">)Water</span>
                  </label>

                  <label for="form_ambit_sky">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_ambit_sky" name="ambits[2]" value="SKY"/>
                    <span>(<img src="/img/icons/icon-ambit-sky.png" alt="Sky Ambit Icon">)Sky</span>
                  </label>

                  <label for="form_ambit_space">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_ambit_space" name="ambits[3]" value="SPACE"/>
                    <span>(<img src="/img/icons/icon-ambit-space.png" alt="Space Ambit Icon">)Space</span>
                  </label>
                </div>
              </div>
            </p>
            <p>
              <div class="nes-container with-title">
                <p class="title">Feature(s)</p>
                <div class="nes-field">
                  <label for="form_feature_attack">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_feature_attack" name="features[]" value="ATTACK"/>
                    <span>(<img src="/img/icons/icon-attack-range.png" alt="Attack Icon">)Attack <span class="d-none d-xl-inline">Systems</span></span>
                  </label>

                  <label for="form_feature_defensive">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_feature_defensive" name="features[]" value="DEFENSIVE"/>
                    <span>(<img src="/img/icons/icon-def-melee.png" alt="Defense Icon">)Defense <span class="d-none d-xl-inline">Systems</span></span>
                  </label>

                  <label for="form_feature_engineering">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_feature_engineering" name="features[]" value="ENGINEERING"/>
                    <span>(<img src="/img/icons/icon-eng-build.png" alt="Engineering Icon">)Engineer<span class="d-none d-xl-inline">ing Systems</span></span>
                  </label>

                  <label for="form_feature_power">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_feature_power" name="features[]" value="POWER"/>
                    <span>(<img src="/img/icons/icon-power-charge.png" alt="Power Icon">)Power <span class="d-none d-xl-inline">Systems</span></span>
                  </label>

<!--                  <label for="form_feature_storage">-->
<!--                    <input type="checkbox" class="nes-checkbox changing-option" id="form_feature_storage" name="features[]" value="STORAGE"/>-->
<!--                    <span>Storage <span class="d-none d-xl-inline">Systems</span></span>-->
<!--                  </label>-->
                </div>
              </div>
            </p>
            <p>
              <div class="row">
                <div class="col">
                  <button type="button" class="nes-btn nes-btn-fluid is-primary" id="form_begin_research">Begin Research</button>
                </div>
                <div class="col-auto">
                  <button type="button" class="nes-btn is-warning" id="form_clear_research">Clear</button>
                </div>
              </div>
            </p>
          </section>
        </div>
      </div>
    `;
  }
  async init(id) {
    const formWrapper = document.getElementById(id);
    formWrapper.innerHTML = this.render();

    document.getElementById('compute_status').innerHTML = this.compute_status.render();
    this.compute_status.setProgram(this.program)

    this.instance = new Instance();
    await this.instance.init();
  }


  initMainButtonEventListeners() {
    document.getElementById('form_begin_research').addEventListener('click', this)
    document.getElementById('form_clear_research').addEventListener('click', this)
  }

  initOptionsEventListeners() {
    var itemSelection = document.getElementsByClassName('changing-option');

    for(var i = 0; i < itemSelection.length; i++) {
      itemSelection[i].addEventListener("change", this);
    }

  }

  handleEvent(e) {
    switch(e.type) {
        case "click":
          if (e.target.id == 'form_begin_research') {
            if (!document.getElementById('form_begin_research').disabled) {
             this.runProcess();
            }
          } else if (e.target.id == 'form_clear_research') {
            this.clearAll();
          }
        break;
        case "change":
            this.commitConfigurationToProgram();
        break;
    }
  }

  runProcess(){

    let process_button = document.getElementById('form_begin_research');
    process_button.disabled = true;

    process_button.classList.remove('is-primary');
    process_button.classList.add('is-disabled');

    let new_process_id = this.computer.add_process(this.program);
    this.computer.run_process(new_process_id);

    this.compute_status.setProcessID(new_process_id);
  }

  clearAll(){

    if (document.getElementById('compute_status_running_process_id').value != '') {
      this.computer.stop_process(document.getElementById('compute_status_running_process_id').value);
    }
    document.getElementById('form_begin_research').disabled = false;

    document.getElementById('form_begin_research').classList.remove('is-disabled');
    document.getElementById('form_begin_research').classList.add('is-primary');

    document.getElementById('found_schematic_list').innerHTML = '';

    document.getElementById('form_ambit_land').checked = false;
    document.getElementById('form_ambit_water').checked = false;
    document.getElementById('form_ambit_sky').checked = false;
    document.getElementById('form_ambit_space').checked = false;

    document.getElementById('form_feature_engineering').checked = false;
    document.getElementById('form_feature_defensive').checked = false;
    document.getElementById('form_feature_attack').checked = false;
   // document.getElementById('form_feature_storage').checked = false;
    document.getElementById('form_feature_power').checked = false;

    this.commitConfigurationToProgram();

  }

  commitConfigurationToProgram() {


      this.program.instance = this.instance.address;

      if (document.getElementById('form_mobility_mobile').checked) {
        this.program.is_mobile = true;
      } else {
        this.program.is_mobile = false;
      }

      // Check all the chosen ambits
      let ambits = [];
      if(document.getElementById('form_ambit_land').checked) {
        ambits.push(AMBITS.LAND)
      }

      if(document.getElementById('form_ambit_water').checked) {
        ambits.push(AMBITS.WATER)
      }

      if(document.getElementById('form_ambit_sky').checked) {
        ambits.push(AMBITS.SKY)
      }

      if(document.getElementById('form_ambit_space').checked) {
        ambits.push(AMBITS.SPACE)
      }

      this.program.ambits = ambits


      // Check all the chosen features
      let features = [];
      if(document.getElementById('form_feature_attack').checked) {
        features.push(FEATURES.ATTACK)
      }

      if(document.getElementById('form_feature_defensive').checked) {
        features.push(FEATURES.DEFENSIVE)
      }

      if(document.getElementById('form_feature_engineering').checked) {
        features.push(FEATURES.ENGINEERING)
      }

      if(document.getElementById('form_feature_power').checked) {
        features.push(FEATURES.POWER)
      }

      const formFeatureStorageElm = document.getElementById('form_feature_storage');
      if(formFeatureStorageElm !== null && formFeatureStorageElm.checked) {
        features.push(FEATURES.STORAGE)
      }
      this.program.features = features

      this.compute_status.setProgram(this.program)

  }

}


