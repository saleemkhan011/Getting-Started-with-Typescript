"use strict";
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
Object.defineProperty(exports, "__esModule", { value: true });
console.log("I can invite only two people for dinner");
let newInvitation = ['Hamza', 'Hamid', 'Jawad', 'Nasir', 'Shahid', 'Abdullah', 'Sami'];
do {
    let canNotInvite = newInvitation.pop();
    console.log(`Sorry ${canNotInvite}, you are not invited to the dinner party`);
} while (newInvitation.length > 2);
console.log('\n');
for (let invitation of newInvitation) {
    console.log(`Dear ${invitation}, you are still invited to the dinner party`);
}
newInvitation.pop();
newInvitation.pop();
console.log(newInvitation);
