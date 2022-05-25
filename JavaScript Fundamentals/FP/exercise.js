//This recursive function creates a stack overflow. How can you fix this code by still keeping the recursive call around, but only adding something that you have learned in this section to not cause this stack overflow.

//fill array with 60000 elements

//let web api/browser handle big tasks, don't overflow the callstack
const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
  let item = list.pop();

  if (item) {
    setTimeout(removeItemsFromList, 0);
  }
}

removeItemsFromList();
console.log("finished");
