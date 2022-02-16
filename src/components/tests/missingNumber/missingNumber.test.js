import missingNumber from './missingNumber';

describe('missingNumber', () => {
  it('returns the only number in the range that is missing from the array', 
    () => {
      const test = [3, 0, 1];
      const test2 = [0, 1];
      const test3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

      expect(missingNumber(test)).toEqual(2);
      expect(missingNumber(test2)).toEqual(2);
      expect(missingNumber(test3)).toEqual(8);
    });
});
