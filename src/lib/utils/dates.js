const MS_IN_DAY = 86400000;
const MS_IN_HOUR = 3600000;

export const dateFormatter = (date, options = {}) =>
  new Intl.DateTimeFormat('default', options).format(date);

export const dateCompact = date => {
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };

  return dateFormatter(date, options);
};

export const dateTimeCompact = date => {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  };

  return dateFormatter(date, options);
};

export const timeShort = date => dateFormatter(date, { timeStyle: 'short' });
