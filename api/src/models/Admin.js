const mongoose = require( "mongoose");
const {Schema} = require( "mongoose");

const Admin = new Schema({
    name:  String,
    email: String,
    password: String,
    active: String,
    
},
{timestamps:true}
)

module.exports =  mongoose.model('Admin', Admin)