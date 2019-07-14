const DIACRITICAL_MARKS = Object.values({
  Standard: '\u0300-\u036F',
  Extended: '\u1AB0-\u1AFF',
  Supplement: '\u1DC0-\u1DFF',
}).join('');

module.exports = DIACRITICAL_MARKS;
