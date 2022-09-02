const mongoose = require( "mongoose");
const {Schema} = require( "mongoose");

const Admin = new Schema({
    name:  {
        type: String,
        required: true
    },
    image:  {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    
},
{timestamps:true}
)

module.exports =  mongoose.model('Admin', Admin)