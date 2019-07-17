const GREEK_LETTER = Object.values({
  Greek_Extended: '\\u1F00-\\u1FBC\\u1FC2-\\u1FCC\\u1FD0-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FFC',
  Greek_and_Coptic: '\\u0370-\\u037D\\u037F-\\u0386\\u0388-\\u03FF',
  Ancient_Greek_Numbers: '\\u{10140}-\\u{10174}',
}).join('');

const GREEK_SYMBOL = Object.values({
  Ancient_Symbols: '\\u{10190}-\\u{101CF}',
  Ancient_Greek_Numbers: '\\u{10175}-\\u{1018E}',
}).join('');

const GREEK_PUNCTUATION = Object.values({
  Greek_Extended: '\\u1FBD-\\u1FC1\\u1FCD-\\u1FCF\\u1FDD-\\u1FDF\\u1FED-\\u1FEF\\u1FFD-\\u1FFF',
  Greek_and_Coptic: '\\u037E\\u0387',
}).join('');

// const COPTIC_EPACT_NUMBERS = '\\u{102E0}-\\u{102FF}';

module.exports = {
  GREEK_LETTER,
  GREEK_SYMBOL,
  GREEK_PUNCTUATION,
  // COPTIC_EPACT_NUMBERS,
};
