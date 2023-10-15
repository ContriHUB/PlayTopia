export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({
  mail,
  password,
  username,
  profileImage,
}) => {
  return (
    validateMail(mail) &&
    validatePassword(password) &&
    validateUsername(username) &&
    validateUserPic(profileImage)
  );
};

const validatePassword = (password) => {
  return password.length > 5 && password.length < 13;
};

const validateUserPic = (profileImage) => {
  if(!profileImage) return true
  if(profileImage.profileImage &&
    (profileImage.profileImage.type !== "image/jpeg" &&
      profileImage.profileImage.type !== "image/png")) return false
  return true
};

export const validateMail = (mail) => {
  // const emailPattern = S/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  const emailRegex = /\S+@\S+\.\S+/;
  // console.log(mail);
  return emailRegex.test(mail);
};

const validateUsername = (username) => {
  return username.length > 2 && username.length < 13;
};
