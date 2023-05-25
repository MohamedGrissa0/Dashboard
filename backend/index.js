const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const app = express()
const mongoose = require ("mongoose")
const authroute = require("./Routes/auth")
const usersroute = require("./Routes/users")
const reviewroute = require("./Routes/Review")
const postsroute = require("./Routes/posts")
const usersadmin = require("./Routes/usersAdmin")
const bodyParser=require("body-parser");
const Post = require("./Models/Post")
const multer = require('multer');
const upload = multer({ dest: './uploads' }); 


app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URL).then(console.log("DATABASE CONNECTED")).catch(err => {console.log(err)})
app.use("/api/auth" ,authroute)
app.use("/api/users" ,usersroute)
app.use("/api/reviews" ,reviewroute)
app.use("/api" ,postsroute)

app.use("/api/admin" ,usersadmin)

app.post('/api/form', upload.array('images'),async (req, res) => {
    const { title, location, category, description, locationString } = req.body;
    
    var image1 = req.files[0].path;
    var image2 = req.files[1].path;
    var image3= req.files[2].path;
    var images=[image1,image2,image3]
console.log(req.files)
    
  
    var post = new Post({title,location,category,description,locationString,images})
    var p= await post.save()
    res.send(p).status(200)

    
  });
  app.post('/api/edit/:id', upload.array('images'), async (req, res) => {
    const { title, location, category, description, locationString } = req.body;
    const { id } = req.params;
  
    try {
      const post = await Post.findById(id);
  
      if (!post) {
        return res.status(404).send('Post not found');
      }
  
      post.title = title;
      post.location = location;
      post.category = category;
      post.description = description;
      post.locationString = locationString;
  
      if (req.files && req.files.length > 0) {
        const images = req.files.map((file) => file.path);
        post.images = images;
      }
  
      const updatedPost = await post.save();
  
      res.status(200).send(updatedPost);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
  

app.get('/', async function(req,res)
{
    res.send('welcome to dashboard backend')
})







app.listen(4000,function()
{
    console.log("Port 4OOO is running ")
}
)
