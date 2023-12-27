"use strict";
/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */
Object.defineProperty(exports, "__esModule", { value: true });
let frnds1 = ['Hamid', 'Nasir', 'Yasir', 'Abdullah'];
for (let arr of frnds1) {
    console.log(`Dear ${arr}, You are invited to my dinner party.`);
}
console.log(`\nDue to some personal engagements ${frnds1[2]} can't come to the dinner party`);
let store1 = frnds1[2];
frnds1[2] = 'Shahid';
console.log(`\nThat is why to fill the gap of ${store1}, ${frnds1[2]} is coming to dinner party.\n`);
// printing invitation again:
for (let again of frnds1) {
    console.log(`${again} You are Invited to the dinner party. `);
}
// New Guests:
console.log("Some more guests are coming to the dinner party with us.");
frnds1.unshift("Hamza");
frnds1.splice(frnds1.length / 2, 0, "Jawad");
frnds1.push("Sami");
// Printing Invitation to Guests again:
for (let invitation of frnds1) {
    console.log(`Dear ${invitation} you are invited to the dinner party`);
}
