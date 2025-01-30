import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Divider from '@mui/material/Divider'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

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
    divider: {
        marginTop: '20px'
    },
    text: {
        color: 'black',
        textAlign: "center"
    },
    jobOpenings: {
        marginTop: '20px',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
    }
}))

export default function JobOpenings() {
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
                <Typography className={classes.text} variant="h4">
                    Current Openings
                    </Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.jobOpenings} variant="h6" color="secondary" paragraph>
                    Intern
            </Typography>
            </div>
        </Grid>

    )
}