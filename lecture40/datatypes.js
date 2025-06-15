console .log("datatypes ka gyaan ");
// DATATYPES IN JAVASCript 
// there are two types of datatypes 1, primitive datatypes ,,, 2, non primitive datatypes 
// there are two types of datatypes one is primitive datatypes and second is non primitive datatypes 
// now wee will discuss about primitive datatypes 
// datatypes means int(number) , strings, boolean , null ,  undefined, bigint, symbol ,,,, in c++ we have datatyoes such as int ,float, char , arr[], string , same as javascript also has datatype

// 1. number:- 23, 44, 56,89.83, we are dealing with numbers
let number = 33;
console.log(number);
console.log(typeof(number));

let float = 99.89;
console.log(float);
console.log(typeof(float));
// char:- a, b,s,h,a,m,b,a,v,i
let letters = "A";
console.log(letters);
console.log(typeof(letters));
// string:- its sequence of characters which is noted in double qutes " babbar"
let example = "Babbar"
console.log(example);
console.log(typeof(example));
// boolean: true or false we are dealing with true or false 
let bool = true;
let bool3 = false;
console.log(bool);
console.log(typeof(bool));
console.log(bool3);
// undefined:- it means we havent defined any value or datatype to variable is called undefined datatype ex: let age; if we doesnt assign value it is called undefined datatype
let undef;
console.log(undef);
console.log(typeof(undef));
// NULL:- it stores null value ,, let abc=null; output: null  and typeof null is object 
let empty = null;
console.log(empty);
console.log(typeof(empty));
// bigtINT:- 2^ 53-1 after this exceding numbers bigint can store it .. basically it stores large numbers 
 //typeof it means which type of data is stored it shows 
//  ex:-  
 let marks=false;  
//  marks=11;  output : number;
//  marks="seedhe" output:string;
//  marks="null" output:null;
 console.log(typeof(marks));
//  it shows which type of datatype is there,,, output:boolean;

// symbols 
let sym = Symbol("uniwue");
let sym2 = Symbol("uniwue");

if ( sym === sym2){
    console.log("true");
} else {
    console.log("false");
}