const express = require("express");
const router = express.Router();
const { signup, login, fetchUserData } = require("../controllers/auth");
const {
  persnoalDetail,
  euducation,
  workExperience,
  certificate,
  skills,
  profilelink,
} = require("../controllers/persnoalData");
const { auth } = require("../middleware/authorisation");

// api for get userData
router.get("/fetchuserdata", auth, fetchUserData);

// api for registering user
router.post("/signup", signup);

//api for login user
router.post("/login", login);

//api for persnoal details
router.post("/persnoalDetail", auth, persnoalDetail);

//api for euducation
router.post("/euducation", auth, euducation);

//api for workExperience
router.post("/workExperience", auth, workExperience);

//api for certificate
router.post("/certificate", auth, certificate);

//api for skills
router.post("/skills", auth, skills);

//api for profilelink
router.post("/profilelink", auth, profilelink);

module.exports = router;
