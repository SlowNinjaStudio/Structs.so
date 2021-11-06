import {Computer} from "../../compute/Computer";
import {CONFIG} from "../../constants";
import {secondsToString} from "../../vendor/SecondsToString"

/**
 * Web UI component for schematic.
 */
export class DroidUIStructureHealthProgress {
  constructor() {
    this.program;
  }
  render() {
    return `
      <div class="col">
        <div class="compute-status-card">
          <section class="nes-container with-title">
          <p class="title">Target Health</p>
            <div class="nes-field is-inline">
              <label for="health_status_progress_bar_cpu">Est.(<span id="health_status_progress_cpu_value">0</span>%)</label>
              <progress id="health_status_progress_bar_cpu" class="nes-progress is-primary is-pattern" value="0" max="100"></progress>
            </div>
          </section>
        </div>
      </div>
    `;
  }

  init(program){
    this.program = program;

    document.getElementById('health_status_progress_bar_cpu').max   = this.program.target_structure.health_max;
    this.setCurrentHealth(this.program.target_structure.health_current);
  }

  decrementHealth(amount) {

    let new_health = document.getElementById('health_status_progress_bar_cpu').value - amount
    if (new_health < 0) { new_health = 0; }

    this.setCurrentHealth(new_health);
  }

  incrementHealth(amount){
    let new_health = document.getElementById('health_status_progress_bar_cpu').value + amount
    if (new_health > document.getElementById('health_status_progress_bar_cpu').max) { new_health = document.getElementById('health_status_progress_bar_cpu').max; }

    this.setCurrentHealth(new_health);
  }

  setCurrentHealth(new_health) {
    document.getElementById('health_status_progress_bar_cpu').value = new_health;

    let health_percent = Math.round(( new_health / document.getElementById('health_status_progress_bar_cpu').max) * 100)
    document.getElementById('health_status_progress_cpu_value').innerHTML = health_percent

    if (health_percent < 25) {
      this.setHealthBoxColour('is-error');
    } else if (health_percent < 50 ) {
      this.setHealthBoxColour('is-warning');
    } else {
      this.setHealthBoxColour('is-success');
    }
  }

  setHealthBoxColour(color_class) {
    // Clear all the possible colour classes
    document.getElementById('health_status_progress_bar_cpu').classList.remove('is-error');
    document.getElementById('health_status_progress_bar_cpu').classList.remove('is-warning');
    document.getElementById('health_status_progress_bar_cpu').classList.remove('is-success');

    // Apply the new one
    document.getElementById('health_status_progress_bar_cpu').classList.add(color_class);
  }

}


