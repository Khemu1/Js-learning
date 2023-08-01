setTimeout(function createEs() {
    let cont = document.createElement("div");
    cont.innerHTML =
        "<div class= head><h1>Welcome</h1></div> <div class= words> Welcome to elzero web school</div> <input type=button value=x class=close />";
    cont.classList.add("cont");
    document.body.appendChild(cont);
    let button = document.querySelector("input");
    cont.appendChild(button);

    button.addEventListener("click", function () {
        cont.style.display = "none";
    });
}, 5000);
