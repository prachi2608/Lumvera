import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import App from './App';

const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: [
      '#F8F5FF', // Very light pastel purple
      '#F0EBFF', // Light pastel purple
      '#E3D9FF', // Soft lavender
      '#D4C5FF', // Light purple
      '#C5B1FF', // Medium light purple
      '#B08FFF', // Pastel purple primary
      '#9B6BFF', // Slightly deeper purple
      '#8A4FFF', // Medium purple
      '#7933FF', // Deeper purple
      '#6B1FFF', // Dark purple
    ],
  },
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
});

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications position="top-right" />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);