const LATIN_LETTER = Object.values({
  Basic_Alpha: '\\u0041-\\u005A\\u0061-\\u007A',
  Halfwidth_Alpha: '\\uFF21-\\uFF3A\\uFF41-\\uFF5A',
  Latin_Extended_a: '\\u0100-\\u017F',
  Latin_Extended_b: '\\u0180-\\u024F',
  Latin_Extended_c: '\\u2C60-\\u2C7F',
  Latin_Extended_d: '\\uA722-\\uA788\\uA78B-\\uA7FF',
  Latin_Extended_e: '\\uAB30-\\uAB6F',
  Extended_Additional: '\\u1E00-\\u1EFF',
  Alphabetic_Presentation: '\\uFB00-\\uFB4F',
  Ipa_Extensions: '\\u0250-\\u02AF',
  Phonetic_Extensions: '\\u1D00-\\u1D7F',
  Extensions_Supplement: '\\u1D80-\\u1DBF',
  Supplement: '\\u00A9\\u00AA\\u00AE\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u00FF',
  Enclosed_Alphanumerics: '\\u24B6-\\u24E9',
}).join('');

const LATIN_DIGIT = '\u0030-\u0039';

const LATIN_SYMBOL = Object.values({
  Basic: '\\u0024\\u002B\\u003C-\\u003E\\u005E\\u0060\\u007C\\u007E',
  Latin_Extended_d: '\\uA789\\uA78A',
  Mathematical_Operators: '\\u2200-\\u22FF',
  Supplement: '\\u00A2-\\u00A6\\u00A8\\u00AC\\u00AF-\\u00B1\\u00B4\\u00B8\\u00D7\\u00F7',
}).join('');

const LATIN_PUNCTUATION = Object.values({
  Basic: '\\u0021-\\u0023\\u0025-\\u002A\\u002C-\\u002F\\u003A\\u003B\\u003F\\u0040\\u005B-\\u005D\\u005F\\u007B\\u007D',
  Supplement: '\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF',
}).join('');

module.exports = {
  LATIN_DIGIT,
  LATIN_LETTER,
  LATIN_SYMBOL,
  LATIN_PUNCTUATION,
};
