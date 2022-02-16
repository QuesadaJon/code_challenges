import isPalindrome from './isPalindrome';

describe('isPalindrome', () => {
  it('determines if an integer is a palindrome or not', () => {
    const test = 121;
    const test2 = 123321;
    const test3 = 1232321;
    const test4 = 334433221;
    const test5 = -121;

    expect(isPalindrome(test)).toEqual(true);
    expect(isPalindrome(test2)).toEqual(true);
    expect(isPalindrome(test3)).toEqual(true);
    expect(isPalindrome(test4)).toEqual(false);
    expect(isPalindrome(test5)).toEqual(false);
  });
});
