const hapi = require('hapi');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-hapi');

const schema = require('./src/graphql/schema');

const server = hapi.server({
  port: 3000,
  host: 'localhost',
});

const apolloServer = new ApolloServer({
  schema
});

const init = async () => {
  mongoose.connect(`mongodb://localhost:27017/graphql-test`, { useNewUrlParser: true });
  mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

  server.route({
    method: 'GET',
    path: '/',
    handler: () => (`<h1>GraphQL API</h1>`),
  });
  await apolloServer.applyMiddleware({ app: server });
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
}

init();