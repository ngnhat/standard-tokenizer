const asciiMapping = require('./ascii-mapping');
const regexTokenizer = require('./regex-tokenizer');

const SPECIAL_REGEX = /^_+$/g;
const asciiMappingKeys = [...asciiMapping.keys()];
const regex = new RegExp(`[${asciiMappingKeys.join('')}]`, 'ug');

const asciiFolding = (str = '') => (
  str.normalize('NFC').replace(regex, character => asciiMapping.get(character) || character)
);

const asciiFoldingNonNFC = (str = '') => (
  str.replace(regex, character => asciiMapping.get(character) || character)
);

const standardTokenizer = (str = '') => {
  try {
    const strLowercased = str.normalize('NFC').toLowerCase();
    const tokens = strLowercased.match(regexTokenizer) || [];

    return tokens.filter(token => !token.match(SPECIAL_REGEX));
  } catch (err) {
    console.error(err);
    return [];
  }
};

const asciiFoldingTokenizer = (str = '') => (
  standardTokenizer(str).map(token => asciiFoldingNonNFC(token))
);

module.exports = {
  asciiFolding,
  standardTokenizer,
  asciiFoldingTokenizer,
};
