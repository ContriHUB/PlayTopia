import store from '../../store/store';
import { setMessages } from '../../store/actions/chatActions';


export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;
  // find id of user from token and id from active conversation
  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails?._id;
  console.log(receiverId, userId)
  if (receiverId && userId) {
    const usersInCoversation = [receiverId, userId];
    console.log(participants,messages)
    updateChatHistoryIfSameConversationActive({
      participants,
      usersInCoversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInCoversation,
  messages,
}) => {
  const result = participants.every(function (participantId) {
    return usersInCoversation.includes(participantId);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
