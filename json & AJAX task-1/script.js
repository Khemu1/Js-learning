const request = new XMLHttpRequest();
request.open("GET", "assets/js/test.json", true); // Replace 'your_json_file_path.json' with the actual path to your JSON file

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        console.log(data); // Print the Response in the Console
        console.log("Data Loaded"); // Print "Data Loaded" message after the Response is completely loaded
    } else {
        console.error("Error in network request:", request.statusText);
    }
};

request.onerror = function () {
    console.error("Network error occurred");
};

request.send();
