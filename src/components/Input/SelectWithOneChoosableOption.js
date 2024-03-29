import React, {useState} from 'react';
import {CircularProgress, TextField} from "@material-ui/core";
import Autocomplete from '@material-ui/core/Autocomplete'


const SelectWithOneChoosableOption = ({label, value, options, setter, validate, validationFailText, validationRes, id, isLoading, onInputChange, disableUnderline, renderOption, ...props}) => {
    const [open, setOpen] = useState(false);

    const handleChange = (option) => {
        setter(option.id);
    };

    let isShowValidationError = false;
    if (validationRes && id) {
        const isInputValid = value !== null && value !== undefined && value !== '';
        validationRes[id] = isInputValid;
        if (validate) {
            isShowValidationError = !isInputValid;
        } else {
            isShowValidationError = false;
        }
    }

    const getVal = (val) => {
        if (isLoading)
            return '';

        if (!options) {
            return '';
        }
        let selectedOption = options.find(option => option.id === val);
        return selectedOption || null;
    };

    return (
        <Autocomplete
            onInputChange={(event, value, reason) => {
                if (onInputChange) {
                    onInputChange(value, event, reason);
                }
            }}
            disableClearable
            loading={isLoading}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            options={isLoading ? [] : options}
            value={getVal(value)}
            getOptionSelected={(option, value) => {return option.id === value.id;}}
            onChange={(e, option) => handleChange(option)}
            getOptionLabel={option => option.name || ""}
            renderOption={option => renderOption ? renderOption(option) : option.name}
            renderInput={params => (
                <TextField
                    {...params}
                    fullWidth
                    label={label}
                    variant="standard"
                    margin="normal"
                    error={isShowValidationError}
                    helperText={isShowValidationError ? validationFailText : null}
                    InputProps={{
                        ...params.InputProps,
                        disableUnderline: disableUnderline,
                        endAdornment: (
                            <>
                                {isLoading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
            {...props}
        />
    );
};

export default SelectWithOneChoosableOption;
