const asciiMapping = require('./ascii-mapping');

const asciiMappingKeys = [...asciiMapping.keys()];
const regex = new RegExp(`[${asciiMappingKeys.join('')}]`, 'ug');

const asciiFolding = (str = '') => (
  str.replace(regex, character => asciiMapping.get(character) || character)
);

module.exports = asciiFolding;
