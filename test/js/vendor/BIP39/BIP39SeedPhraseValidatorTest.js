import { DTest, DTestAssertError } from "../../../DTestFramework";
import {
  BIP39SeedPhraseValidationError,
  BIP39SeedPhraseValidator
} from "../../../../src/js/vendor/BIP39/BIP39SeedPhraseValidator";

const validatePhraseTest = new DTest('Validate Phrase', function (params) {
  let isValid = false;

  try {
    isValid = (new BIP39SeedPhraseValidator()).validatePhrase(params.phrase);
  } catch (error) {
    if (params.expectError && error instanceof BIP39SeedPhraseValidationError) {
      this.assertEquals(error.message, params.expectedErrorMessage);
    } else {
      throw new DTestAssertError(`Unexpected error: ${error.message}`);
    }
  }

  this.assertEquals(isValid, params.expectedIsValid);
}, function () {
  return [
    {
      phrase: 'sting dignity reflect bronze right close enable clown hunt example surround thought',
      expectError: false,
      expectedErrorMessage: '',
      expectedIsValid: true
    },
    {
      phrase: 'sting',
      expectError: true,
      expectedErrorMessage: 'Seed phrase must have 12 or 24 words',
      expectedIsValid: false
    },
    {
      phrase: 'sting dignity reflect taco right close enable clown hunt bulgogi surround thought',
      expectError: true,
      expectedErrorMessage: 'Invalid seed phrase words: taco, bulgogi',
      expectedIsValid: false
    },
  ];
})

// Test execution
console.log('BIP39SeedPhraseValidatorTest');
validatePhraseTest.run();
