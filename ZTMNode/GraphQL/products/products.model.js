const { v4: uuidv4 } = require("uuid");

let blueJeansUUID = uuidv4();
let redBlanketUUID = uuidv4();
let blackHatUUID = uuidv4();

const products = [
  {
    description: "A red blanket",
    price: 60.69,
    id: redBlanketUUID,
  },
  {
    description: "A black hat",
    price: 5.69,
    id: blackHatUUID,
  },
  {
    description: "Blue jeans",
    price: 40.69,
    id: blueJeansUUID,
  },
];

function getAllProducts() {
  return products;
}
function getProductsByPrice(min, max) {
  let newProducts = products.filter((product) => {
    if (product.price >= min && product.price <= max) {
      return product;
    }
  });
  console.log("new products", newProducts);
  return newProducts;
}

function getProductsByID(id) {
  return products.filter((product) => {
    if (product.id === id) {
      return product;
    }
  });
}

module.exports = {
  getAllProducts,
  products,
  blueJeansUUID,
  redBlanketUUID,
  blackHatUUID,
  getProductsByPrice,
  getProductsByID,
};
