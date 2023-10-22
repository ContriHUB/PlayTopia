import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';
import { getDirectChatHistory} from '../../realtimeCommunication/socketConnection'

const Wrapper = styled('div')({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDirectChatHistory({
          receiverUserId: chosenChatDetails.id,
        });
      } catch (error) {
        // Handle any errors if needed.
        console.error(error);
      }
    };

    fetchData();

  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages/>
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
