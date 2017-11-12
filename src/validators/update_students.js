'use strict';

let name = 'update_students';

let schema = {
  type: 'object',
  properties: {
    firstname: { type: 'string' },
    lastname: { type: 'string' },
    address: { type: 'string' },
    email: {
      type: 'string',
      format: 'email'
    },
    phonenumber: { type: 'string' },
    dob: { type: 'string' },
    gender: {
      type: 'string',
      enum: ['m', 'f']
    },
    course: { type: 'string' },
    level: {
      type: 'number',
      enum: [100, 200, 300, 400, 500, 600]
    }
  },
  minProperties: 1
};


module.exports = { name, schema };
