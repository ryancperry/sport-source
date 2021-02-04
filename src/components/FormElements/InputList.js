import React from 'react';

const InputList = ({ label, name, list }) => {
  const listName = `${name}-list`;

  return (
    <fieldset className="input-list__fieldset">
      <label className="input-list__label" htmlFor={name}>
        <span className="input-list__label-text">{label}</span>
        <input list={listName} id={name} name={name} />
      </label>
      <datalist id={listName}>
        {list.map(([value, displayValue]) => {
          const key = `${listName}-${value}`;

          return (
            <option key={key} value={value}>
              {displayValue}
            </option>
          );
        })}
      </datalist>
    </fieldset>
  );
};

export default InputList;
