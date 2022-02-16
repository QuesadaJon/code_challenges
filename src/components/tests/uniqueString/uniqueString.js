function uniqueString(strings) {
  const ordered = strings.map(s => [...new Set(s)].sort());

  const index = ordered.findIndex((string, i) => {
    return string !== ordered[i];
  });

  return strings[index];
}

export default uniqueString;
