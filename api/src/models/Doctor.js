const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true
    },
    specialities: {
      type: [String],
      required: true,
    },
    license: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    schedule: {
      hour: {
        type: String,
        required: true,
      },
      space: {
        type: Number,
        required: true,
      },
    },
    checkUpPrice: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = Doctor = mongoose.model("Doctor", doctorSchema);
