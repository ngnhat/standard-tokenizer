const MYANMAR_DIGIT = Object.values({
  Standard: '\u1040-\u1049',
  Shan: '\u1090-\u1099',
  Tai_Laing: '\uA9F0-\uA9F9',
}).join('');

const MYANMAR_LETTER = Object.values({
  Standard: '\u1000-\u103F\u1050-\u108F\u109A-\u109D',
  Myanmar_Extended_A: '\uAA60-\uAA76\uAA7A-\uAA7F',
  Myanmar_Extended_B: '\uA9E0-\uA9EF\uA9FA-\uA9FF',
}).join('');

const SOUTHEAST_ASIAN_LETTER = Object.values({
  MYANMAR_LETTER,
  Ahom: '\uDF00-\uDF3F',
  Thai: '\u0E00-\u0E3A\u0E40-\u0E4E',
  Cham: '\uAA00-\uAA4F',
  Tai_Le: '\u1950-\u197F',
  Tai_Viet: '\uAA80-\uAADF',
  Kayah_Li: '\uA90A-\uA92D',
  New_Tai_Lue: '\u1980-\u19DF',
  Lao: '\u0E80-\u0ECF\u0EDA-\u0EFF',
  Pau_Cin_Hau: '\u{11AC0}-\u{11AFF}',
  Khmer: '\u1780-\u17DF\u17EA-\u17FF',
  Tai_Tham: '\u1A20-\u1A7F\u1A9A-\u1AAF',
  Pahawh_Hmong: '\u{16B00}-\u{16B36}\u{16B3C}-\u{16B43}\u{16B5A}-\u{16B8F}',
}).join('');

const SOUTHEAST_ASIAN_DIGIT = Object.values({
  MYANMAR_DIGIT,
  Lao: '\u0ED0-\u0ED9',
  Thai: '\u0E50-\u0E59',
  Cham: '\uAA50-\uAA59',
  Khmer: '\u17E0-\u17E9',
  Kayah_Li: '\uA900-\uA909',
  Tai_Tham: '\u1A90-\u1A99',
  Tai_Tham_Hora: '\u1A80-\u1A89',
  Pahawh_Hmong: '\u{16B50}-\u{16B59}',
}).join('');

const SOUTHEAST_ASIAN_SYMBOL = Object.values({
  Thai: '\\u0E3F',
  Khmer: '\\u17DB\\u17F0-\\u17F9',
  Khmer_Symbol: '\\u19E0-\\u19FF',
  Myanmar_Extended_A: '\\uAA77-\\uAA79',
  Myanmar: '\\u104C-\\u104F\\u109E-\\u109F',
}).join('');

const SOUTHEAST_ASIAN_PUNCTUATION = Object.values({
  Cham: '\\uAA5C-\\uAA5F',
  Myanmar: '\\u104A-\\u104B',
  Kayah_Li: '\\uA92E-\\uA92F',
  Pahawh_Hmong: '\\u{16B37}-\\u{16B3B}\\u{16B44}-\\u{16B45}',
}).join('');

module.exports = {
  SOUTHEAST_ASIAN_DIGIT,
  SOUTHEAST_ASIAN_LETTER,
  SOUTHEAST_ASIAN_SYMBOL,
  SOUTHEAST_ASIAN_PUNCTUATION,
};
