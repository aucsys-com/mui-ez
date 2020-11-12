import React, {useEffect, useState} from 'react';
import SimpleInput from "./SimpleInput";
import {makeErrorText} from "./utils/formUtils";

const ValidatingTextInput = ({value, id, validationRes, validator, validate, setter, ...props}) => {
    const [errorText, setErrorText] = useState('')
    const [val, setVal] = useState("")

    if (validationRes) {
        validationRes[id] = makeErrorText(validator, val) === ''
    }

    useEffect(() => {
        setVal(value)
    }, [value])

    useEffect(() => {
        if(validate) {
            setErrorText(makeErrorText(validator, val))
        }
    }, [validate, validator, val])

    return (
        <SimpleInput
            value={value}
            type={'text'}
            error={errorText !== ''}
            helperText={errorText}
            onChange={(e) => {
                const v = e.target.value
                if(validate)
                    setErrorText(makeErrorText(validator, v))
                setter && setter(v)
                setVal(v)
            }}
            {...props}/>
    );
};

export default ValidatingTextInput;
