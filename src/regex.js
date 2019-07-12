// http://www.unicode.org/charts
// http://www.unicode.org/Public/12.0.0/ucd/LineBreak.txt
// https://github.com/mathiasbynens/unicode-data/tree/master/10.0.0/blocks
// https://lucene.apache.org/core/7_5_0/core/org/apache/lucene/analysis/standard/StandardTokenizer.html
// https://github.com/mathiasbynens/unicode-12.1.0

/**
 * SOUTHEAST ASIAN
 */
const MYANMAR = {
  Standard: '\u1000-\u109F',
  Myanmar_Extended_A: '\uA9E0-\uA9FF',
  Myanmar_Extended_B: '\uAA60-\uAA7F',
};

const SOUTHEAST_ASIAN = `[${Object.values({
  LAO: '\u0E80-\u0EFF',
  AHOM: '\uDF00-\uDF3F',
  THAI: '\u0E00-\u0E4E', // NUMBER: 0E50-0E59
  KHMER: '\u1780-\u17FF',
  TAI_LE: '\u1980-\u19DF',
  TAI_VIET: '\uAA80-\uAADF',
  TAI_THAM: '\u1A20-\u1AAF',
  NEW_TAI_LUE: '\u1950-\u197F',
  TAI_XUAN_JING: '\uD834\uDF00-\uD834\uDF5F',
  MYANMAR: Object.values(MYANMAR).join(''),
}).join('')}]+`;


/**
 * IDEOGRAPHIC
 */
// TODO:
const IDEOGRAPHIC = Object.values({
  CJK_Unified_Ideographs: '[\u4E00-\u9FFF]',
  CJK_Unified_Ideographs_Extension_A: '[\u3400-\u4DBF]',
  CJK_Unified_Ideographs_Extension_B: '[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF]',
  CJK_Unified_Ideographs_Extension_C: '\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF3F]',
  CJK_Unified_Ideographs_Extension_D: '\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F]',
  CJK_Unified_Ideographs_Extension_E: '\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEAF]',
  CJK_Unified_Ideographs_Extension_F: '\uD873[\uDEB0-\uDFFF]|[\uD874-\uD879][\uDC00-\uDFFF]|\uD87A[\uDC00-\uDFEF]',
  CJK_Radicals_Supplement: '[\u2E80-\u2EFF]', // [\u2E80-\u2FD5]
  CJK_Compatibility_Ideographs_Supplement: '\uD87E[\uDC00-\uDE1F]',
  CJK_Compatibility_Ideographs: '[\uF900-\uFAFF]',
  // CJK_Compatibility: '[\u3300-\u33FF]', none
  // CJK_Strokes: '[\u31C0-\u31EF]', none
  // CJK_Compatibility_Forms: '[\uFE30-\uFE4F]', none
}).join('|');
// TODO: END TODO

const JAPANESE = `[${Object.values({
  Hiragana: '\u3040-\u3096\u309D-\u309F',
  Kanji_Radicals: '\u2E80-\u2FD5',
  Symbols_and_Punctuation: '\u3005-\u303D', // '[\u3000-\u303F]' TODO custom
}).join('')}]`;

const KATAKANA = `[${Object.values({
  Standard: '\u30A0-\u30FA\u30FC-\u30FF', // \u30A0-\u30FF
  Phonetic_Extensions: '\u31F0-\u31FF',
  FullWidth: '\uFF66-\uFF9D',
  Hiragana: '\u309B\u309C',
  Enclosed_CJK: '\u32D0-\u32FE',
  CJK_Compatibility: '\u3300-\u3357',
}).join('')}]+`;

/**
 *  ALPHANUM
 */
const nkoSource = '\u07C0–\u07FF';
const underscoreSource = '\u005F\uFF3F';

const DIACRITICAL_MARKS = {
  Standard: '\u0300-\u036F',
  Extended: '\u1AB0-\u1AFF',
  Supplement: '\u1DC0-\u1DFF',
};

const LATIN_NUM = {
  Basic_Num: '\u0030-\u0039',
  Halfwidth_Num: '\uFF10-\uFF19',
  Thai_Num: '\u0E50-\u0E59',
  Arabic_Num: '\u0660-\u0669',
  Bengali_Num: '\u09e6-\u09ef',
  Malayalam_Num: '\u0d66-\u0D6F',
};

const LATIN_ALPHA = {
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
};

const CYRILLIC = {
  Standard: '\u0400-\u04FF',
  Supplement: '\u0500-\u052F',
  Extended_A: '\u2DE0-\u2DFF',
  Extended_B: '\uA640-\uA69F',
  Extended_C: '\u1C80-\u1C8F',
};

const HANGUL = { // KOREAN
  Hangul_Jamo: '\u1100-\u11FF',
  Hangul_Syllables: '\uAC00-\uD7AF',
  Hangul_Jamo_Extended_A: '\uA960-\uA97F',
  Hangul_Jamo_Extended_B: '\uD7B0-\uD7FF',
  Hangul_Compatibility_Jamo: '\u3130-\u318F',
  FullWidth: '\uFFA1-\uFFDC',
};

const GREEK = {
  Greek_Extended: '\u1F00-\u1FFF',
  Greek_and_Coptic: '\u0370-\u03FF',
  Ancient_Greek_Numbers: '\uD800\uDD40-\uD800\uDD8F',
};

// TODO: add more languages

const latinNumSource = Object.values(LATIN_NUM).join('');
const latinAlphaSource = Object.values(LATIN_ALPHA).join('');
const latinSource = `${underscoreSource}${latinNumSource}${latinAlphaSource}`;
const greekSource = Object.values(GREEK).join('');
const hangulSource = Object.values(HANGUL).join('');
const cyrillicSource = Object.values(CYRILLIC).join('');
const diacriticalMarksSource = Object.values(DIACRITICAL_MARKS).join('');

const ALPHANUM = `[${[
  nkoSource,
  latinSource,
  greekSource,
  hangulSource,
  cyrillicSource,
  diacriticalMarksSource,
].join('')}]+`;

const alphaNumSource = `${latinAlphaSource}${latinNumSource}`;

const singleQuote = '\u0027';
const midNum = '\u066C\uFE50\uFE54\uFF0C\uFF1B';
const midNumLet = '\u002E\u2018\u2019\u2024\uFE52\uFF07\uFF0E';
const midLetter = '\u00B7\u0387\u05F4\u2027\u003A\uFE13\uFE55\uFF1A';

const allMidNumbers = `${singleQuote}${midNum}${midNumLet}`;
const allMidLetters = `${singleQuote}${midLetter}${midNumLet}`;

const NUM_MID_OR_APOSTROPHES = `[${alphaNumSource}]*[${latinNumSource}](?:[${allMidNumbers}][${latinNumSource}][${alphaNumSource}]*)+`;
const ALPHA_MID_OR_APOSTROPHES = `[${alphaNumSource}]*[${latinAlphaSource}](?:[${allMidLetters}][${latinAlphaSource}][${alphaNumSource}]*)+`;

const TOKENIZER_REGEX = new RegExp(
  [
    NUM_MID_OR_APOSTROPHES,
    ALPHA_MID_OR_APOSTROPHES,
    ALPHANUM,
    IDEOGRAPHIC,
    SOUTHEAST_ASIAN,
    JAPANESE,
    KATAKANA,
  ].join('|'),
  'ug',
);

const LETTER_REGEX = `[${[
  nkoSource,
  latinAlphaSource,
  greekSource,
  hangulSource,
  cyrillicSource,
  diacriticalMarksSource,
  IDEOGRAPHIC,
  SOUTHEAST_ASIAN,
  JAPANESE,
  KATAKANA,
].join('')}]`;

module.exports = {
  LETTER_REGEX,
  TOKENIZER_REGEX,
};
