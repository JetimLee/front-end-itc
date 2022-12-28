function all(array, callback) {
  let copy = copy || array.slice(); // shallow copies array

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift(); // remove first element from array
    return all(copy, callback);
  } else {
    return false;
  }
}
