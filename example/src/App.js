import React, { useState } from 'react'

import { PhoneField, PasswordField } from 'mui-ez'
import 'mui-ez/dist/index.css'
import { Button } from '@material-ui/core'

const App = () => {
  const [validatePhone, setValidatePhone] = useState(false)
  const [phoneValue, setPhoneValue] = useState('')

  let validationRes = {}

  return (
    <>
      <div style={{ paddingTop: 32 }}>
        <Button onClick={() => setValidatePhone(!validatePhone)}>
          Validate
        </Button>
        <PhoneField id="phone"
                    value={phoneValue}
                    setter={setPhoneValue}
                    validate={validatePhone}
                    validationRes={validationRes} />
        <PasswordField />
      </div>
    </>
  )
}

export default App
