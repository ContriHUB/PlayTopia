import React from "react";
import store from "../../store/store";
import Avatar from "../../shared/components/Avatar";

const UserProfileImage = () => {
  const profileImage = store.getState().auth.userDetails?.profileImage;
  return (
    <div>
        <Avatar username={"Me"} profileImage={profileImage} />
    </div>
  );
};

export default UserProfileImage;
