import {AMBITS, FEATURES} from "../constants";
import {decimalToHex} from "../vendor/DecimalToHex";

import {Schematic} from "../models/Schematic";
import {Structure} from "../models/Structure";

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

export class StructureAttack {
  constructor() {

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
        return;
      }
    }

    if (!structure.hasFeatureAttack()) {
      // TODO some sort of better error handling
      alert('No offensive capabilities');
      return;
    }

    this.performing_structure = structure;
  }

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
        return;
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

}
