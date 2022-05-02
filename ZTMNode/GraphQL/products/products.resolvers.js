const {
  getAllProducts,
  getProductsByPrice,
  getProductsByID,
} = require("./products.model");
module.exports = {
  Query: {
    //just examples of all the different parameters resolvers can deal with
    products: async (parent, args, context, info) => {
      console.log("products resolver called");

      const productsPromise = new Promise((resolve, reject) => {
        console.log("inside of the promise");
        setTimeout(() => {
          console.log("set timeout was fired");
          resolve(getAllProducts());
        }, 3000);
      });
      return await productsPromise;
    },
    productsByPrice: (parent, args) => {
      console.log(args);
      const { minPrice, maxPrice } = args;
      return getProductsByPrice(minPrice, maxPrice);
    },
    productsByID: (parent, args) => {
      const { id } = args;
      return getProductsByID(id);
    },
  },
};
