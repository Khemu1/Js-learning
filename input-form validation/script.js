let form = document.querySelector("#form");
let input = document.querySelector("#input");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let inside = input.value;
    let wordsletters = /(\w|\d)?!^(\w|\d)/i;
    if (wordsletters.test(inside)) {
        console.log(wordsletters.test(inside));
        window.alert("passed");
    } else {
        console.log(wordsletters.test(inside));
        window.alert("no");
    }
});
