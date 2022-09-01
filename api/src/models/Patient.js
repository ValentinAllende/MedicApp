import mongoose from "mongoose";
const { Schema, model } = mongoose;

const patientSchema = new Schema({
  name:{
    type: String,
    required: true,
    trim: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber:{
    type: String,
    required: true,
    trim: true,
  },
  active:{
    type: Boolean,
    default: true,
  },
},{
  timestamps: true,
  versionKey: false
})

export default model('Patient', patientSchema);