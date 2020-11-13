import React, { useState } from 'react'

import { PhoneField, PasswordField } from 'mui-ez'
import 'mui-ez/dist/index.css'
import { Button } from '@material-ui/core'

const App = () => {
  const [validatePhone, setValidatePhone] = useState(false)
  const [phoneValue, setPhoneValue] = useState('')
  const [passwordFieldEye, setPasswordFieldEye] = useState(true)

  let validationRes = {}

  return (
    <>
      <div style={{ paddingTop: 32 }}>
        <Button onClick={() => setValidatePhone(!validatePhone)} variant='outlined'>
          Validate
        </Button>
        <PhoneField id="phone"
                    value={phoneValue}
                    setter={setPhoneValue}
                    validate={validatePhone}
                    validationRes={validationRes} />
        <Button onClick={() => setPasswordFieldEye(!passwordFieldEye)} variant='outlined'>
          Show Eye
        </Button>
        <PasswordField withEye={passwordFieldEye}/>
      </div>
    </>
  )
}

export default App
