function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}

function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}
let set1 = new Set(genNumbers());
let set2 = new Set(genLetters());

function* genAll() {
    yield* set1;
    yield* set2;
}
let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

// let set = new Set([1, 23, 4, 4, 5, 6]);

// console.log(set.values());
