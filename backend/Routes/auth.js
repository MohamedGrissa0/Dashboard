const router = require("express").Router();
const User = require("../Models/Person");
const md5 = require("md5");
const jwt = require("jsonwebtoken");





//REGISTER
router.post("/register",async (req,res)=> {
  try {
    
    const { username, email, password } = req.body;  
  
   const userexist= await User.findOne({email:email});
   if(userexist){
    res.status(400).send({status:400});
  
  } else{
    const objectToInsert = await new  User({
    username,
  email,
  password:md5(password),
  }) 
;
  await objectToInsert.save();
  res.status(200).send({status:200});
}
  
  } catch (error) {
    console.log(error)
  }
  
  });

//LOGIN
router.post("/login",async (req,res)=>{

  try{
  const {email } = req.body;  

  const user= await User.findOne({email:email})
    if(user){
  const isCorrect= user.password===( await md5(req.body.password))
  if(isCorrect){
    
    const secret="thisismysecret"
    const token= await jwt.sign({id:user._id},secret)
  //to get all info about user except his password and user._doc to get only user info not other info with user info
  await User.updateOne({username:user.username},{token:token})
  const{password,...others}=user._doc
  
   res.cookie("access_token",token,{
    httpOnly:true
  }).status(200).json(others)
  
  }else{
    res.status(402).json("wrong password");
    return;
  }
    }else{
      res.status(420);
      return;
    }
  
  
  
  
  
  }catch(err){
  
    console.log(err)
  }
  
  
  
  })

  router.get("/logout",async(req, res)=>{
    res.clearCookie("access_token",{path:'/'})
    
    res.status(200).send("userLoggedOut")
    
    
    })
    
module.exports = router;