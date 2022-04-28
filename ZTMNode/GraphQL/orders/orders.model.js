const { redBlanketUUID } = require("../products/products.model");

const orders = [
  {
    date: "03-20-2022",
    subtotal: 121.38,
    items: [
      {
        quantity: 2,
        product: {
          description: "A red blanket",
          price: 60.69,
          id: redBlanketUUID,
        },
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = { getAllOrders, orders };
