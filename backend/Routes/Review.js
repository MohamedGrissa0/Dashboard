const router = require("express").Router()
const Person = require("../Models/Person");
const Review = require("../Models/Reviews");


router.get("/:id" , async (req,res) => {
    const id=req.params.id
    
    try {
       
             
       const review=await Review.find({postId : id})
     res.status(200).send(review)
   

   }

   catch (err) {
       res.status(500).json(err)
   }
} )

router.post('/', async (req, res) => {

    const NewRevieww = new Review(req.body)
    try {

        const savedReview = await NewRevieww.save()
        res.status(200).json(savedReview)
        
    }
    catch (err) {
        res.status(500).json(err)
    }
   
    

})

//INSERT MANY 




//Update Review
router.put('/:id', async (req, res) => { // add review ID parameter to URL
    try {
      const updatedReview = await Review.findByIdAndUpdate(req.params.id, { // use params to get review ID
        $set: {
          comments: req.body.comments,
          Rate: req.body.Rate, // fix camelCase
        },
      }, { new: true });
      res.status(200).json(updatedReview);
    } catch (err) {
      console.error(`Error updating review: ${err}`); // fix spacing and capitalization
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




module.exports = router;
