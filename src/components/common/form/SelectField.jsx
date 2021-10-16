import React from 'react'
import PropTypes from 'prop-types'

function SelectField({
  defaultOption,
  onChangeHandle,
  options,
  label,
  value,
  error,
  name
}) {
  const getInputClasses = () => {
    return `${error ? 'form-select is-invalid' : 'form-select'} `
  }
  const optionsArr =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          _id: options[optionName]._id
        }))
      : options

  const handleChange = ({ target }) => {
    onChangeHandle({ name: target.name, value: target.value })
  }

  return (
    <div className="d-flex flex-column mt-3">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id="validationCustom04"
        value={value}
        onChange={handleChange}
        name={name}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArr &&
          optionsArr.map((option) => {
            return (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            )
          })}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
SelectField.defaultOption = { error: `Please select something` }

SelectField.propTypes = {
  defaultOption: PropTypes.string,
  onChangeHandle: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string
}

export default SelectField
