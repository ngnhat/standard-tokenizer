const ARABIC_DIGIT = '\\u0660-\\u0669\\u06F0-\\u06F9';

const ARABIC_LETTER = Object.values({
  Standard: '\\u0600-\\u0605\\u060E-\\u061A\\u0620-\\u065F\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06EF\\u06FA-\\u06FC\\u06FF',
  Supplement: '\\u0750-\\u077F',
  Extended_A: '\\u08A0-\\u08FF',
  Presentation_Forms_A: '\\uFB50-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFDFB',
  Presentation_Forms_B: '\\uFE70-\\uFEFF',
  Mathematical_Alphabetic_Symbols: '\\u{1EE00}-\\u{1EEBB}',
}).join('');

const ARABIC_SYMBOL = Object.values({
  Standard: '\\u0606-\\u0608\\u060B\\u06DE\\u06E9\\u06FD\\u06FE',
  Presentation_Forms_A: '\\uFBB2-\\uFBC1\\uFDFC\\uFDFD',
  Mathematical_Alphabetic_Symbols: '\\u{1EEF0}\\u{1EEF1}',
}).join('');

const ARABIC_PUNCTUATION = Object.values({
  Standard: '\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4',
  Presentation_Forms_A: '\\uFD3E\\uFD3F',
}).join('');

module.exports = {
  ARABIC_DIGIT,
  ARABIC_LETTER,
  ARABIC_SYMBOL,
  ARABIC_PUNCTUATION,
};
