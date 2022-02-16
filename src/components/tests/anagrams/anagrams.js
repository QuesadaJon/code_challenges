function anagrams(wordOne, wordTwo) {
  return sortString(wordOne) === sortString(wordTwo);
}

function sortString(string) {
  return string.split('').sort().join('');
}

export default anagrams;
