"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case sensitive. If 'John' has been used, 'JOHN' should not be accepted.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ['Saleem', 'Hamid', 'Yasir', 'Nasir', 'Ahmed'];
let new_users = ['AHMED', 'Shahid', 'Anwar', 'Amjad', 'saleem'];
for (let i = 0; i < current_users.length; i++) {
    for (let j = 0; j < new_users.length; j++) {
        if (current_users[i].toLowerCase() === new_users[j].toLowerCase()) {
            console.log(`The username ${new_users[i]} is already taken. Please choose another username.`);
        }
        if (current_users[i].toLowerCase() !== new_users[j].toLowerCase()) {
            continue;
        }
    }
}
