import React from 'react'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import PlayStoreLogo from '../../../assets/images/play_store.svg'
import AppStoreLogo from '../../../assets/images/app_store.svg'
import AppGalleryLogo from '../../../assets/images/app-gallery.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    imageIcon: {
        width: '33%',
        paddingLeft: 5
    },
    iconRoot: {
        textAlign: 'center',
        fontSize: "75px"
    }
}))

const navigateAppStoreHandler = () => {
    window.open("https://apps.apple.com/US/app/id884009993?mt=8", "_blank")
}

const navigateAppGalleryHandler = () => {
    window.open("https://appgallery5.huawei.com/#/app/C101481681", "_blank")
}

const navigatePlayStoreHandler = () => {
    window.open("https://play.google.com/store/apps/details?id=com.lomotif.android&referrer=af_tranid%3Dnzz3xvHBR6LEGYb8mA0-vA%26shortlink%3D8ccab9ef%26pid%3DWebsite%26af_web_id%3Dabd8eaab-79a8-464c-8756-492434b5396a-o", "_blank")
}

export default function AppStores() {
    const classes = useStyles()
    return (
        <Grid className={classes.root} container='true' justify="flex-start" spacing={2}>
            <Grid item xs={12}>
                {['Appstore', 'Playstore', 'Appgallery'].map((value) => {
                    return (
                        <Button className={classes.imageIcon} onClick={value === 'Appstore' ? navigateAppStoreHandler : value === 'Playstore' ? navigatePlayStoreHandler : navigateAppGalleryHandler}>
                            <img width='100%' src={value === 'Appstore' ? AppStoreLogo : value === 'Playstore' ? PlayStoreLogo : AppGalleryLogo} alt="AppStorePics" />
                        </Button>
                    )
                })}
            </Grid>
        </Grid>
    )
}