import {Computer} from "../../compute/Computer";
import {CONFIG} from "../../constants";
import {secondsToString} from "../../vendor/SecondsToString"

/**
 * Web UI component for schematic.
 */
export class DroidUIStructureHealthProgress {

  /**
   *
   */
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

  /**
   * @param {StructureAttack|StructureRepair} program
   */
  init(program){
    this.program = program;

    document.getElementById('health_status_progress_bar_cpu').max   = this.program.target_structure.health_max;
    this.setCurrentHealth(this.program.target_structure.health_current);
  }

  /**
   * @param {number} amount
   */
  decrementHealth(amount) {
    const progressBar = document.getElementById('health_status_progress_bar_cpu');
    const new_health = Math.max(0, progressBar.value - amount)

    this.setCurrentHealth(new_health, progressBar);
  }

  /**
   * @param {number} amount
   */
  incrementHealth(amount){
    const progressBar = document.getElementById('health_status_progress_bar_cpu');
    const new_health = Math.min(progressBar.value + amount, progressBar.max );

    this.setCurrentHealth(new_health, progressBar);
  }

  /**
   * @param {number} newAmount
   * @param {Element} progressBar
   */
  setCurrentHealth(newAmount, progressBar = document.getElementById('health_status_progress_bar_cpu')) {
    progressBar.value = newAmount;

    const health_percent = Math.round(( newAmount / progressBar.max) * 100)
    document.getElementById('health_status_progress_cpu_value').innerHTML = health_percent

    if (health_percent < 25) {
      this.setHealthBoxColour('is-error', progressBar);
    } else if (health_percent < 50 ) {
      this.setHealthBoxColour('is-warning', progressBar);
    } else {
      this.setHealthBoxColour('is-success', progressBar);
    }
  }

  /**
   * @param {string} colorClass
   * @param {Element} progressBar
   */
  setHealthBoxColour(colorClass, progressBar = document.getElementById('health_status_progress_bar_cpu')) {
    // Clear all the possible colour classes
    progressBar.classList.remove('is-error');
    progressBar.classList.remove('is-warning');
    progressBar.classList.remove('is-success');

    // Apply the new one
    progressBar.classList.add(colorClass);
  }

}


