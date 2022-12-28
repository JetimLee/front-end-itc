const str = "XeroX";

function getTheGapX(str) {
  // write your solution here

  const firstIndex = str.indexOf("X");

  if (firstIndex === -1) {
    return -1;
  }

  const lastIndex = str.lastIndexOf("X");

  return lastIndex - firstIndex;
}
