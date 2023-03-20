const router = require("express").Router();
const Post = require("../Models/Post");


router.get("/edit/:id" , async (req,res) => {
   
     try {
        
        const id = req.params.id       
        const categories= Post.find({_id : id})
      res.status(200).send([{title : "aslema ya world" , description : "fnnfzkfbezfbezbfezbfibezfezbfbzefbzefuibezfbuezbfiezbfubezfbiazbfzbe" , images:"https://images.pexels.com/photos/12509875/pexels-photo-12509875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" , review: 50 , reviewNB : 4.5 },{title : "hello world" , description : "fnnfzkfbezfbezbfezbfibezfezbfbzefbzefuibezfbuezbfiezbfubezfbiazbfzbe" , images:"https://images.pexels.com/photos/12509875/pexels-photo-12509875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" , review: 50 , reviewNB : 4.5 }])
    

    }

    catch (err) {
        res.status(500).json(err)
    }
} )
router.get("/places" , async (req,res) => {
   
    try {
       
         
      const  result =await Post.find({})
       res.status(200).send(result)
   

   }

   catch (err) {
       res.status(500).json(err)
   }
} )


// SEARCH BY PLACE NAME
router.get("/search" , async (req,res) => {
    try {
        const q = req.query.q
        const searchres = Post.find({title: "grissa"})
        res.status(200).send({title : "grissa" , description : "fnnfzkfbezfbezbfezbfibezfezbfbzefbzefuibezfbuezbfiezbfubezfbiazbfzbe" , images:"https://images.pexels.com/photos/12509875/pexels-photo-12509875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" , review: 50 , reviewNB : 4.5 })
  console.log({title : "grissa" , 
  description : "fnnfzkfbezfbezbfezbfibezfezbfbzefbzefuibezfbuezbfiezbfubezfbiazbfzbe" ,
   images:["https://images.pexels.com/photos/12509875/pexels-photo-12509875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/12509875/pexels-photo-12509875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/12509875/pexels-photo-12509875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"] , review: 50 , reviewNB : 4.5 })
    }

    catch (err) {
        res.status(500).json(err)
    }
} )


module.exports = router;
