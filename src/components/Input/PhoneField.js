import React from 'react'
import { parsePhoneNumber } from 'libphonenumber-js'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { makeErrorText } from './utils/formUtils'

const PhoneField = ({ value, validate, validationRes, id, mandatory, setter, ...props }) => {

  if (validationRes) {
    validationRes[id] = makeErrorText(validator, val) === ''
  }

  return (
    <PhoneInput
      country={'gb'}
      value={value}
      onChange={phone => setter?.setter(phone)}
      isValid={(value, country) => {
        if (validate) {
          try {
            console.log('checking', value)
            parsePhoneNumber(`+${value}`)
            return true
          } catch (e) {
            return 'Phone number not valid'
          }
        }
        return true
      }}
      {...props}
    />
  )
}

export default PhoneField
