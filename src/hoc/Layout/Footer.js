import React from 'react'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import container='true' from '@mui/material/Container'
import { Typography } from '@mui/material'
const useStyles = makeStyles((theme) => ({
    footer: {
        // backgroundColor: '#ECEFF1',
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
        // position: 'absolute',
        // left: 0,
        // bottom: 0,
        // right: 0,
    },
}))

export default function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <container='true' maxWidth="lg">
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Lomotif 2018
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    389 Race Course Road S218651
                </Typography>
            </Container>
        </footer>
    )
}