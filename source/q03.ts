
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



let a="saLeEm khan";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.charAt(0).toUpperCase()+a.slice(1).toLowerCase())


/* 2nd method for title case:
console.log(a.split(' ').map((a)=>{return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()}).join(' '))


3rd method for title case:
console.log(a.split(' ').map(a => a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()).join(' '))


In TypeScript and JavaScript, arrow functions can be written in two ways: with or without function keyword and curly braces. When the function body consists of a single expression, you can omit the curly braces and the return keyword.*/
