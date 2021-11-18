import ValidatingTextInput from '../../components/Input/ValidatingTextInput'
import React, { useState } from 'react'
import { emptyTextValidator } from './utils/formUtils'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { alpha, emphasize } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles'

const styles = {
    root: {
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: ({ colorStyle }) => {
                return alpha(colorStyle, 0.4)
            }
        },
        '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d32f2f'
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: ({ colorStyle }) => {
                return emphasize(colorStyle)
            }
        },
        '& .MuiOutlinedInput-input': {
            color: ({ colorStyle }) => {
                return colorStyle
            }
        },
        '& .MuiInputLabel-outlined': {
            color: ({ colorStyle }) => {
                return colorStyle
            },
            '&.Mui-error': {
                color: '#d32f2f'
            }
        }
    }
}

const eyeStyle = makeStyles(({ colorStyle, hasError }) => ({
    eyeStyles: {
        color: ({ colorStyle, hasError }) => {
            return hasError ? '#d32f2f' : alpha(colorStyle, 0.4)
        },
        '&:hover': {
            color: ({ colorStyle, hasError }) => {
                return hasError ? '#d32f2f' : emphasize(colorStyle)
            }
        }
    }
}))

const PasswordField = ({ colorStyle, withEye, ...props }) => {
    const [show, setShow] = useState(false)

    const passwordValidator = (v) => {
        if (emptyTextValidator(v)) {
            return 'Please enter password'
        }
    }

    return (
        <StyledComponent
            show={show}
            setShow={setShow}
            withEye={withEye}
            passwordValidator={passwordValidator}
            colorStyle={colorStyle}
            {...props}
        />
    )
}

const StyledComponent = withStyles(styles)(
    ({
        show,
        setShow,
        value,
        passwordValidator,
        children,
        colorStyle,
        withEye,
        ...other
    }) => (
        <ValidatingTextInput
            value={value}
            label='Password'
            id='password'
            variant='outlined'
            type={show ? 'text' : 'password'}
            validator={passwordValidator}
            {...(withEye && {
                InputProps: {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                edge='end'
                                className={
                                    eyeStyle({
                                        colorStyle: colorStyle,
                                        hasError: passwordValidator(value)
                                    }).eyeStyles
                                }
                                onClick={() => {
                                    setShow(!show)
                                }}
                            >
                                {show ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }
            })}
            {...other}
        >
            {children}
        </ValidatingTextInput>
    )
)

export default PasswordField
