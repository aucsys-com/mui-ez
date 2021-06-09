import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, { createFilterOptions } from '@material-ui/core/Autocomplete'
import {CircularProgress} from "@material-ui/core";

const filter = createFilterOptions();

export default function SelectWithInsertableOption({label, value, setValue, options, error, id, loading}) {
    return (
        <Autocomplete
            loading={loading}
            value={value}
            onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                    setValue(newValue);
                } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue(newValue.inputValue);
                } else {
                    setValue(newValue);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                // Suggest the creation of a new value
                if (params.inputValue !== '') {
                    filtered.push({
                        inputValue: params.inputValue,
                        title: `Add "${params.inputValue}"`,
                    });
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id={id}
            options={options}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                    return option.inputValue;
                }
                // Regular option
                return option.title;
            }}
            renderOption={(option) => {
                if (typeof option === 'string')
                    return option
                return option.title
            }}
            freeSolo
            renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label={label}
                           variant="standard"
                           margin="normal"
                           error={!!error}
                           helperText={error}
                           InputProps={{
                               ...params.InputProps,
                               endAdornment: (
                                   <>
                                       {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                       {params.InputProps.endAdornment}
                                   </>
                               ),
                           }} />
            )}
        />
    )
}
