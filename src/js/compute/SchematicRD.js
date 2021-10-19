import {AMBITS, FEATURES} from "../constants";
import {decimalToHex} from "../utilities";

/* SchematicRD
 * Used for designing new schematics. 
 * 
 * Prepares the details for passing 
 * into a ComputeProcess object.
 *
 *  generatePattern()
 *  generateDifficulty()
 * 
 */
export class SchematicRD {
  constructor() {

    // Details for building the hash prefix.
    this.instance = '';
    this.hashing_node = '';
    this.nonsense = '';


    this.features   = [];
    this.ambits     = [];
    this.is_mobile = true;

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
    return this.instance + this.hashing_node + this.nonsense;
  }
  
  isMobile() {
    return this.is_mobile;
  }

  hasAmbit(ambit) {
    return this.ambits.includes(ambit);
  }
  hasAmbitLand() {
    return this.hasAmbit(AMBITS.LAND);
  }
  hasAmbitSky() {
    return this.hasAmbit(AMBITS.SKY);
  }
  hasAmbitSpace() {
    return this.hasAmbit(AMBITS.SPACE);
  }
  hasAmbitWater() {
    return this.hasAmbit(AMBITS.WATER);
  }

  hasFeature(feature) {
    return this.features.includes(feature);
  }
  hasFeatureAttack() {
    return this.hasFeature(FEATURES.ATTACK);
  }
  hasFeatureDefensive() {
    return this.hasFeature(FEATURES.DEFENSIVE);
  }
  hasFeatureEngineering() {
    return this.hasFeature(FEATURES.ENGINEERING);
  }
  hasFeaturePower() {
    return this.hasFeature(FEATURES.POWER);
  }
  hasFeatureStorage() {
    return this.hasFeature(FEATURES.STORAGE);
  }
  
  patternPieceFeatureEngineering() {
    return this.hasFeatureEngineering() ? '111' : '...'
  }
  
  patternPieceFeatureStorage() {
    return this.hasFeatureStorage() ? '11' : '..'
  }
  
  patternPieceFeatureDefensive() {
    return this.hasFeatureDefensive() ? '1' : '.'
  }
  
  patternPieceFeatureAttack() {
    return this.hasFeatureAttack() ? '1' : '.'
  }
  
  patternPieceFeaturePower() {
    return this.hasFeaturePower() ? '1' : '.'
  }
  
  patternPieceAmbitSpace() {
    return this.hasAmbitSpace() ? '111' : '...'
  }

  patternPieceAmbitSky() {
    return this.hasAmbitSky() ? '11' : '..'
  }

  patternPieceAmbitWater() {
    return this.hasAmbitWater() ? '11' : '..'
  }

  patternPieceAmbitLand() {
    return this.hasAmbitLand() ? '1' : '.'
  }
  
  patternPieceMobility() {
    let pattern = ''

    if (this.isMobile() == null) {
      pattern = '.'
    } else {
      pattern = this.isMobile() ? '1' : '[abcdef023456789]'
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

  /* 
    Creates a regular expression pattern that can be sent to 
    the hash worker. 

    The order of the below patternPiece function calls is critical. 


    Example Usage
    rd = new SchematicRD();
    
    rd.features.push(FEATURES.ENGINEERING)
    rd.features.push(FEATURES.POWER)
    rd.ambits.push(AMBITS.LAND)
    rd.ambits.push(AMBITS.SKY)
    rd.is_mobile = false;

    build_pattern = rd.generatePattern()

    var hash = "111f3be129f115e12ea6c20315b445c68c59949f1cb7c9aad1be8712970a6660"
    build_pattern.test(hash);

  */
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
    return Math.pow(16, this.hasFeatureEngineering() ? 3 : 0)
  }
  
  difficultyFeatureStorage() {
    return Math.pow(16, this.hasFeatureStorage() ? 2 : 0)
  }
  
  difficultyFeatureDefensive() {
    return Math.pow(16, this.hasFeatureDefensive() ? 1 : 0)
  }
  
  difficultyFeatureAttack() {
    return Math.pow(16, this.hasFeatureAttack() ? 1 : 0)
  }
  
  difficultyFeaturePower() {
    return Math.pow(16, this.hasFeaturePower() ? 1 : 0)
  }
  
  difficultyAmbitSpace() {
    return Math.pow(16, this.hasAmbitSpace() ? 3 : 0)
  }

  difficultyAmbitSky() {
    return Math.pow(16, this.hasAmbitSky() ? 2 : 0)
  }

  difficultyAmbitWater() {
    return Math.pow(16, this.hasAmbitWater() ? 2 : 0)
  }

  difficultyAmbitLand() {
    return Math.pow(16, this.hasAmbitLand() ? 1 : 0)
  }
  
  difficultyMobility() {
    let difficulty = 0

    if (this.isMobile() == null) {
      difficulty = Math.pow(16, 0)
    
    } else if (this.isMobile()) {
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