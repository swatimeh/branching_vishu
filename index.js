const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/api/users");

const PORT = 7000;
const DB = "mongodb://localhost:27017/xcitedb";
app.use(cors());
app.use(express.json());

app.use(router);

mongoose
  .connect(DB, {
    useNewUrlParser: "true",
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Application running on http://localhost/${PORT}`);
    });
  });
