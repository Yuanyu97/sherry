"use client";

import React from 'react';
import '../../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, GlobalStyles, Box } from '@mui/material';
import Layout from '../hoc/Layout/Layout';
import Home from '../components/Home/Home';

const theme = createTheme();

const globalStyles = (
  <GlobalStyles
    styles={{
      "html, body": {
        position: "relative",
        overflowX: "hidden",
        minHeight: "100vh",
        width: "100%",
      },
    }}
  />
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <CssBaseline />

      {/* ✅ Fixed Background Div */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1, // ✅ Sends it behind all content
        }}
      />

      <Container maxWidth="lg">
        <Layout>
          <Home />
        </Layout>
      </Container>
    </ThemeProvider>
  );
}