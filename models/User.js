//user schema
//model은 schema를 감싸주는 역할
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //빈칸을 없애준다
    unique: 1, //똑같은 이메일x
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
  //회원이미지
  image: String,
  //토큰으로 유효성 관리
  token: {
    type: String,
  },
  //토큰의 유효기간
  tokenExp: {
    type: Number,
  },
});

//스키마를 모델로 감싸줘야한다! (모델이름,스키마명)
const User = mongoose.model("User", userSchema);

//모델을 내보내준다.
module.export = { User };
