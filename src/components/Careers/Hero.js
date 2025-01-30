import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import LomotifLogo from '../../assets/images/hero_section_logo.svg'

const useStyles = makeStyles((theme) => ({
    content: {
        textAlign: 'center',
        padding: theme.spacing(3),
        "& img": {
            width: '35%'
        },
        [theme.breakpoints.down('xs')]: {
            "& img": {
                width: '70%'
            },
        },
    },
    text: {
        color: 'black',
        textAlign: "center"
    }
}))

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
        AOS.refresh()
    })
    const classes = useStyles()
    return (
        <Grid item md={12} data-aos='fade'>
            <div className={classes.content}>
                <img src={LomotifLogo} alt='LomotifLogo' />
                <Typography className={classes.text} variant="h4">
                    Join our mission to make a dent in this world!
                    </Typography>
                <Typography className={classes.text} variant="h6" color="inherit" paragraph>
                    Lomotif is a made-in-Singapore social video app kicking ass on the international stage as a Top 10 Photo and Video app in the United States.
            </Typography>
            </div>
        </Grid>

    )
}