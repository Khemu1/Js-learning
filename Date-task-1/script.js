let Birth = new Date("april 21,2004");
let dateNow = new Date();
let dif = dateNow - Birth;
let years = (dif / 1000 / 60 / 60 / 24 / 365).toFixed(0);
let months = (dif / 1000 / 60 / 60 / 24 / 30).toFixed(0);
let days = (dif / 1000 / 60 / 60).toFixed(0);
let hours = (dif / 1000 / 60).toFixed(0);
let mens = (dif / 1000 / 60).toFixed(0);
let secs = (dif / 1000).toFixed(0);
console.log(years);
console.log(months);
console.log(days);
console.log(hours);
console.log(mens);
console.log(secs);