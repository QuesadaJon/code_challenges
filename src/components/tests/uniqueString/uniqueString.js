function uniqueString(strings) {
  const ordered = strings.map(s => [...new Set(s)].sort()).sort();
  if(ordered[0] !== ordered[1]) return strings[1];
  return strings[strings.length - 1];
}

export default uniqueString;
