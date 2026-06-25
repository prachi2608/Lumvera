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
      '#E7F3FF', // Very light blue
      '#D1E9FF', // Light blue
      '#B3D9FF', // Soft blue
      '#8AC4FF', // Light blue
      '#5BA3FF', // Medium light blue
      '#1877F2', // Facebook blue primary
      '#1465D6', // Slightly deeper blue
      '#1155B8', // Medium blue
      '#0E4599', // Deeper blue
      '#0B357A', // Dark blue
    ],
    yellow: [
      '#FFF9E6', // Very light yellow
      '#FFF0B3', // Light yellow
      '#FFE680', // Soft yellow
      '#FFDB4D', // Light yellow
      '#FFD11A', // Medium light yellow
      '#FFC700', // Yellow primary
      '#E6B300', // Slightly deeper yellow
      '#CC9900', // Medium yellow
      '#B38000', // Deeper yellow
      '#996600', // Dark yellow
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