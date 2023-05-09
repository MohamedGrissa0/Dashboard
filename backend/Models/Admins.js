const mongoose = require("mongoose")

const PersonSchema = new mongoose.Schema(
    {
    
        email:
        {
            type: String,
            required: true
        }, password:
        {
            type: String,
        },
      
    }, { timestamps: true }
)


module.exports = mongoose.model("Admins", PersonSchema);