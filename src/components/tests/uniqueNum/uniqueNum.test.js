import uniqueNum from './uniqueNum';

describe('uniqueNum', () => {
  it('finds unique number in array', () => {
    const test = [2, 2, 1];
    const test2 = [4, 1, 2, 1, 2];
    const test3 = [1];

    expect(uniqueNum(test)).toEqual(1);
    expect(uniqueNum(test2)).toEqual(4);
    expect(uniqueNum(test3)).toEqual(1);
  });
});
