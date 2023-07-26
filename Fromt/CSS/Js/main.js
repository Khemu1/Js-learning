for (let i = 0; i < 10; i++) {
    let E = document.createElement("div");
    let head = document.createElement("h2");
    let des = document.createElement("p");

    let headText = document.createTextNode(`product ${i + 1}`);
    let desText = document.createTextNode(`this is the best product ${i + 1}`);

    head.appendChild(headText);
    des.appendChild(desText);

    E.appendChild(head);
    E.appendChild(des);

    document.body.appendChild(E);
}
