import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import { makeStyles } from '@material-ui/styles'
import lomotifLogo from '../../../assets/images/topbar_logo.png'

const useStyles = makeStyles({
    imageIcon: {
        height: '100%',
    },
    iconRoot: {
        textAlign: 'center',
        fontSize: "75px"
    }
})

const Logo = props => {
    const classes = useStyles()
    return (
        <IconButton onClick={props.onPressed} color='secondary' style={{ padding: '0' }}>
            <Icon classes={{ root: classes.iconRoot }}>
                <img className={classes.imageIcon} src={lomotifLogo} alt="Logo" />
            </Icon>
        </IconButton>
    )
}

export default BrowserRouter(Logo)