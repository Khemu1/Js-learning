let cont = document.createElement("div");
cont.innerHTML = "10";
cont.classList.add("cont");
document.body.appendChild(cont);
function counting() {
    cont.innerHTML -= 1;
    if (cont.innerHTML === "0") {
        clearInterval(e);
    }
}

let e = setInterval(counting, 1000); // need an element to stop the interval
