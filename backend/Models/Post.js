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
       locationString : 
        {
            type : String ,
         
        },
        
        REVIEWS : 
        [{ personId: {
            type:String
          },
          username: {
            type: String,
          },
          rate: {
            type: Number,
          },
          comments: {
            type: String,
          },
          }],
        category : 
        {
            type : String ,
      
        }

    },{ timestamps: true }
)


module.exports = mongoose.model("posts", PostSchema);
