function createBox(start, end) {
    document.write(`<div>`);
    document.write(`<select>`);
    for (let i = start; i <= end; i++) {
        document.write(`<option value="${i}">${i}</option>`);
    }
    document.write(`</select>`);
    document.write(`</div>`);
}

createBox(2000, 2021);
