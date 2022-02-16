//function checks if string is a palindrome

function palindromeCheck(string) {
  const letters = [];
  let rword = '';

  for(let i = 0; i < string.length; i++) {
    letters.push(string[i]);
  }

  for(let i = 0; i < string.length; i++) {
    rword += letters.pop();
  }

  if(rword === string) {
    return true;
  }
  else {
    return false;
  }

}

export default palindromeCheck;
