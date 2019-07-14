const LATIN_LETTER = Object.values({
  Basic_Alpha: '\u0041-\u005A\u0061-\u007A',
  Halfwidth_Alpha: '\uFF21-\uFF3A\uFF41-\uFF5A',
  Latin_Extended_a: '\u0100-\u017F',
  Latin_Extended_b: '\u0180-\u024F',
  Latin_Extended_c: '\u2C60-\u2C7F',
  Latin_Extended_d: '\uA722-\uA788\uA78B-\uA7FF',
  Latin_Extended_e: '\uAB30-\uAB6F',
  Extended_Additional: '\u1E00-\u1EFF',
  Alphabetic_Presentation: '\uFB00-\uFB4F',
  Ipa_Extensions: '\u0250-\u02AF',
  Phonetic_Extensions: '\u1D00-\u1D7F',
  Extensions_Supplement: '\u1D80-\u1DBF',
  Supplement: '\u00A9\u00AA\u00AE\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF',
  Enclosed_Alphanumerics: '\u24B6-\u24E9',
}).join('');

const LATIN_DIGIT = '\u0030-\u0039';

const LATIN_SYMBOL = Object.values({
}).join('');

const LATIN_PUNCTUATION = Object.values({
}).join('');

module.exports = {
  LATIN_DIGIT,
  LATIN_LETTER,
  LATIN_SYMBOL,
  LATIN_PUNCTUATION,
};
