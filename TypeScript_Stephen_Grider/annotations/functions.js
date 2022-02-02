//expecting to get nothing from this function so I am setting my expectations to void
var logNumber = function (i) {
    console.log(i);
};
logNumber(8);
var add = function (a, b) {
    console.log(a + b);
    return a + b;
};
add(2, 3);
//use annotation to avoid the any type, otherwise us TS reference
