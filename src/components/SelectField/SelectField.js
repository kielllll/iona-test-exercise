import React from 'react'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const SelectField = ({ options, defaultText, props }) => (
  <Form.Select {...props}>
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
}

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultText: PropTypes.string,
  props: PropTypes.any,
}

export default SelectField
