const getdata = async (link) => {
    try {
        let response = await fetch(link);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

(() => {
    try {
        getdata(`assets/js/test.json`)
            .then((data) => {
                const limitedData = data.slice(0, 5);

                limitedData.forEach((e) => {
                    let div = document.createElement("div");
                    div.innerHTML = `
                        <div id="${e.userId}">
                            <h3>${e.title}</h3>
                            <p>${e.description}</p>
                        </div>`;
                    document.body.appendChild(div);
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } catch (error) {
        console.error("Error:", error);
    }
})();
