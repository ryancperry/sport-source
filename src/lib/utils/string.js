export const capitalizeString = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const camelCaseString = str =>
  str
    .split(' ')
    .map((word, index) => (index ? capitalizeString(word) : word.toLowerCase()))
    .join('');

export const camelToKebabCase = str =>
  str
    .split('')
    .map(letter => (letter === letter.toUpperCase() ? `-${letter.toLowerCase()}` : letter))
    .join('');

export const digitsAndDecimalOnly = str => String(str).replace(/[^0-9.]/g, '');

export const kebabToCamelCase = str =>
  str
    .toLowerCase()
    .split('-')
    .map((word, index) => (index ? capitalizeString(word) : word))
    .join('');

export const kebabToPascalCase = str => capitalizeString(kebabToCamelCase(str));

export const pascalCaseString = str =>
  str
    .split(' ')
    .map(word => capitalizeString(word))
    .join('');

export const stringToKebabCase = (str = '') => str.replace(/\s/g, '-').toLowerCase();

export const stringToNumber = (str = '') => Number(digitsAndDecimalOnly(str)) || 0;

export const titleCaseExceptions = [
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'for',
  'into',
  'or',
  'nor',
  'so',
  'the',
  'to',
  'yet'
];

export const titleCaseString = str =>
  str
    .split(' ')
    .map((word, index) => {
      const shouldUpperCase = !index || !titleCaseExceptions.includes(word.toLowerCase());

      return shouldUpperCase ? capitalizeString(word) : word.toLowerCase();
    })
    .join(' ');
