//Always ask, is it ordered? If it is, there are advantages.
//Can just go straight to the position and get the value sometimes, other times you need to just search for it, but in  a smart way
//Could also just treat it like a phonebook and open close to where the value should be
//The phone book trick is what we'll be doing here
//A trick of Big O is if in the input halves at each step, it is likely O(LogN) or O(NLogN)

//first step - find the mid point which is going to be like m = floor((hi-low)/2)
//second step - grab the value at that midpoint like v = arr[m]
//now see if v == needle, return true
//if it isn't true, check if the value is larger than the needle and if so make the high to m, be sure to make m inclusive and not exclusive
//else make high = midpoint
//use a do while loop until low is no longer high, if you get to the end of the loop return false

const bSearch = (arr: number[], needle: number): boolean => {
  let low = 0;
  let high = arr.length;
  let arrayPath: number[] = [];
  console.log("here is my needle", needle);
  console.log("here is my low", low);
  console.log("here is my high", high);
  do {
    const m = Math.floor(low + (high - low) / 2);
    //value of the midpoint
    const v = arr[m];
    console.log("here is the value at the midpoint", v);
    arrayPath.push(v);
    console.log(arrayPath);
    if (v === needle) {
      console.log("found the needle");
      //if the value at the midpoint is what i want, i stop searching
      return true;
    } else if (v > needle) {
      console.log("made the high equal to mid");
      //if the value at the midpoint is greater than the needle that means that my needle is on the lower side and I need to make the high = m so I don't revisit that point
      high = m;
      console.log(high);
    } else {
      console.log("increased the low");
      low = m + 1;
      console.log(low);
    }
  } while (low < high);
  return false;
};
let myAray: number[] = [11, 22, 44, 66, 77, 88, 99, 100];

console.log(bSearch(myAray, 100));
