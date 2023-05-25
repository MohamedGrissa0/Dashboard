const router = require("express").Router()
const User = require("../Models/Person");
const md5 =require("md5");
const Post=require("../Models/Post")


  



router.put('/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = await md5(req.body.password);
    }

    const updatedUser = await user.save();

    res.status(200).send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});









router.delete('/:id', async (req, res) => {
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
  
  
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    const sanitizedUsers = users.map(({ _id ,profilePicture, username,email,password }) => ({ _id ,profilePicture, username,email,password}));
    res.status(200).json(sanitizedUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});






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
