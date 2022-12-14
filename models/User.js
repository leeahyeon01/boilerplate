const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //빈칸을 없애줌
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    //관리자(1),유저(0)
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

//스키마를 모델로 감싸줘야한다!
const User = mongoose.model("User", userSchema);

module.export = { User };
