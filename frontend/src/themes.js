import { createTheme } from '@mui/material/styles';
// import {green,black } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3', // Change this to your desired dark primary color
    },
    background: {
      default: '#36393f'
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#333', // Change this to your desired light primary color
    },
    background: {
      default: 'white'
    },
  },
});

export { darkTheme, lightTheme };

