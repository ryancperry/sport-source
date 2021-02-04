import { stringToNumber } from './string';

export const centsToDollars = (cents = 0) => cents / 100;

export const currencyToCents = currency => stringToNumber(currency) * 100;

export const dollarToCents = (dollars = 0) => dollars * 100;

export const currencyFormatter = (num = 0, options = {}, locale = 'en-US') =>
  new Intl.NumberFormat(locale, options).format(num);

export const dollarsToCurrency = (dollars = 0) => {
  const formattedNumber =
    typeof num === 'string' ? stringToNumber(dollars).toFixed(2) : dollars.toFixed(2);
  const hasCents = formattedNumber % 1;
  const options = { style: 'currency', currency: 'USD', minimumFractionDigits: hasCents ? 2 : 0 };

  return currencyFormatter(formattedNumber, options);
};

export const centsToCurrency = val => {
  const cents = typeof val === 'string' ? stringToNumber(val) : val;
  const dollars = centsToDollars(cents);

  return dollarsToCurrency(dollars);
};
