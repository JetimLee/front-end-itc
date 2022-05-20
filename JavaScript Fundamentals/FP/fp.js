//functional programming originally comes from math, specifically lambda calculus
//all about separation of concerns, packaging different parts of code for different things
const taxRate = 0.03;
const userActions = [];

const items = [
  { name: "soap", price: 4, id: 1 },
  { name: "deodorant", price: 6, id: 2 },
  { name: "underwear", price: 10, id: 3 },
];

const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
  refunds: [],
};
const clearCart = () => {
  user.cart = [];
  userActions.push("cleared cart");
};
const refundCustomer = (item) => {
  if (user.purchases.includes(item)) {
    const foundItem = user.purchases.find((purchase) => {
      return purchase === item;
    });
    user.refunds.push(foundItem);
    user.purchases = user.purchases.filter((purchase) => {
      return purchase.id !== foundItem.id;
    });
    userActions.push(`User returned ${JSON.stringify(foundItem)}`);
    return foundItem;
  }
  console.log(
    `Cannot return ${JSON.stringify(item)} as it isn't in the users purchases`
  );
  return;
};
const addItem = (item) => {
  user.cart.push(item);
  console.log(user.cart);
  userActions.push(`User added ${JSON.stringify(item)}`);
};
addItem(items[0]);
addItem(items[2]);
console.log(user);
const buyItems = () => {
  if (user.cart.length > 0) {
    user.purchases = user.cart.map((item) => {
      return { ...item, price: item.price + item.price * taxRate };
    });
    userActions.push(`User bought ${JSON.stringify(user.purchases)}`);
    clearCart();
    return;
  }
  console.log("no items!");
  return;
};
buyItems();
console.log(user, "after buying");
console.log(user.purchases, "purchases");
console.log("refund", refundCustomer(user.purchases[1]));

console.log(user.purchases, "purchases after refund");
console.log(userActions);
console.log(user);

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.
