import { useState } from 'react';
import { stringToKebabCase } from '../../lib/utils';

const TextInput = ({
  handleChange,
  id = '',
  label = 'Label required',
  placeholder = '',
  readonly = false,
  required = false,
  type = 'text',
  value = ''
}) => {
  const [fieldState, setFieldState] = useState('');
  const uniqueId = id || stringToKebabCase(label);

  return (
    <fieldset className={`text-input__fieldset ${fieldState}`}>
      <label className="text-input__label" htmlFor={uniqueId}>
        <span className="text-input__label-text">{label}</span>
        {/* {readonly && <Lock />} */}
        {required && <sup aria-label="This input is required.">*</sup>}
        {/* {tooltipText && <Tooltip id={id} text={tooltipText} />} */}
        <input
          className="text-input__input"
          id={uniqueId}
          onBlur={() => setFieldState('')}
          onFocus={() => setFieldState('focused')}
          onChange={e => handleChange(e.target.value)}
          name={uniqueId}
          placeholder={placeholder}
          required={required}
          readOnly={readonly}
          type={type}
          value={value}
        />
      </label>
    </fieldset>
  );
};

export default TextInput;
