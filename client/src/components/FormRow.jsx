
const FormRow = ({ type, name, value, handleChange,
   labelText, placeholder, min, max, step }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className='form-input'
          min={min}
          max={max}
          step={step}
        />
      </div>
    );
  };
  
  export default FormRow;
  