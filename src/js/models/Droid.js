import {CosmosHashUtil} from "../vendor/CosmosHashUtil";
import {DROID_HASH, DROID_TYPES} from "../constants";

export class Droid {

  /**
   * @param {string} hash base 36 hash with option prefix
   * @param {CosmosHashUtil} hashUtil
   */
  constructor(hash, hashUtil = new CosmosHashUtil()) {
    this.hash = hash; // droid1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl
    this.hashUtil = hashUtil;
    this.hashNoPrefix = this.hashUtil.noPrefix(this.hash); // 1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl

  }

  /**
   * @returns {string} hex color
   */
  getPrimaryColor() {
    return this.hashUtil.getColor(this.hash, DROID_HASH.PRIMARY_COLOR.START);
  }

  /**
   * @param {string} hashCharBase36
   * @returns {string} Droid Type
   */
  getType(hashCharBase36) {
    const code = this.hashUtil.hashCharToInt(hashCharBase36);
    if (code >= 0 && code < 12) {
      return DROID_TYPES.BLOCKY;
    } else if (code >= 12 && code < 24) {
      return DROID_TYPES.HUMANOID;
    } else {
      return DROID_TYPES.SCREEN;
    }
  }

  /**
   * @param {string} hashCharBase36
   * @returns {boolean}
   */
  hasAccessory(hashCharBase36) {
    const code = this.hashUtil.hashCharToInt(hashCharBase36);
    return (code < 18);
  }

  /**
   * @returns {string}
   */
  getBodyType() {
    const hashCharBase36 = this.hashNoPrefix.charAt(DROID_HASH.BODY_TYPE);
    return this.getType(hashCharBase36);
  }

  /**
   * @returns {boolean}
   */
  hasBodyBlocky() {
    return this.getBodyType() === DROID_TYPES.BLOCKY;
  }

  /**
   * @returns {boolean}
   */
  hasBodyHumanoid() {
    return this.getBodyType() === DROID_TYPES.HUMANOID;
  }

  /**
   * @returns {boolean}
   */
  hasBodyScreen() {
    return this.getBodyType() === DROID_TYPES.SCREEN;
  }

  /**
   * @returns {string}
   */
  getHeadType() {
    const hashCharBase36 = this.hashNoPrefix.charAt(DROID_HASH.HEAD_TYPE);
    return this.getType(hashCharBase36);
  }

  /**
   * @returns {boolean}
   */
  hasHeadBlocky() {
    return this.getHeadType() === DROID_TYPES.BLOCKY;
  }

  /**
   * @returns {boolean}
   */
  hasHeadHumanoid() {
    return this.getHeadType() === DROID_TYPES.HUMANOID;
  }

  /**
   * @returns {boolean}
   */
  hasHeadScreen() {
    return this.getHeadType() === DROID_TYPES.SCREEN;
  }

  /**
   * @returns {boolean}
   */
  hasHeadAccessory1() {
    const hashCharBase36 = this.hashNoPrefix.charAt(DROID_HASH.ACCESSORY_1);
    return this.hasAccessory(hashCharBase36);
  }

  /**
   * @returns {boolean}
   */
  hasHeadAccessory2() {
    const hashCharBase36 = this.hashNoPrefix.charAt(DROID_HASH.ACCESSORY_2);
    return this.hasAccessory(hashCharBase36);
  }

  /**
   * @returns {boolean}
   */
  hasHeadAccessory3() {
    const hashCharBase36 = this.hashNoPrefix.charAt(DROID_HASH.ACCESSORY_3);
    return this.hasAccessory(hashCharBase36);
  }
}
