import React from "react";
import { Typography ,useTheme} from "@mui/material";

const FriendsTitle = ({ title }) => {
  const theme=useTheme();
  return (
    <Typography theme={theme}
      sx={{
        textTransform: "uppercase",
        color:theme.palette.text.primary,
        fontSize: "14px",
        marginTop: "10px",
        border: "solid aqua",
        padding:"3px"
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
