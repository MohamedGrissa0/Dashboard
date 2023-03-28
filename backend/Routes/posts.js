const router = require("express").Router();
const Post = require("../Models/Post");
const multer = require("multer");




// Configure multer middleware to handle file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

  
  
  
router.post("/edit/:id" , upload.array("images"), async (req,res) => {
        const id = req.params.id   
        console.log( req.files.length)  
       
     try {
        
     
     const post  = await Post.findById(id)
     
     if(post){
         post.title = req.body.title;
         post.location = req.body.location;
         post.locationString = req.body.locationString;
         post.category = req.body.category;
         post.description = req.body.description;
    if (req.files.length>0) {
      post.images = req.files.map((file) => file.path);
    }
    
    
    const updatedPost = await post.save();
    res.status(200).json({ message: "Post updated", post: updatedPost });
   
     }
     
     if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
    

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



router.post("/form", upload.array("images"),async(req,res)=>{



    
    
    try {
        const form = new Post({
            title: req.body.title,
            location: req.body.location,
            category: req.body.category,
            locationString: req.body.locationString,
            description: req.body.description,
            images: req.files.map(file => file.path)
          });
        const savedReview = await form.save()
        res.status(200).json(savedReview)
        
    }
    catch (err) {
        res.status(500).json(err)
    }
    
})







router.delete("/place/delete/:id",async(req,res)=>{
    const id=req.params.id
    console.log(id)
  const post=await  Post.findById(id)
 try{
    await post.deleteOne()
    res.status(200).send({result:"sucess"})
}catch{
    res.status(400).send({result:"fail"})  
} 
   
})

// SEARCH BY PLACE NAME
router.get("/search" , async (req,res) => {
    try {
        const q = req.query.q
        const searchres = Post.find({title: q})
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
