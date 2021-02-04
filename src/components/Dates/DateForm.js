import React, { useState } from 'react';
import { dateFormatter } from '../../lib/utils';
import { InputList, RadioGroup } from '../FormElements';
import { dateOptions, otherOptions, timeOptions } from './dateTimeOptions';
import localeOptions from './localeOptions';

const DateForm = () => {
  const [currentOptions, setCurrentOptions] = useState({});
  const allOptions = [...dateOptions, ...timeOptions, ...otherOptions];

  const handleChange = e => {
    const { target: { name = '', value = '' } = {} } = e;
    const updatedValue = ['false', 'true'].includes(value) ? value === true : value;
    const optionsCopy = { ...currentOptions };
    const updateOptionsCopy = () =>
      updatedValue === 'unused' ? delete optionsCopy[name] : (optionsCopy[name] = updatedValue);
    updateOptionsCopy();
    setCurrentOptions(optionsCopy);
  };
  const now = new Date();
  const dateResults = dateFormatter(now, currentOptions);
  const displayObject = Object.entries(currentOptions).map(([key, value]) => {
    return `${key}: "${value}"`;
  });
  const localeList = localeOptions.map(({ locale, description }) => [locale, description]);

  return (
    <form className="dates__form">
      <h2 className="dates__form-headline">Date options sandbox</h2>
      <code>{`options: {
        ${displayObject}
      }`}</code>
      <p>Date format results: {dateResults}</p>
      <InputList
        label="Select a locale"
        name="locales"
        list={[['default', 'User default'], ...localeList]}
      />
      <section className="dates__form-section--dates">
        <header className="dates__section-header">
          <h3 className="dates__section-headline">Date Options</h3>
        </header>
        {dateOptions.map(({ name, possibleValues }) => (
          <RadioGroup
            handleChange={handleChange}
            key={`${name}-radio`}
            options={['unused', ...possibleValues]}
            name={name}
          />
        ))}
      </section>
      <section className="dates__form-section--time">
        <header className="dates__section-header">
          <h3 className="dates__section-headline">Time Options</h3>
        </header>
        {timeOptions.map(({ name, possibleValues }) => (
          <RadioGroup
            handleChange={handleChange}
            key={`${name}-radio`}
            options={['unused', ...possibleValues]}
            name={name}
          />
        ))}
      </section>
      <section className="dates__form-section--other">
        <header className="dates__section-header">
          <h3 className="dates__section-headline">Other Options</h3>
        </header>
        {otherOptions.map(({ name, possibleValues }) => (
          <RadioGroup
            handleChange={handleChange}
            key={`${name}-radio`}
            options={['unused', ...possibleValues]}
            name={name}
          />
        ))}
      </section>
      {/* {allOptions.map(({ name, possibleValues }) => (
        <RadioGroup
          handleChange={handleChange}
          key={`${name}-radio`}
          options={['unused', ...possibleValues]}
          name={name}
        />
      ))} */}
    </form>
  );
};

export default DateForm;
