const { GraphQLID, GraphQLList } = require('graphql');
const { EmployeeType, AddEmployeeInputType } = require('./types');
const Employee = require('../../models/employee');

const employee = {
  type: EmployeeType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Employee.findById(args.id);
  }
};

const allEmployees = {
  type: new GraphQLList(EmployeeType),
  resolve() {
    return Employee.find({});
  }
}

module.exports = {
  employee,
  allEmployees
}