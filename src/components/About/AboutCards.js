import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import MusicAbout from '../../assets/images/musicAbout.jpg'
import DanceAbout from '../../assets/images/danceAbout.jpg'
import SmileAbout from '../../assets/images/smileAbout.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: '56px',
        marginTop: '50px'
    },
    card: {
        maxWidth: 330,
        height: '500px',
        backgroundColor: '#FFF3FA',
        borderRadius: '16px'
    },
})

export default function AboutCards() {
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
    return (
        <Grid className={classes.root} container='true' justify="center" spacing={4} >
            {['About', 'Motive', 'Feedback'].map((value) => (
                <Grid key={value} item data-aos='fade'>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            alt="CardImage"
                            height="250px"
                            image={value === 'About' ? MusicAbout : value === 'Motive' ? DanceAbout : SmileAbout}
                            title="CardImage"
                        />
                        <CardContent style={value === 'About' ? { paddingTop: '45px', textAlign: 'center' } : value === 'Motive' ? { paddingTop: '63px', textAlign: 'center' } : { paddingTop: '96px', textAlign: 'center' }}>
                            <Typography variant="h6" color="textSecondary" component="p">
                                {value === 'About' ? 'Lomotif is the video app of choice for millions around the world. It’s the simplest editor around, and allows you to achieve amazing edits instantly!'
                                    : value === 'Motive' ? 'Express yourself with great music, and use Scenes/GIFs shared from friends and others in the community.'
                                        : 'Feedback/questions? Reach out to us at contact@lomotif.com.'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}