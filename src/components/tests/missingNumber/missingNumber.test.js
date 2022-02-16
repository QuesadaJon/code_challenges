import missingNumber from './missingNumber';

describe('missingNumber', () => {
  it('returns the only number in the range that is missing from the array', 
    () => {
      const test = [3, 0, 1];

      expect(missingNumber(test)).toEqual(2);
    });
});
