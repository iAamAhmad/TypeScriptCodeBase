/*
let mathematician: string | undefined;
let res = mathematician?.length; // Ok
console.log(res);
mathematician = "Mark Goldberg";
let result = mathematician.length; // Ok
console.log(2 + 2);
console.log(result);
// ============================ 
*/
/*
type Poet = {
   born: number;
   name: string;
   };
   let poetLater: Poet;
   // Ok

   poetLater = {
   born: 1935,
   name: "Sara Teasdale",
   };
   console.log(poetLater.born);
   console.log(poetLater.name);

*/
/*

type FirstAndLastNames = {
   first: string;
   last: string;
   };
   // Ok
   const hasBoth: FirstAndLastNames = {
   first: "Sarojini",
   last: "Naidu",
   };
   const hasOnlyOne: FirstAndLastNames = {
   first: "Sappho",
   last: "Ahmad",
   };
 */
/*

type Author = {
  firstName: string;
  lastName: string;
};
type Poem = {
  author: Author;
  name: string;
};
const poemMismatch: Poem = {
  author: {
    firstName: "Sylvia Plath",
    lastName: "Ahmad",
  },
  name: "Khan",
};
*/
// Type: string[]
/*

const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
// Type: number[]
const soldierAges = [90, 19, 45];
// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];
console.log(conjoined);
*/
// interface Book {
//   author?: string;
//   pages: number;
// }
// // Ok
// const ok: Book = {
//   author: "Rita Dove",
//   pages: 80,
// };
// const missing: Book = {
//   pages: 80,
// };

// Inferred type: string
// let bestSong = Math.random() > 0.5 ? "Chain of Fools" : "Respect";

// let rocker; // Type: any
// rocker = "Joan Jett"; // Type: string
// rocker.toUpperCase(); // Ok
// rocker = 19.58; // Type: number
// rocker.toPrecision(1); // Ok
// // rocker.toUpperCase();

// let rocker1: string;
// rocker = "Joan Jett";
// rocker1 = 12;

// let mathematician = Math.random() > 0.5
// ? undefined
// : "Mark Goldberg";

// let physicist = Math.random() > 0.5
// ? "Marie Curie"
// : 84;

// let admiral: number | string;
// admiral = "20";
// admiral.toUpperCase(); // Ok: string
// admiral.toFixed();

// let scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
// if (scientist === "Rosalind Franklin") {
//   // Type of scientist: string
//   scientist.toUpperCase(); // Ok
// }
// // Type of scientist: number | string
// // scientist.toUpperCase();
// let mathematician: string | undefined;
// mathematician?.length; // Ok
// mathematician = "Mark Goldberg";
// mathematician.length;

// type Poet = {
//   born: number;
//   name: string;
// };
// let poetLater: Poet;
// // Ok
// poetLater = {
//   born: 1935,
//   name: "Sara Teasdale",
// };
// poetLater = "Emily Dickinson";
// poetLater = "Emily Dickinson";

// let type1 = { name: "zia", id: 1 };
// let type2 = { id: 2, name: "zia", age: 22 };
// console.log((type1 = type2));


// type one=(string)=>void;
// function two(f:one){
//   f("here")
// }
// var oneFunc=f=>{this.x="x"}

// var three=((a,b)=>++a)(1,2);
// console.log(three);

// var a:{foo:number};
// var a1={foo:1,baz:2};
// console.log(a=a1);

// let type1 = { name: "zia", id: 1 };
// type1 = {  name: "tom", id: 2};
// type1 = {   id: 2, name: "jack",};


// var f:(string)=>string;
// f=x=>('+ X +');
// var h:((string)=>string)[]

// function one(arg1: string|number|boolean): string|number|boolean{
//   if(typeof arg1==="string"){
//     return arg1+ "hello";
//   }
//   if(typeof arg1==="number"){
//     return arg1+ 10;
//   }
//   if(typeof arg1==="boolean"){
//     return arg1 && false;
//   }
// }


// var x:any="ahmad";
// if (typeof x==="string"){
//   console.log(x.length);
// }
// x.unknown();

// let x:any={name:"ahmad", id:1};
// x={id:2, name:"falak"};
// x={id:2, name:"falak", lastName:"foo"};
// x={id:2, name:false};
let array1: number[]=[2,3,4];
let array2:Array<number> =[1,23,3];
let array3=new Array[number];
let array5:number[]=new number[5]





