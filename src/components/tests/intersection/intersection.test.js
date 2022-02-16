import intersection from './intersection';

describe('intersection', () => {
  it('returns the number is intersecting numbers', () => {
    const test1a = [1, 2, 2, 1];
    const test1b = [2, 2];
    const test2a = [9, 4, 5];
    const test2b = [9, 4, 9, 8, 4];
    const test3a = [1, 1, 5, 3, 9, 11, 15, 44];
    const test3b = [1, 2, 44, 3, 5];
    expect(intersection(test1a, test1b)).toEqual([2, 2]);
    expect(intersection(test2a, test2b)).toEqual(expect.arrayContaining([9, 4]));
    expect(intersection(test3a, test3b)).toEqual(expect.arrayContaining([1, 3, 44]));
  });
});
