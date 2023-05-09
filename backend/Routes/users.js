const router = require("express").Router()
const User = require("../Models/Person");
const md5 =require("md5");
const { json } = require("express");
const Post=require("../Models/Post")
const multer = require("multer");






  
  

//UPDATE 

router.put('/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user information based on the request body
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = await md5(req.body.password);;

    // Save the updated user information
    const updatedUser = await user.save();

    res.status(200).send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});







//Delete User
router.delete('/delete/:id', async (req, res) => {
    try {
      console.log(req.params.id)
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(404).json("User not found");
        return;
      }
  
     
   await Post.updateMany({ "REVIEWS.personId": req.params.id }, { $pull: { REVIEWS: { personId: req.params.id } } });

  


    
      await User.findOneAndDelete({_id:req.params.id});
  
      res.status(200).json("User and reviews deleted successfully");
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error");
    }
  });
  




//GET USER 


router.get('/:id' , async(req,res)=>
{
    try
    {
        const user = await User.findById(req.params.id)
        const {password , ...others} = user._doc;
      
        res.status(200).send(others)
   }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
