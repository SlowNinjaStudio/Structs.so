import {Computer} from "../../compute/Computer";
import {CONFIG} from "../../constants";
import {secondsToString} from "../../vendor/SecondsToString"

/**
 * Web UI component for schematic.
 */
export class DroidUIComputeStatus {
  constructor(isModal = false) {
    this.isModal = isModal;

    this.computer = new Computer();
    this.program_difficulty = 0;

  }
  render() {
    return `
      <div class="col">
        <div class="${this.isModal ? '' : 'nes-container'} compute-status-card">
          <section class="nes-container with-title">
          <p class="title">Status</p>
            <div class="nes-field">
              <label for="compute_status_time_estimate_human" id="compute_status_time_label">Expected Time to Compute</label>
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
      </div>
    `;
  }


  setProgram(program){
    this.program = program;
    this.program_difficulty = this.program.generateDifficulty();

    document.getElementById('compute_status_progress_bar_cpu').value = 0;
    document.getElementById('compute_status_progress_bar_cpu').max = this.program_difficulty;

    let estimated_seconds = this.program_difficulty / CONFIG.INITIAL_HASHRATE;
    this.setTimeEstimateBox(estimated_seconds);
  }

  setProcessID(process_id) {
    document.getElementById('compute_status_running_process_id').value = process_id;
  }

  stopProcess(){
    this.computer.stop_process(document.getElementById('compute_status_running_process_id').value);
  }

  setTimeEstimateBox(estimated_seconds) {
    document.getElementById('compute_status_time_estimate_human').value = secondsToString(estimated_seconds);

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
    document.getElementById('compute_status_time_estimate_human').classList.remove('is-error');
    document.getElementById('compute_status_time_estimate_human').classList.remove('is-warning');
    document.getElementById('compute_status_time_estimate_human').classList.remove('is-success');

    // Apply the new one
    document.getElementById('compute_status_time_estimate_human').classList.add(color_class);
  }

  updateStatus(completed_effort, hashes_per_second, difficulty) {
    let percent_complete = Math.round((completed_effort / difficulty ) * 100)
    let estimated_seconds = (difficulty - completed_effort) / hashes_per_second

    document.getElementById('compute_status_progress_bar_cpu').value = completed_effort;
    document.getElementById('compute_status_progress_cpu_value').innerHTML = percent_complete;
    this.setTimeEstimateBox(estimated_seconds)

  }

  setComplete(){
    document.getElementById('compute_status_progress_bar_cpu').value = document.getElementById('compute_status_progress_bar_cpu').max
    document.getElementById('compute_status_progress_cpu_value').innerHTML = '100'
    document.getElementById('compute_status_time_estimate_human').value = 'Task Complete!';
  }

  setError(error_message) {
    document.getElementById('compute_status_time_label').innerHTML = 'Compute Error!'
    document.getElementById('compute_status_time_estimate_human').value = error_message;

    document.getElementById('compute_status_time_estimate_human').classList.remove('is-warning');
    document.getElementById('compute_status_time_estimate_human').classList.remove('is-success');
    document.getElementById('compute_status_time_estimate_human').classList.add('is-error');

  }
}


