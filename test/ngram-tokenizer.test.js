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
