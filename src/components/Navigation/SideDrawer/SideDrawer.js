import React, { Fragment, useState } from 'react'
import InfoIcon from '@material-ui/icons/Info'
import ForumIcon from '@material-ui/icons/Forum'
import HomeIcon from '@material-ui/icons/Home'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import IconButton from '@mui/material/IconButton'
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const useStyles = makeStyles((theme) => ({
    list: {
        width: 200,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    icon: {
        color: '#FF0070'
    }
}))

export default function SideDrawer(props) {
    const classes = useStyles()
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setSideDrawerIsVisible(open)
    }

    const list = (props) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'About', 'Community', 'FAQ', 'Join Us'].map((text) => (
                    <ListItem button key={text} onClick={text === 'Home' ? props.homeHandler : text === 'About' ? props.aboutHandler : text === 'Community' ? props.communityHandler : text === 'FAQ' ? props.FAQHandler : props.careersHandler}>
                        <ListItemIcon className={classes.icon} color='secondary'>{text === 'Home' ? <HomeIcon /> : text === 'About' ? <InfoIcon /> : text === 'Community' ? <ForumIcon /> : text === 'FAQ' ? <LiveHelpIcon /> : <InsertInvitationIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Facebook', 'Twitter', 'Instagram'].map((text) => (
                    <ListItem button key={text} onClick={text === 'Facebook' ? props.fbHandler : text === 'Twitter' ? props.twHandler : props.instaHandler}>
                        <ListItemIcon className={classes.icon}>{text === 'Facebook' ? <FacebookIcon /> : text === 'Twitter' ? <TwitterIcon /> : <InstagramIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <div>
            <Fragment>
                <IconButton style={{ marginRight: '0' }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon color='secondary' />
                </IconButton>
                <Drawer open={sideDrawerIsVisible} onClose={toggleDrawer(false)} anchor='right'>
                    {list(props)}
                </Drawer>
            </Fragment>
        </div>
    )
}