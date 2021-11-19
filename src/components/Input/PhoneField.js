import React from 'react'
import { parsePhoneNumber } from 'libphonenumber-js'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { makeStyles } from '@material-ui/styles'
import { alpha, emphasize } from '@material-ui/core'

const inputStyles = makeStyles((theme) => ({
    phoneInput: {
        color: ({ colorStyle }) => {
            return colorStyle
        },
        border: ({ colorStyle }) => {
            return '1px solid ' + alpha(colorStyle, 0.4) + ' !important'
        },
        '&.invalid-number ': {
            border: '1px solid #d32f2f !important',
            color: '#d32f2f !important'
        },
        '&:hover': {
            borderColor: ({ colorStyle, hasError }) => {
                return hasError
                    ? '#d32f2f'
                    : emphasize(colorStyle) + ' !important'
            }
        },
        '&:focus': {
            boxShadow: 'unset !important'
        }
    },
    phoneInputContainerClass: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        background: 'none',
        '& .special-label': {
            color: ({ colorStyle }) => {
                return colorStyle
            },
            background: ({ backgroundColor }) => {
                return backgroundColor
            }
        },
        '& .invalid-number-message': {
            background: ({ backgroundColor }) => {
                return backgroundColor + ' !important'
            },
            color: '#d32f2f !important'
        },
        '& .selected-flag .arrow': {
            borderTopColor: ({ colorStyle, hasError }) => {
                return hasError
                    ? '#d32f2f'
                    : emphasize(colorStyle) + ' !important'
            }
        },
        '& .selected-flag .arrow.up': {
            borderBottomColor: ({ colorStyle, hasError }) => {
                return hasError
                    ? '#d32f2f'
                    : emphasize(colorStyle) + ' !important'
            }
        }
    }
}))

const PhoneField = ({
    colorStyle,
    backgroundColor,
    value,
    validate,
    validationRes,
    id,
    mandatory,
    setter,
    ...props
}) => {
    const validateNumber = (value) => {
        if (value === '') {
            return 'Please enter phone number'
        }
        try {
            const num = parsePhoneNumber(value)
            if (!num.isValid()) {
                return 'Phone number not valid'
            }
        } catch (e) {
            return 'Phone number not valid'
        }
        return true
    }

    const localClasses = inputStyles({
        backgroundColor: backgroundColor,
        colorStyle: colorStyle,
        hasError: validate && validateNumber(`+${value}`)
    })

    if (validationRes) {
        validationRes[id] = !!validateNumber(value)
    }

    return (
        <PhoneInput
            country='gb'
            value={value}
            onChange={(phone) => setter && setter(`+${phone}`)}
            isValid={(value, country) => {
                if (validate) {
                    return validateNumber(`+${value}`)
                }
                return true
            }}
            enableSearch
            inputClass={localClasses.phoneInput}
            containerClass={localClasses.phoneInputContainerClass}
            {...props}
        />
    )
}

export default PhoneField
