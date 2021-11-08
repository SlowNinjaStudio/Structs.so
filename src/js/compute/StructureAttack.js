import {AMBITS, FEATURES} from "../constants";
import {decimalToHex} from "../vendor/DecimalToHex";

import {Schematic} from "../models/Schematic";
import {Structure} from "../models/Structure";
import {DroidUIComputeStatus} from "../ui/components/DroidUIComputeStatus";
import {Instance} from "../models/Instance";
import {DroidUIStructureHealthProgress} from "../ui/components/DroidUIStructureHealthProgress";

/* StructureAttack
 * Used for attacking structures from structures
 *
 * Prepares the details for passing
 * into a ComputeProcess object.
 *
 *  generatePattern()
 *  generateDifficulty()
 *
 */

export class StructureAttack {
  constructor() {
    this.type = 'Structure Attack Aiming';

    // Details for building the hash prefix.
    this.instance = '';
    this.hashing_node = '';
    this.nonsense = '';

    this.performing_structure;
    this.target_structure;

  }

  getInputPrefix(){
    return this.instance + this.performing_structure.id + this.target_structure.id + this.hashing_node + this.nonsense;
     // TODO fix in chain [MsgAttackStructure validate()] then update here
    // return this.instance + 'structure' + this.performing_structure.id + 'schematic' + this.schematic.hash + this.hashing_node + this.nonsense;
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

    // If there is a target structure set already, we should make sure
    // this structure is able to target it. If no target is
    // set, we can skip and proceed safely.
    //
    // The same checks will be performed when a target is added.
    if (typeof this.target_structure != 'undefined' && this.target_structure != null){
      if (!structure.sharesAmbit(this.target_structure.ambits)){
        // TODO some sort of better error handling
        // alert('No shared ambit');
      }
    }

    if (!structure.hasFeatureAttack()) {
      // TODO some sort of better error handling
      alert('No offensive capabilities');
      return;
    }

    this.performing_structure = structure;
  }

  /**
   *
   * @param {Structure} structure
   */
  setTargetObject(structure){
    this.setTargetStructure(structure)
  }

  /**
   * @param {Structure} structure
   */
  setTargetStructure(structure) {
    if (typeof structure == 'undefined') {
      // TODO better error handling
      alert('Malformed structure object')
      return;
    }

    // If there is a performing structure set already, we should make
    // sure this structure is compatible with it. If no performing is
    // set, we can skip and proceed safely.
    //
    // The same checks will be performed when a schema is added.
    if (typeof this.performing_structure != 'undefined' && this.performing_structure != null){
      if (!structure.sharesAmbit(this.performing_structure.ambits)){
        // TODO some sort of better error handling
        // alert('No shared ambit');
      }
    }

    this.target_structure = structure;
  }


  generatePattern() {
    var patternString = '';

    let buildPattern = new RegExp('^' + patternString + '.*' );
    return buildPattern;
  }

  generateDifficulty() {
    let difficulty = 1;

    return difficulty;
  }

  /**
   * @param {Object} result
   */
  processResult(result) {
    let processedResult = {
      targetDamageAmount: 0,
      targetDestroyed: false
    };

    for (let i = 0; i < result.events.length; i++ ) {
      for (let x = 0; x < result.events[i].attributes.length; x++) {
        switch(result.events[i].attributes[x].key) {
          case "target_damage_amount":
            processedResult.targetDamageAmount = result.events[i].attributes[x].value;
            break;
          case "target_destroyed":
            processedResult.targetDestroyed = result.events[i].attributes[x].value;
            break;
        }
      }
    }
    return processedResult;
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


       if (result.data[1].compute_process.type === 'Structure Attack Aiming') {
        console.log('Finished aiming...');
        // TODO: Call an action that enables the View button on the modal and adds the correct link to the new structure
        // ex call) document.getElementById('build-status-dialog').close();


        let instance = new Instance();
        await instance.init();

        try {
          let tx_result = await instance.performAttack(result.data[1])

          if (typeof tx_result.data !='undefined') {
            //Maybe move this parser into its program
            console.log(JSON.parse(tx_result.rawLog))
            console.log(tx_result)
            let tx_result_parsed = JSON.parse(tx_result.rawLog);


            let tx_result_processed = (new StructureAttack()).processResult(tx_result_parsed[0]);
            (new DroidUIStructureHealthProgress()).decrementHealth(tx_result_processed.targetDamageAmount);


            console.log(result)
            document.getElementById('attack-status-dialog-view-button').href = '/structure.html?structure_id=' + result.data[1].compute_process.program.target_structure.id;
            document.getElementById('attack-status-dialog-view-button').disabled = ""
            document.getElementById('attack-status-dialog-view-button').classList.remove('is-disabled')
            document.getElementById('attack-status-dialog-view-button').classList.add('is-success')

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
      }

    } else {
      compute_status.updateStatus(result.data[0].rounds_total, processState.hashes_per_second, processState.difficulty);
    }

    console.log('[Process ID #' + result.data[0].id + '] Started ' + processState.start + ' Current ' + current_time);
    console.log('[Process ID #' + result.data[0].id + '] Rounds of hashing since last check-in: ' + result.data[0].rounds_total + ' ' + '(' + (100.0 * (result.data[0].rounds_total / processState.difficulty)) + '%)');
    console.log('[Process ID #' + result.data[0].id + '] Hashes per second ' + processState.hashes_per_second);
  }

}
