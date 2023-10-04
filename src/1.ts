// interface bird {
//   name: string;
//   runningSpeed: number;
// }

// interface animal {
//   name: string;
//   flyingSpeed: number;
// }
// interface Creature extends animal, bird {}
// const tiger: Creature = {
//   name: "Bird",
//   flyingSpeed: 123,
//   runningSpeed: 456,
// };
// console.log(tiger.name);
// type animall = {
//   name: string;
//   flyingSpeed: number;
// };
// type birds = {
//   name: string;
//   runningSpeed: number;
// };
// type Creatures=animall|birds;

// function(creature:Creatures){
//   // we are putting type guard here
//   if("runningSpeed" in creature){
//     console.log(creature.runningSpeed)
//   }
// }

// const promiseFunc: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello What is This");
//   }, 2000);
// });
// promiseFunc.then((data) => {
//   const arr = data.split(" ");
//   console.log(arr.join(""));
// });

