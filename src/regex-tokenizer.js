// http://www.unicode.org/charts
// http://www.unicode.org/Public/12.0.0/ucd/LineBreak.txt
// https://github.com/mathiasbynens/unicode-data/tree/master/10.0.0/blocks
// https://lucene.apache.org/core/7_5_0/core/org/apache/lucene/analysis/standard/StandardTokenizer.html
// https://github.com/mathiasbynens/unicode-12.1.0
const asciiAlphaNumMapping = require('./alphanum-ascii-mapping');

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
  THAI: '\u0E00-\u0E7F',
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
  CJK_Compatibility: '[\u3300-\u33FF]',
  // CJK_Strokes: '[\u31C0-\u31EF]', none
  // CJK_Compatibility_Forms: '[\uFE30-\uFE4F]', none
}).join('|');

const JAPANESE = `[${Object.values({
  Hiragana: '\u3040-\u309F', // '\u3040-\u3096\u3097-\u309F'
  Katakana: '\u30A0-\u30FA\u30FC-\u30FF', // \u30A0-\u30FF
  Kanji_Radicals: '\u2E80-\u2FD5',
  Symbols_and_Punctuation: '\u3005-\u303D', // '[\u3000-\u303F]' TODO custom
  Katakana_and_Punctuation_Half_Width: '\uFF66-\uFF9D', // '\uFF5F-\uFF9F'
  Miscellaneous_Symbols_Characters: '\u31F0-\u31FF\u3220-\u3243\u3280-\u337F',
}).join('')}]`;


/**
 *  ALPHANUM
 */
const NKo = /\u07C0–\u07FF/;
const IPA_EXTENSIONS = /\u0250-\u02AF/;
const LATIN_EXTENDED_A = /\u0100-\u017F/;
const BASIC_LATIN_CUSTOMED = /a-zA-Z0-9_/;
const DIACRITICAL_MARKS = /\u0300-\u036f/; // Diacritical code charts https://en.wikipedia.org/wiki/Combining_Diacritical_Marks
const asciiAlphaNumMappingSource = [...asciiAlphaNumMapping.keys()].join('');

const ARABIC = {
  Standard: '\u0600-\u06FF',
  Supplement: '\u0750-\u077F',
  Extended_A: '\u08A0-\u08FF',
  Presentation_Forms_A: '\uFB50-\uFDFF',
  Presentation_Forms_B: '\uFE70-\uFEFF',
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
};

const GREEK = {
  Greek_Extended: '\u1F00-\u1FFF',
  Greek_and_Coptic: '\u0370-\u03FF',
  Ancient_Greek_Numbers: '\uD800\uDD40-\uD800\uDD8F',
};
// TODO: add more languages

const greekSource = Object.values(GREEK).join('');
const hangulSource = Object.values(HANGUL).join('');
const arabicSource = Object.values(ARABIC).join('');
const cyrillicSource = Object.values(CYRILLIC).join('');

const ALPHANUM = `[${[
  NKo.source,
  greekSource,
  hangulSource,
  arabicSource,
  cyrillicSource,
  IPA_EXTENSIONS.source,
  LATIN_EXTENDED_A.source,
  DIACRITICAL_MARKS.source,
  BASIC_LATIN_CUSTOMED.source,
  asciiAlphaNumMappingSource,
].join('')}]+`;


const REGEX_TOKENIZER = new RegExp(
  [ALPHANUM, IDEOGRAPHIC, SOUTHEAST_ASIAN, JAPANESE].join('|'),
  'ug',
);

module.exports = REGEX_TOKENIZER;
