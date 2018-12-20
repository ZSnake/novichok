const { GraphQLID } = require('graphql');
const { EmployeeType, EmployeeInputType } = require('./types');
const Employee = require('../../models/employee');

const addEmployee = {
  type: EmployeeType,
  args: { input: { type: EmployeeInputType } },
  resolve: (parent, { input }) => {
    return Employee.create(input);
  }
}

const deleteEmployee = {
  type: EmployeeType,
  args: { id: { type: GraphQLID } },
  resolve(parent, { id }){
    return Employee.findOneAndDelete({_id: id});
  }
};

const updateEmployee = {
  type: EmployeeType,
  args: { id: { type: GraphQLID }, input: { type: EmployeeInputType } },
  resolve(parent, {id, input}){
    return Employee.findOneAndUpdate({ _id: id }, input);
  }
}

module.exports = {
  addEmployee,
  deleteEmployee,
  updateEmployee,
}