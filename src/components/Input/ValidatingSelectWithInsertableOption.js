import React, {useEffect, useState} from "react";
import SelectWithInsertableOption from "./SelectWithInsertableOption";
import {makeErrorText} from "./utils/formUtils";

const ValidatingSelectWithInsertableOption = ({id, value, setValue, validationRes, validator, validate, error, ...props}) => {
    const [errorText, setErrorText] = useState(null)

    if (validationRes) {
        validationRes[id] = makeErrorText(validator, value) === ''
    }

    useEffect(() => {
        if(validate) {
            setErrorText(makeErrorText(validator, value))
        }
    }, [validate, validator, value])

    return (
        <SelectWithInsertableOption
            value={value}
            setValue={(v) => {
                setErrorText(makeErrorText(validator, v))
                setValue(v)
            }}
            error={error ? error : errorText}
            {...props}
        />
    )
}

export {
    ValidatingSelectWithInsertableOption
}
