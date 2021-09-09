import tickets from './index';

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Sample tests', () => {

  const tests = [
    [[25, 25, 50, 50], 'YES'],
    [[25, 100],        'NO'],
    [[25, 25, 25, 50, 25, 100, 25], 'YES']
  ];
  
  for(const [input, expected] of tests) {
    it(`People in line: [${input}]`, () => {
      const actual = tickets([...input]);
      assert(actual === expected, `Incorrect answer for input: 
      ${input}\nExpected: ${expected}\nActual: ${actual}`);
    });
  }  
});
