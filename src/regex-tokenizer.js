// http://www.unicode.org/charts
// http://www.unicode.org/Public/12.0.0/ucd/LineBreak.txt
// https://lucene.apache.org/core/7_5_0/core/org/apache/lucene/analysis/standard/StandardTokenizer.html

/**
 * SOUTHEAST ASIAN
 */
const MYANMAR = Object.values({
  Standard: '\u1000-\u103F\u104A-\u108F\u109A-\u109F',
  Myanmar_Extended_A: '\uAA60-\uAA7F',
  Myanmar_Extended_B: '\uA9E0-\uA9EF\uA9FA-\uA9FF',
}).join('');

const MYANMAR_DIGIT = Object.values({
  Digits: '\u1040-\u1049',
  Shan_Digits: '\u1090-\u1099',
  Tai_Laing_Digits: '\uA9F0-\uA9F9',
}).join('');

const SOUTHEAST_ASIAN_REGEX = Object.values({
  MYANMAR,
  AHOM: '\uDF00-\uDF3F',
  THAI: '\u0E00-\u0E4E',
  TAI_LE: '\u1950-\u197F',
  TAI_VIET: '\uAA80-\uAADF',
  KAYAH_LI: '\uA90A-\uA92F',
  NEW_TAI_LUE: '\u1980-\u19DF',
  LAO: '\u0E80-\u0ECF\u0EDA-\u0EFF',
  CHAM: '\uAA00-\uAA4F\uAA5A-\uAA5F',
  PAU_CIN_HAU: '\u{11AC0}-\u{11AFF}',
  KHMER: '\u1780-\u17DF\u17EA-\u17FF',
  TAI_THAM: '\u1A20-\u1A7F\u1A9A-\u1AAF',
  PAHAWH_HMONG: '\u{16B00}-\u{16B4F}\u{16B5A}-\u{16B8F}',
}).join('');
const SOUTHEAST_ASIAN = `[${SOUTHEAST_ASIAN_REGEX}]+`;


/**
 * IDEOGRAPHIC
 */
const IDEOGRAPHIC_REGEX = Object.values({
  CJK_Unified_Ideographs: '\u4E00-\u9FFF',
  CJK_Unified_Ideographs_Extension_A: '\u3400-\u4DBF',
  CJK_Unified_Ideographs_Extension_B: '\u{20000}-\u{2A6D6}',
  CJK_Unified_Ideographs_Extension_C: '\u{2A700}-\u{2B734}',
  CJK_Unified_Ideographs_Extension_D: '\u{2B740}-\u{2B81D}',
  CJK_Unified_Ideographs_Extension_E: '\u{2B820}-\u{2CEA1}',
  CJK_Unified_Ideographs_Extension_F: '\u{2CEB0}-\u{2EBE0}',
  CJK_Compatibility_Ideographs_Supplement: '\u{2F800}-\u{2FA1F}',
  CJK_Compatibility_Ideographs: '\uF900-\uFAFF',
  CJK_Radicals_Supplement: '\u2E80-\u2EFF',
  // CJK_Strokes: '\u31C0-\u31EF', none
  // CJK_Compatibility: '\u3300-\u33FF', none
  // CJK_Compatibility_Forms: '\uFE30-\uFE4F', none
  // CJK_Description_Characters: '\u2FF0-\u2FFF', none
}).join('');
const IDEOGRAPHIC = `[${IDEOGRAPHIC_REGEX}]`;

const JAPANESE_REGEX = Object.values({
  Hiragana: '\u3040-\u3096\u309D-\u309F',
  Kanji_Radicals: '\u2E80-\u2FD5',
  Symbols_and_Punctuation: '\u3005\u3007\u3021-\u3029\u3030-\u3035\u3038-\u303A\u303D',
}).join('');
const JAPANESE = `[${JAPANESE_REGEX}]`;

const KATAKANA_REGEX = Object.values({
  Standard: '\u30A0-\u30FA\u30FC-\u30FF',
  Phonetic_Extensions: '\u31F0-\u31FF',
  FullWidth: '\uFF66-\uFF9D',
  Hiragana: '\u309B\u309C',
  Enclosed_CJK: '\u32D0-\u32FE',
  CJK_Compatibility: '\u3300-\u3357',
}).join('');

const KATAKANA = `[${KATAKANA_REGEX}]+`;

/**
 *  ALPHANUM
 */
const nkoSource = '\u07CA-\u07F5\u07FA\u07FD';
const underscoreSource = '\u005F\uFF3F';

const DIACRITICAL_MARKS = {
  Standard: '\u0300-\u036F',
  Extended: '\u1AB0-\u1AFF',
  Supplement: '\u1DC0-\u1DFF',
};

const DIGIT = {
  Basic_Digits: '\u0030-\u0039',
  Lao_Digits: '\u0ED0-\u0ED9',
  Nko_Digits: '\u07C0-\u07C9',
  Thai_Digits: '\u0E50-\u0E59',
  Cham_Digits: '\uAA50-\uAA59',
  Khmer_Digits: '\u17E0-\u17E9',
  Bengali_Digits: '\u09e6-\u09ef',
  Kayah_Li_Digits: '\uA900-\uA909',
  Tai_Tham_Digits: '\u1A90-\u1A99',
  Halfwidth_Digits: '\uFF10-\uFF19',
  Malayalam_Digits: '\u0d66-\u0D6F',
  Tai_Tham_Hora_Digits: '\u1A80-\u1A89',
  Pahawh_Hmong_Digits: '\u{16B50}-\u{16B59}',
  Arabic_Digits: '\u0660-\u0669\u06F0-\u06F9',
  CJK_Symbols_and_Punctuation: '\u303B\u303C', // TODO
  Myanmar_Digits: MYANMAR_DIGIT,
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
  Greek_Extended: '\u1F00-\u1FFF', // TODO
  Greek_and_Coptic: '\u0370-\u037D\u037F-\u03FF',
  Ancient_Greek_Numbers: '\u{10140}-\u{10174}',
};

const ARABIC = {
  Standard: '\u0600-\u0605\u060E-\u061A\u0620-\u065F\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06EF\u06FA-\u06FC\u06FF',
  Supplement: '\u0750-\u077F',
  Extended_A: '\u08A0-\u08FF',
  Presentation_Forms_A: '\uFB50-\uFBB1\uFBD3-\uFD3D\uFD50-\uFDFB',
  Presentation_Forms_B: '\uFE70-\uFEFF',
  Mathematical_Alphabetic_Symbols: '\u{1EE00}-\u{1EEFF}',
};

// TODO: add more languages

const digitSource = Object.values(DIGIT).join('');
const latinAlphaSource = Object.values(LATIN_ALPHA).join('');
const latinSource = `${underscoreSource}${digitSource}${latinAlphaSource}`;
const greekSource = Object.values(GREEK).join('');
const arabicSource = Object.values(ARABIC).join('');
const hangulSource = Object.values(HANGUL).join('');
const cyrillicSource = Object.values(CYRILLIC).join('');
const diacriticalMarksSource = Object.values(DIACRITICAL_MARKS).join('');

const ALPHANUM = `[${[
  nkoSource,
  latinSource,
  greekSource,
  arabicSource,
  hangulSource,
  cyrillicSource,
  diacriticalMarksSource,
].join('')}]+`;

const alphaNumSource = `${latinAlphaSource}${digitSource}`;

const singleQuote = '\u0027';
const midNum = '\u066C\uFE50\uFE54\uFF0C\uFF1B';
const midNumLet = '\u002E\u2018\u2019\u2024\uFE52\uFF07\uFF0E';
const midLetter = '\u00B7\u0387\u05F4\u2027\u003A\uFE13\uFE55\uFF1A';

const allMidNumbers = `${singleQuote}${midNum}${midNumLet}`;
const allMidLetters = `${singleQuote}${midLetter}${midNumLet}`;

const NUM_MID_OR_APOSTROPHES = `[${alphaNumSource}]*[${digitSource}](?:[${allMidNumbers}][${digitSource}][${alphaNumSource}]*)+`;
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

const LETTER_REGEX = [
  nkoSource,
  latinAlphaSource,
  greekSource,
  arabicSource,
  hangulSource,
  cyrillicSource,
  diacriticalMarksSource,
  SOUTHEAST_ASIAN_REGEX,
  IDEOGRAPHIC_REGEX,
  JAPANESE_REGEX,
  KATAKANA_REGEX,
].join('');

module.exports = {
  TOKENIZER_REGEX,
  LETTER_REGEX,
  DIGIT_REGEX: digitSource,
};
