const { asciiFoldingTokenizer } = require('../src/tokenizer');

describe('asciifolding tokenizer', () => {
  it('without argument', () => {
    expect(asciiFoldingTokenizer()).toEqual([]);
  });

  it('Cái nồi gì thế?', () => {
    expect(asciiFoldingTokenizer('Cái nồi gì thế?')).toEqual(['cai', 'noi', 'gi', 'the']);
  });

  it('Is this déjà vu?', () => {
    expect(asciiFoldingTokenizer('Is this déjà vu?')).toEqual(['is', 'this', 'deja', 'vu']);
  });

  it('My œsophagus caused a débâcle', () => {
    expect(asciiFoldingTokenizer('My œsophagus caused a débâcle'))
      .toEqual(['my', 'oesophagus', 'caused', 'a', 'debacle']);
  });

  it('禁前自後民渡谷紹判設岐応。原感夢曜図会低座図郵狙回策強今品位読人続。', () => {
    expect(asciiFoldingTokenizer('禁前自後民渡谷紹判設岐応。原感夢曜図会低座図郵狙回策強今品位読人続。'))
      .toEqual(['禁', '前', '自', '後', '民', '渡', '谷', '紹', '判', '設', '岐', '応', '原', '感', '夢', '曜', '図', '会', '低', '座', '図', '郵', '狙', '回', '策', '強', '今', '品', '位', '読', '人', '続']);
  });

  it('äußerst', () => {
    expect(asciiFoldingTokenizer('äußerst')).toEqual(['ausserst']);
  });

  it("John's", () => {
    expect(asciiFoldingTokenizer("John's")).toEqual(["john's"]);
  });

  it("l'église", () => {
    expect(asciiFoldingTokenizer("l'église")).toEqual(["l'eglise"]);
  });

  it('Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉO', () => {
    expect(asciiFoldingTokenizer('Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉO')).toEqual(['iлternationɑlizati߀ԉo']);
  });
});

describe('tokenizer', () => {
  it('a string contains punctuation', () => {
    expect(asciiFoldingTokenizer('~!@#$%^&*(){}?+|<>;:-s/=][09813923871`_86643aest-KWW_E00ZB ()*abc&^%.123!%#$@!')).toEqual([
      's',
      '09813923871',
      '_86643aest',
      'kww_e00zb',
      'abc',
      '123',
    ]);
  });

  it('empty string', () => {
    expect(asciiFoldingTokenizer()).toEqual([]);
  });

  it("a string contains only '_' character", () => {
    expect(asciiFoldingTokenizer('_')).toEqual([]);
    expect(asciiFoldingTokenizer('__')).toEqual([]);
    expect(asciiFoldingTokenizer('___')).toEqual([]);
  });

  it('___abc', () => {
    expect(asciiFoldingTokenizer('___abc')).toEqual(['___abc']);
  });

  it('abc___', () => {
    expect(asciiFoldingTokenizer('abc___')).toEqual(['abc___']);
  });

  it('___abc___', () => {
    expect(asciiFoldingTokenizer('___abc___')).toEqual(['___abc___']);
  });

  it('abc xyz 123_456 _123_456__ __123 456_', () => {
    expect(asciiFoldingTokenizer('abc xyz 123_456 _123_456__ __123 456_')).toEqual(['abc', 'xyz', '123_456', '_123_456__', '__123', '456_']);
  });

  it('Ⓐⓩ', () => {
    expect(asciiFoldingTokenizer('Ⓐⓩ')).toEqual(['az']);
  });
});
