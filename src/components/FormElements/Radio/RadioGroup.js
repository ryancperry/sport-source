import React from 'react';
import RadioInput from './RadioInput';

const RadioGroup = ({ handleChange, label, name, options }) => {
  return (
    <fieldset className="radio__fieldset" key={`${name}-radio`}>
      <div className="radio__group-wrapper">
        <legend className="radio__legend">{label || name}</legend>

        {options.map(value => {
          const key = `${name}-${value}`;

          return (
            <RadioInput handleChange={handleChange} key={key} id={key} name={name} value={value} />
          );
        })}
      </div>
    </fieldset>
  );
};

export default RadioGroup;
