const userModel = require("../Models/userModel");
const ProfileMdodel = require("../Models/profileModel");
const userSave = async () => {
  const { username, email, firstname, lastname } = req.body;
  const User = await userModel.create({
    username: username,
    email: email,
  });

  const Profile = await ProfileMdodel.create({
    firstname: firstname,
    lastname: lastname,
    userid: User_id,
  });
  res.send("okkk");
};

module.exports = {
  userSave,
};
