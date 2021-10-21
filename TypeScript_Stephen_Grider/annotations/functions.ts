//expecting to get nothing from this function so I am setting my expectations to void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
logNumber(8);

//use annotation to avoid the any type, otherwise us TS reference
