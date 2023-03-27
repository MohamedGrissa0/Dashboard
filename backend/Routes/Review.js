const router = require("express").Router()
const Person = require("../Models/Person");
const Review = require("../Models/Reviews");
const Post = require("../Models/Post");



router.get("/:id" , async (req,res) => {
    const id=req.params.id
    
    try {
      
       
             
       const review=await Review.find({post : id})
     res.status(200).send(review)
   

   }

   catch (err) {
       res.status(500).json(err)
   }
} )

router.post('/:postId', async (req, res) => {
    console.log(req.params.postId);
  
    const newReview = new Review({
      personId: req.body.personId,
      username: req.body.username,
      post: req.params.postId,
      rate: req.body.rate,
      comments: req.body.comments,
    });
    try {
      const review = await newReview.save();
      const post = await Post.findById(req.params.postId);
  
      if (!post) {
        console.error("Post not found!");
        res.status(404).send("Post not found!");
      } else {
        post.REVIEWS.push(review);
        const updatedPost = await post.save();
        res.send(updatedPost);
        console.log("Review saved successfully!");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });
    
   
    



//INSERT MANY 




//Update Review
router.put('/:id', async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, {
      $set: {
        comments: req.body.comments,
        rate: req.body.rate,
      },
    }, { new: true });


    res.status(200).json(updatedReview);
  } catch (err) {
    console.error(`Error updating review: ${err}`);
    res.status(500).json(err);
  }
});

  

//Delete Review
router.delete('/', async (req, res) => {
    try {
        const review = await Review.findById(req.body.id);

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

       

        try {
            await Review.findByIdAndDelete(review._id);

            res.status(200).json({ message: "User has been deleted" });
        } catch (err) {
            res.status(500).json({ message: "Something went wrong" });
        }
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
//DELETE ALL REVIEWS
router.delete('/',async(req,res)=> {
    try{
        let reviews = await Review.deleteMany()
        res.status(200).json(reviews)
        }

    
    catch (err) {
        res.status(500).json(err)
    }
})


//GET ALL Reviews
router.get('/', async (req, res) => {
    const username = req.query.user
    const catName = req.query.cat
    /*try {
        let reviews;
        if (username) {
            reviews = await Review.find({data : { username }});
        }
        else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],

                }
            })
        }
        else {
            posts = await Post.find()
        }*/
        try{
        let reviews = await Review.find()
        res.status(200).json(reviews)
        }

    
    catch (err) {
        res.status(500).json(err)
    }
})

// Fetch reviews created in the last 24 hours
router.get('/', async (req, res) => {
  try {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const reviews = await Review.find({ createdAt: { $gte: twentyFourHoursAgo } });

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});





module.exports = router;
