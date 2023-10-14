import React from "react";
import { styled } from "@mui/system";


const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  backgroundColor: "transparent",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
  color: "white",
});



const Avatar =({ username, large, profileImage }) => {

  return (
    <AvatarPreview
      style={large ? { height: "80px", width: "80px" } : {}}
    >
      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile-pic"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "42px",
          }}
        />
      ) : (
        username.substring(0, 2)
      )}
    </AvatarPreview>
  );
};

export default Avatar;
