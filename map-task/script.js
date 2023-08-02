let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let mymap = new Map();
for (let key in myInfo) {
    mymap.set(key, myInfo[key]);
}
console.log(mymap);
console.log(mymap.size);
console.log(mymap.has("role"));
// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true
