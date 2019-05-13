// http://www.unicode.org/Public/12.0.0/ucd/LineBreak.txt
// https://github.com/mathiasbynens/unicode-data/tree/master/10.0.0/blocks
const Ideographic = require('unicode-12.1.0/Line_Break/Ideographic/regex');
const asciiMapping = require('./ascii-mapping');

// Diacritical code charts https://en.wikipedia.org/wiki/Combining_Diacritical_Marks
const diacriticalMarksSource = (/\u0300-\u036f/).source;
const asciiMappingSource = [...asciiMapping.keys()].join('');

const STANDARD = `[a-zA-Z0-9_${asciiMappingSource}${diacriticalMarksSource}]+`;
const IDEOGRAPHIC = Ideographic.source;

const SA = Object.values({
  LAO: '[\u0E80-\u0EFF]+',
  AHOM: '[\uDF00-\uDF3F]+',
  THAI: '[\u0E00-\u0E7F]+',
  KHMER: '[\u1780-\u17FF]+',
  TAI_LE: '[\u1980-\u19DF]+',
  TAI_VIET: '[\uAA80-\uAADF]+',
  TAI_THAM: '[\u1A20-\u1AAF]+',
  NEW_TAI_LUE: '[\u1950-\u197F]+',
  TAI_XUAN_JING: '\uD834[\uDF00-\uDF5F]+',
  MYANMAR: `[${Object.values({
    STANDARD: '\u1000-\u109F',
    MYANMAR_EXTENDED_A: '\uA9E0-\uA9FF',
    MYANMAR_EXTENDED_B: '\uAA60-\uAA7F',
  }).join('')}]+`,
}).join('|');

const ARABIC = `[${Object.values({
  STANDARD: '\u0600-\u06FF',
  SUPPLEMENT: '\u0750-\u077F',
  EXTENDED_A: '\u08A0-\u08FF',
  PRESENTATION_FORMS_A: '\uFB50-\uFDFF',
  PRESENTATION_FORMS_B: '\uFE70-\uFEFF',
}).join('')}]+`;

const CYRILLIC = `[${Object.values({
  STANDARD: '\u0400-\u04FF',
  SUPPLEMENT: '\u0500-\u052F',
  EXTENDED_A: '\u2DE0-\u2DFF',
  EXTENDED_B: '\uA640-\uA69F',
  EXTENDED_C: '\u1C80-\u1C8F',
}).join('')}]+`;

const LINE_BREAKING = [
  SA,
  ARABIC,
  CYRILLIC,
  STANDARD,
  IDEOGRAPHIC,
  // TODO: add more languages
];

const LINE_BREAKING_REGEX = new RegExp(LINE_BREAKING.join('|'), 'ug');

module.exports = LINE_BREAKING_REGEX;
