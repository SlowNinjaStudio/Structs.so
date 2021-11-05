export class DTestAssertError extends Error {
  constructor(message) {
    super(message);
    this.name = "DTestAssertError";
  }
}

export class DTest {
  constructor(testName, test, provider = null) {
    this.numAssertions = 0;
    this.testName = testName;
    this.test = test.bind(this);
    this.provider = provider;
  }

  assertEquals(a, b) {
    if (a !== b) {
      throw new DTestAssertError(`${JSON.stringify(a)} is not equal to ${JSON.stringify(b)}`);
    }
    this.numAssertions++;
  }

  run() {
    try {

      if (typeof this.provider === 'function') {
        // Running a test with a provider
        const testParamSets = this.provider();
        for (let i = 0; i < testParamSets.length; i++) {
          this.test(testParamSets[i]);
        }
      } else {
        // Running a test without a provider
        this.test();
      }

      // If a test has no assertions, it's considered a failure
      if (this.numAssertions === 0) {
        console.log(this.testName, ' - ', new DTestAssertError('Test has no assertions.'));
        return false;
      }

      // All assertions passed
      console.log(this.testName, ' - ', `${this.numAssertions} Assertion(s) Passed`);
      return true;

    } catch (err) {

      // Only catch assertion failures, bubble up all other errors
      if (err instanceof DTestAssertError) {
        console.log(this.testName, ' - ', err);
        return false;
      }
    }
  }
}
