const normalize = require('../src/normalize');

describe('normalize', () => {
  it('without argument', () => {
    expect(normalize()).toEqual('');
  });

  it('Cái nồi gì thế?', () => {
    expect(normalize('Cái nồi gì thế?')).toEqual('Cai noi gi the?');
  });

  it('Is this déjà vu?', () => {
    expect(normalize('Is this déjà vu?')).toEqual('Is this deja vu?');
  });

  it('My œsophagus caused a débâcle', () => {
    expect(normalize('My œsophagus caused a débâcle')).toEqual('My oesophagus caused a debacle');
  });

  it('صفحة أسيا أما بـ, حيث.', () => {
    const arabicLorem = 'صفحة أسيا أما بـ, حيث.';
    expect(normalize(arabicLorem)).toEqual(arabicLorem);
  });

  it('禁前自後民渡谷紹判設岐応。原感夢曜図会低座図郵狙回策強今品位読人続。', () => {
    const chineseLorem = '禁前自後民渡谷紹判設岐応。原感夢曜図会低座図郵狙回策強今品位読人続。';
    expect(normalize(chineseLorem)).toEqual(chineseLorem);
  });

  it('äußerst', () => {
    expect(normalize('äußerst')).toEqual('ausserst');
  });

  it.skip("John's", () => {
    expect(normalize("John's")).toEqual('John');
  });

  it.skip("l'église", () => {
    expect(normalize("l'église")).toEqual('eglis');
  });
});
