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
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)

            try {
                await Post.deleteMany({username : user.username })
                await User.findByIdAndDelete(req.params.id)

                res.status(200).json("USER HAS BEEN DELETED ")

            } 
            catch (err) {
                res.status(500).json(err)
            }
        }
        catch (err) {
            res.status(401),json("YOu can DELETE ONLY YOUR ACCOUNT")
e        }



    }
    else {
        res.status(401).json("You can only Delete your account !") // 401 === "Not allowed"
    }

})




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
    const sanitizedUsers = users.map(({ _id ,profilepic, username,email,token, ...others }) => ({ _id , username,email,token}));
    res.status(200).json(sanitizedUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

  

module.exports = router;
