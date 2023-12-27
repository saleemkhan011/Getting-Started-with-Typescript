"use strict";
/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let frnds = ['Hamid', 'Nasir', 'Yasir', 'Abdullah'];
for (let arr of frnds) {
    console.log(`Dear ${arr}, You are invited to my dinner party.`);
}
console.log(`\nDue to some personal engagements ${frnds[2]} can't come to the dinner party`);
let store = frnds[2];
frnds[2] = 'Shahid';
console.log(`\nThat is why to fill the gap of ${store}, ${frnds[2]} is coming to dinner party.\n`);
// printing invitation again:
for (let again of frnds) {
    console.log(`${again} You are Invited to the dinner party. `);
}
