const mongoose = require("mongoose")

const PersonSchema = new mongoose.Schema(
    {
        username:
        {
            type: String,
            required: true

        },
        email:
        {
            type: String,
            required: true
        },
        profilePicture:
        {
            type: String,

        },
        city:
        {
            type: String,
        },
        country:
        {
            type: String,
        },
        address:
        {
            type: String,
        }, phone:
        {
            type: String,
        }, zip:
        {
            type: String,
        }, password:
        {
            type: String,
        },
        age : {
        type:String
        }
       ,
        token:
        {
            type: String,

        },
    }, { timestamps: true }
)


module.exports = mongoose.model("users", PersonSchema);