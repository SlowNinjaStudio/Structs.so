import {AMBITS, FEATURES} from "../constants";
import {decimalToHex} from "../vendor/DecimalToHex";

import {Schematic} from "../models/Schematic";
import {Structure} from "../models/Structure";
import {DroidUIComputeStatus} from "../ui/components/DroidUIComputeStatus";
import {Instance} from "../models/Instance";

/* StructureBuild
 * Used for retooling a structure to build a new schematic
 *
 * Prepares the details for passing
 * into a ComputeProcess object.
 *
 *  generatePattern()
 *  generateDifficulty()
 *
 */

export class StructureBuild {
  constructor() {
    this.type = 'Structure Retooling';

    // Details for building the hash prefix.
    this.instance = '';
    this.hashing_node = '';
    this.nonsense = '';

    this.performing_structure;
    this.schematic;

    this.energy_efficiency = false;
    this.energy_efficiency_min = 0;
    this.energy_efficiency_max = 255;

    this.mass = false;
    this.mass_min = 0;
    this.mass_max = 255;

    this.strength = false;
    this.strength_min = 0;
    this.strength_max = 255;

    this.speed = false;
    this.speed_min = 0;
    this.speed_max = 255;

    this.accuracy = false;
    this.accuracy_min = 0;
    this.accuracy_max = 255;
  }

  getInputPrefix(){
    return this.instance + 'structure' + this.performing_structure.id + 'schematic' + this.schematic.hash + this.hashing_node + this.nonsense;
  }

  /**
   *
   * @param {Schematic} schematic
   */
  setTargetObject(schematic){
    this.setSchematic(schematic)
  }

  /**
   * @param {Schematic} newSchematic
   */
  setSchematic(newSchematic) {
    if (typeof newSchematic == 'undefined') {
      // TODO better error handling
      alert('Malformed structure object')
      return;
    }

    // If there is a performing structure set already, we should
    // make sure this structure is compatible with it. If no schema is
    // set, we can skip and proceed safely.
    //
    // The same checks will be performed when a schema is added.
    if (typeof this.performing_structure != 'undefined' && this.performing_structure != null){
      if (!this.performing_structure.sharesAmbit(newSchematic.ambits)){
        // TODO some sort of better error handling
        alert('No shared ambit');
        return;
      }
    }

    this.schematic = newSchematic;
  }

  /**
   * @param {Structure} structure
   */
  setPerformingStructure(structure) {
    if (typeof structure == 'undefined') {
      // TODO better error handling
      alert('Malformed structure object')
      return;
    }

    // If there is a schema set already, we should make sure
    // this structure is compatible with it. If no schema is
    // set, we can skip and proceed safely.
    //
    // The same checks will be performed when a schema is added.
    if (typeof this.schematic != 'undefined' && this.schematic != null){
      if (!structure.sharesAmbit(this.schematic.ambits)){
        // TODO some sort of better error handling
        alert('No shared ambit');
        return;
      }
    }

    if (!structure.hasFeatureEngineering()) {
      // TODO some sort of better error handling
      alert('No engineering capabilities');
      return;
    }

    this.performing_structure = structure;
  }

  patternPieceFeatureEngineering() {
    return this.schematic.hasFeatureEngineering() ? '111' : '...'
  }

  patternPieceFeatureStorage() {
    return this.schematic.hasFeatureStorage() ? '11' : '..'
  }

  patternPieceFeatureDefensive() {
    return this.schematic.hasFeatureDefensive() ? '1' : '.'
  }

  patternPieceFeatureAttack() {
    return this.schematic.hasFeatureAttack() ? '1' : '.'
  }

  patternPieceFeaturePower() {
    return this.schematic.hasFeaturePower() ? '1' : '.'
  }

  patternPieceAmbitSpace() {
    return this.schematic.hasAmbitSpace() ? '111' : '...'
  }

  patternPieceAmbitSky() {
    return this.schematic.hasAmbitSky() ? '11' : '..'
  }

  patternPieceAmbitWater() {
    return this.schematic.hasAmbitWater() ? '11' : '..'
  }

  patternPieceAmbitLand() {
    return this.schematic.hasAmbitLand() ? '1' : '.'
  }

  patternPieceMobility() {
    let pattern = ''

    if (this.schematic.isMobile() == null) {
      pattern = '.'
    } else {
      pattern = this.schematic.isMobile() ? '1' : '[abcdef023456789]'
    }
    return pattern;
  }

  patternPieceEnergyEfficiency() {
    let series = [];
    let pattern = '';

    if (this.energy_efficiency) {
      for (let i = this.energy_efficiency_min; i <= this.energy_efficiency_max; i++) {
        series.push(decimalToHex(i, 2));
      }
      pattern = series.join('|');
    }

    return this.energy_efficiency ? '(' + pattern + ')': '..'
  }

  patternPieceMass() {
    let series = [];
    let pattern = '';

    if (this.mass) {
      for (let i = this.mass_min; i <= this.mass_max; i++) {
        series.push(decimalToHex(i, 2));
      }
      pattern = series.join('|');
    }

    return this.mass ? '(' + pattern + ')': '..'
  }

  patternPieceStrength() {
    let series = [];
    let pattern = '';

    if (this.strength) {
      for (let i = this.strength_min; i <= this.strength_max; i++) {
        series.push(decimalToHex(i, 2));
      }
      pattern = series.join('|');
    }

    return this.strength ? '(' + pattern + ')': '..'
  }

  patternPieceSpeed() {
    let series = [];
    let pattern = '';

    if (this.speed) {
      for (let i = this.speed_min; i <= this.speed_max; i++) {
        series.push(decimalToHex(i, 2));
      }
      pattern = series.join('|');
    }

    return this.speed ? '(' + pattern + ')': '..'
  }

  patternPieceAccuracy() {
    let series = [];
    let pattern = '';

    if (this.accuracy) {
      for (let i = this.accuracy_min; i <= this.accuracy_max; i++) {
        series.push(decimalToHex(i, 2));
      }
      pattern = series.join('|');
    }

    return this.accuracy ? '(' + pattern + ')': '..'
  }

  generatePattern() {
    var patternString = '';

    // Features
    patternString += this.patternPieceFeatureEngineering();
    patternString += this.patternPieceFeatureStorage();
    patternString += this.patternPieceFeatureDefensive();
    patternString += this.patternPieceFeatureAttack();
    patternString += this.patternPieceFeaturePower();

    // Ambits
    patternString += this.patternPieceAmbitSpace();
    patternString += this.patternPieceAmbitSky();
    patternString += this.patternPieceAmbitWater();
    patternString += this.patternPieceAmbitLand();

    // Mobility
    patternString += this.patternPieceMobility();

    //Attributes
    patternString += this.patternPieceEnergyEfficiency();
    patternString += this.patternPieceMass();
    patternString += this.patternPieceStrength();
    patternString += this.patternPieceSpeed();
    patternString += this.patternPieceAccuracy();

    console.log(patternString)

    let buildPattern = new RegExp('^' + patternString + '.*' );
    return buildPattern;
  }


  difficultyFeatureEngineering() {
    return Math.pow(16, this.schematic.hasFeatureEngineering() ? 3 : 0)
  }

  difficultyFeatureStorage() {
    return Math.pow(16, this.schematic.hasFeatureStorage() ? 2 : 0)
  }

  difficultyFeatureDefensive() {
    return Math.pow(16, this.schematic.hasFeatureDefensive() ? 1 : 0)
  }

  difficultyFeatureAttack() {
    return Math.pow(16, this.schematic.hasFeatureAttack() ? 1 : 0)
  }

  difficultyFeaturePower() {
    return Math.pow(16, this.schematic.hasFeaturePower() ? 1 : 0)
  }

  difficultyAmbitSpace() {
    return Math.pow(16, this.schematic.hasAmbitSpace() ? 3 : 0)
  }

  difficultyAmbitSky() {
    return Math.pow(16, this.schematic.hasAmbitSky() ? 2 : 0)
  }

  difficultyAmbitWater() {
    return Math.pow(16, this.schematic.hasAmbitWater() ? 2 : 0)
  }

  difficultyAmbitLand() {
    return Math.pow(16, this.schematic.hasAmbitLand() ? 1 : 0)
  }

  difficultyMobility() {
    let difficulty = 0

    if (this.schematic.isMobile() == null) {
      difficulty = Math.pow(16, 0)

    } else if (this.schematic.isMobile()) {
      difficulty = Math.pow(16, 1)

    } else {
      // This is wrong but I don't know how to
      // deal with a 15/16 chance
      difficulty = 1
    }
    return difficulty;
  }


  difficultyEnergyEfficiency() {
    let difficulty = 1;

    if (this.energy_efficiency) {
       let difference = this.energy_efficiency_max - this.energy_efficiency_min;
       difficulty = 256 - difference;
    }

    return difficulty;
  }

  difficultyMass() {
    let difficulty = 1;

    if (this.mass) {
       let difference = this.mass_max - this.mass_min;
       difficulty = 256 - difference;
    }

    return difficulty;
  }

  difficultyStrength() {
    let difficulty = 1;

    if (this.strength) {
       let difference = this.strength_max - this.strength_min;
       difficulty = 256 - difference;
    }

    return difficulty;
  }

  difficultySpeed() {
    let difficulty = 1;

    if (this.speed) {
       let difference = this.speed_max - this.speed_min;
       difficulty = 256 - difference;
    }

    return difficulty;
  }

  difficultyAccuracy() {
    let difficulty = 1;

    if (this.accuracy) {
       let difference = this.accuracy_max - this.accuracy_min;
       difficulty = 256 - difference;
    }

    return difficulty;
  }


  generateDifficulty() {
    let difficulty = 1;

    difficulty *= this.difficultyFeatureEngineering();
    difficulty *= this.difficultyFeatureStorage();
    difficulty *= this.difficultyFeatureDefensive();
    difficulty *= this.difficultyFeatureAttack();
    difficulty *= this.difficultyFeaturePower();

    difficulty *= this.difficultyAmbitSpace();
    difficulty *= this.difficultyAmbitSky();
    difficulty *= this.difficultyAmbitWater();
    difficulty *= this.difficultyAmbitLand();

    difficulty *= this.difficultyMobility();

    difficulty *= this.difficultyEnergyEfficiency();
    difficulty *= this.difficultyMass();
    difficulty *= this.difficultyStrength();
    difficulty *= this.difficultySpeed();
    difficulty *= this.difficultyAccuracy();


    return difficulty;
  }

  /**
   * Result payload from Compute Worker engine
   *
   * @param {ComputeProcess} processState
   * @param {object} result
   */
  async handleResult(processState, result){

    let compute_status = new DroidUIComputeStatus();

    let current_time = Date.now()
    processState.hashes_per_second = result.data[0].rounds_total / (((current_time - processState.start) / 1000.0) + 1)

    if (typeof result.data[1] != 'undefined') {

      processState.results.push(result.data[1]);
      processState.stop();

      compute_status.setComplete();

      console.log(result.data[1].hash);
      console.log(result.data[1].input);

      let instance = new Instance();
      await instance.initActive();

      try {
        let tx_result = await instance.performBuild(result.data[1], {
          name: result.data[1].compute_process.program.schematic.name,
          description: result.data[1].compute_process.program.schematic.description
        })

        if (typeof tx_result.data !='undefined') {
          //Maybe move this parser into its program
          console.log(JSON.parse(tx_result.rawLog))
          console.log(tx_result)
          let tx_result_parsed = JSON.parse(tx_result.rawLog)
          let new_structure_id = tx_result.data[0].data[1];

          // Gross, move elsewhere.
          document.getElementById('build-status-dialog-view-button').href = '/structure.html?structure_id=' + new_structure_id;
          document.getElementById('build-status-dialog-view-button').disabled = ""
          document.getElementById('build-status-dialog-view-button').classList.remove('is-disabled')
          document.getElementById('build-status-dialog-view-button').classList.add('is-success')

        } else {
          if (tx_result.rawLog.includes('insufficient funds')) {
            let needed_start = tx_result.rawLog.search('[0-9]{1,}watt');
            let needed_end = tx_result.rawLog.search('watt:') + 3 - tx_result.rawLog.search('/[0-9]{1,}watt:/i')
            let needed = tx_result.rawLog.substring(needed_start, needed_end)
            console.log(needed_start, needed_end)
            compute_status.setError('Insufficient Funds (' + needed + ')')
          } else {
            compute_status.setError('IDK: Paste to Discord (' + tx_result.rawLog + ')')
          }

        }

      }
      catch(err){
        console.log(err)
        compute_status.setError('IDK: Paste to Discord ' + err)
      }

    } else {
      compute_status.updateStatus(result.data[0].rounds_total, processState.hashes_per_second, processState.difficulty);
    }

    console.log('[Process ID #' + result.data[0].id + '] Started ' + processState.start + ' Current ' + current_time);
    console.log('[Process ID #' + result.data[0].id + '] Rounds of hashing since last check-in: ' + result.data[0].rounds_total + ' ' + '(' + (100.0 * (result.data[0].rounds_total / processState.difficulty)) + '%)');
    console.log('[Process ID #' + result.data[0].id + '] Hashes per second ' + processState.hashes_per_second);
  }

}
