import React, { Fragment } from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Gallery from './Gallery'
import JobOpenings from './JobOpenings'

export default function Careers() {

    return (
        <Fragment>
            <Hero />
            <AboutUs />
            <Gallery />
            <JobOpenings />
        </Fragment>
    )
}
