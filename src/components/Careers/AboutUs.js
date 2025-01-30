import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import WhoWeAreImage from '../../assets/images/careers_images/IMG_0028.jpg'
import HowWeAreImage from '../../assets/images/careers_images/IMG_0025.jpg'
import WhyJoinUsImage from '../../assets/images/careers_images/IMG_0026.jpg'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: '56px',
        marginTop: '0px'
    },
    card: {
        maxWidth: 330,
        height: '600px',
        backgroundColor: '#FFF3FA',
        borderRadius: '16px'
    },
})

export default function AboutCards() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
        AOS.refresh()
    })
    const classes = useStyles()
    return (
        <Grid className={classes.root} container='true' justify="center" spacing={4} >
            {['WhoWeAre', 'HowWeAre', 'WhyJoinUs'].map((value) => (
                <Grid key={value} item data-aos='fade'>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            alt="CardImage"
                            height="300px"
                            image={value === 'WhoWeAre' ? WhoWeAreImage : value === 'HowWeAre' ? HowWeAreImage : WhyJoinUsImage}
                            title="CardImage"
                        />
                        <CardContent style={value === 'WhoWeAre' ? { paddingTop: '23px', textAlign: 'center' } : value === 'HowWeAre' ? { paddingTop: '23px', textAlign: 'center' } : { paddingTop: '23px', textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {value === 'WhoWeAre' ? 'Who We Are' : value === 'HowWeAre' ? 'How We Are' : 'Why Join Us'}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" component="p">
                                {value === 'WhoWeAre' ? 'Lomotif helps you achieve amazing edits instantly with no hassle. It\'s our mission to ignite the spark to create and celebrate, all around the world.'
                                    : value === 'HowWeAre' ? ' We are candor by nature, serious but fun-loving, always improving as a team, proactive and perfectly imperfect!'
                                        : 'We are a lean team with an employee to user ratio of 1 is to 1 million, and are expanding quickly to meet the demands of our accelerating growth. Come join our mission and witness the impact of your work on the Lomotif app! Right now is an exciting time to join the team and be part of our rapid growth.'}
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
