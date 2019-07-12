const asciiMapping = require('./ascii-mapping');
const { TOKENIZER_REGEX, LETTER_REGEX, DIGIT_REGEX } = require('./regex');

// TODO: update ngram/edge-ngram function
console.log('DIGIT_REGEX', DIGIT_REGEX);
console.log('LETTER_REGEX', LETTER_REGEX);

const SPECIAL_REGEX = /^_+$/g;
const asciiMappingKeys = [...asciiMapping.keys()];
const asciiRegex = new RegExp(`[${asciiMappingKeys.join('')}]`, 'ug');

const asciiFolding = (str = '') => (
  str.replace(asciiRegex, character => asciiMapping.get(character) || character)
);

const standardTokenizer = (str = '') => {
  try {
    const strLowercased = `${str}`.toLowerCase();
    const tokens = strLowercased.match(TOKENIZER_REGEX) || [];

    return tokens.filter(token => !token.match(SPECIAL_REGEX));
  } catch (err) {
    console.error(err);
    return [];
  }
};

const asciiFoldingTokenizer = (str = '') => (
  standardTokenizer(asciiFolding(str))
);

const nGram = (min, max) => {
  const gramLengths = new Array(max - min + 1).fill(0).map((_, index) => min + index);

  const grams = (str = '') => {
    const lengths = gramLengths.filter(length => length <= str.length);

    if (lengths.length > 0) {
      return [
        ...lengths.map(length => str.slice(0, length)),
        ...grams(str.slice(1)),
      ];
    }

    return [];
  };

  return grams;
};

const edgeNGram = (min, max) => {
  const gramLengths = new Array(max - min + 1).fill(0).map((_, index) => min + index);

  const edgeGrams = (str = '') => {
    const lengths = gramLengths.filter(length => length <= str.length);

    if (lengths.length > 0) {
      return lengths.map(length => str.slice(0, length));
    }

    return [];
  };

  return edgeGrams;
};

const gramValidation = (parameters) => {
  if (typeof parameters !== 'object') {
    throw new Error('parameters is invalid');
  }

  const { min, max, analyzer } = parameters;

  if (typeof min !== 'number' || Number.isNaN(min) || min < 1 || min === Infinity) {
    throw new Error(`min '${min}' is not a valid argument`);
  }

  if (typeof max !== 'number' || Number.isNaN(max) || max < min || max === Infinity) {
    throw new Error(`max '${max}' is not a valid argument`);
  }

  if (!['standard', 'asciifolding'].includes(analyzer)) {
    throw new Error(`analyzer '${analyzer}' is not a valid argument`);
  }
};

const nGramTokenizerCreater = parameters => (str = '') => {
  gramValidation(parameters);
  const { min, max, analyzer } = parameters;

  const tokenizer = {
    standard: standardTokenizer,
    asciifolding: asciiFoldingTokenizer,
  }[analyzer] || standardTokenizer;

  return tokenizer(str).reduce((accTerms, term) => ([
    ...accTerms,
    ...nGram(min, max)(term),
  ]), []);
};

const edgeNGramTokenizerCreater = parameters => (str = '') => {
  gramValidation(parameters);
  const { min, max, analyzer } = parameters;

  const tokenizer = {
    standard: standardTokenizer,
    asciifolding: asciiFoldingTokenizer,
  }[analyzer] || standardTokenizer;

  return tokenizer(str).reduce((accTerms, term) => ([
    ...accTerms,
    ...edgeNGram(min, max)(term),
  ]), []);
};

module.exports = {
  asciiFolding,
  standardTokenizer,
  asciiFoldingTokenizer,
  nGramTokenizerCreater,
  edgeNGramTokenizerCreater,
};
