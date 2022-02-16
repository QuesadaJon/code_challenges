import palindromeCheck from './stack';

describe('palindromeCheck', () => {
  it('checks if string is a palindrome', () => {
    const test = 'racecar';

    expect(palindromeCheck(test)).toEqual(true);
  });
});
