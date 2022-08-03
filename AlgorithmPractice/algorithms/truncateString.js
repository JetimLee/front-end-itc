function truncateString(str, num) {
  console.log(num);
  if (str.length === num) {
    return str;
  }
  if (num > str.length) {
    return str;
  }
  let truncatedString = "";
  let truncation = "...";

  for (let i = 0; i < num; i++) {
    console.log(str[i]);
    truncatedString += str[i];
    if (typeof str[i + 1] === "undefined") {
      return;
    }
  }

  return truncatedString + truncation;
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length + 2
);
