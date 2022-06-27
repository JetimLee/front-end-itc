function createPyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  let numberOfColumns = n * 2 - 1;
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < numberOfColumns; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

createPyramid(5);
