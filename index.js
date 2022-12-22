const express = require("express");
const app = express();
const port = 5000;

//몽구스로 몽고 디비 연결
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://zn:zn1234@movieweb.8pybke8.mongodb.net/?retryWrites=true&w=majority"
  )

  //   구글링해보니 mongoose 6버전 이상에선 더이상 useNewUrlParser, useUnifiedTopology, useFindAndModify, useCreateIndex 요 친구들을 지원하지 않기 때문에 지워주면 된다는 거였다.
  // 그래서 지웠더니 에러가 사라졌습니당
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
