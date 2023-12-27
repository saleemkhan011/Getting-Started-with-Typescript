// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians = ['Harry Houdini','David Copperfield','David Blaine'];

function show_magicians(){
        var copyMagician = [...magicians]
        console.log(copyMagician)
}

function make_great(){
    for(let i=0; i<magicians.length; i++){
       magicians[i] = 'The Great'+' '+ magicians[i]
    }
    console.log(magicians)
} 

console.log(magicians)  // original array
show_magicians()        // copied array calling with function
make_great()