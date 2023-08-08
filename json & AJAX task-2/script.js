const request = new XMLHttpRequest();
request.open("GET", "assets/js/test.json", true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const mainData = JSON.parse(request.responseText);
        mainData.forEach((element) => {
            element.category = "All";
        });
        console.log(mainData);
        updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
    // else {
    //     console.error("Error in network request:", request.statusText);
    // }
};

request.onerror = function () {
    console.error("Network error occurred");
};

request.send();
