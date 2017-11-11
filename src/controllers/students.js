'use strict';


let path = require('path');
let Students = require(path.relative(__dirname, 'src/database/models')).students;


function getAll(req, res) {
  res.json();
}

function create(req, res) {
  res.json();
}

function getOne(req, res) {
  res.json();
}

function update(req, res) {
  res.json();
}

function destroy(req, res) {
  res.json();
}


module.exports = {
  getAll,
  create,
  getOne,
  update,
  destroy
};
