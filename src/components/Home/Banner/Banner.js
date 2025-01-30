import React, { Fragment } from 'react'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import AppStores from './AppStores'
import LomotifLogo from '../../../assets/images/hero_section_logo.svg'

const useStyles = makeStyles((theme) => ({
    banner: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(./banner.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    content: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    text: {
        color: 'black'
    }
}))

export default function Banner() {
    const classes = useStyles()

    return (
        <Fragment>
            <Paper className={classes.banner} >
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.content}>
                            <img style={{ width: '70%' }} src={LomotifLogo} alt='LomotifLogo' />
                            <Typography className={classes.text} variant="h5" color="inherit" paragraph>
                                Make music videos with friends! It’s the simplest editor with millions of fans worldwide.
            </Typography>
                            <AppStores />
                        </div>
                    </Grid>
                </Grid >
            </Paper>
        </Fragment>
    )
}