import React, { Fragment } from 'react';
import { dateOptions, otherOptions, timeOptions } from './dateTimeOptions';

const OptionDefinitions = () => {
  const optionLists = [
    {
      type: 'Date',
      list: dateOptions
    },
    {
      type: 'Time',
      list: timeOptions
    },
    {
      type: 'Other',
      list: otherOptions
    }
  ];

  return (
    <ul className="dates__definition-lists">
      {optionLists.map(({ type, list }) => (
        <li className="dates__definition-item" key={`${type}-list`}>
          <h3 className="dates__definition-headline">{type} options</h3>
          <dl className="dates__definitions">
            {list.map(({ name, possibleValues }) => (
              <Fragment key={`${name}-definition`}>
                <dt className="dates__term">{name}</dt>
                <dd className="dates__details">{possibleValues.join(', ')}</dd>
              </Fragment>
            ))}
          </dl>
        </li>
      ))}
    </ul>
  );
};

export default OptionDefinitions;
