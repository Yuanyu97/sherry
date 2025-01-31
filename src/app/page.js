"use client";

import React, { useEffect } from 'react';
import '../../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, GlobalStyles } from '@mui/material';
import Layout from '../hoc/Layout/Layout';
import Home from '../components/Home/Home';

const theme = createTheme();

const globalStyles = (
  <GlobalStyles
    styles={{
      "html, body": {
        position: "relative",
        backgroundImage: "url('/bg.jpg')", // Ensure correct path
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      },
    }}
  />
);

export default function App() {
  useEffect(() => {
    // Ensure background remains fixed on all devices
    document.documentElement.style.backgroundImage = "url('/bg.jpg')";
    document.documentElement.style.backgroundSize = "cover";
    document.documentElement.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.backgroundPosition = "center";
    document.documentElement.style.backgroundAttachment = "fixed";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {globalStyles} {/* ✅ Applied GlobalStyles properly */}
      <CssBaseline />
      <Container maxWidth="lg">
        <Layout>
          <Home />
        </Layout>
      </Container>
    </ThemeProvider>
  );
}