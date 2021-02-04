import React from 'react';

const RadioInput = ({ handleChange, id, name, value }) => {
  return (
    <label className="radio" htmlFor={id}>
      <span className="radio__input-group">
        <input
          className="radio__input"
          id={id}
          onChange={handleChange}
          name={name}
          type="radio"
          value={value}
        />
        <span className="radio__control" />
      </span>
      <span className="radio__label">{value}</span>
    </label>
  );
};

export default RadioInput;
