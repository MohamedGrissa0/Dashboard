const router = require("express").Router()
const Admins = require("../Models/Admins");
const md5= require("md5")



router.put('/:id', async (req, res) => {
    console.log(req.params.id);
    try {
      const Admin = await Admins.findById(req.params.id);
  
      if (!Admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
  
    
  
      Admin.email = req.body.email;
      Admin.password = await md5(req.body.password);;
  
    
      const updatedUser = await Admin.save();
     const {password,others}=updatedUser
      res.status(200).send(others);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });






  

module.exports = router;
