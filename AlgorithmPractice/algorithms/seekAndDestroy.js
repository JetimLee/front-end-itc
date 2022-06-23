function destroyer(arr) {
  let uniqueArray = [];
  const arrToSearch = Object.values(arguments)[0];
  const valuesToRemove = Object.values(arguments).slice(1);
  for (let i = 0; i < arrToSearch.length; i++) {
    if (valuesToRemove.indexOf(arrToSearch[i]) === -1) {
      uniqueArray.push(arrToSearch[i]);
    }
  }
  return uniqueArray;
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
