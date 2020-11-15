import React from 'react'
import { parsePhoneNumber } from 'libphonenumber-js'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

const PhoneField = ({ value, validate, validationRes, id, mandatory, setter, ...props }) => {

  const validateNumber = (value) => {
    try {
      console.log(`parsing ${value}`)
      const num = parsePhoneNumber(value)
      if (!num.isValid()) {
        return 'Phone number not valid'
      }
    } catch (e) {
      console.log(e)
      return 'Please enter phone number'
    }
    return true;
  }

  if (validationRes) {
    validationRes[id] = validateNumber(value)
  }

  console.log(validationRes)

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
