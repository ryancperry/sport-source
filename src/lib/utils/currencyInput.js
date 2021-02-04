import { digitsAndDecimalOnly } from './string';

// These functions handle HTML text inputs for currency

// Prevents the user from adding cents beyond the hundredth place
export const limitDecimalPlaces = str => {
  const decimalIndex = str.indexOf('.');
  const cutIndex = decimalIndex + 3;

  return decimalIndex > 0 ? str.slice(0, cutIndex) : str;
};

// Prevents errors when user enters two decimal places
export const removeExtraDecimals = str => str.split('.').slice(0, 2).join('.');

// Prevents errors when user enters a value starting with a decimal
export const handleCurrencyDecimals = str => {
  const decimalOnly = str === '.';
  const decimalsHandled = decimalOnly ? '0.' : limitDecimalPlaces(removeExtraDecimals(str));

  return decimalsHandled;
};

// Formats currency input
export const sanitizeCurrencyInput = str => {
  const numString = digitsAndDecimalOnly(str);
  const decimalCount = numString.match(/\./g)?.length ?? 0;

  return decimalCount ? handleCurrencyDecimals(numString) : numString;
};
