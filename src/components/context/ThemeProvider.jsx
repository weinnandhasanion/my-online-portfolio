// fonts
import '@fontsource/roboto-slab';

// rest
import React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: '#001514',
      },
      main: {
        height: '100%',
      },
    },
  },
  fonts: {
    body: `'Roboto Slab', serif`,
  },
  colors: {
    primary: '#001514',
    secondary: '#FBFFFE',
    tertiary: '#6B0504',
    quartary: '#A3320B',
    quinary: '#E6AF2E',
  },
});

const ThemeProvider = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
