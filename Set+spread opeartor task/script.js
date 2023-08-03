let theNumber = 100020003000;
let res = [...new Set(theNumber.toString())].sort().splice(1).join("");
console.log(Number(res));
// Needed Output
// 123
