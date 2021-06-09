import React from 'react'
import { parsePhoneNumber } from 'libphonenumber-js'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

const PhoneField = ({ value, validate, validationRes, id, mandatory, setter, ...props }) => {

  const validateNumber = (value) => {
    if(value === ''){
      return 'Please enter phone number'
    }
    try {
      const num = parsePhoneNumber(value)
      if (!num.isValid()) {
        return 'Phone number not valid'
      }
    } catch (e) {
      return 'Phone number not valid'
    }
    return true;
  }

  if (validationRes) {
    validationRes[id] = !!validateNumber(value)
  }

  return (
    <PhoneInput
      country={'gb'}
      value={value}
      onChange={phone => setter && setter(`+${phone}`)}
      isValid={(value, country) => {
        if (validate) {
            return validateNumber(`+${value}`)
        }
        return true
      }}
      {...props}
    />
  )
}

export default PhoneField
