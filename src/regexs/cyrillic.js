const CYRILLIC_LETTER = Object.values({
  Standard: '\\u0400-\\u04FF',
  Supplement: '\\u0500-\\u052F',
  Extended_A: '\\u2DE0-\\u2DFF',
  Extended_B: '\\uA640-\\uA672\\uA674-\\uA67D\\uA67F-\\uA69F',
  Extended_C: '\\u1C80-\\u1C8F',
}).join('');

const CYRILLIC_PUNCTUATION = '\\uA673\\uA67E';

module.exports = {
  CYRILLIC_LETTER,
  CYRILLIC_PUNCTUATION,
};
