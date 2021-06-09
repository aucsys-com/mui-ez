import ValidatingTextInput from '../../components/Input/ValidatingTextInput'
import React, { useState } from 'react'
import { emptyTextValidator } from './utils/formUtils'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { Visibility, VisibilityOff } from '@material-ui/icons'


export default function PasswordField({ value, setter, validate, validationRes, withEye, ...props }) {
  const [show, setShow] = useState(false)

  const passwordValidator = (v) => {
    if (emptyTextValidator(v)) {
      return 'Please enter password'
    }
  }

  return (
    <ValidatingTextInput label="Password"
                         id={'password'}
                         variant="outlined"
                         value={value}
                         setter={setter}
                         type={show ? 'text' : 'password'}
                         validator={passwordValidator}
                         validate={validate}
                         validationRes={validationRes}
                         { ...(withEye && {
                           InputProps: {
                             endAdornment:
                               <InputAdornment position="end">
                                 <IconButton
                                   aria-label="toggle password visibility"
                                   edge="end"
                                   onClick={() => {
                                     setShow(!show)
                                   }}
                                   //  onMouseDown={handleMouseDownPassword}
                                 >
                                   {show ? <Visibility /> : <VisibilityOff />}
                                 </IconButton>
                               </InputAdornment>
                           }
                         }) }
                         {...props} />
  )
}
