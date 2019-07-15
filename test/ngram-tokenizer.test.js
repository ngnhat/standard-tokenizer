/**
 * Created by ngnhat on Fri July 12 2019
 */
const { nGramTokenizerCreater } = require('../src/tokenizer');

describe('standard ngram tokenizer', () => {
  const standardNGramTokenizer = nGramTokenizerCreater({
    min: 2,
    max: 3,
    tokenChars: ['letter', 'digit'],
  });

  it('Quick Foxes', () => {
    expect(standardNGramTokenizer('Quick Foxes')).toEqual([
      'qu',
      'qui',
      'ui',
      'uic',
      'ic',
      'ick',
      'ck',
      'fo',
      'fox',
      'ox',
      'oxe',
      'xe',
      'xes',
      'es',
    ]);
  });

  it('Nam quốc sơn hà Nam đế cư', () => {
    expect(standardNGramTokenizer('Nam quốc sơn hà Nam đế cư')).toEqual([
      'na',
      'nam',
      'am',
      'qu',
      'quố',
      'uố',
      'uốc',
      'ốc',
      'sơ',
      'sơn',
      'ơn',
      'hà',
      'na',
      'nam',
      'am',
      'đế',
      'cư',
    ]);
  });
});


describe('asciifolding ngram tokenizer', () => {
  const asciifoldingNGramTokenizer = nGramTokenizerCreater({
    min: 2,
    max: 3,
    filters: ['asciifolding'],
    tokenChars: ['letter', 'digit'],
  });

  it('Nam quốc sơn hà Nam đế cư', () => {
    expect(asciifoldingNGramTokenizer('Nam quốc sơn hà Nam đế cư')).toEqual([
      'na',
      'nam',
      'am',
      'qu',
      'quo',
      'uo',
      'uoc',
      'oc',
      'so',
      'son',
      'on',
      'ha',
      'na',
      'nam',
      'am',
      'de',
      'cu',
    ]);
  });
});


describe('whitespace ngram tokenizer', () => {
  const asciifoldingNGramTokenizer = nGramTokenizerCreater({
    min: 4,
    max: 4,
    filters: ['asciifolding'],
    tokenChars: ['letter', 'digit', 'whitespace'],
  });

  it('Nam quốc sơn hà Nam đế cư', () => {
    expect(asciifoldingNGramTokenizer('Nam quốc sơn hà Nam đế cư')).toEqual([
      'nam ',
      'am q',
      'm qu',
      ' quo',
      'quoc',
      'uoc ',
      'oc s',
      'c so',
      ' son',
      'son ',
      'on h',
      'n ha',
      ' ha ',
      'ha n',
      'a na',
      ' nam',
      'nam ',
      'am d',
      'm de',
      ' de ',
      'de c',
      'e cu',
    ]);
  });
});

describe('punctuation ngram tokenizer', () => {
  const asciifoldingNGramTokenizer = nGramTokenizerCreater({
    min: 10,
    max: 11,
    filters: ['asciifolding'],
    tokenChars: ['whitespace', 'punctuation'],
  });

  it('!"#%&($√)*,-./:;?@[]_{}', () => {
    expect(asciifoldingNGramTokenizer('!"#%&()*,-$√./:;?@[]_{}')).toEqual([
      '!"#%&()*,-',
      './:;?@[]_{',
      './:;?@[]_{}',
      '/:;?@[]_{}',
    ]);
  });
});

describe('symbol ngram tokenizer', () => {
  const asciifoldingNGramTokenizer = nGramTokenizerCreater({
    min: 1,
    max: 4,
    filters: ['asciifolding'],
    tokenChars: ['whitespace', 'symbol'],
  });

  it('!"$√', () => {
    expect(asciifoldingNGramTokenizer('!"$√')).toEqual(['$', '$√', '√']);
  });
});
