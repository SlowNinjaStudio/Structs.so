import {NotImplementedError} from "../vendor/NotImplementedError";

export class AttackAnimationInterface {

  /**
   * @param {string} canvasId
   * @param {Structure} attackingStructure
   * @param {Structure} defendingStructure
   */
  constructor(canvasId, attackingStructure, defendingStructure) {
    this.canvasId = canvasId;
    this.attackingStructure = attackingStructure;
    this.defendingStructure = defendingStructure;
    this.playFunction = () => { throw new NotImplementedError(); };
  }

  /**
   * Init sets the playFunction and must be called before play.
   *
   * @return {Promise<void>}
   */
  async init() {
    throw new NotImplementedError();
  }

  play() {
    this.playFunction();
  }
}
