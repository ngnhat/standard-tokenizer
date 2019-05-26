const { standardTokenizer } = require('../src/tokenizer');

describe('standard tokenizer', () => {
  it('without argument', () => {
    expect(standardTokenizer()).toEqual([]);
  });

  it('Cái nồi gì thế?', () => {
    expect(standardTokenizer('Cái nồi gì thế?')).toEqual(['cái', 'nồi', 'gì', 'thế']);
  });

  it('Is this déjà vu?', () => {
    expect(standardTokenizer('Is this déjà vu?')).toEqual(['is', 'this', 'déjà', 'vu']);
  });

  it('My œsophagus caused a débâcle', () => {
    expect(standardTokenizer('My œsophagus caused a débâcle'))
      .toEqual(['my', 'œsophagus', 'caused', 'a', 'débâcle']);
  });

  it('صفحة أسيا أما بـ, حيث.', () => {
    expect(standardTokenizer('صفحة أسيا أما بـ, حيث.'))
      .toEqual(['صفحة', 'أسيا', 'أما', 'بـ', 'حيث']);
  });

  it('禁前自後民渡谷紹判設岐応。原感夢曜図会低座図郵狙回策強今品位読人続。', () => {
    expect(standardTokenizer('禁前自後民渡谷紹判設岐応。原感夢曜図会低座図郵狙回策強今品位読人続。'))
      .toEqual(['禁', '前', '自', '後', '民', '渡', '谷', '紹', '判', '設', '岐', '応', '原', '感', '夢', '曜', '図', '会', '低', '座', '図', '郵', '狙', '回', '策', '強', '今', '品', '位', '読', '人', '続']);
  });

  it('äußerst', () => {
    expect(standardTokenizer('äußerst')).toEqual(['äußerst']);
  });

  it("John's", () => {
    expect(standardTokenizer("John's")).toEqual(["john's"]);
  });

  it("l'église", () => {
    expect(standardTokenizer("l'église")).toEqual(["l'église"]);
  });

  it('Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉO', () => {
    expect(standardTokenizer('Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉO')).toEqual(['iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉo']);
  });

  // combodia + thai
  it('ราตรีสวัสดิ์ផាសិនទឹកដោះគอันตรกิริยา', () => {
    expect(standardTokenizer('ราตรีสวัสดิ์ផាសិនទឹកដោះគอันตรกิริยา')).toEqual(['ราตรีสวัสดิ์ផាសិនទឹកដោះគอันตรกิริยา']);
  });

  it('一龯', () => {
    expect(standardTokenizer('一龯')).toEqual(['一', '龯']);
  });

  it('漢字 一龠々', () => {
    expect(standardTokenizer('漢字 一龠々')).toEqual(['漢', '字', '一', '龠', '々']);
  });

  it('ひらがな ぁんー', () => {
    expect(standardTokenizer('ひらがな ぁんー')).toEqual(['ひ', 'ら', 'が', 'な', 'ぁ', 'ん', 'ー']);
  });

  it('カタカナ ァヾ', () => {
    expect(standardTokenizer('カタカナ ァヾ')).toEqual(['カタカナ', 'ァヾ']);
  });

  it('一-龯ぁ-ゔゞァ-・ヽヾ゛゜ー', () => {
    expect(standardTokenizer('一-龯ぁ-ゔゞァ-・ヽヾ゛゜ー')).toEqual([
      '一',
      '龯',
      'ぁ',
      'ゔ',
      'ゞ',
      'ァ',
      'ヽヾ゛゜ー',
    ]);
  });

  it.skip('㐀-䶵一-鿋豈-頻 ぁ-ゖ ゠-ヿ ⺀-⿕ 　-〿 ｟-ﾟ ㇰ-ㇿ㈠-㉃㊀-㍿', () => {
    expect(standardTokenizer('㐀-䶵一-鿋豈-頻 ぁ-ゖ ゠-ヿ ⺀-⿕ 　-〿 ｟-ﾟ ㇰ-ㇿ㈠-㉃㊀-㍿')).toEqual([
      '㐀',
      '䶵',
      '一',
      '鿋',
      '豈',
      '頻',
      'ぁ',
      'ゖ',
      '゠',
      'ヿ',
      '⺀',
      '⿕',
      'ㇰ',
      'ㇿ',
    ]);
  });
});

describe('tokenizer', () => {
  it('a string contains punctuation', () => {
    expect(standardTokenizer('~!@#$%^&*(){}?+|<>;:-s/=][09813923871`_86643aest-KWW_E00ZB ()*abc&^%.123!%#$@!')).toEqual([
      's',
      '09813923871',
      '_86643aest',
      'kww_e00zb',
      'abc',
      '123',
    ]);
  });

  it('empty string', () => {
    expect(standardTokenizer()).toEqual([]);
  });

  it("a string contains only '_' character", () => {
    expect(standardTokenizer('_')).toEqual([]);
    expect(standardTokenizer('__')).toEqual([]);
    expect(standardTokenizer('___')).toEqual([]);
  });

  it('___abc', () => {
    expect(standardTokenizer('___abc')).toEqual(['___abc']);
  });

  it('abc___', () => {
    expect(standardTokenizer('abc___')).toEqual(['abc___']);
  });

  it('___abc___', () => {
    expect(standardTokenizer('___abc___')).toEqual(['___abc___']);
  });

  it('abc xyz 123_456 _123_456__ __123 456_', () => {
    expect(standardTokenizer('abc xyz 123_456 _123_456__ __123 456_')).toEqual(['abc', 'xyz', '123_456', '_123_456__', '__123', '456_']);
  });

  it('Apostrophes', () => {
    expect(standardTokenizer("it's21 me 213'sao  212' abc' 'ab '12 32'23")).toEqual([
      "it's21",
      'me',
      '213',
      'sao',
      '212',
      'abc',
      'ab',
      '12',
      "32'23",
    ]);
  });

  it("I.B.M. 8.5 can't!!!", () => {
    expect(standardTokenizer("I.B.M. 8.5 can't!!!")).toEqual(['i.b.m', '8.5', "can't"]);
  });
});
