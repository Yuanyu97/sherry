import React, { useEffect, useState, Fragment } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
    containerDesktop: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingTop: '40px',
        paddingBottom: '40px',
        display: 'none', // ✅ Default: Hide both views
        [theme.breakpoints.up('sm')]: { // ✅ Show only on large screens
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
    },
    containerMobile: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingBottom: '40px',
        paddingTop: '70px',
        display: 'none', // ✅ Default: Hide both views
        [theme.breakpoints.down('sm')]: { // ✅ Show only on small screens
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
    },
    introHeader: {
        marginTop: '10%',
        fontFamily: '"Protest Riot", sans-serif',
        color: '#f53699',
        fontSize: '40px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0%',
            fontSize: '30px',
            textAlign: 'center',
        },
    },
}));

export default function Intro() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    const theme = useTheme();
    const classes = useStyles(theme);

    if (!isClient) return null

    const headerComponent = (
        <div className={classes.introHeader}>
            {"Hi Sherry :-)"}
        </div>
    )

    const introComponent = (
        <Typography variant='h6' style={{ marginTop: '10px', textAlign: 'center' }}>
            The past three months of knowing you have been nothing short of amazing. Let's take a trip down our not-so-long memory lane, shall we~ ✨
        </Typography>
    )

    return (
        <Fragment>
            <Stack className={classes.containerDesktop} justifyContent="center" alignContent="center" alignItems="center" container="true" spacing={2} data-aos='fade'>
                {headerComponent}
                {introComponent}
            </Stack>
            <Stack className={classes.containerMobile} justifyContent="center" alignContent="center" alignItems="center"  container="true" spacing={2} data-aos='fade'>
                {headerComponent}
                {introComponent}
            </Stack>
        </Fragment>
    )
}