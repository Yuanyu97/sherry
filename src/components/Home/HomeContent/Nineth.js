import React, { useEffect, useState, Fragment } from 'react'
import AOS from 'aos'
import Image from "next/image"
import 'aos/dist/aos.css'
import { makeStyles } from '@mui/styles'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Ninethpic from '../../../../public/sherry/nineth.gif'

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

export default function Nineth() {
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
            {"🪓 throwing"}
        </div>
    )
    const textComponent = (
        <div className={classes.typoItem}>
            {headerComponent}
            <Typography variant='h6' style={{ marginTop: '10px' }}>
                {"This day itself is enough for me to know to never anger Sherry XD Raw axe throwing talent here! I sincerely apologize if I have ever 惹你生气, —please don't use your newfound skill on me haha!"}
            </Typography>
        </div>
    )

    return (
        <Fragment>
            {/* for desktop display */}
            <Grid className={classes.containerDesktop} container='true' justify='flex-end'>
                <Grid item xs={6} data-aos='fade-right'>
                    {textComponent}
                </Grid>
                <Grid item xs={6} className={classes.imgGridItem} data-aos='fade-left'>
                    <Image style={{ height: '100%', width: '50%' }} src={Ninethpic} alt='EditMockUp' />
                </Grid>
            </Grid>
            {/* for mobile display */}
            <Stack className={classes.containerMobile} container='true' data-aos='fade'>
                {textComponent}
                <Image style={{ height: '100%', width: '50%', marginTop: '10%' }} src={Ninethpic} alt='MusicMockUp' />
            </Stack>
        </Fragment>
    )
}