let links = document.querySelectorAll("a");
// let find = function (links) {
//     // Pass the links array as an argument to the function
//     for (let i = 0; i < links.length; i++) {
//         if (
//             links[i].classList.contains("open") &&
//             links[i].textContent === "Elzero"
//         ) {
//             // Use textContent instead of value
//             console.log(`found the links`);
//             console.log(`Opening Stand By`);
//             window.open(links[i].herf, "_blank");
//             break; // Exit the loop after opening the first matching link
//         }
//     }
// };

// find(links); // Call the function and pass the links array as an argument

links.forEach((link) => {
    // console.log(link);
    if (link.classList.contains("open") && link.textContent === "Elzero") {
        // Use textContent instead of value
        console.log(`found the links`);
        console.log(`Opening Stand By`);
        window.location.href = link.herf;
        return; // Exit the loop after opening the first matching link
    }
});
