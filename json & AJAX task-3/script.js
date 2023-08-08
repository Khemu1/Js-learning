const request = new XMLHttpRequest();
request.open("GET", "assets/js/test.json", true);
let div = document.createElement("div");
div.id = "data";
document.body.appendChild(div);
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const mainData = JSON.parse(request.responseText);
        mainData.forEach((element) => {
            let cont = document.createElement("div");
            cont.innerHTML = `
                <div>
                    <h2>${element.title}</h2>
                    <p>${element.body}</p>
                    <p>Author: ${element.author}</p>
                    <p>Category: ${element.category}</p>
                </div>
            <br>`;
            div.appendChild(cont);
        });
    }
};

request.send();
