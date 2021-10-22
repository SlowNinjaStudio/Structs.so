import {Computer, processes, next_process_id} from "../../compute/Computer";
import {SchematicRD} from "../../compute/SchematicRD";
import {AMBITS, FEATURES, CONFIG} from "../../constants";
import {secondsToString} from "../../vendor/SecondsToString"



/**
 * Web UI component for schematic.
 */
export class DroidUIComputeStatus {
  constructor() {
    
    this.computer = new Computer();
    this.program;
    this.program_difficulty = 0;

    this.time_estimate_box = document.getElementById('compute_status_time_estimate_human');
    this.progress_bar_cpu = document.getElementById('compute_status_progress_bar_cpu');
    this.progress_bar_cpu_value = document.getElementById('compute_status_progress_cpu_value');
  }
  render() {
    return `
 
        <div class="nes-container compute-status-card">
          <section class="nes-container with-title">
          <p class="title">Status</p>
            <div class="nes-field">
              <label for="compute_status_time_estimate_human">Expected Time to Research</label>
              <input type="text" id="compute_status_time_estimate_human" class="nes-input is-success" value="Instant Discovery Likely" disabled>
            </div>
              <p>
                <div class="nes-field is-inline">
                  <label for="compute_status_progress_bar_cpu">Est.(<span id="compute_status_progress_cpu_value">0</span>%)</label>
                  <progress id="compute_status_progress_bar_cpu" class="nes-progress is-primary is-pattern" value="0" max="100"></progress>
                </div>
              </p>
              <input type="text" value="" id="compute_status_running_process_id" hidden=hidden />
          </section>
        </div>
    `;
  }
  init(id, program) {
    const formWrapper = document.getElementById(id);
    formWrapper.innerHTML = this.render();

    this.program = program;
    this.program_difficulty = this.program.generateDifficulty();

    this.time_estimate_box = document.getElementById('compute_status_time_estimate_human');
  
    this.progress_bar_cpu = document.getElementById('compute_status_progress_bar_cpu');
    this.progress_bar_cpu.value = 0;
    this.progress_bar_cpu.max = this.program_difficulty;

    let estimated_seconds = this.program_difficulty / CONFIG.INITIAL_HASHRATE;
    this.setTimeEstimateBox(estimated_seconds);

  }


  initMainButtonEventListeners() {
    //Unused
  }


  handleEvent(e) {
    switch(e.type) {
        case "click":
          //Unused
        break;
        case "change":
          //Unused
        break;
    }
  }
  setProcessID(process_id) {
    document.getElementById('compute_status_running_process_id').value = process_id;
  }

  stopProcess(){
    this.computer.stop_process(document.getElementById('compute_status_running_process_id').value);
  }

  setTimeEstimateBox(estimated_seconds) {
    this.time_estimate_box.value = secondsToString(estimated_seconds);

    if (estimated_seconds > 86400) {
      this.setTimeEstimateBoxColour('is-error');
    } else if (estimated_seconds > 3600 * 6) {
      this.setTimeEstimateBoxColour('is-warning');
    } else {
      this.setTimeEstimateBoxColour('is-success');
    }
  }

  setTimeEstimateBoxColour(color_class) {
    // Clear all the possible colour classes
    this.time_estimate_box.classList.remove('is-error');
    this.time_estimate_box.classList.remove('is-warning');
    this.time_estimate_box.classList.remove('is-success'); 

    // Apply the new one
   this.time_estimate_box.classList.add(color_class); 
  }

  updateStatus(completed_effort, hashes_per_second, difficulty) {
    let percent_complete = Math.round((completed_effort / difficulty ) * 100)
    let estimated_seconds = (difficulty - completed_effort) / hashes_per_second

    this.progress_bar_cpu.value = completed_effort;
    this.progress_bar_cpu_value.innerHTML = percent_complete;
    this.setTimeEstimateBox(estimated_seconds)

  }

  setComplete(){
    this.progress_bar_cpu.value = this.progress_bar_cpu.max
    this.progress_bar_cpu_value = '100'
    this.time_estimate_box.value = 'Research Complete!';
  }

}


