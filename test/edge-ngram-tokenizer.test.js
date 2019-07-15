/**
 * Created by ngnhat on Fri July 12 2019
 */
const { edgeNGramTokenizerCreater } = require('../src/tokenizer');

describe('standard edge-ngram tokenizer', () => {
  const standardEdgeNGramTokenizer = edgeNGramTokenizerCreater({
    min: 2,
    max: 10,
    tokenChars: ['letter', 'digit'],
  });

  it('Quick Foxes', () => {
    expect(standardEdgeNGramTokenizer('Quick Foxes')).toEqual([
      'qu',
      'qui',
      'quic',
      'quick',
      'fo',
      'fox',
      'foxe',
      'foxes',
    ]);
  });

  it('Nam quốc sơn hà Nam đế cư', () => {
    expect(standardEdgeNGramTokenizer('Nam quốc sơn hà Nam đế cư')).toEqual([
      'na',
      'nam',
      'qu',
      'quố',
      'quốc',
      'sơ',
      'sơn',
      'hà',
      'na',
      'nam',
      'đế',
      'cư',
    ]);
  });
});


describe('asciifolding edge-ngram tokenizer', () => {
  const asciifoldingEdgeNGramTokenizer = edgeNGramTokenizerCreater({
    min: 2,
    max: 10,
    filters: ['asciifolding'],
    tokenChars: ['letter', 'digit'],
  });

  it('Nam quốc sơn hà Nam đế cư', () => {
    expect(asciifoldingEdgeNGramTokenizer('Nam quốc sơn hà Nam đế cư')).toEqual([
      'na',
      'nam',
      'qu',
      'quo',
      'quoc',
      'so',
      'son',
      'ha',
      'na',
      'nam',
      'de',
      'cu',
    ]);
  });
});

describe('whitespace edge-ngram tokenizer', () => {
  const asciifoldingEdgeNGramTokenizer = edgeNGramTokenizerCreater({
    min: 2,
    max: 10,
    filters: ['asciifolding'],
    tokenChars: ['letter', 'digit', 'whitespace'],
  });

  it('Nam quốc sơn hà Nam đế cư', () => {
    expect(asciifoldingEdgeNGramTokenizer('Nam quốc sơn hà Nam đế cư')).toEqual([
      'na',
      'nam',
      'nam ',
      'nam q',
      'nam qu',
      'nam quo',
      'nam quoc',
      'nam quoc ',
      'nam quoc s',
    ]);
  });
});


describe('punctuation edge-ngram tokenizer', () => {
  const asciifoldingNGramTokenizer = edgeNGramTokenizerCreater({
    min: 1,
    max: 20,
    filters: ['asciifolding'],
    tokenChars: ['whitespace', 'punctuation'],
  });

  it('!"#%&($√)*,-./:;?@[]_{}', () => {
    expect(asciifoldingNGramTokenizer('!"#%&()*,-$√./:;?@[]_{}')).toEqual([
      '!',
      '!"',
      '!"#',
      '!"#%',
      '!"#%&',
      '!"#%&(',
      '!"#%&()',
      '!"#%&()*',
      '!"#%&()*,',
      '!"#%&()*,-',
      '.',
      './',
      './:',
      './:;',
      './:;?',
      './:;?@',
      './:;?@[',
      './:;?@[]',
      './:;?@[]_',
      './:;?@[]_{',
      './:;?@[]_{}',
    ]);
  });
});


describe('symbol edge-ngram tokenizer', () => {
  const asciifoldingNGramTokenizer = edgeNGramTokenizerCreater({
    min: 1,
    max: 20,
    filters: ['asciifolding'],
    tokenChars: ['whitespace', 'symbol'],
  });

  it('!"$√', () => {
    expect(asciifoldingNGramTokenizer('!"$√')).toEqual(['$', '$√']);
  });
});
