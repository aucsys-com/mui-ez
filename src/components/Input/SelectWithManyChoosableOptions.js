import React, {useState} from 'react';
import {Checkbox, CircularProgress, TextField} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const SelectWithManyChoosableOptions = ({label, value, options, setter, isLoading}) => {
    const [open, setOpen] = useState(false);

    const handleChange = (option) => {
        setter(option.map(opt => opt.id));
    };

    const getVal = (val) => {
        if (isLoading)
            return [];

        if (!options)
            return [];

        return val.reduce((selectedOptions, valueToBeMatched) => {

            let matchedOption = options.find(option => option.id === valueToBeMatched);
            if (matchedOption)
                selectedOptions.push(matchedOption);
            return selectedOptions;
        }, []) || [];
    };

    return (
        <Autocomplete
            disableClearable
            disableCloseOnSelect
            multiple
            loading={isLoading}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            options={isLoading ? [] : options}
            value={getVal(value)}
            getOptionSelected={(option, value) => {
                return option.id === value.id;
            }}
            onChange={(e, option) => handleChange(option)}
            getOptionLabel={option => option.name || ""}
            renderOption={(option, {selected}) => (
                <>
                    <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                        color="primary"
                        checkedIcon={<CheckBoxIcon fontSize="small"/>}
                        style={{marginRight: 8}}
                        checked={selected}
                    />
                    {option.name ? option.name : option["full_name"]}
                </>
            )}
            renderInput={params => (
                <TextField
                    {...params}
                    fullWidth
                    label={label}
                    variant="standard"
                    margin="normal"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {isLoading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
};

export default SelectWithManyChoosableOptions;
