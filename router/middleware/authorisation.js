const secret_key = "xciteEuduction";
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { auth } = req.headers;
  console.log(auth);

  if (auth) {
    //code
    try {
      const decoded = await jwt.verify(auth, secret_key);
      req.userid = decoded.id;
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ data: "unauthorised" });
    }
  } else {
    res.status(401).json({ data: "unauthorised" });
  }
};

module.exports = { auth };
