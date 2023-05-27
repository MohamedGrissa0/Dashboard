const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema(
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


module.exports = mongoose.model("Admins", AdminSchema);