import React from 'react'
import ValidatingTextInput from './ValidatingTextInput'
import { parsePhoneNumber } from 'libphonenumber-js'

const PhoneInput = ({ value, validate, validationRes, id, mandatory, setter, ...props }) => {


  const validator = () => {
    try {
      parsePhoneNumber(value)
    } catch (e) {
      return 'Please enter a valid phone with + followed by country code'
    }
  }

  return (
    <ValidatingTextInput
      id={'phone'}
      label="Phone"
      type="tel"
      value={value}
      validate={validate}
      validationRes={validationRes}
      validator={validator}
      inputProps={{ maxLength: 14 }}
      setter={(val) => {
        setter(val.replace(/[^\d+]/g, ''))
      }}
      {...props}
    />
  )
}

export default PhoneInput
