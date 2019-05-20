const asciiFolding = require('../src/ascii-folding');

describe('asciiFolding', () => {
  it('without argument', () => {
    expect(asciiFolding()).toEqual('');
  });

  it('Cái nồi gì thế?', () => {
    expect(asciiFolding('Cái nồi gì thế?')).toEqual('Cai noi gi the?');
  });

  it('Is this déjà vu?', () => {
    expect(asciiFolding('Is this déjà vu?')).toEqual('Is this deja vu?');
  });

  it('My œsophagus caused a débâcle', () => {
    expect(asciiFolding('My œsophagus caused a débâcle')).toEqual('My oesophagus caused a debacle');
  });

  it('صفحة أسيا أما بـ, حيث.', () => {
    const arabicLorem = 'صفحة أسيا أما بـ, حيث.';
    expect(asciiFolding(arabicLorem)).toEqual(arabicLorem);
  });

  it('禁前自後民渡谷紹判設岐応。原感夢曜図会低座図郵狙回策強今品位読人続。', () => {
    const chineseLorem = '禁前自後民渡谷紹判設岐応。原感夢曜図会低座図郵狙回策強今品位読人続。';
    expect(asciiFolding(chineseLorem)).toEqual(chineseLorem);
  });

  it('äußerst', () => {
    expect(asciiFolding('äußerst')).toEqual('ausserst');
  });

  it('Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉO', () => {
    expect(asciiFolding('Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉO')).toEqual('Iлternationɑlizati߀ԉO');
  });

  it("John's", () => {
    expect(asciiFolding("John's")).toEqual("John's");
  });

  it.skip("l'église", () => {
    expect(asciiFolding("l'église")).toEqual('eglis');
  });
});
