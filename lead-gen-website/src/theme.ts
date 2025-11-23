import { extendTheme } from '@chakra-ui/react';

// 1. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    50: '#FEF9E7',
    100: '#FEF1C3',
    200: '#FEE59A',
    300: '#FDD871',
    400: '#FCCB48',
    500: '#F7D21E', // Primary brand color
    600: '#E2B91E',
    700: '#C9A11B',
    800: '#B08A18',
    900: '#8E6D15',
  },
};

const fonts = {
  heading: 'Poppins, sans-serif',
  body: 'Inter, sans-serif',
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      'html, body': {
        bg: 'white',
        color: 'gray.800',
        lineHeight: 'tall',
      },
      a: {
        color: 'brand.500',
        _hover: {
          textDecoration: 'none',
          color: 'brand.600',
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'black',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
      defaultProps: {
        variant: 'solid',
      },
    },
  },
});

export default theme;
