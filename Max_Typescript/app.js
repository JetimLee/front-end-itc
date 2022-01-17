//type aliases, you can create any type you want that doesn't already exist in JavaScript
//can encode very complex type definitions and it saves you space
function add(n1, n2, resultConversion
//literal are based on the core types, but it is a specific version of that type
) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
    //   if (resultConversion === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
    //here union type is being used which allows you to accept multiple types
    //result stays a number
}
var combinedAges = add(20, 30, "as-number");
var combinedStringAges = add("30", "20", "as-number");
var combinedSentence = add("Hello ", "and Goodbye", "as-text");
console.log(combinedAges);
console.log(combinedSentence);
console.log(combinedStringAges);
