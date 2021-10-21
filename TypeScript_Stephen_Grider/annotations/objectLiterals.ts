let colors: string[] = ['red','green','blue'];
let numbers: number[] = [1,2,3,4];
let booleans: boolean[] = [false,true,false];

class Car{

};
//variable car will only refer to an instance of car
let car: Car = new Car();

//object literal
//only have to put a semicolon here when separating property names or different types
let point: {x:number;y:number} = {x:10,y:20};
let myDate = new Date(1478708162000);
let myObject: {name:string;age:number;dateOfBirth:Date} = {name:'Gavin',age:28,dateOfBirth:myDate};
