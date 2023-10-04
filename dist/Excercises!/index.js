"use strict";
// Solution one!
let PersonName = "Eric";
console.log(`Hello ${PersonName}, would you like to learn some Python today?`);
//Solution 2!
let name1 = "Muhammad Ahmad";
console.log(`${name1.toLowerCase()}\n${name1.toUpperCase()}\n${name1.toLocaleUpperCase()}`);
//Solution 3!
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert James";
console.log(`${author} once said, "${quote}"`);
//Solution 4
let famous_person = "Ellen Bay";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
//Solution 5
let whiteSpaceName = "\t\n hello Ahmad \n\t";
console.log("name with Spaces", whiteSpaceName);
console.log("Name without spaces!");
console.log(whiteSpaceName.trim());
console.log(whiteSpaceName.replace(/\s/g, ""));
//solution 8!
console.log(`\n ${3 + 5} \n`);
//Solution 9!
const favoriteNumber = 7;
const messageDeclare = `My Favorite number is ${favoriteNumber}`;
console.log(messageDeclare);
//Solution 10
let friends = ["Ahmad", "Usman", "Shah", "Ehsan", "Rehan"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
//Solution 11
// let friends = ["Ahmad", "Usman", "Shah", "Ehsan", "Rehan"];
for (let i = 0; i < friends.length; i++) {
    console.log(`Hello What are you doing Guys ${friends[i]}`);
}
//Solution 12
let transportPersonal = ["Mehran", "Honda Civic", "V8"];
for (let i = 0; i < transportPersonal.length; i++) {
    console.log(`I would like to own a ${transportPersonal[i]}`);
}
//Solution 13
let guestsLists = ["Abdul", "AbuZar", "Hassan"];
function invitationMessage(one) {
    return `Hello ${one}, You are invited to my place`;
}
guestsLists.forEach((guest) => {
    const invitedGuest = invitationMessage(guest);
    console.log(invitedGuest);
});
//# sourceMappingURL=index.js.map