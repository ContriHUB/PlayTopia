import React from 'react';
import { Typography } from '@mui/material';
import { styled ,useTheme} from '@mui/system';

const Wrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:theme.palette.background.default
}));

const WelcomeMessage = () => {
  const theme=useTheme();
  return (
    <Wrapper theme={theme}>
      <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
        To start chatting - choose conversation
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;
