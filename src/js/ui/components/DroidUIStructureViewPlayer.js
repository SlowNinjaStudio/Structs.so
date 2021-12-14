import {StructureLottieAnimationSetFactory} from "../../art_rendering/lottie/StructureLottieAnimationSetFactory";
import {LottieCustomPlayer} from "../../art_rendering/lottie/LottieCustomPlayer";
import {DroidUIAmbitButtonPanel} from "./DroidUIAmbitButtonPanel";

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
          </div>
        </div>
      </div>
      <div id="ambitButtonPanel" class="row justify-content-center mb-4"></div>
    `;
  }

  /**
   * @param {StructureLottieAnimationSet} animationSet
   */
  registerAnimationSet(animationSet) {
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

  connectPlayerButtons() {
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

  init() {
    document.getElementById(this.targetElementId).innerHTML = this.render();

    const animationSet = this.structureLottieAnimationSetFactory.make(
      this.structure,
      'idleSpace',
      'idleSky',
      'idleLand',
      'idleWater',
    );
    this.registerAnimationSet(animationSet);
    this.lottieCustomPlayer.init('', true);

    this.ambitPanel = new DroidUIAmbitButtonPanel(
      this.structure,
      animationSet.idleSpace.animationName,
      animationSet.idleSky.animationName,
      animationSet.idleLand.animationName,
      animationSet.idleWater.animationName
    );

    document.getElementById('ambitButtonPanel').innerHTML = this.ambitPanel.render();

    this.connectPlayerButtons();
  }
}
