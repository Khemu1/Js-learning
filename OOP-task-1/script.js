class Cars {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return `Car is Running now`;
    }
    stop() {
        return `Car stopped`;
    }
    info() {
        return `Name is ${this.n} And Model Is ${this.m} Price Is ${this.p}`;
    }
}
let One = new Cars("MG", 2022, 420000);
console.log(`Car One ${One.info()} `);
console.log(One.run());
console.log(One.stop());
