/**
 * Created by ngnhat on Fri July 12 2019
 */
const { edgeNGramTokenizerCreater } = require('../src/tokenizer');

describe('standard ngram tokenizer', () => {
  const standardEdgeNGramTokenizer = edgeNGramTokenizerCreater({
    min: 2,
    max: 10,
    analyzer: 'standard',
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


describe('asciifolding ngram tokenizer', () => {
  const asciifoldingEdgeNGramTokenizer = edgeNGramTokenizerCreater({
    min: 2,
    max: 10,
    analyzer: 'asciifolding',
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
