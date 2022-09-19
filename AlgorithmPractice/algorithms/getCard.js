const getCard = () => {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const playingCard = {
    value: values[Math.floor(Math.random() * values.length)],
    suit: suits[Math.floor(Math.random() * suits.length)],
  };
  return playingCard;
};
console.log(getCard());
