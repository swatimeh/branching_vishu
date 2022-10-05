const Mongoose = require("mongoose");
//step1 -create a model
const UserSchema = new Mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  pwd: {
    type: String,
  },
  Contact: {
    type: String,
  },
  DOB: {
    type: String,
  },
  Gender: {
    type: String,
  },
  City: {
    type: String,
  },
  Pincode: {
    type: String,
  },
  State: {
    type: String,
  },
  Country: {
    type: String,
  },
  UserProfile: {
    type: String,
  },
  Course: {
    type: Array,
  },
  NameOfSchool: {
    type: String,
  },
  YearOfPassing: {
    type: String,
  },
});

const User = new Mongoose.model("User", UserSchema);
//step2export
module.exports = User;
