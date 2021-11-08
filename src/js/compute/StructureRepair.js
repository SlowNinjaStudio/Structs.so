import {AMBITS, FEATURES} from "../constants";
import {decimalToHex} from "../vendor/DecimalToHex";

import {Schematic} from "../models/Schematic";
import {Structure} from "../models/Structure";

/* StructureRepair
 * Used for repairing a structure
 *
 * Prepares the details for passing
 * into a ComputeProcess object.
 *
 *  generatePattern()
 *  generateDifficulty()
 *
 */

export class StructureRepair {
  constructor() {

    // Details for building the hash prefix.
    this.instance = '';
    this.hashing_node = '';
    this.nonsense = '';

    this.performing_structure;
    this.target_structure;

  }

  getInputPrefix(){
    return '';
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
      targetRepairAmount: 0
    };

    for (let i = 0; i < result.events.length; i++ ) {
      for (let x = 0; x < result.events[i].attributes.length; x++) {
        switch(result.events[i].attributes[x].key) {
          case "performing_structure_repair_amount":
            processedResult.targetRepairAmount = result.events[i].attributes[x].value;
            break;
        }
      }
    }

    return processedResult;
  }

}
