function isPalindrome(num) {
  const n = num.toString();
  const reverseNum = n.split('').reverse().join('');
  if(num == reverseNum) return true;
  return false;
}

export default isPalindrome;
