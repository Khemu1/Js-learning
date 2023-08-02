let font_T = document.querySelector(".main-fonts");
let font_C = document.querySelector(".colors");
let font_S = document.querySelector(".size");
let test = document.querySelector(".effect");

font_T.addEventListener("change", (e) => {
    let selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex];
    font_T.querySelectorAll("option").forEach((option) => {
        option.classList.remove("default");
    });
    selectedOption.classList.add("default");
    window.localStorage.setItem("font", selectedOption.dataset.fontType);
    test.style.fontFamily = selectedOption.dataset.fontType;
});

font_C.addEventListener("change", (e) => {
    let selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex];
    font_C.querySelectorAll("option").forEach((option) => {
        option.classList.remove("default");
    });
    selectedOption.classList.add("default");
    window.localStorage.setItem("color", selectedOption.dataset.color);
    test.style.color = selectedOption.dataset.color;
});

font_S.addEventListener("change", (e) => {
    let selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex];
    font_S.querySelectorAll("option").forEach((option) => {
        option.classList.remove("default");
    });
    selectedOption.classList.add("default");
    window.localStorage.setItem("size", selectedOption.dataset.fontSize);
    test.style.fontSize = selectedOption.dataset.fontSize;
});
