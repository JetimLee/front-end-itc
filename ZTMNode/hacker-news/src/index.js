const { ApolloServer } = require("apollo-server");
const { loadFilesSync } = require("@graphql-tools/load-files");
const path = require("path");
const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// 1

// 2
const resolvers = {
  Query: {
    info: () => null,
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
  Mutation: {
    // 2
    post: (parent, args, context, info) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      });
      return newLink;
    },
    updateLink: (parent, args) => {
      let linkID = args.id;
      let updatedLinks = links.map((link) => {
        if (link.id === linkID) {
          return { ...link, description: args.description, url: args.url };
        }
        return link;
      });
      links = updatedLinks;
    },
    deleteLink: (parent, args) => {
      let linkID = args.id;
      let updatedLinks = links.filter((link) => {
        if (link.id !== linkID) {
          return link;
        }
      });
      links = updatedLinks;
    },
  },
};

// 3
const server = new ApolloServer({
  typeDefs: typesArray,
  resolvers,
  //getting access to prisma in all my resolvers by doing this
  context: { prisma },

  //this is also a way of getting into a graphql file instead of the loadfiles from graphql-tools
  // typeDefs: fs.readFileSync(
  //   path.join(__dirname, 'schema.graphql'),
  //   'utf8'
  // ),
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
