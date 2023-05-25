const router = require("express").Router();

const md5 = require("md5");

const Admins=require("../Models/Admins")




router.post("/register",async (req,res)=> {
  try {
    
    const { username, email, password } = req.body;  
  
   const userexist= await Admins.findOne({email:email});
   if(userexist){
    res.status(400).send({status:400});
  
  } else{
    const objectToInsert = await new  Admins({
  
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

router.post("/login",async (req,res)=>{

  try{
  const {email } = req.body;  

  const user= await Admins.findOne({email:email})
    if(user){
  const isCorrect= user.password===( await md5(req.body.password))
  if(isCorrect){
    
    
  const{password,...others}=user._doc
  
   res.status(200).json(others)
  
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
    
    
    res.status(200).send("userLoggedOut")
    
    
    })
    
module.exports = router;