const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postRegister = async (req, res) => {

  try {
    const {username, password,email,profileImage} = req.body;
    console.log('user register request came');
    //check if user exists
    // const userExists = await User.exists({ mail: mail.toLowerCase() });

    // if (userExists) {
    //   return res.status(409).send('This Email already exists.');
    // }

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database

    const user = await User.create({
      username,
      email: email,
      password: encryptedPassword,
      profileImage: profileImage,
    });

    // create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: email,
      },
      //process.env.TOKEN_KEY, commenting out because this is genrally causing issue in newly forked repo will cause trouble for new comer's
      'binod', 
      {
        expiresIn: '24h',
      }
    );

    res.status(201).json({
      userDetails: {
        id: user._id,
        email: user.email,
        token: token,
        username: user.username,
        profileImage: user.profileImage
      },
    });
  } catch (err) {
    // catch (err) {
    //   return res.status(500).send('Error occured. Please try again');
    // }
    console.log('register fail =>', err);
    return res.status(400).send('error, try again');
  }
};

module.exports = postRegister;
