const router = require("express").Router();
const Post = require("../Models/Post");


router.get("/category/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const categories = await Post.find({ category: id });
    res.status(200).send(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving posts", error: err });
  }
});
router.get("/places", async (req, res) => {
  try {
    const all = await Post.find()
    res.status(200).send(all);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving posts", error: err });
  }
});


router.get("/toprated/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const categories = await Post.find({ category: id });
    res.status(200).send(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving posts", error: err });
  }
});


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

router.patch('/:postId', async (req, res) => {
  console.log(req.params.postId);

  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      console.error("Post not found!");
      res.status(404).send("Post not found!");
    } else {
      post.REVIEWS.push(req.body.reviewId);
      const updatedPost = await post.save();
      res.send(updatedPost);
      console.log("Post updated successfully!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/p/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id)
    if (!post) {
      console.error("Post not found!");
      res.status(404).send("Post not found!");
    } else {
      res.status(200).send(post);
      console.log("Post  successfully sent!");
    }
    
   
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving posts", error: err });
  }
});


module.exports = router;
