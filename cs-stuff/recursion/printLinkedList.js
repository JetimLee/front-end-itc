let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// function printList(list) {
//   let tmp = list;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

// function printList(list) {
//   let currentNode = list;
//   if (currentNode.next !== null) {
//     console.log(currentNode.value);
//     currentNode = currentNode.next;
//     printList(currentNode);
//   } else {
//     console.log(currentNode.value);
//   }
// }
// printList(list);

function printReversed(list) {
  if (list.next) {
    printReversed(list.next);
  }
  console.log(list.value);
}

printReversed(list);
