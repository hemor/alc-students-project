'use strict';

let path = require('path');
let express = require('express');
let router = express.Router();
let validator = require(`${path.relative(__dirname, 'src/middlewares')}/ajv-validator`);

let studentsController = require(path.relative(__dirname, 'src/controllers')).students;


router.get('/', studentsController.getAll);

router.post('/', validator('create_students'), studentsController.create);

router.get('/:id', studentsController.getOne);

router.patch('/:id', validator('update_students'), studentsController.update);

router.delete('/:id', studentsController.destroy);



module.exports = router;
