import React, { useState } from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';
import axios from 'axios';

const additionalStyles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '##34E4EA',
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label='Add Friend'
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
        sendFriendInvitation={sendEmailInvitation}
      />
    </>
  );
};
const sendEmailInvitation=(email,callback)=>{
    //this handler was not present in the orignal code
    // call the api with /invite endpoint 
    axios.get('http://localhost:5000/invite',{targetMailAddress:email}).then((res)=>{
      console.log(res);
    })
    callback();
}
export default AddFriendButton;
