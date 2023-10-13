import store from '../store/store';
import { setLocalStream, setRemoteStreams } from '../store/actions/roomActions';
import Peer from 'simple-peer';
import * as socketConnection from './socketConnection';

const getConfiguration = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO use TURN server credentials
  } else {
    console.warn('Using only STUN server');
    return {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    };
  }
};

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  video: true,
  audio: true,
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((err) => {
      console.log(err);
      console.log('Cannot get an access to local stream');
    });
};

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;

  if (isInitiator) {
    console.log('preparing new peer connection as initiator');
  } else {
    console.log('preparing new peer connection as not initiator');
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream,
  });

  peers[connUserSocketId].on('signal', (data) => {
    const signalData = {
      signal: data,
      connUserSocketId: connUserSocketId,
    };

    socketConnection.signalPeerData(signalData);
  });

  peers[connUserSocketId].on('stream', (remoteStream) => {
    // TODO
    // add new remote stream to our server store
    console.log('remote stream came from other user');
    console.log('direct connection has been established');
    remoteStream.connUserSocketId = connUserSocketId;
    addNewRemoteStream(remoteStream);
    
  });

  peers[connUserSocketId].on('data',(data)=>{
     //since the data of webrtc is transferred over U8int array we change it to json through parsing
    const decimalValues = Array.from(data); //convert to normal array
    const charArray = decimalValues.map(decimal => String.fromCharCode(decimal));//go over entire map
    const jsonString = charArray.join('');//join to form the string
    const jsonObject = JSON.parse(jsonString);//parse to get object
    console.log(jsonObject)
    if(jsonObject.reason=='emoji'){
      AddEmoji(jsonObject);
    }
   
  })
 
};

export const handleSignalingData = (data) => {
  const { connUserSocketId, signal } = data;

  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};

const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];

  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const closeAllConnections = () => {
  Object.entries(peers).forEach((mappedObject) => {
    const connUserSocketId = mappedObject[0];
    if (peers[connUserSocketId]) {
      peers[connUserSocketId].destroy();
      delete peers[connUserSocketId];
    }
  });
};

export const handleParticipantLeftRoom = (data) => {
  const { connUserSocketId } = data;

  if (peers[connUserSocketId]) {
    peers[connUserSocketId].destroy();
    delete peers[connUserSocketId];
  }

  const remoteStreams = store.getState().room.remoteStreams;

  const newRemoteStreams = remoteStreams.filter(
    (remoteStream) => remoteStream.connUserSocketId !== connUserSocketId
  );

  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const switchOutgoingTracks = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};

export const handleExchangeData = (data) => {
    
    console.log('sending this to the peer')
    console.log(data)
    peers[data.connUserSocketId].send(
      JSON.stringify( //own socket id is being sent so that other peer's know who has sent this data
        {connUserSocketId:localStorage.getItem('peerId'), //own socket id is stored in localstorage 
        reason:data.reason,//data reason will tell the other peer what he has to do with this info
        data:data.body})) //send the data over webrtc data channel
}

export const getPeers = ()=>{
  return peers;
}

const AddEmoji = (jsonObject)=>{
  const imgElement = document.createElement('img');
  imgElement.src = jsonObject.data.imageUrl;
  imgElement.width="30"
  imgElement.height="30"
  const targetElement = document.getElementById(jsonObject.connUserSocketId);
   targetElement.appendChild(imgElement);
  
  if (targetElement) {
    targetElement.appendChild(imgElement);
    setTimeout(()=>{
      targetElement.removeChild(imgElement)
    },2000)
  } else {
    console.error('Element with id "targetElementId" not found.');
  }
}