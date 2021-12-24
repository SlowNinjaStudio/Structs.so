import {DROID_HASH} from "../Constants";

export class CosmosHashUtil {

  /**
   * @param {string} hashBase36
   * @returns {string} hex color code
   */
  getColor(hashBase36) {
    const start = DROID_HASH.PRIMARY_COLOR.START;
    const end = start + DROID_HASH.PRIMARY_COLOR.LENGTH;
    const hashLast5 = hashBase36.slice(start, end);
    return parseInt(hashLast5, 36).toString(16);
  }

  /**
   * Return the hash without the prefix
   * @param {string} hashBase36
   * @returns {string}
   */
  noPrefix(hashBase36) {
    return hashBase36.slice(-39);
  }

  /**
   * @param {string} hashCharBase36
   * @returns {number}
   */
  hashCharToInt(hashCharBase36) {
    return parseInt(hashCharBase36, 36);
  }
}
