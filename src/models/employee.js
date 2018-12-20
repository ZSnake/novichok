const { Schema, model } = require('mongoose');;

const EmployeeSchema = new Schema({
  firstName: 'string',
  lastName: 'string',
});

module.exports = model('Employee', EmployeeSchema);