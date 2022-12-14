const express = require("express");
const app = express();
const port = 5000;

//몽구스로 몽고 디비 연결
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://zn:zn1234@movieweb.8pybke8.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
