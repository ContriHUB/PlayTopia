import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword , setProfileImage} = props;

  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter a username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
      <InputWithLabel
        label="Profile Photo"
        type="file"
        placeholder="Upload profile photo"
        setValue={setProfileImage}
      />
    </>
  );
};

export default RegisterPageInputs;
