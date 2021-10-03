import titleCase from './titleCase';

describe('titleCase', () => {
  it('capitalizes the first word of every word in a string', () => {
    const test = 'your MOMMA is sO fAT';

    expect(titleCase(test)).toEqual('Your Momma Is So Fat');
  });
});
