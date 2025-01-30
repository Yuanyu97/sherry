import React, { Fragment } from 'react'
// import ToolbarWrapper from '../../components/Navigation/Toolbar/ToolbarWrapper'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}))

export default function Layout(props) {
    const classes = useStyles()
    return (
        <Fragment>
            {/* <ToolbarWrapper /> */}
            <div className={classes.root}>
                <Grid className={classes.container} container='true' spacing={3}>
                    <Grid item xs={12}>
                        <main>
                            {props.children}
                        </main>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}