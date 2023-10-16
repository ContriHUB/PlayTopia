import { createTheme } from '@mui/material/styles';
import WbSunnyIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import {green,black } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3', // Change this to your desired dark primary color
    },
    background: {
      default: '#36393f',
      bg1:'#343434',
      bg2:'#2C3E50',
      bg3:'#28282B',
      bg4:'#FFD700'
    },
    img:{
      default:WbSunnyIcon
    }
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#333', // Change this to your desired light primary color
    },
    background: {
      default: 'white',
      bg1:'#F9F6EE',
      bg2:'#FFF5EE',
      bg3:'#F5F5F5',
      bg4:'#F5F5F5'
    },
    img:{
      default:DarkModeIcon
    }
  },
});

export { darkTheme, lightTheme };

