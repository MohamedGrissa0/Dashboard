const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        title : 
        {
            type : String ,
           
        },
       
        images : 
        {
            type : [String] ,
         
        },
        description : 
        {
            type : String ,
        },
        location : 
        {
            type : String ,
         
        },
        REVIEWS : 
        {
            type : Array ,
         
        },
        category : 
        {
            type : String ,
      
        }

    },{ timestamps: true }
)


module.exports = mongoose.model("posts", PostSchema);
