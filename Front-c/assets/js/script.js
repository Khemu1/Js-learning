let E = prompt("enter your interval");

let sep = E.split("-");
let n1 = parseInt(sep[0]);
let n2 = parseInt(sep[1]);
let max = 0;
let min = 0;

if (n1 > n2) {
    max = n1;
    min = n2;
} else {
    max = n2;
    min = n1;
}
10;
let e = document.createElement("div");
e.textContent = max;
document.body.appendChild(e);
let print = (e1, e2) => {
    for (let i = e2 - 1; i >= e1; i--) {
        let n = document.createElement("div");
        n.textContent = i;
        document.body.appendChild(n);
    }
};
setInterval(() => print(min, max), 3000);
// function countdown(e) {
//     e.textContent -= 1;
// }
