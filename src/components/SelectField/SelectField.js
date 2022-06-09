import React from 'react'
import PropTypes from 'prop-types'

// Components
import Form from 'react-bootstrap/Form'

const SelectField = ({
  options,
  defaultText,
  disabled,
  onChange,
  label,
  value,
}) => (
  <Form>
    <Form.Label>{label}</Form.Label>
    <Form.Select disabled={disabled} onChange={onChange} value={value}>
      <option value="">{defaultText}</option>
      {options?.length > 0 &&
        options.map(({ label: l, value: v }) => (
          <option value={v} key={v}>
            {l}
          </option>
        ))}
    </Form.Select>
  </Form>
)

SelectField.defaultProps = {
  defaultText: 'Select option',
  disabled: false,
  onChange: () => {},
}

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default SelectField
