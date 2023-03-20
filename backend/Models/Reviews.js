const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema(
    {
        username : 
        {
            type : String ,
            
        },
        postId : 
        {
            type : String ,
            
        },
        Rate : 
        {
            type : Number ,
         
        },
        comments : 
        {
            type : String ,
         
        }
        
    },{ timestamps: true }
)


module.exports = mongoose.model("Review", ReviewSchema);