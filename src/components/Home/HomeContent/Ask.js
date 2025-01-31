import React, { useEffect, Fragment, useState } from 'react'
import AOS from 'aos'
import Image from "next/image"
import 'aos/dist/aos.css'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Cat0 from '../../../../public/sherry/cat-0.jpg'
import Cat1 from '../../../../public/sherry/cat-1.jpg'
import Cat2 from '../../../../public/sherry/cat-2.jpg'
import Cat3 from '../../../../public/sherry/cat-3.jpg'
import Cat4 from '../../../../public/sherry/cat-4.jpg'
import Cat5 from '../../../../public/sherry/cat-5.jpg'
import CatYes from '../../../../public/sherry/cat-yes.jpg'

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
        paddingTop: '40px',
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
        marginTop: '10%',
        fontFamily: '"Protest Riot", sans-serif',
        color: '#f53699',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            marginTop: '10%',
            textAlign: 'center'
        },
        fontSize: '40px'
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
    catItem:{
        height: '35%',
        width: '35%',
        justifyContent: 'center',
        alignContent:  'center',
        [theme.breakpoints.down('sm')]: {
            height: '60%',
            width: '60%',
        },
    }
}))


export default function Ask() {
    const [noCount, setNoCount] = useState(0)
    const [currentImage, setCurrentImage] = useState(Cat0)
    const [buttonSize, setButtonSize] = useState(14)
    const [showButtons, setShowButtons] = useState(true)
    const [messageText, setMessageText] = useState('Will you be my Valentine?')

    const images = [Cat0, Cat1, Cat2, Cat3, Cat4, Cat5]
    const messages = [
        "No",
        "Are you sure?",
        "咪咪 please",
        "Don't do this to me :(",
        "别伤我的心...",
        "I'm gonna cry...",
      ]

    function generateMessage(noCount) {
        return messages[noCount % messages.length]
      }

    const handleNoClick = () => {
        setNoCount((prevCount) => {
            const newCount = prevCount + 1;
            setCurrentImage(images[newCount % images.length]); // Use the updated value here
            return newCount;
          });
        setButtonSize((prev) => prev + 10); // Increment the counter
    }

    const handleYesClick = () => {
        setCurrentImage(CatYes)
        setShowButtons(false)
        setMessageText('Yayyyy!!! :-)))))')
    }

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
            {"Hi Sherry :-)"}
        </div>
    )
    const textComponent = (
        <div className={classes.typoItem}>
            {messageText}
        </div>
    )

    return (
        <Fragment>
            <Stack className={classes.containerDesktop} justifyContent="center" alignContent="center" container="true" spacing={2} data-aos='fade'>
                <Grid container justifyContent="center" alignContent="center">
                    <Image className={classes.catItem} src={currentImage} alt='Cat1' />
                </Grid>
                {textComponent}
                <Grid container justifyContent="center" alignContent="center" alignItems='center' spacing={2}>
                    {showButtons && (
                        <Fragment>
                            <Grid item>
                            <Button 
                                variant="contained" 
                                color="success"
                                onClick={handleYesClick}
                                sx={{
                                    fontSize: `${buttonSize}px`, // Dynamically adjust font size
                                    padding: `${buttonSize / 2}px ${buttonSize}px`, // Adjust padding based on size
                                }}
                            >
                                Yes
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                variant="contained" 
                                color="error" 
                                onClick={handleNoClick}
                                sx={{
                                    fontSize: `14px`, // Dynamically adjust font size
                                    padding: `${14 / 2}px ${14}px`, // Adjust padding based on size
                                }}
                            >
                                {generateMessage(noCount)}
                            </Button>
                        </Grid>
                    </Fragment>
                    )}
                </Grid>
            </Stack>
            <Stack className={classes.containerMobile} justifyContent="center" alignContent="center" container="true" spacing={2} data-aos='fade'>
                <Grid container='true' justifyContent="center" alignContent="center">
                    <Image className={classes.catItem} src={currentImage} alt='Cat1' />
                </Grid>
                {textComponent}
                <Grid container='true' justifyContent="center" alignContent="center" alignItems='center' spacing={2}>
                    {showButtons && (
                        <Fragment>
                            <Grid item>
                            <Button 
                                variant="contained" 
                                color="success"
                                onClick={handleYesClick}
                                sx={{
                                    fontSize: `${buttonSize}px`, // Dynamically adjust font size
                                    padding: `${buttonSize / 2}px ${buttonSize}px`, // Adjust padding based on size
                                }}
                            >
                                Yes
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                variant="contained" 
                                color="error" 
                                onClick={handleNoClick}
                                sx={{
                                    fontSize: `14px`, // Dynamically adjust font size
                                    padding: `${14 / 2}px ${14}px`, // Adjust padding based on size
                                }}
                            >
                                {generateMessage(noCount)}
                            </Button>
                        </Grid>
                    </Fragment>
                    )}
                </Grid>
            </Stack>
        </Fragment>
    )
}