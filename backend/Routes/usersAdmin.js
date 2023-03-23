const router = require("express").Router()
const User = require("../Models/Person");
const Review = require("../Models/Reviews");

const { json } = require("express");



//UPDATE 

router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            req.body.password = await md5 (req.body.password);
        }
        try {

            const UpdateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body   //EVERYTHING       
            }, { new: true })  //5tr  yrja3lk  ken l9dim ki tjibed fih

            res.status(200).json(UpdateUser)

        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(401).json("You can only update your account !") // 401 === "Not allowed"
    }

})

//Delete User
router.delete('/', async (req, res) => {
    try {
        const user = await User.findById(req.body.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

       

        try {
            await Review.deleteMany({ username: user.username });
            await User.findByIdAndDelete(user._id);

            res.status(200).json({ message: "User has been deleted" });
        } catch (err) {
            res.status(500).json({ message: "Something went wrong" });
        }
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
});




//GET USER 


router.get('/:id' , async(req,res)=>
{
    try
    {
        const user = await User.findById(req.params.id)
        const {password , ...others} = user._doc;
        res.status(200).json(others)

    }
    catch (err) {
        res.status(500).json(err)
    }
})


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    const sanitizedUsers = users.map(({ _id ,profilepic, username,email,token,password, ...others }) => ({ _id , username,email,token,password}));
    res.status(200).json(sanitizedUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

  

module.exports = router;
