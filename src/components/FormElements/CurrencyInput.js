import { useState } from 'react';
import { centsToCurrency, sanitizeCurrencyInput, stringToKebabCase } from '../../lib/utils';

const CurrencyInput = ({
  handleChange,
  id = '',
  label = 'Label required',
  placeholder = '',
  readonly = false,
  required = false,
  cents = 0
}) => {
  const initialValue = centsToCurrency(cents) || '';
  const [currencyValue, setCurrencyValue] = useState(initialValue);
  const [displayValue, setDisplayValue] = useState(initialValue);
  const [fieldState, setFieldState] = useState('');

  const handleCurrencyChange = e => {
    const { target: { value = '' } = {} } = e;
    const sanitizedInput = sanitizeCurrencyInput(value);
    const centsInteger = Math.round(Number(sanitizedInput) * 100);
    const currency = centsToCurrency(centsInteger);

    setDisplayValue(sanitizedInput);
    handleChange(centsInteger);
    setCurrencyValue(currency);
  };

  const handleBlur = () => {
    setFieldState('');
    setDisplayValue(currencyValue);
  };

  const handleFocus = () => {
    setFieldState('focused');
  };

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
          name={uniqueId}
          onBlur={handleBlur}
          onChange={handleCurrencyChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          readOnly={readonly}
          required={required}
          type="text"
          value={displayValue}
        />
      </label>
    </fieldset>
  );
};

export default CurrencyInput;
