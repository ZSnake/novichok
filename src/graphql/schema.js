const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const employeeQueries = require('./employees/queries');
const employeeMutations = require('./employees/mutations');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...employeeQueries,
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    ...employeeMutations
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
