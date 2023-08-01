let cont = document.createElement("div");
cont.innerHTML = "10";
cont.classList.add("cont");
document.body.appendChild(cont);

function counting() {
    let currentValue = parseInt(cont.innerHTML);
    currentValue -= 1;
    cont.innerHTML = currentValue.toString();

    if (currentValue === 0) {
        window.open("https://elzero.org/", "_blank");
        clearInterval(e);
    }
}

let e = setInterval(counting, 1000);
