import uniqueString from './uniqueString';

describe.skip('uniqueString', () => {
  it('compares strings and finds the unique string', () => {
    const test1 = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'];
    const test2 = ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'];
    expect(uniqueString(test1)).toEqual('BbBb');
    expect(uniqueString(test2)).toEqual('foo');
  });
});
