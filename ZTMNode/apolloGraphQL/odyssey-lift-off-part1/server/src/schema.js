const { gql } = require("apollo-server");
//tag template literal

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }
  "A track is a group of Modules that teaches about a specific top"
  type Track {
    id: ID!
    "The track title"
    title: String!
    "The author of the track"
    author: Author!
    "the tracks main illustration to display in track card or track page detail"
    thumbnail: String
    "the tracks approximate length"
    length: Int
    "how many modules in the track"
    modulesCount: Int
  }
  "Author ofa  complete track"
  type Author {
    id: ID!
    "Authors first and last name"
    name: String!
    "Authors profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
