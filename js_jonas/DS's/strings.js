const checkMiddleSeat = (seat) => {
  if (seat.includes("B") || seat.includes("E")) console.log("middle seat");
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("11E");
checkMiddleSeat("23C");

function range(start, end, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return { done: true, value: end };
    },
  };
}

for (const n of range(0, 100)) {
  console.log(n);
}

const [firstname, lastName] = "Jonas Schmedtman".split(" ");
console.log(firstname, lastName);

const capitalizeName = (name) => {
  const nameArray = name.split(" ");

  const correctName = nameArray.map((n) => {
    return n[0].toUpperCase() + n.slice(1, n.length);
  });
  return correctName.join(" ");
};

console.log(capitalizeName("jonas schmedtman"));
console.log(capitalizeName("jessica ann smith davis"));

const maskCreditCard = (number) => {
  const numberToString = number.toString();
  const last = numberToString.slice(-4);
  return last.padStart(numberToString.length, "*");
};

console.log(maskCreditCard(43378463864647384));

const camelCase = (some_string) => {
  let stringArray = some_string.trim().split("_");

  return (
    stringArray[0].toLowerCase() +
    stringArray[1][0].toUpperCase() +
    stringArray[1].slice(1, stringArray[1].length).toLowerCase()
  );
};

console.log(camelCase("underscore_case"));
console.log(camelCase(" first_name"));
console.log(camelCase("Some_Variable"));
console.log(camelCase(" calculate_AGE"));
console.log(camelCase("delayed_departure"));
