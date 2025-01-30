import React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Seventh from './Seventh'
import Eighth from './Eighth'
import Nineth from './Nineth'
import Tenth from './Tenth'
import Eleventh from './Eleventh'
import Twelveth from './Twelveth'
import Ask from './Ask'
import Thirteenth from './thirteenth'
import Intro from './Intro'

export default function Content() {
    return (
        <Stack container="true" >
            <Intro item xs={12} />
            <First item xs={12} />
            <Second item xs={12} />
            <Third item xs={12} />
            <Fourth item xs={12} />
            <Fifth item xs={12} />
            <Sixth item xs={12} />
            <Seventh item xs={12} />
            <Eighth item xs={12} />
            <Nineth item xs={12} />
            <Tenth item xs={12} />
            <Eleventh item xs={12} />
            <Twelveth item xs={12} />
            <Thirteenth item xs={12} />
            <Ask item xs={12} />
        </Stack>
    )
}


