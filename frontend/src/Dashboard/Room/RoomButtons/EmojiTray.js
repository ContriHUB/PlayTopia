//this component give's smiley button that would open a several emoji's and a emoji picker
import { IconButton } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'

import EmojiTray from './emojiButton'
import { useState } from 'react'
import { styled } from '@mui/system';

import {handleExchangeData,getPeers} from '../../../realtimeCommunication/webRTCHandler'

const EmojiHolder=styled('div')({
    position:'absolute',
    backgroundColor:'grey',
    display:'flex',
    borderRadius:'999px',
    bottom:'18%'
})

const fixEmojiStyles={margin:'4px',cursor:'pointer',height:'30px'}

const EmojiTrayWithPicker= ()=>{
    const [open,setOpen]=useState(false);
    const handleSendEmoji = (emojidata)=>{//handler for when a emoji is sent
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
        console.log(emojidata)
    }
    const handleFixClick=(e)=>{
        handleSendEmoji({imageUrl:e.target.src}); //only imageUrl is needeed to share emoji across peer's
    }
    return (<>
        {open&&<EmojiHolder>
            <EmojiTray handleSendEmoji={handleSendEmoji}/>
            <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f44d.png" height={'30'} style={fixEmojiStyles} onClick={handleFixClick}></img> {/* these img tag's contain the required emoji's */}
            <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/2764-fe0f.png" height={'30'} style={fixEmojiStyles} onClick={handleFixClick}></img>
            <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f64f.png"  height={'30'} style={fixEmojiStyles} onClick={handleFixClick}></img>
            <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f973.png"  height={'30'} style={fixEmojiStyles} onClick={handleFixClick}></img>
            <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f605.png" height={'30'} style={fixEmojiStyles} onClick={handleFixClick}></img>
            <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f602.png" height={'30'} style={fixEmojiStyles} onClick={handleFixClick}></img>
            
        </EmojiHolder>
            
        }
        <IconButton onClick={()=>{
            setOpen(!open)
        }} style={{marginTop:'3px'}}> 
           
            <EmojiEmotionsIcon style={{color:'white'}}></EmojiEmotionsIcon>
        </IconButton>
       
    </>) 
}
export default EmojiTrayWithPicker