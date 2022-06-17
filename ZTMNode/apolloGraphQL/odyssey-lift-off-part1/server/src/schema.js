const { gql } = require("apollo-server");
//tag template literal

//a query is an entry point into the api, the other two are mutation and subscription
const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
    module(id: ID!): Module
  }
  "A module is a single unit of teaching. Multiple Modules compose a track"
  type Module {
    id: ID!
    "title of the module"
    title: String!
    "length of the module"
    length: Int
    "content of the module"
    content: String
    "url to video"
    videoUrl: String
  }
  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }
  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, it represents the status of the mutation"
    code: Int!
    "A boolean that says if the mutation failed or succeeded"
    success: Boolean!
    "A response message detailing the success/result status"
    message: String!
    "The track that had its view count modified"
    track: Track
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
    "description of the track"
    description: String
    "number of views of the track"
    numberOfViews: Int
    "the modules of any given track"
    modules: [Module!]!
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
