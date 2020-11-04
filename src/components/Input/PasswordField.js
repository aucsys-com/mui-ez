import ValidatingTextInput from "../../components/Input/ValidatingTextInput";
import React from "react";
import {emptyTextValidator} from "../../utils/formUtils";
import useStyles from "./LogInStyles";

export default function PasswordField({value, setter, validate, validationRes, ...props}){
    const passwordValidator = (v) => {
        if(emptyTextValidator(v)) {
            return 'Please enter password'
        }
    }

    return (
        <ValidatingTextInput label="Password"
                             id={'password'}
                             variant="outlined"
                             size="small"
                             value={value}
                             setter={setter}
                             type="password"
                             validator={passwordValidator}
                             validate={validate}
                             validationRes={validationRes}
                             {...props}/>
    )
}
