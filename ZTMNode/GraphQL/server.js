const express = require("express");
const path = require("path");

//the models
// const { products } = require("./products/products.model");
// const { orders } = require("./orders/orders.model");

//build schema doesn't really work with the graphql-tools
// const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

//this looks into any directories and sub directories and matches files that end with that have any single or more characters that end in .graphql
const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));

const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

//need to pass in the different schemas from differnt files to the makeExecutableSchema function, which merges all of the schemas together

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});
//if no resolvers are set root becomes the default value?
// const root = {
//   products,
//   orders,
// };

const app = express();

// The root provides a resolver function for each API endpoint

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // rootValue: root,
    //this enables the graphiql tool
    graphiql: true,
  })
);

const port = 7770;
app.listen(port, () => {
  console.log(`Server runnning on ${port}`);
});
