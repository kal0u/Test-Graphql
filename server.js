const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const graphQlSchema = require('./omdb/schema/schema');
const graphQlResolvers = require('./omdb/resolvers/index');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log(`Server is listening on 4000`);
});

