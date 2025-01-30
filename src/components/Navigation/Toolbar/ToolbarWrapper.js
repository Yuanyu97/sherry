import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import Logo from '../Logo/Logo'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        background: 'transparent',
    },
    drawer: {
        [theme.breakpoints.down('sm')]: {
            flexShrink: 0,
        },
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        '& .MuiButton-root': {
            height: 'fit-content',
            '&:hover': {
                color: '#FF0247'
            }
        },
        paddingLeft: 0,
        paddingRight: 0,
        overflowX: 'auto'
    },
    logo: {
        '& .MuiButton-root': {
            height: 'fit-content',
            padding: '0'
        }
    },
    title: {
        flexGrow: 1,
    },
    divider: {
        height: '58px',
        marginLeft: '16px',
        // marginTop: 25,
        // marginBottom: '25px'
    },
    desktopBox: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        width: '100%',
        '& .MuiButton-root': {
            color: 'black',
        },
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    mobileBox: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }
}))

const ToolbarWrapper = props => {
    const { history } = props
    const [buttonIndex, setButtonIndex] = useState(0)
    const navigateHomeHandler = () => {
        setButtonIndex(0)
        history.push('/')
    }

    const navigateAboutHandler = () => {
        setButtonIndex(1)
        history.push('/about')
    }

    const navigateCommunityHandler = () => {
        window.open("https://lomotifhelp.zendesk.com/hc/en-us/community/topics", "_blank")
    }

    const navigateFAQHandler = () => {
        window.open("https://lomotifhelp.zendesk.com/hc/en-us/sections/360004424511-FAQ", "_blank")
    }

    const navigateCareersHandler = () => {
        setButtonIndex(2)
        history.push('/careers')
    }

    const navigateInstaHander = () => {
        window.open("https://www.instagram.com/lomotif/", "_blank")
    }

    const navigateFbHandler = () => {
        window.open("https://www.facebook.com/Lomotif", "_blank")
    }

    const navigateTwitterHandler = () => {
        window.open("https://twitter.com/Lomotif", "_blank")
    }

    const setButtonColor = (chosenButtonIndex) => {
        if (buttonIndex === chosenButtonIndex) {
            return { color: '#f50057' }
        }
    }

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static" elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Logo className={classes.logo} onPressed={navigateHomeHandler} />
                    <Box className={classes.desktopBox} >
                        <Button style={setButtonColor(0)} color='secondary' onClick={navigateHomeHandler}>Home</Button>
                        <Button style={setButtonColor(1)} color="secondary" onClick={navigateAboutHandler}>About</Button>
                        <Button color="secondary" onClick={navigateCommunityHandler}>Community</Button>
                        <Button color="secondary" onClick={navigateFAQHandler}>FAQ</Button>
                        <Button style={setButtonColor(2)} color="secondary" variant="outlined" onClick={navigateCareersHandler}>Join Us</Button>
                        <Divider className={classes.divider} orientation="vertical" variant='inset' flexItem />
                        <IconButton onClick={navigateFbHandler} color='secondary'>
                            <FacebookIcon fontSize="large" />
                        </IconButton>
                        <IconButton onClick={navigateTwitterHandler} color='secondary'>
                            <TwitterIcon fontSize="large" />
                        </IconButton>
                        <IconButton onClick={navigateInstaHander} color='secondary'>
                            <InstagramIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    <Box className={classes.mobileBox}>
                        <SideDrawer className={classes.drawer}
                            homeHandler={navigateHomeHandler}
                            aboutHandler={navigateAboutHandler}
                            communityHandler={navigateCommunityHandler}
                            FAQHandler={navigateFAQHandler}
                            careersHandler={navigateCareersHandler}
                            fbHandler={navigateFbHandler}
                            twHandler={navigateTwitterHandler}
                            instaHandler={navigateInstaHander} />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default BrowserRouter(ToolbarWrapper)