"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Harry Houdini', 'David Copperfield', 'David Blaine'];
function show_magicians() {
    console.log(magicians);
}
function make_great() {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = 'The Great' + ' ' + magicians[i];
    }
    console.log(magicians);
}
show_magicians(); // initial array
make_great(); //adding The great to the array        
show_magicians(); //modified array
