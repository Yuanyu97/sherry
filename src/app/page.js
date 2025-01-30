"use client";

import React from 'react'
// import './globals.css'
import '../../styles/globals.css'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from '../hoc/Layout/Layout'
import Home from '../components/Home/Home'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    backgroundImage: 'url(./bg.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // This keeps the background fixed while scrolling
    minHeight: '100vh', // Ensure it covers the entire viewport
    width: '100%', // Full width
  }
}))

const theme = createTheme()

export default function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Layout>
            <Home />
          </Layout>
        </Container>
      </div>
    </ThemeProvider>
  )
}

