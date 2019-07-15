// TODO: 302A-302F
const CJK_DIGIT = Object.values({
  Halfwidth_Digits: '\uFF10-\uFF19',
}).join('');

// I don't know why, but elastic is ...
const CJK_ALPHANUM = Object.values({
  CJK_Symbols_and_Punctuation: '\u3005\u303B\u303C',
}).join('');

const CJK_SYMBOL = Object.values({
  Halfwidth_and_Fullwidth_Forms: '\\uFF04\\uFF0B\\uFF1C-\\uFF1E\\uFF3E\\uFF40\\uFF61-\\uFF64\\uFFE0-\\uFFE6\\uFFE8-\\uFFEE',
  CJK_Symbols_and_Punctuation: '\\u3004\\u3012\\u3013\\u3020\\u3036\\u3037\\u303E\\u303F',
  CJK_Strokes: '\\u31C0-\\u31E3',
  CJK_Compatibility: '\\u3358-\\u33FF',
  CJK_Description_Characters: '\\u2FF0-\\u2FFF',
  Enclosed_CJK: '\\u3200-\\u3247\\u3250\\u3260-\\u32B0\\u32C0-\\u32CF\\u32FF',
  Enclosed_Ideographic_Supplement: '\\u{1F200}-\\u{1F202}\\u{1F210}-\\u{1F23B}\\u{1F240}-\\u{1F248}\\u{1F250}\\u{1F251}\\u{1F260}-\\u{1F265}',
  Letterlike_Symbols: '\\u{2100}-\\u{214F}',
}).join('');

const CJK_PUNCTUATION = Object.values({
  Halfwidth_and_Fullwidth_Forms: '\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B-\\uFF60\\uFF65',
  CJK_Symbols_and_Punctuation: '\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F',
  CJK_Compatibility_Forms: '\\uFE30-\\uFE4F',
  KATAKANA: '\\u30FB',
}).join('');

const IDEOGRAPHIC_LETTER = Object.values({
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
  CJK_Symbols_and_Punctuation: '\u3007\u3021-\u3029\u3030\u3038-\u303A\u303D',
}).join('');

const JAPANESE_LETTER = Object.values({
  Hiragana: '\u3040-\u3096\u309D-\u309F',
  Kanji_Radicals: '\u2E80-\u2FD5',
}).join('');

const KATAKANA_LETTER = Object.values({
  Standard: '\u30A0-\u30FA\u30FC-\u30FF',
  Phonetic_Extensions: '\u31F0-\u31FF',
  FullWidth: '\uFF66-\uFF9D',
  Hiragana: '\u309B\u309C',
  Enclosed_CJK: '\u32D0-\u32FE',
  CJK_Compatibility: '\u3300-\u3357',
  CJK_Symbols_and_Punctuation: '\u3031-\u3035',
}).join('');

const HANGUL_LETTER = Object.values({
  Hangul_Jamo: '\u1100-\u11FF',
  Hangul_Syllables: '\uAC00-\uD7AF',
  Hangul_Jamo_Extended_A: '\uA960-\uA97F',
  Hangul_Jamo_Extended_B: '\uD7B0-\uD7FF',
  Hangul_Compatibility_Jamo: '\u3130-\u318F',
  FullWidth: '\uFFA1-\uFFDC',
}).join('');

module.exports = {
  CJK_DIGIT,
  CJK_SYMBOL,
  CJK_ALPHANUM,
  CJK_PUNCTUATION,
  HANGUL_LETTER,
  JAPANESE_LETTER,
  KATAKANA_LETTER,
  IDEOGRAPHIC_LETTER,
};
