const User = require("../../schemas/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const secret_key = "xciteEuduction";

//controller for sign up
const signup = async (req, res) => {
  let { pwd, firstname, lastname, email } = req.body;

  const hashedPwd = await bcrypt.hash(pwd, saltRounds);

  const user = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    pwd: hashedPwd,
  });
  try {
    const result = await user.save();
    let token = jwt.sign({ id: result._id }, secret_key);
    console.log(token);
    res.status(200).json(token);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

// controller for login
const login = async (req, res) => {
  const { email, pwd } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const compare = await bcrypt.compare(pwd, user.pwd);
      if (compare) {
        let token = jwt.sign({ id: user._id }, secret_key);

        res
          .status(200)
          .json({ data: "User signed in successfully", token: token });
      } else {
        res.status(404).json({ data: "Email and password do not match" });
      }
    } else {
      res.status(404).json({ data: "Email and password do not match" });
    }
  } catch (error) {
    res.status(404).json({ data: error.message });
  }
};

//controller for fetch user data
const fetchUserData = async (req, res) => {
  //code for fetch user data
  try {
    const user = await User.find({ _id: req.userid });

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ data: error.message });
  }
};

module.exports = { signup, login, fetchUserData };
