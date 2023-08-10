// making the function thta takse the link
const getData = (link) => {
    //returning the promise
    return new Promise((fullfill, reject) => {
        // making the XMLHttpRequest
        let myReq = new XMLHttpRequest();
        // making an onload function to check the status & readyState
        myReq.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                fullfill(JSON.parse(myReq.responseText));
            } else {
                reject(Error(`Wrong link`));
            }
        };
        myReq.open("GET", link);
        myReq.send();
    });
};

getData("https://api.github.com/users/Khemu1/repos")
    .then((res) => {
        res.length = 2;
        return res;
    })
    .then((res) => {
        console.log(res[1].name);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => console.log(`Opeartion Is Done`));
