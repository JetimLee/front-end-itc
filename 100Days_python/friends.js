let myFriend = ["Ryan", "Kieran", "Mark"];

function friend(friends) {
  let friend = friends.filter((el) => {
    return el.length > 4 ? el : null;
  });
  console.log(friend);
  return friend;
}
friend(myFriend);
