const asciiMapping = require('./ascii-mapping');
const {
  DIGIT_REGEX,
  LETTER_REGEX,
  SYMBOL_REGEX,
  TOKENIZER_REGEX,
  WHITESPACE_REGEX,
  PUNCTUATION_REGEX,
} = require('./regex-tokenizer');

const SPECIAL_REGEX = /^_+$/g;
const asciiMappingKeys = [...asciiMapping.keys()];
const asciiRegex = new RegExp(`[${asciiMappingKeys.join('')}]`, 'ug');

const CHARS_MAPPING = {
  digit: DIGIT_REGEX,
  letter: LETTER_REGEX,
  whitespace: WHITESPACE_REGEX,
  symbol: SYMBOL_REGEX,
  punctuation: PUNCTUATION_REGEX,
};

const asciiFolding = (str = '') => (
  str.replace(asciiRegex, character => asciiMapping.get(character) || character)
);

const FILER_MAPPING = {
  asciifolding: asciiFolding,
};

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

const filterFunc = (str = '', filters = []) => {
  try {
    return filters.reduce((accStr, filterName) => {
      const func = FILER_MAPPING[filterName];
      return func ? func(accStr) : accStr;
    }, str);
  } catch (err) {
    console.error(err);
    return [];
  }
};

const gramTokenizer = (str = '', tokenChars = []) => {
  try {
    const strLowercased = `${str}`.toLowerCase();

    if (!tokenChars.length) {
      return [strLowercased];
    }

    const regexString = tokenChars.reduce((acc, char) => (
      acc + (CHARS_MAPPING[char] || '')
    ), '');
    const regex = new RegExp(`[${regexString}]+`, 'ug');

    return strLowercased.match(regex) || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

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

  const {
    min,
    max,
    filters = [],
    tokenChars = [],
  } = parameters;

  if (typeof min !== 'number' || Number.isNaN(min) || min < 1 || min === Infinity) {
    throw new Error(`min '${min}' is not a valid argument`);
  }

  if (typeof max !== 'number' || Number.isNaN(max) || max < min || max === Infinity) {
    throw new Error(`max '${max}' is not a valid argument`);
  }

  if (!(filters instanceof Array)) {
    throw new Error(`filters '${filters}' is not a valid argument`);
  }

  if (!(tokenChars instanceof Array)) {
    throw new Error(`tokenChars '${tokenChars}' is not a valid argument`);
  }
};

const nGramTokenizerCreater = parameters => (_str = '') => {
  gramValidation(parameters);
  const {
    min,
    max,
    filters = [],
    tokenChars = [],
  } = parameters;
  const str = filterFunc(_str, filters);

  return gramTokenizer(str, tokenChars)
    .reduce((accTerms, term) => ([
      ...accTerms,
      ...nGram(min, max)(term),
    ]), []);
};

const edgeNGramTokenizerCreater = parameters => (_str = '') => {
  gramValidation(parameters);
  const {
    min,
    max,
    filters = [],
    tokenChars = [],
  } = parameters;
  const str = filterFunc(_str, filters);

  return gramTokenizer(str, tokenChars).reduce((accTerms, term) => ([
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
