import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    lightblue: '#18A0FB',
    green: '#4CC015',
  },
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, system-ui, serif',
    mono: 'Menlo, monospace',
  },
  components: {
    Button: {
      variants: {
        primary: {
          background: 'linear-gradient(90deg, #4CC015 -11.4%, #00F0FF 130.04%)',
          color: 'black',
          borderRadius: '50px',
          padding: '10px 36px',
          fontWeight: 'bold',
          fontSize: '18px',
        },
        primaryLong: {
          background: 'linear-gradient(90deg, #4CC015 -11.4%, #00F0FF 130.04%)',
          color: 'black',
          borderRadius: '50px',
          padding: '10px 50px',
          fontWeight: 'bold',
          fontSize: '18px',
        },
      },
    },
    Heading: {
      variants: {
        primary: {
          background: 'linear-gradient(90deg, #4CC015 -11.4%, #00F0FF 130.04%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'white',
      },
      variants: {
        p: {
          fontSize: '18px',
        },
        subheading: {
          fontSize: '18px',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
