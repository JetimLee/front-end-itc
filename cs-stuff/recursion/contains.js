var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}
