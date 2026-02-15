import { createTheme } from '@mantine/core';

// Create a custom theme for Mantine
const theme = createTheme({
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
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'brand',
  primaryShade: 5, // Use the 6th color in the brand array (index 5)
});

export default theme;
