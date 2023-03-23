const router = require("express").Router()
const User = require("../Models/Person");
const Review = require("../Models/Reviews");

const { json } = require("express");



//UPDATE 

router.put('/', async (req, res) => {
    try {
        const { id, password, ...otherFields } = req.body; // destructure req.body and exclude password
        if (password) {
            otherFields.password = password ; // hash password securely
        }
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: otherFields, // update all other fields except password
        }, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(`Error updating user: ${err}`);
        res.status(500).json(err);
    }
});

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
