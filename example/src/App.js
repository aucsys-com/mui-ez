import React, { useState } from 'react'

import { PhoneField } from 'mui-ez'
import 'mui-ez/dist/index.css'
import { Button } from '@material-ui/core'

const App = () => {
  const [validatePhone, setValidatePhone] = useState(false)

  return (
    <>
      <div style={{ paddingTop: 32 }}>
        <Button onClick={() => setValidatePhone(!validatePhone)}>
          Validate
        </Button>
        <PhoneField validate={validatePhone}/>
      </div>
    </>
  )
}

export default App
