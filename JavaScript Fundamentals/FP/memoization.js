//caching - store values that you can use later
//it's like a backpack
function addTo80(n) {
  console.log("long time");
  return n + 80;
}
function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("cached already");
      console.log(cache);
      return cache[n];
    }
    console.log("caching long time", n + 80);
    cache[n] = n + 80;
    return cache[n];
  };
}
const memoized = memoizedAddTo80();
console.log("1", memoized(5));
console.log("2", memoized(5));
