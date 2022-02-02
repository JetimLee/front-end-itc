//expecting to get nothing from this function so I am setting my expectations to void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
logNumber(8);
const add = (a:number,b:number): number => {
  console.log(a+b)
return a+b
}
add(2,3)
//use annotation to avoid the any type, otherwise us TS reference

//void doesn't return anything, could also return null or undefined
const logger = (message:string):void => {
  console.log(message)
}

//never means it will never actually get to the end of the function
const throwError = (message:string):never => {
  throw new Error(message)
}