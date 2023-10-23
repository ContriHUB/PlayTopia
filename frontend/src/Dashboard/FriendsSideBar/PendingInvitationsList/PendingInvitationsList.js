import React from 'react';
import { styled ,useTheme} from '@mui/system';
import PendingInvitationsListItem from './PendingInvitationsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
  backgroundColor:theme.palette.background.default
}));

const PendingInvitationsList = ({ pendingFriendsInvitations }) => {
 const theme=useTheme();
  return (
    <MainContainer theme={theme}>
      {pendingFriendsInvitations.map((invitation) => (
        <PendingInvitationsListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.email}
          profileImage={invitation.senderId.profileImage}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(PendingInvitationsList);
