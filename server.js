const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema.js');

let port = 8080;
const app = express();

app.use('/speakers', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.listen(port);
console.log(`GraphQL Up And Running! on port ${port}`);
