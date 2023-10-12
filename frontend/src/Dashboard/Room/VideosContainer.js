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

const VideoWrapper= styled('div')({
  
    height: '50%',
    width: '50%',
    backgroundColor: 'black',
    borderRadius: '8px',
  
})

const VideosContainer = ({
  localStream,
  remoteStreams,
  screenSharingStream,
}) => {
  return (
    <MainContainer>
      <VideoWrapper>
        <div id='me' style={{
            height:'30px',
            width:'30px',
            position:'absolute',
          }}></div>
          <Video
            stream={screenSharingStream ? screenSharingStream : localStream}
            isLocalStream
          />
      </VideoWrapper>
       
    
      
      {remoteStreams.map((stream) => (
      
        <VideoWrapper>
          <div id={stream.connUserSocketId} style={{
          height:'30px',
          width:'30px',
          position:'absolute',
        }}></div>
          <Video stream={stream} key={stream.id} />
        </VideoWrapper>
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
