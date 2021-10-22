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

export class StructureBuild {
  constructor() {

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
  

  setSchematic(new_schematic) {
    if (typeof new_schematic == 'undefined') {
      // TODO better error handling
      alert('Malformed structure object')
      return;
    }

    // If there is a performing structure set already, we should 
    // make sure this structure is compatible with it. If no schema is  
    // set, we can skip and proceed safely.
    //
    // The same checks will be performed when a schema is added. 
    if (typeof this.performing_structure != 'undefined'){
      if (!this.performing_structure.sharesAmbit(new_schematic.getAmbits())){
        // TODO some sort of better error handling
        alert('No shared ambit');
        return;
      }
    }

    this.schematic = new_schematic;
  } 

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
    if (typeof this.schematic != 'undefined'){
      if (!structure.sharesAmbit(this.schematic.getAmbits())){
        // TODO some sort of better error handling
        alert('No shared ambit');
        return;
      }
    }

    if (!this.structure.hasFeatureEngineering()) {
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
  
}