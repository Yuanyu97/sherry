import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Pic1 from '../../assets/images/careers_images/pic1.jpg'
import Pic2 from '../../assets/images/careers_images/pic2.jpg'
import Pic3 from '../../assets/images/careers_images/pic3.jpg'
import Pic4 from '../../assets/images/careers_images/pic4.jpg'
import Pic5 from '../../assets/images/careers_images/pic5.jpg'
import Pic6 from '../../assets/images/careers_images/pic6.jpg'
import Pic7 from '../../assets/images/careers_images/pic7.jpg'
import Pic8 from '../../assets/images/careers_images/pic8.jpg'

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
    },
    carousel: {
        width: '50%',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
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
                <Typography className={classes.text} variant="h4">
                    The Lomotif Family
                </Typography>
                <Typography className={classes.text} variant="h6" color="inherit" paragraph>
                    Work with a global team that is expanding and diversifying as rockstars from across the world jump onboard.
                </Typography>
                <Carousel className={classes.carousel}>
                    <div className={classes.images}>
                        <img src={Pic1} alt='Pic1' />
                    </div>
                    <div>
                        <img src={Pic2} alt='Pic2' />
                    </div>
                    <div>
                        <img src={Pic3} alt='Pic3' />
                    </div>
                    <div>
                        <img src={Pic4} alt='Pic4' />
                    </div>
                    <div>
                        <img src={Pic5} alt='Pic5' />
                    </div>
                    <div>
                        <img src={Pic6} alt='Pic6' />
                    </div>
                    <div>
                        <img src={Pic7} alt='Pic7' />
                    </div>
                    <div>
                        <img src={Pic8} alt='Pic8' />
                    </div>
                </Carousel>
            </div>
        </Grid>

    )
}