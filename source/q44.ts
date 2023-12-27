// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


let sandwichArray:string[] = []

function sandwichSummary(items:string){
    sandwichArray.push(items)
        console.log(`You have ordered ${sandwichArray.length} sandwiches, ${sandwichArray}`)
  }
  
sandwichSummary("Lettuce");
sandwichSummary("ketchup");
sandwichSummary("Peanut Butter");
  