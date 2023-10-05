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
interface Book {
  author?: string;
  pages: number;
}
// Ok
const ok: Book = {
  author: "Rita Dove",
  pages: 80,
};
const missing: Book = {
  pages: 80,
};

// Inferred type: string
let bestSong = Math.random() > 0.5 ? "Chain of Fools" : "Respect";

let rocker; // Type: any
rocker = "Joan Jett"; // Type: string
rocker.toUpperCase(); // Ok
rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok
// rocker.toUpperCase();

let rocker1: string;
rocker = "Joan Jett";
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

let scientist = Math.random() > 0.5
? "Rosalind Franklin"
: 51;
if (scientist === "Rosalind Franklin") {
// Type of scientist: string
scientist.toUpperCase(); // Ok
}
// Type of scientist: number | string
// scientist.toUpperCase();
let mathematician: string | undefined;
mathematician?.length; // Ok
mathematician = "Mark Goldberg";
mathematician.length; 

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
  poetLater = "Emily Dickinson";




