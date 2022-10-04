let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

//-------------

let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined

//---------
//undefined. Este tipo também representa “ausência de valor”
//enquanto null é um valor atribuído a uma variável que existe e foi iniciada,

console.log(null == undefined); // true
console.log(null === undefined); // false