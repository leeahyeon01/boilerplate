const express = require("express");
const app = express();
const port = 5000; 
const bodyparser = require("body-parser"); 
 
//업데이트되면서 express에 기본적으로 body-parser 포함되어, 설치할 필요없음
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//💥몽구스로 몽고 디비 연결
const mongoose = require("mongoose");

// DeprecationWarning 에러를 잡기위해 넣음,,
mongoose.set('strictQuery',true);
mongoose
  .connect(
    'mongodb+srv://zn:zn1234@movieweb.8pybke8.mongodb.net/?retryWrites=true&w=majority'
  )
  //   구글링해보니 mongoose 6버전 이상에선 더이상 useNewUrlParser, useUnifiedTopology, useFindAndModify, useCreateIndex 요 친구들을 지원하지 않기 때문에 지워주면 된다는 거였다.
  // 그래서 지웠더니 에러가 사라졌습니당
  .then(() => console.log("MongoDB Connected...")) 
  .catch((err) => console.log(err +"에러발생")); 
 

  //만든 데이터베이스를 가져온다!!
const {User} = require("./models/User");
const { render } = require("node-sass");

app.get("/", (req, res) => res.send("hello world"));


//회원가입을 위한 라우트 
app.post("/register",(req,res)=>{
  // 회원가입할 떄 필요한 정보들을 client에서 가져오면 
  //그것들을 데이터 베이스에 넣어준다  
     
   //db에서받은 User모델을 받아서 user인스턴스 생성해준다
   //body-parser를 통해 클라이언트가 보낸 정보를 받아준다.
   const user = new User(req.body)  

   //save =>몽구스 메소드 , 받아온 정보들을 저장해준다. 
  user.save((err,userInfo)=>{
    if (err) return res.json({success: false, err}) //저장 실패시
    return res.status(200).json({ //저장 성공시
      successs:true
    })
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
