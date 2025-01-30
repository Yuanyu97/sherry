import React, { useEffect, useState, Fragment } from 'react'
import AOS from 'aos'
import Image from "next/image"
import 'aos/dist/aos.css'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Secondpic from '../../../../public/sherry/second.jpg'

const useStyles = makeStyles((theme) => ({
    containerDesktop: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingTop: '40px',
        paddingBottom: '40px',
        display: 'none', // ✅ Hide by default
        [theme.breakpoints.up('sm')]: { // ✅ Show only on large screens
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    containerMobile: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingBottom: '40px',
        display: 'none', // ✅ Hide by default
        [theme.breakpoints.down('sm')]: { // ✅ Show only on small screens
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
    },
    imgGridItem: {
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginTop: '10%',
        },
    },
    typoItem: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '10%',
            textAlign: 'center',
        },
    },
    introHeader: {
        marginTop: '10%',
        fontFamily: '"Protest Riot", sans-serif',
        fontSize: '40px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0%',
            fontSize: '30px',
            textAlign: 'center',
        },
    },
}))

export default function Second() {
    const [isClient, setIsClient] = useState(false); // ✅ Prevents SSR hydration mismatch
    const theme = useTheme(); // ✅ Ensures theme is available
    const classes = useStyles(theme); // ✅ Passes theme to makeStyles

    useEffect(() => {
        setIsClient(true); // ✅ Ensures rendering happens only on the client
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    if (!isClient) return null; 
    const headerComponent = (
        <div className={classes.introHeader}>
            {"First photo together"}
        </div>
    ) 
    const textComponent = (
        <div className={classes.typoItem}>
            {headerComponent}
            <Typography variant='h6' style={{ marginTop: '10px' }}>
                {"This is the first picture we ever took together!! Didn't take photos for previous dates as we were still trying to figure each other out, but we still made it hehehe~ And also, it was the first date of us being exclusive :-) This night was so funny, with you judging other peeps in the most obvious way, and me being a water fountain"}
            </Typography>
        </div>
    )

    return (
        <Fragment>
            <Grid className={classes.containerDesktop} container='true' justify='flex-end'>
                <Grid item xs={6} data-aos='fade-right'>
                    <Image style={{ height: '100%', width: '50%' }} src={Secondpic} alt='MusicMockUp' />
                </Grid>
                <Grid item xs={6} data-aos='fade-left'>
                    {textComponent}
                </Grid>
            </Grid>
            <Grid className={classes.containerMobile} container='true' data-aos='fade'>
                <Grid item xs={12} >
                    {textComponent}
                </Grid>
                <Grid item xs={12} className={classes.imgGridItem}>
                    <Image style={{ height: '100%', width: '50%' }} src={Secondpic} alt='MusicMockUp' />
                </Grid>
            </Grid>
        </Fragment>
    )
}