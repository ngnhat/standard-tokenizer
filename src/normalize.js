const asciiMapping = require('./ascii-mapping');

const asciiKeys = new Array(...asciiMapping.keys());
const regex = new RegExp(`[${asciiKeys.join('')}]`, 'ug');

const normalize = (str = '') => (
  str.replace(regex, character => asciiMapping.get(character) || character)
);

module.exports = normalize;
