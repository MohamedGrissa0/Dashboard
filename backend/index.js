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
const bodyParser=require("body-parser");


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




app.get('/', async function(req,res)
{
    res.send('welcome to dashboard backend')
})







app.listen(4000,function()
{
    console.log("Port 4OOO is running ")
}
)
