import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/system';



const VideoEl = styled('video')({
  width: '100%',
  height: '100%',
 
});

const Video = ({ stream, isLocalStream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    
      <VideoEl ref={videoRef} autoPlay muted={isLocalStream ? true : false}/>
    
  );
};

export default Video;
