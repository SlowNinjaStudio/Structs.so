export class CosmosHashUtil {

  /**
   * @param {string} hashBase36
   * @param {int} charIndexStart
   * @returns {string} hex color code
   */
  getColor(hashBase36, charIndexStart ) {
    const hashLast5 = hashBase36.slice(charIndexStart, 5);
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
