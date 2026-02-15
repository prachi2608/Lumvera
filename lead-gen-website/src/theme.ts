import { createTheme } from '@mantine/core';

// Create a custom theme for Mantine
const theme = createTheme({
  colors: {
    brand: [
      '#FEF9E7',
      '#FEF1C3',
      '#FEE59A',
      '#FDD871',
      '#FCCB48',
      '#F7D21E', // Primary brand color
      '#E2B91E',
      '#C9A11B',
      '#B08A18',
      '#8E6D15',
    ],
  },
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'brand',
  primaryShade: 5, // Use the 6th color in the brand array (index 5)
});

export default theme;
