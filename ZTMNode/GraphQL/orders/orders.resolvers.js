const { getAllOrders } = require("./orders.model");
module.exports = {
  Query: {
    //can have access to diff arguments in the resolvers, here none are being used
    orders: (parent) => {
      console.log("getting the orders...");
      return getAllOrders();
    },
  },
};
