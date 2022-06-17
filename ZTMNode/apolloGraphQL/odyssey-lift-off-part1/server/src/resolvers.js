/* 
    parent:
    parent is the returned value of the resolver for this field's parent. This will be useful when dealing with resolver chains.
    args:
    args is an object that contains all GraphQL arguments that were provided for the field by the GraphQL operation. When querying for a specific item (such as a specific track instead of all tracks), in client-land we'll make a query with an id argument that will be accessible via this args parameter in server-land. We'll cover this further in Lift-off III.
    context:
    context is an object shared across all resolvers that are executing for a particular operation. The resolver needs this context argument to share state, like authentication information, a database connection, or in our case the RESTDataSource.
    info:
    info contains information about the operation's execution state, including the field name, the path to the field from the root, and more. It's not used as frequently as the others, but it can be useful for more advanced actions like setting cache policies at the resolver level.*/

//a resolver has access to parent, args, context and info params

const resolvers = {
  Query: {
    //returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    //returns a specific track by its given id
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
    module: (_, { id }, { dataSources }) => {
      dataSources.trackAPI.getModule(id);
    },
  },
  Mutation: {
    //increments a track's numberOfViews property
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (error) {
        console.log(error, "error");
        return {
          //when there's an error apollo server attaches an extensions property to the error that is thrown
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
    },
  },
  //putting this here since we want to be explicit that this Query is explcitly for the track type, could in theory put it into the same area as query
  Track: {
    //parent arguments contains data returned by our tracksForHome resolver and because tracksForHome returns a list, Apollo Server iterates through that list and calls the author resolver once for each track. It passes the current track as the value of parent, enabling us to extract the authorId
    author: ({ authorId }, __, { dataSources }, ____) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};
module.exports = resolvers;
