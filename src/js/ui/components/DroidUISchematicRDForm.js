import {Computer, processes, next_process_id} from "../../compute/Computer";
import {SchematicRD} from "../../compute/SchematicRD";
import {AMBITS, FEATURES} from "../../constants";
import {secondsToString} from "../../vendor/SecondsToString"


import {DroidUIComputeStatus} from "./DroidUIComputeStatus"

/**
 * Web UI component for schematic.
 */
export class DroidUISchematicRDForm {
  constructor() {
    this.program = new SchematicRD();
    this.computer = new Computer();

    this.compute_status = new DroidUIComputeStatus();
  }
  render() {
    return `
 
        <div class="nes-container schematic-design-card">
          <section class="nes-container with-title">
            <p class="title">Design Schematic</p>
            <p>
              <label>
                <input type="radio" class="nes-radio changing-option" id="form_mobility" name="form_mobility" value="Mobile" checked />
                <span>Mobile</span>
              </label>

              <label>
                <input type="radio" class="nes-radio changing-option" id="form_mobility" name="form_mobility" value="Stationary" />
                <span>Stationary</span>
              </label>
            </p>
            <p>
              <div class="nes-container with-title">
                <p class="title">Ambit(s)</p>
                <div class="nes-field">
                  <label for="form_ambit_land">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_ambit_land" name="ambits[0]" value="LAND"/>
                    <span>Land</span>
                  </label>

                  <label for="form_ambit_water">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_ambit_water" name="ambits[1]" value="WATER"/>
                    <span>Water</span>
                  </label>


                  <label for="form_ambit_sky">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_ambit_sky" name="ambits[2]" value="SKY"/>
                    <span>Sky</span>
                  </label>

                  <label for="form_ambit_space">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_ambit_space" name="ambits[3]" value="SPACE"/>
                    <span>Space</span>
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
                    <span>Attack Systems</span>
                  </label>

                  <label for="form_feature_defensive">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_feature_defensive" name="features[]" value="DEFENSIVE"/>
                    <span>Defensive Systems</span>
                  </label>


                  <label for="form_feature_engineering">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_feature_engineering" name="features[]" value="ENGINEERING"/>
                    <span>Engineering Systems</span>
                  </label>

                  <label for="form_feature_power">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_feature_power" name="features[]" value="POWER"/>
                    <span>Power Systems</span>
                  </label>

                  <label for="form_feature_storage">
                    <input type="checkbox" class="nes-checkbox changing-option" id="form_feature_storage" name="features[]" value="STORAGE"/>
                    <span>Storage Systems</span>
                  </label>
                </div>
              </div>
            </p>
            <p>
              <button type="button" class="nes-btn is-primary" id="form_begin_research">Begin Research</button>
              <button type="button" class="nes-btn is-warning" id="form_clear_research">Clear</button>
            </p>
          </section>

    `;
  }
  init(id) {
    const formWrapper = document.getElementById(id);
    formWrapper.innerHTML = this.render();
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

    this.computer.stop_process(document.getElementById('compute_status_running_process_id').value);

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
    document.getElementById('form_feature_storage').checked = false;
    document.getElementById('form_feature_power').checked = false;

    this.commitConfigurationToProgram();

  }

  commitConfigurationToProgram() {


      this.program.instance = 'battery14nwxc4c4dxugugaqv0em6npfyt8su2v9k3prud'
  
      if (document.getElementById('form_mobility').value == 'Mobile') {
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

      if(document.getElementById('form_feature_storage').checked) {
        features.push(FEATURES.STORAGE)
      }      
      this.program.features = features    

      this.compute_status.init('compute_status', this.program)  
  
  }

}


