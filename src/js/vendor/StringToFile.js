export class StringToFile {

  /**
   * Converts a string to a plain text encoded file string that can be downloaded.
   *
   * @param {string} str
   * @return {string}
   */
  static convert(str) {
    return `data:text/plain;charset=utf-8,${encodeURIComponent(str)}`;
  }

  /**
   * @param {string|number} id
   * @param {string} fileType
   * @param {string} fileNamePrefix
   * @param {number} maxFileNameLength
   * @returns {string}
   */
  static makeFileNameFromId(id, fileType = '.txt', fileNamePrefix = '', maxFileNameLength = 0) {
    let idPart = `${id}`;

    if (maxFileNameLength > 0) {
      let maxIdChars = maxFileNameLength - (fileNamePrefix.length + fileType.length);

      if (maxIdChars < 3) {
        throw new Error('Bad file name parameters');
      } else if (maxIdChars !== idPart.length) {
        maxIdChars = maxIdChars - 1;
        const numStartChars = Math.floor(maxIdChars / 2);
        const numEndChars = Math.ceil(maxIdChars / 2);
        const startChars = id.slice(0, numStartChars);
        const endChars = id.slice(-1 * numEndChars);
        idPart = `${startChars}-${endChars}`;
      }
    }

    return `${fileNamePrefix}${idPart}${fileType}`
  }
}
