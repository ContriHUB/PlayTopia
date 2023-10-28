import React from 'react';
import { styled ,useTheme} from '@mui/system';
import DropdownMenu from './DropdownMenu';
import ChosenOptionLabel from './ChosenOptionLabel';



const MainContainer = styled('div')(({theme})=>({

  position: 'absolute',
  right: '0',
  top: '0',
  height: '48px',
  borderBottom: '1px solid black',
  backgroundColor: theme.palette.background.default,
  width: 'calc(100% - 336px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
}));

const AppBar = ({toggleTheme}) => {
  const theme = useTheme();
  return (
    <MainContainer theme={theme}>
      <ChosenOptionLabel />
      <DropdownMenu toggleTheme={toggleTheme}/>  
    </MainContainer>
  );
};

export default AppBar;
