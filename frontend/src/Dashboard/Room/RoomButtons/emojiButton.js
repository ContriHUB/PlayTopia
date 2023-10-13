//this one give's the emoji tray where we can select emoji's that were not in the recomended emoji's
//when the button is clicked the emoji will be displayed

import { useState } from 'react';
import { IconButton } from '@mui/material';

import EmojiPicker from 'emoji-picker-react'
import AddIcon from '@mui/icons-material/Add';

const EmojiTray=({handleSendEmoji})=>{
    const [open,setOpen]=useState(false); //state to implement emoji picking functionality

    
    return <>
       <IconButton onClick={()=>{  //add icon button that open's the emoji tray
            setOpen(!open)
       }}>
        <AddIcon style={{backgroundColor:"grey",color:'black',borderRadius:'20px'}}></AddIcon>
       </IconButton>
       {
        open&& <div style={{position:'relative',zIndex:'1',top:'-42vh',left:'-1vw',height:'1px',width:'1px'}}>
        <EmojiPicker onEmojiClick={(e)=>{//actual component that display's the emoji pallete
        handleSendEmoji(e)
        setOpen(false)
      
        }}
        height={'40vh'}
        width={'15vw'} //hard coded value for all emoji pallete's (could change this according to suggestions)
        />
   </div>
       }
      
      
    
      
    </>
}

export default EmojiTray