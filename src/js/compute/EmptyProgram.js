import {AMBITS, FEATURES} from "../Constants";
import {decimalToHex} from "../vendor/DecimalToHex";

import {Schematic} from "../models/Schematic";
import {Structure} from "../models/Structure";

/* EmptyProgram
 * Used for what exactly?
 *
 * Prepares the details for passing
 * into a ComputeProcess object.
 *
 *  generatePattern()
 *  generateDifficulty()
 *
 */

export class EmptyProgram {
  constructor() {
    this.type = 'Empty Program';

    // Details for building the hash prefix.
    this.instance = '';
    this.hashing_node = '';
    this.nonsense = '';

    this.performing_structure;
    this.target_object;

  }

  getInputPrefix(){
    return '';
 }

  /**
   * @param {Structure} structure
   */
  setPerformingStructure(structure) {
    this.performing_structure = structure;
  }

  /**
   *
   * @param {Object} object
   */
  setTargetObject(object){
    this.target_object = object;
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

  }

}
