// console.log('Hello World');
// console.log('Hello World');
// const button = document.getElementById('submit');
// const a = document.getElementById('input1')! as HTMLInputElement;
// const b = document.getElementById('input2')! as HTMLInputElement;
// const result = document.getElementById('result');
// function add(a: number, b: number) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     result.innerText = `${add(+a.value, +b.value)}`;
// });
//! Type Annotation
// let x : number = 5
// let y = 'Hello world'
// y = x
// let z : number
// z = false
// z = 5
// z = 'Hello World'
// Data types
// let num : number[] = [1, 'string', false]
// let a: string[] = []
// let b = []
// a.push('5')
// a.push(5)
// b.push('5')
// b.push(5)
// ? Tuples sabit sayida ve sabit type sayi tutmamizi saglar ;
let myTuple;
myTuple = [13.4, false, 'Hello World'];
//? Tuple Array
let arrTuples;
arrTuples = [[1, 'Mark'], [2, 'Anthony']];
arrTuples.push([3, 'Ethan']);
console.log(0 /* Color.Red */);
console.log(100 /* Color.Green */);
console.log(105 /* Color.Blue */);
console.log(106 /* Color.Yellow */);
console.log("XS" /* Tshirt.XSmall */);
//? Mix Enum
var Mixed;
(function (Mixed) {
    Mixed[Mixed["Red"] = 0] = "Red";
    Mixed[Mixed["Green"] = 1] = "Green";
    Mixed["Blue"] = "Mavi";
    Mixed["Yellow"] = "Sari";
    Mixed[Mixed["Magenta"] = 120] = "Magenta";
    Mixed[Mixed["Brown"] = 121] = "Brown";
})(Mixed || (Mixed = {}));
