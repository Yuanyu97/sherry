import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import AboutImage from '../../assets/images/mockup1.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        marginTop: '50px',
        "& img": {
            width: '33%'
        },
        [theme.breakpoints.down('xs')]: {
            flexShrink: 0,
            "& img": {
                width: '65%'
            }
        }
    },
}))

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
        AOS.refresh()
    })
    const classes = useStyles()
    return (
        <div className={classes.root} data-aos='fade'>
            <img src={AboutImage} alt="AboutImage" />
        </div>
    )
}