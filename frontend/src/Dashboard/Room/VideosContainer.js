import React from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import Video from './Video';

const MainContainer = styled('div')({
  height: '85%',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
});

const VideosContainer = ({
  localStream,
  remoteStreams,
  screenSharingStream,
}) => {
  return (
    <MainContainer>
    
        <div id='me' style={{
          height:'30px',
          width:'30px',
          position:'absolute',
        }}></div>
        <Video
          stream={screenSharingStream ? screenSharingStream : localStream}
          isLocalStream
        />
    
      
      {remoteStreams.map((stream) => (
      
        <>
          <div id={stream.connUserSocketId} style={{
          height:'30px',
          width:'30px',
          position:'absolute',
        }}></div>
          <Video stream={stream} key={stream.id} />
        </>
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(VideosContainer);
