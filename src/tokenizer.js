const asciiMapping = require('./ascii-mapping');
const regexTokenizer = require('./regex-tokenizer');

const SPECIAL_REGEX = /^_+$/g;
const asciiMappingKeys = [...asciiMapping.keys()];
const regex = new RegExp(`[${asciiMappingKeys.join('')}]`, 'ug');

const asciiFolding = (str = '') => (
  str.replace(regex, character => asciiMapping.get(character) || character)
);

const asciiFoldingTokenizer = (str = '') => {
  try {
    const folded = asciiFolding(str.toLowerCase());
    const tokens = folded.match(regexTokenizer) || [];

    return tokens.filter(token => !token.match(SPECIAL_REGEX));
  } catch (err) {
    console.error(err);
    return [str];
  }
};

const standardTokenizer = (str = '') => {
  try {
    const tokens = str.toLowerCase().match(regexTokenizer) || [];

    return tokens.filter(token => !token.match(SPECIAL_REGEX));
  } catch (err) {
    console.error(err);
    return [str];
  }
};

module.exports = {
  asciiFolding,
  standardTokenizer,
  asciiFoldingTokenizer,
};
