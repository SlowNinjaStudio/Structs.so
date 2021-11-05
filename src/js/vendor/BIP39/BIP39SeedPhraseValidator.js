import { WORD_LIST } from "./BIP39WordList";

export class BIP39SeedPhraseValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "BIP39SeedPhraseValidationError";
  }
}

export class BIP39SeedPhraseValidator {

  /**
   * @param {string} word
   * @returns {boolean}
   */
  isValidWord(word) {
    return WORD_LIST[word] !== undefined
  }

  /**
   * @param {string} phrase
   * @returns {string[]}
   */
  parsePhrase(phrase) {
    return phrase
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/(^\s+|\s+$)/g, '')
      .split(' ');
  }

  /**
   * @param {String[]} parsedPhrase
   * @throws {BIP39SeedPhraseValidationError}
   */
  validatePhraseWordCount(parsedPhrase) {
    const len = parsedPhrase.length;
    if (len !== 12 && len !== 24) {
      throw new BIP39SeedPhraseValidationError('Seed phrase must have 12 or 24 words');
    }
  }

  /**
   * @param {string} phrase
   * @throws {BIP39SeedPhraseValidationError}
   */
  sanitizeAndValidatePhrase(phrase) {
    const parsedPhrase = this.parsePhrase(phrase);
    this.validatePhraseWordCount(parsedPhrase);
    const invalidWords = parsedPhrase.reduce((invalid, word) =>
      this.isValidWord(word) ? invalid : invalid.concat([word])
    , []);
    if (invalidWords.length > 0) {
      throw new BIP39SeedPhraseValidationError(`Invalid seed phrase words: ${invalidWords.join(', ')}`);
    }
    return parsedPhrase.join(' ');
  }

}
