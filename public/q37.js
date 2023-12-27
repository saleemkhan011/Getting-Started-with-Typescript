"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = 'large', message = 'I love TypeScript.') {
    console.log(`your size of the shirt is "${size}", and the message printed on the shirt is "${message}"`);
}
makeShirt();
function make_shirt(size, message) {
    if (size.toLowerCase() === 'large') {
        console.log(`Your size of the shirt is ${size},therefore the default message is 'I love TypeScript'.`);
    }
    else if (size.toLowerCase() === 'medium') {
        console.log(`Your size of the shirt is ${size},therefore the default message is 'I love TypeScript'.`);
    }
    else {
        console.log(`Your size of the shirt is ${size}, and the message printed on the shirt is '${message}'.`);
    }
}
make_shirt('large', 'coder');
make_shirt('medium', 'coder');
make_shirt('small', 'coder');
