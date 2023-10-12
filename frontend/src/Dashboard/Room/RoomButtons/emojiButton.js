import {handleExchangeData,getPeers} from '../../../realtimeCommunication/webRTCHandler'
import { useState } from 'react';
import { IconButton } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EmojiPicker from 'emoji-picker-react'
 const EmojiTray=()=>{
    const [open,setOpen]=useState(false);

    const handleSendEmoji = (emojidata)=>{
        const peers = getPeers();
        const keysArray=Object.keys(peers);
        for(let i=0;i<keysArray.length;i++){
         
          handleExchangeData({connUserSocketId:keysArray[i],reason:'emoji',body:emojidata,})
        }
        const targetElement=document.getElementById('me')
        const imgElement = document.createElement('img');
        imgElement.src = emojidata.imageUrl;
        imgElement.height='30'
        imgElement.width='30'
        targetElement.appendChild(imgElement)
        setTimeout(()=>{
          targetElement.removeChild(imgElement)
        },2000)
     
      }
    return <>
       <IconButton onClick={()=>{
           
            setOpen(!open)
       }}>
        <EmojiEmotionsIcon style={{color:'white'}}></EmojiEmotionsIcon>
       </IconButton>
       {
        open&& <div style={{position:'relative',zIndex:'1',top:'-42vh',left:'-1vw',height:'1px',width:'1px'}}>
        <EmojiPicker onEmojiClick={(e)=>{
        handleSendEmoji(e)
        setOpen(false)
        }}
        height={'40vh'}
        width={'15vw'}
        />
   </div>
       }
      
      
    
      
    </>
}

export default EmojiTray