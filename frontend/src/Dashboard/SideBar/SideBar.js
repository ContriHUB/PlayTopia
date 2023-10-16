import React from 'react';
import { styled,useTheme } from '@mui/system';
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';
import { connect } from 'react-redux';
import ActiveRoomButton from './ActiveRoomButton';
import BotButton from './BotButton';
import Game1Button from './Game1Button';
import Game2Button from './Game2Button';

const MainContainer =styled('div')(({ theme }) => ({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.bg3,
  border:'solid black'
}));

const SideBar = ({ activeRooms, isUserInRoom }) => {
  const theme = useTheme()
  return (
    <MainContainer theme={theme}>
      <MainPageButton />
      <BotButton />
      <Game1Button />
      <Game2Button />
      <CreateRoomButton isUserInRoom={isUserInRoom} />
      {activeRooms.map((room) => (
        <ActiveRoomButton
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          key={room.roomId}
          isUserInRoom={isUserInRoom}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(SideBar);
