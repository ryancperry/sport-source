export const dateOptions = [
  {
    name: 'dateStyle',
    possibleValues: ['full', 'long', 'medium', 'short']
  },
  {
    name: 'day',
    possibleValues: ['numeric', '2-digit']
  },
  {
    name: 'era',
    possibleValues: ['narrow', 'short', 'long']
  },
  {
    name: 'month',
    possibleValues: ['numeric', '2-digit', 'narrow', 'short', 'long']
  },
  {
    name: 'weekday',
    possibleValues: ['narrow', 'short', 'long']
  },
  {
    name: 'year',
    possibleValues: ['numeric', '2-digit']
  }
];

export const timeOptions = [
  {
    name: 'hour',
    possibleValues: ['numeric', '2-digit']
  },
  {
    name: 'hour12',
    possibleValues: [true, false]
  },
  {
    name: 'hourCycle',
    possibleValues: ['h11', 'h12', 'h23', 'h24']
  },
  {
    name: 'minute',
    possibleValues: ['numeric', '2-digit']
  },
  {
    name: 'second',
    possibleValues: ['numeric', '2-digit']
  },
  {
    name: 'timeStyle',
    possibleValues: ['full', 'long', 'medium', 'short']
  },
  {
    name: 'timeZoneName',
    possibleValues: ['short', 'long']
  }
];

export const otherOptions = [
  {
    name: 'formatMatcher',
    possibleValues: ['basic', 'best fit']
  },
  {
    name: 'calendar',
    possibleValues: [
      'buddhist',
      'chinese',
      'coptic',
      'dangi',
      'ethioaa',
      'ethiopic',
      'gregory',
      'hebrew',
      'indian',
      'islamic-civil',
      'islamic-rgsa',
      'islamic-tbla',
      'islamic-umalqura',
      'islamic',
      'iso8601',
      'japanese',
      'persian',
      'roc'
    ]
  }
];
