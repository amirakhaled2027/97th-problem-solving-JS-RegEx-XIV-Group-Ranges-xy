//Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.



const REGEXP = /\bblue flag\b|\bred flag\b/g;

console.log("red flag blue flag".match(REGEXP));
console.log("yellow flag red flag blue flag green flag".match(REGEXP));
console.log("pink flag red flag black flag blue flag green flag red flag".match(REGEXP));




