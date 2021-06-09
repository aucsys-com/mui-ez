import React from 'react'

import Button from '@material-ui/core/Button'
import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  buttonBorder: {
    border: '2px solid currentColor',
    '&:hover': {
      border: '2px solid currentColor'
    }
  },
  wrapper: {
    width: props => props.fullWidth ? '100%' : 'auto',
    position: 'relative',
    display: 'inline-block'
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}))

const CustomButton = ({ children, variant, loading, disabled, thinBorders, fullWidth, ...props }) => {
  const classes = useStyles({fullWidth})

  return (
      <div className={classes.wrapper}>
        <Button variant={variant}
                className={variant === 'outlined' && !thinBorders ? classes.buttonBorder : ''}
                disabled={loading || disabled}
                {...props} >
          {children}
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
  )
}

export default CustomButton
