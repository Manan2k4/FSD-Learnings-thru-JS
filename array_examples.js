console.log("Array from a Str.");
let dept = Array.from('Computer Sci. & Engg.');
console.log(dept);
console.log('---------------------------');

console.log('Array from a set');
const set = new Set(['CSE', 'CE', 'IT', 'CSE']);
console.log(Array.from(set));
console.log('---------------------------');

console.log("Array from a Map")
const map = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(map));
console.log('---------------------------');

const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values()));
console.log((Array.from(mapper.keys())));

console.log("Array from a Array from an Array-like object");
function f1() {
    return console.log(Array.from(arguments));
}
f1(1, 2, 3, 4);

console.log('---------------------------');

console.log('Using arrow functions and Array.from(');
// Using an arrow function as the map function to manipulate the elements
console.log((Array.from([1, 2, 3], (x) => x * x)));
console.log('---------------------------');