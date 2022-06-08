import React from 'react'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const SelectField = ({ options, defaultText, disabled, onChange, props }) => (
  <Form.Select disabled={disabled} onChange={onChange} {...props}>
    <option>{defaultText}</option>
    {options?.length > 0 &&
      options.map(({ label, value }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
  </Form.Select>
)

SelectField.defaultProps = {
  defaultText: 'Select option',
  disabled: false,
  onChange: () => {}
}

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  props: PropTypes.any,
}

export default SelectField
