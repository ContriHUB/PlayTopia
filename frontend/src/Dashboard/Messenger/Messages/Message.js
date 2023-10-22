import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";

const MainContainer = styled("div")({
  display: "flex",
  marginTop: "10px",
  maxWidth: "80%",
});

const AvatarContainer = styled("div")({
  marginRight: "10px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#1985a1", // Background color for messages
  padding: "10px",
  borderRadius: "10px",
});

const SameAuthorMessageText = styled("span")({
  // marginLeft: "70px", // Adjust the margin as needed
  color:'white'
});


const SameAuthorMessageTextContainer = styled('div')({
  display: 'inline-block',
  flexDirection: 'column',
  backgroundColor: '#1985a1', // Background color for same author messages
  padding: '10px',
  borderRadius: '10px',
  marginLeft: '58px',
  marginTop: '5px',
});

const Message = ({
  content,
  sameAuthor,
  username,
  date,
  sameDay,
  profileImage,
}) => {

  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageTextContainer>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageTextContainer>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} profileImage={profileImage} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: "16px", color: "white" }}>
          {username}{" "}
          <span
            style={{
              fontSize: "12px",
              color: "#E0E1E4",
              float: "right",
              marginLeft: "10px",
            }}
          >
            {date}
          </span>
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          {content}
        </Typography>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
