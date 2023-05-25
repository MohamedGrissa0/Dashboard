const router = require("express").Router()
const Post = require("../Models/Post");



router.get("/:id", async (req, res) => {
  const id =(req.params.id);

  try {
    const post = await Post.findOne({ _id: id });
    const reviews = post.REVIEWS;
    console.log(reviews);
    res.status(200).send(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:postId', async (req, res) => {
  console.log(req.params.postId);
  console.log(req.body.rate);
  console.log(req.body.username);
  console.log(req.body.comments);



  try {
    const post = await Post.findOne({_id: req.params.postId});

    if (!post) {
      console.error('Post not found!');
      res.status(404).send('Post not found!');
    } 

      post.REVIEWS.push({
        personId: req.body.personId,
        username: req.body.username,
        rate: req.body.rate,
        comments: req.body.comments,
      });

      const updatedPost = await post.save();
      res.send(updatedPost);
      console.log(updatedPost)
      console.log('Review saved successfully!');
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


//search 
router.get("/search", async (req, res) => {
  try {
    const q = req.query.q.toLowerCase();
    const searchres = await Post.find({
      $or: [
        { "REVIEWS.comments": { $regex: `.*${q}.*`, $options: "i" } },
        { "REVIEWS.username": { $regex: `.*${q}.*`, $options: "i" } },
      ]
    });
    
    
    if (searchres.length > 0) {
      res.status(200).send(searchres);
    } else {
      res.status(404).send({ message: "No reviews found with that query" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});





router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ 'REVIEWS._id': req.params.id });
    if (!post) {
      throw new Error('Post not found');
    }

    const reviewIndex = post.REVIEWS.findIndex(review => review._id == req.params.id);
    if (reviewIndex === -1) {
      throw new Error('Review not found');
    }

    post.REVIEWS[reviewIndex].comments = req.body.comments;
    post.REVIEWS[reviewIndex].rate = req.body.rate;
    const updatedPost = await post.save();
    res.status(200).json(updatedPost.REVIEWS);
  } catch (err) {
    console.error(`Error updating review: ${err}`);
    throw new Error('Error updating review');
  }
});






router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    let allReviews = [];
    posts.forEach(post => {
      allReviews.push(...post.REVIEWS);
    });
    res.json(allReviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

  


router.delete('/:id', async (req, res ) => {
  console.log(req.params.id)
  try {
    const post = await Post.findOne({ 'REVIEWS._id': req.params.id });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const reviewIndex = post.REVIEWS.findIndex(review => review._id == req.params.id);
    if (reviewIndex === -1) {
      return res.status(404).json({ message: 'Review not found' });
    }
    
    post.REVIEWS.splice(reviewIndex, 1);
    const updatedPost = await post.save();
    res.status(200).json(updatedPost.REVIEWS);
    
  } catch (err) {
    console.error(`Error deleting review with ID ${req.params.id}: ${err}`);
    next(err);
  }
});











module.exports = router;
