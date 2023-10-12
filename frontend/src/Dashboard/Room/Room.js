import React, { useState } from 'react';
import { styled } from '@mui/system';
import ResizeRoomButton from './ResizeRoomButton';
import VideosContainer from './VideosContainer';
import RoomButtons from './RoomButtons/RoomButtons';
import EmojiPicker from 'emoji-picker-react';
import { getPeers,handleExchangeData } from '../../realtimeCommunication/webRTCHandler';
const MainContainer = styled('div')({
  position: 'absolute',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#202225',

});

const fullScreenRoomStyle = {
  width: '100%',
  height: '100vh',
};

const minimizedRoomStyle = {
  bottom: '0px',
  right: '0px',
  width: '30%',
  height: '40vh',
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };

  const handleSendEmoji = (emojidata)=>{
    const peers = getPeers();
    const keysArray=Object.keys(peers);
    for(let id in keysArray){
      handleExchangeData({connUserSocketId:id,reason:'emoji',body:emojidata,})
    }
    
  }
  return (
    <MainContainer
      style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}
    >
      <VideosContainer />
      <RoomButtons />
      <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={roomResizeHandler}
      />
      <EmojiPicker onEmojiClick={handleSendEmoji}/>
    </MainContainer>
  );
};

export default Room;
