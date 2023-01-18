// normal function
function add(num1: number, num2: number): number {
    return num1 + num2
}
// console.log(add(1, 2));


// arrow inline function
const sub = (num1: number, num2: number): number => num1 - num2;
// console.log(sub(1, 2));


// variable function
const mul = function (num1: number, num2: number): number {
    return num1 * num2
}
// console.log(mul(1, 2))


// functon with default/required parameter
const div = (num1: number, range: number = 100): number => num1 / range;
// console.log(div(5, 50));
// console.log(div(5));


// function with optional parameter
const perc = (num1: number, outOf: number, percent?: number) => {
    return percent ? (num1 / outOf) * percent : (num1 / outOf) * 100
}
// console.log(perc(5, 50));
// console.log(perc(1, 50, 500));


// function with rest parameter
const addAll = (num1: number, num2: number, ...otherNumbers: number[]): number => {
    return num1 + num2 + otherNumbers.reduce((item, val) => item + val, 0)
}
// console.log(addAll(1, 3, 5, 2, 4));
// let extra = [3, 4, 5];
// console.log(addAll(1, 2, ...extra));
// console.log(addAll(5, 4, ...[3, 2, 1]));


// generic function
function concatItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}
let concatNumbers = concatItems([1, 2, 3, 4, 5]);
// or
let concatStrings = concatItems<string>(['a', 'b', 'c', 'd', 'e']);
// or
let concatAny = concatItems(['Hello', 1, 2, 3]);
// console.log(concatAny);


// geeric arrow function
const joinItems = <Type>(items: Type[]): string => {
    return items.join('')
}
let joinNumbers = concatItems<number>([1, 2, 3, 4, 5]);
// or
let joinStrings = concatItems<string>(['a', 'b', 'c', 'd', 'e']);
// or
let joinAny = concatItems(['Hello', 1, 2, 3]);
// console.log(joinItems(joinAny));

