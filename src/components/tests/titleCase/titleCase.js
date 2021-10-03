function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

function titleCase(string){
  const newArr = [];
  const wordArray = string.toLowerCase().split(/\s+/);

  wordArray.map((word) => {
    newArr.push(capitalize(word));
  });

  return newArr.join(' ');
}

export default titleCase;
