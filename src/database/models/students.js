'use strict';

let mongoose = require('mongoose');


let StudentsSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['m', 'f']
  },
  course: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: [100, 200, 300, 400, 500, 600]
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});


module.exports = mongoose.model('Students', StudentsSchema);
