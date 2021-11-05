import { DTest } from "../../DTestFramework";
import { StringToFile } from "../../../src/js/vendor/StringToFile";

const makeFileNameFromIdTest = new DTest('Make file name from ID', function (params) {
  const filename = StringToFile.makeFileNameFromId(params.id, params.fileType, params.fileNamePrefix, params.maxFileNameLength)
  this.assertEquals(filename, params.expected);
}, function () {
  return [
    {
      id: 'droid1kmwlh69n4mkx2ekg8ju55l0sss5jvum7caxgej',
      fileType: '.txt',
      fileNamePrefix: 'seed-phrase-',
      maxFileNameLength: 32,
      expected: 'seed-phrase-droid1k-m7caxgej.txt'
    },
    {
      id: 7,
      fileType: '.pdf',
      fileNamePrefix: 'structure-',
      maxFileNameLength: 0,
      expected: 'structure-7.pdf'
    }
  ];
})

// Test execution
console.log('StringToFileTest');
makeFileNameFromIdTest.run();
