import React, { useState } from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';
import { sendFriendInvitation } from '../../api';

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
        sendFriendInvitation={sendEmail}
      />
    </>
  );
};
const sendEmail= async (email,callback)=>{
   // adding a handler to send friend requests
    sendFriendInvitation({targetMailAddress:email})
    callback(); //calling the callback most probably closing the pop up that has appeared
}
export default AddFriendButton;
