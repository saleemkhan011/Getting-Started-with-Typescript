"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let friends = ['Hamid', 'Nasir', 'Yasir', 'Abdullah'];
console.log(`Dear ${friends[0]}, You are invited to my dinner party.`);
console.log(`Dear ${friends[1]}, You are invited to my dinner party.`);
console.log(`Dear ${friends[2]}, You are invited to my dinner party.`);
console.log(`Dear ${friends[3]}, You are invited to my dinner party.`);
// Another method:
// for (let friend of friends){
//      console.log(`Dear ${friend}, You are invited to my dinner party.`);
//  }
