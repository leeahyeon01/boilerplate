const express = require("express");
const app = express();
const port = 5000; 
const bodyparser = require("body-parser"); 
 
//body-parser가 클라이언트에서 받은 정보를 서버에서 분석해서 가져올수 있게
app.use(bodyparser.urlencoded({extended:true}));  

app.use(bodyparser.json());

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
 

  //만든 데이터베이스를 가져온다!!
  const {User} = require('mongoose');
const { render } = require("node-sass");

app.get("/", (req, res) => res.send("hello world"));


//회원가입을 위한 라우트 
app.post("BOILERPLATE/register",(req,res)=>{
  // 회원가입할 떄 필요한 정보들을 client에서 가져오면 
  //그것들을 데이터 베이스에 넣어준다  
     
   //db에서받은 User모델을 받아서 user인스턴스 생성해준다
   //body-parser를 통해 클라이언트가 보낸 정보를 받아준다.
   const user = new User(rqe.body)  
   console.log(user) 
   //save =>몽구스 메소드 , 받아온 정보들을 저장해준다. 
  user.save((err,userInfo)=>{
    if(err)return res.json({success:false, err}) 
    return res.status(200).json({
      successs:true
    })
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
