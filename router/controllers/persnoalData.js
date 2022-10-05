const User = require("../../schemas/user");

//controller for persnoalDetail
const persnoalDetail = async (req, res) => {
  // code for persnoal detail

  const { contact, DOB, gender, city, pincode, state, country, userProfile } =
    req.body;

  try {
    const data = await User.findByIdAndUpdate(req.userid, {
      Contact: contact,
      DOB: DOB,
      Gender: gender,
      City: city,
      Pincode: pincode,
      State: state,
      Country: country,
      UserProfile: userProfile,
    });

    res.status(200).json({ msg: "data added!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//controller for euducation
const euducation = async (req, res) => {
  // code for euducation
  const { Course, NameOfSchool, YearOfPassing } = req.body;
  try {
    const data = await User.create(req.userid, {
      Course,
      NameOfSchool,
      YearOfPassing,
    });
  } catch {
    (error) => {
      res.status(400).json({ msg: error.message });
    };
  }

  //controller for workExperience
  const workExperience = async (req, res) => {
    // code for workExperience
  };
  //controller for certificate
  const certificate = async (req, res) => {
    // code for certificate
  };

  //controller for skills
  const skills = async (req, res) => {
    // code for skills
  };

  //controller for profilelink
  const profilelink = async (req, res) => {
    // code for profilelink
  };

  module.exports = {
    persnoalDetail,
    euducation,
    certificate,
    skills,
    profilelink,
    workExperience,
  };
};
