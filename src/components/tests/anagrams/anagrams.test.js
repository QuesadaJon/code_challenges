import anagrams from './anagrams';

describe('anagrams', () => {
  it('checks if a word has every letter in common', () => {
    expect(anagrams('superintended', 'unpredestined')).toEqual(true);
    expect(anagrams('pictorialnes', 'documentarily')).toEqual(false);
  });
});
