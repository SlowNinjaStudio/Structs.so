import {StructureLottieAnimationSetFactory} from "../../art_rendering/lottie/StructureLottieAnimationSetFactory";
import {LottieCustomPlayer} from "../../art_rendering/lottie/LottieCustomPlayer";
import {DroidUIAmbitButtonPanel} from "./DroidUIAmbitButtonPanel";
import {DroidUIFeatureButtonPanel} from "./DroidUIFeatureButtonPanel";
import {StructureClassifier} from "../../art_rendering/StructureClassifier";
import {STRUCTURE_TYPES} from "../../Constants";

export class DroidUIStructureViewPlayer {

  /**
   * @param {Structure} structure
   * @param {string} targetElementId
   */
  constructor(structure, targetElementId) {
    this.structure = structure;
    this.targetElementId = targetElementId;
    this.structureLottieAnimationSetFactory = new StructureLottieAnimationSetFactory();
    this.lottieCustomPlayer = new LottieCustomPlayer();
    this.ambitPanel = null;
    this.featurePanel = null;
    this.featureIdleEnabled = this.isFeatureIdleCapable(this.structure);
  }

  /**
   * @param {Structure} structure
   * @return {boolean}
   */
  isFeatureIdleCapable(structure) {
    let capable = false;
    const type = (new StructureClassifier()).getType(structure);

    if (type === STRUCTURE_TYPES.CAR) {
      capable = false;
    } else if (type === STRUCTURE_TYPES.CITY) {
      capable = false;
    } else if (type === STRUCTURE_TYPES.MECH) {
      capable = false;
    } else if (type === STRUCTURE_TYPES.STATION) {
      capable = false;
    }

    return capable;
  }

  render() {
    return `
      <div class="row justify-content-center">
        <div class="col-auto">
          <div class="lottie-custom-player">
            <div id="idleSpace" class="lottie-container"></div>
            <div id="idleSky" class="lottie-container"></div>
            <div id="idleLand" class="lottie-container"></div>
            <div id="idleWater" class="lottie-container"></div>
            <div id="featureIdleAttack" class="lottie-container"></div>
            <div id="featureIdleDefensive" class="lottie-container"></div>
            <div id="featureIdleEngineering" class="lottie-container"></div>
            <div id="featureIdlePower" class="lottie-container"></div>
          </div>
        </div>
      </div>
      <div id="ambitButtonPanel" class="row justify-content-center ${this.featureIdleEnabled ? '' : 'mb-4'}"></div>
      ${this.featureIdleEnabled ? `
        <div id="featureButtonPanel" class="row justify-content-center mb-4"></div>
      ` : ''}
    `;
  }

  /**
   * @param {StructureLottieAnimationSet} animationSet
   */
  registerAnimationSet(animationSet) {
    this.registerIdleAnimationSet(animationSet);
    this.registerFeatureIdleAnimationSet(animationSet);
  }

  /**
   * @param {StructureLottieAnimationSet} animationSet
   */
  registerIdleAnimationSet(animationSet) {
    if (this.structure.hasAmbitSpace()) {
      this.lottieCustomPlayer.registerAnimation(animationSet.idleSpace);
    }
    if (this.structure.hasAmbitSky()) {
      this.lottieCustomPlayer.registerAnimation(animationSet.idleSky);
    }
    if (this.structure.hasAmbitLand()) {
      this.lottieCustomPlayer.registerAnimation(animationSet.idleLand);
    }
    if (this.structure.hasAmbitWater()) {
      this.lottieCustomPlayer.registerAnimation(animationSet.idleWater);
    }
  }

  /**
   * @param {StructureLottieAnimationSet} animationSet
   */
  registerFeatureIdleAnimationSet(animationSet) {
    if (this.featureIdleEnabled) {
      if (this.structure.hasFeatureAttack()) {
        this.lottieCustomPlayer.registerAnimation(animationSet.featureIdleAttack);
      }
      if (this.structure.hasFeatureDefensive()) {
        this.lottieCustomPlayer.registerAnimation(animationSet.featureIdleDefensive);
      }
      if (this.structure.hasFeatureEngineering()) {
        this.lottieCustomPlayer.registerAnimation(animationSet.featureIdleEngineering);
      }
      if (this.structure.hasFeaturePower()) {
        this.lottieCustomPlayer.registerAnimation(animationSet.featureIdlePower);
      }
    }
  }

  connectPlayerButtons() {
    this.connectPlayerAmbitButtons();
    this.connectPlayerFeatureButtons();
  }

  connectPlayerAmbitButtons() {
    if (this.structure.hasAmbitSpace()) {
      this.lottieCustomPlayer.registerPlayAnimationButton(this.ambitPanel.spaceButtonId, this.ambitPanel.spaceAnimationName);
    }
    if (this.structure.hasAmbitSky()) {
      this.lottieCustomPlayer.registerPlayAnimationButton(this.ambitPanel.skyButtonId, this.ambitPanel.skyAnimationName);
    }
    if (this.structure.hasAmbitLand()) {
      this.lottieCustomPlayer.registerPlayAnimationButton(this.ambitPanel.landButtonId, this.ambitPanel.landAnimationName);
    }
    if (this.structure.hasAmbitWater()) {
      this.lottieCustomPlayer.registerPlayAnimationButton(this.ambitPanel.waterButtonId, this.ambitPanel.waterAnimationName);
    }
  }

  connectPlayerFeatureButtons() {
    if (this.featureIdleEnabled) {
      if (this.structure.hasFeatureAttack()) {
        this.lottieCustomPlayer.registerPlayAnimationButton(this.featurePanel.attackButtonId, this.featurePanel.attackAnimationName);
      }
      if (this.structure.hasFeatureDefensive()) {
        this.lottieCustomPlayer.registerPlayAnimationButton(this.featurePanel.defensiveButtonId, this.featurePanel.defensiveAnimationName);
      }
      if (this.structure.hasFeatureEngineering()) {
        this.lottieCustomPlayer.registerPlayAnimationButton(this.featurePanel.engineeringButtonId, this.featurePanel.engineeringAnimationName);
      }
      if (this.structure.hasFeaturePower()) {
        this.lottieCustomPlayer.registerPlayAnimationButton(this.featurePanel.powerButtonId, this.featurePanel.powerAnimationName);
      }
    }
  }

  init() {
    document.getElementById(this.targetElementId).innerHTML = this.render();

    const animationSet = this.structureLottieAnimationSetFactory.make(
      this.structure,
      'idleSpace',
      'idleSky',
      'idleLand',
      'idleWater',
      'featureIdleAttack',
      'featureIdleDefensive',
      'featureIdleEngineering',
      'featureIdlePower',
    );
    this.registerAnimationSet(animationSet);
    this.lottieCustomPlayer.init('', true);

    this.initAmbitPanel(animationSet);
    this.initFeaturePanel(animationSet);
    this.connectPlayerButtons();
  }

  /**
   * @param {StructureLottieAnimationSet} animationSet
   */
  initAmbitPanel(animationSet) {
    this.ambitPanel = new DroidUIAmbitButtonPanel(
      this.structure,
      animationSet.idleSpace.animationName,
      animationSet.idleSky.animationName,
      animationSet.idleLand.animationName,
      animationSet.idleWater.animationName
    );

    document.getElementById('ambitButtonPanel').innerHTML = this.ambitPanel.render();
  }

  /**
   * @param {StructureLottieAnimationSet} animationSet
   */
  initFeaturePanel(animationSet) {
    if (this.featureIdleEnabled) {
      this.featurePanel = new DroidUIFeatureButtonPanel(
        this.structure,
        animationSet.featureIdleAttack.animationName,
        animationSet.featureIdleDefensive.animationName,
        animationSet.featureIdleEngineering.animationName,
        animationSet.featureIdlePower.animationName
      );

      document.getElementById('featureButtonPanel').innerHTML = this.featurePanel.render();
    }
  }
}
