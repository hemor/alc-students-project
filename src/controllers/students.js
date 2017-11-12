'use strict';


let path = require('path');
let Students = require(path.relative(__dirname, 'src/database/models')).students;


function getAll(req, res) {
  Students.find({}, null, {sort: '-createdAt'}, function(err, students) {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: err.message || 'Unable to fetch all students'
      });
    }
    return res.status(200).json({
      ok: true,
      message: 'Fetched all students',
      data: students
    });
  });
}

function create(req, res) {
  let {firstname, lastname, address, email, phonenumber, dob, gender, course, level} = req.body;
  let student = new Students({
    firstname,
    lastname,
    address,
    email,
    phonenumber,
    dob: new Date(`${dob} UTC`),
    gender,
    course,
    level
  });
  student.save(function(err) {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: err.message || 'Unable to create student'
      });
    }
    return res.status(201).json({
      ok: true,
      message: 'Created a student',
      data: student
    });
  });
}

function getOne(req, res) {
  Students.findById(req.params.id, function(err, student) {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: err.message || 'Unable to fetch a student'
      });
    }
    if (!student) {
      return res.status(400).json({
        ok: false,
        message: 'Invalid student id'
      });
    }
    return res.status(200).json({
      ok: true,
      message: 'Fetched a student',
      data: student
    });
  });
}

function update(req, res) {
  let {firstname, lastname, address, email, phonenumber, dob, gender, course, level} = req.body;
  let data = {};
  if (firstname) data.firstname = firstname;
  if (lastname) data.lastname = lastname;
  if (address) data.address = address;
  if (email) data.email = email;
  if (phonenumber) data.phonenumber = phonenumber;
  if (dob) data.dob = new Date(`${dob} UTC `);
  if (gender) data.gender = gender;
  if (course) data.course = course;
  if (level) data.level = level;

  Students.findByIdAndUpdate(req.params.id, data, { new: true }, function(err, student) {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: err.message || 'Unable to update a student'
      });
    }
    if (!student) {
      return res.status(400).json({
        ok: false,
        message: 'Invalid student id'
      });
    }
    return res.status(200).json({
      ok: true,
      message: 'Updated a student',
      data: student
    });
  });
}

function destroy(req, res) {
  Students.findByIdAndRemove(req.params.id, function(err, student) {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: err.message || 'Unable to delete a student'
      });
    }
    if (!student) {
      return res.status(400).json({
        ok: false,
        message: 'Invalid student id'
      });
    }
    return res.status(200).json({
      ok: true,
      message: 'Deleted a student'
    });
  });
}


module.exports = {
  getAll,
  create,
  getOne,
  update,
  destroy
};
