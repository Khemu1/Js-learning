let userName = document.querySelector("[name=userName]");
let userAge = document.querySelector("[name=userAge]");
// console.log(Name);

document.links[0].onmouseenter = function (event) {
    console.log(`Clicked`);
    event.preventDefault();
};
document.forms[0].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

    if (userName !== "" && userName.length <= 10) {
        userValid = true;
    }
    if (userAge.value !== "") {
        userAge = true;
    }
    if (userValid === false || ageValid === false) {
        e.preventDefault();
    }
};
