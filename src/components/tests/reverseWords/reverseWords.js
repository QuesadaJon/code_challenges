function reverseWords(string){
  const newArr = [];
  const wordArray = string.split(/\s+/);

  wordArray.map((word) => {
    newArr.push(word.split('').reverse().join(''));
  });
  return newArr.join(' ');
}

export default reverseWords;
