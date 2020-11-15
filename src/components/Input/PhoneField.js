import React from 'react'
import { parsePhoneNumber } from 'libphonenumber-js'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { makeErrorText } from './utils/formUtils'

const PhoneField = ({ value, validate, validationRes, id, mandatory, setter, ...props }) => {

  const validateNumber = (value) => {
    try {
      const num = parsePhoneNumber(`+${value}`)
      if (!num.isValid()) {
        return 'Phone number not valid'
      }
    } catch (e) {
      return 'Please enter phone number'
    }
  }

  if (validationRes) {
    validationRes[id] = makeErrorText(validateNumber, value) === ''
  }

  return (
    <PhoneInput
      country={'gb'}
      value={value}
      onChange={phone => setter && setter(`+${phone}`)}
      isValid={(value, country) => {
        if (validate) {
            return validateNumber(value) || true
        }
        return true
      }}
      {...props}
    />
  )
}

export default PhoneField
