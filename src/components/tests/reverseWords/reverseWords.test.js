import reverseWords from './reverseWords';

describe.only('reverseWords', () => {
  it('reverses strings', () => {
    const test = 'Your momma is so fat';
  
    expect(reverseWords(test)).toEqual('ruoY ammom si os taf');
  });
});
