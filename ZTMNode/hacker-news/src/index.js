const { ApolloServer } = require("apollo-server");
const { loadFilesSync } = require("@graphql-tools/load-files");
const path = require("path");
const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const { PrismaClient } = require("@prisma/client");
const Subscription = require("./resolvers/Subscription");
const { PubSub } = require("apollo-server");
const { getUserId } = require("./utils");

const Vote = require("./resolvers/Vote");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");

// 1
const pubsub = new PubSub();
const prisma = new PrismaClient();

// 2
const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote,
};

// 3
const server = new ApolloServer({
  typeDefs: typesArray,
  resolvers,

  //returns the context
  //The advantage of this approach is that you can attach the HTTP request that carries the incoming GraphQL query (or mutation) to the context as well. This will allow your resolvers to read the Authorization header and validate if the user who submitted the request is eligible to perform the requested operation.

  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },

  //this is also a way of getting into a graphql file instead of the loadfiles from graphql-tools
  // typeDefs: fs.readFileSync(
  //   path.join(__dirname, 'schema.graphql'),
  //   'utf8'
  // ),
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
