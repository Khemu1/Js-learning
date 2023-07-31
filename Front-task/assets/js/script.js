// JavaScript (script.js)
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let num = document.querySelector(".input").value;
    let name1 = document.querySelector(".input1").value;
    let type = document.querySelector(".choose").value;
    let con = document.querySelector(".results");

    function Clone(name, num, type) {
        for (let i = 1; i <= num; i++) {
            let start = document.createElement(type);
            start.textContent = name;
            start.classList.add("box");
            start.setAttribute("title", "Element");
            start.setAttribute("id", `id-${i}`);
            con.append(start);
        }
    }

    Clone(name1, num, type);
});
