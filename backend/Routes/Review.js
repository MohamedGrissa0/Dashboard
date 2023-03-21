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
router.put('/:id', async (req, res) => {

    try {

        const review = await Review.findById(req.params.id)
        if (review.username === req.body.username) {
            try {
                const updatePost = await Post.findByIdAndUpdate(req.params.id,
                    {
                        $set: req.body
                    }, { new: true })
                res.status(200).json(updatePost)
            }
            catch (err) {

            }
        }
        else {
            res.status(401).json("You can update only your post ")
        }

        res.status(200).json(UpdateUser)

    }
    catch (err) {
        res.status(500).json(err)
    }



})


//Delete Review
router.delete('/id', async (req, res) => {

    try {

        const review = await Review.findById(req.body)
            try {
                await review.delete()
                res.status(200).json("POST HAS BEEN DELETED")
            }
            catch (err) {
                console.log(err)
            }
        
        


    }
    catch (err) {
        res.status(500).json(err)
    }



})
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
