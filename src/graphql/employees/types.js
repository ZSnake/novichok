const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} = require('graphql');;

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  })
});

const EmployeeInputType = new GraphQLInputObjectType({
  name: 'EmployeeInput',
  fields: {
      firstName: {
          type: GraphQLString
      },
      lastName: {
          type: GraphQLString
      },
  }
});

module.exports = {
  EmployeeType,
  EmployeeInputType
};