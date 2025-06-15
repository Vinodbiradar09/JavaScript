var os = 40;

function newfunc(abc , acb){
    var osi= 10;
    os = abc + acb;
    console.log(os);
    console.log(osi);
}
// console.log("outside ", osi);
console.log("outside :", os);

newfunc(10,10);

var s = "love";
{
    var  si = "babbar";
    console.log("blocked scope:", s);
    console.log("block scope :", si);

}
console.log("blocked scope:", s);
    console.log("block scope :", si); 
    // here si is accsible becoz it is not blocked scope 

    // reassignment 
    s = 90;
    console.log("reassigment:",s);
    // redefintion 
    var s = "central";
    console.log("redeine:", s);

    // let 
let a = 10;
const newfun = ( a ,b) => {
   let newvar = a -b;
   console.log( "answer is:",newvar);
}
// console.log("error throws becoz of block scope:", newvar);
newfun(10,5);

// it is dynamically typed language 
// DYNAMICALLY TYPED lang it means in a variable we can assign different types of language such as numbers , strings (sequence of characters ) , boolean(true/false) null;
let dyntype = "it is dynamically type lang";
dyntype = 20;
dyntype = true;
dyntype = null;
console.log("it is dynamic:", dyntype);
// it will print null when dyntype is consoled becoz at last we assigned null 

// we can reassign but cant redefine or redeclare 
let reas = 10;
reas = "javascript ";
console.log("reassign is possible but not redefine:", reas);

// let reas = "not possible";

// it is blocked scope 
let news = 11;
if (news >=5){
    let am = 111;
    console.log(news);
    console.log(am);

}
console.log(news);
// console.log(am); throws error becoz it is not blocked scope 

let n = "11";
let m = 12;
console.log(n+m);
// in java script if one operand is string and other is numeric it converts numeric operand to string becoz now it produce string as output 
// if i want to add 11 + 12 =23 now we have to convert it to number using parseInt or number functions 
 let T = parseInt(n);
 console.log("provides output as a string ",n+m);
 console.log("prints addition",T+m);


 const w = "it is constant";
//  const w = "not possible of redefination";
//    w = "not possible for reassignment"; reassignment is also not available 
   console.log(w);


//    console.log("without declaring we are printing:", x);
// Temporal Dead Zone (TDZ): A const variable is not accessible until its declaration is executed, preventing premature access.
   const x = 22;
   console.log(x);

//  datatypes in javascript there are two types of datatypes in java script 
// 1.primitive datatype ,, 2. reference datatype or non primtive datatypes 
// primitive datatype :- immutable ,stored directly in memory 
// refernce dataype:- mutable , stores a reference in memory 

// primitive datatypes 
// JavaScript has 7 primitive types:

// undefined, null , boolean , string , symbol (ES6+), bigint (ES2020+)
// numbers 
let num = 78;
console.log("number:", typeof(num));

let num1 = 3.14;
console.log("floating number",typeof(num1));

let num2 = Infinity;
console.log("infinity:", num2);

let num3 = 10;
 let ans = console.log(num3 / "number");
 console.log( " it is",typeof(ans));
// undefined 
let num4;
console.log("undefined if we dont assign:", num4);
// null 
let num5 = null;
console.log("it is an error in js so the reason it shows an object ",   typeof(num5));

// represents the intentional absence of any value.
// Different from undefined (which means "not assigned").
// The typeof null mistakenly returns "object" due to a bug in JavaScript.
// Example:

// javascript
// Copy
// Edit
// let emptyValue = null;
// console.log(typeof emptyValue); // "object" (historical bug)

// boolean true or false 
let bool = true ;
console.log(typeof(bool));

let res = 20 < 30;
console.log(typeof(res));

if (10 > 5){
    console.log("true");
}

// strings 

let str = "hello world";
str = "namaste duniya";
console.log(str);

let str2 = "rawal";
console.log(typeof(str2));

// symbols in js 
// creation of symbol in js 
const newsymbol = Symbol("description");
// we should use symbol keyword and description for that
const newsym = Symbol(99);
const newsym2 = Symbol(99);
console.log(newsym === newsym2);
// even data or description is same but output is false and symols are meant to be unique even description is same but result will be false 

const sym1 =  Symbol("Barg");
const sym2 = Symbol("Barg");

console.log("symbols are not unique:", sym1===sym2);

// why symbols are used symbols are used for unique ness in objects 
// example 

const obj ={
    name : "vinod",
    age : 19
};

obj.age = 90;
// age is overwritten easily 

const newIdSym = Symbol("id");
const newIdsym2= Symbol("id");
obj[newIdSym] = "user-349";
obj[newIdsym2] = 349;

console.log(obj[newIdSym]);
console.log(obj[newIdsym2]);
// accessing the objects 
console.log(obj.name);
console.log(obj["name"]);
console.log(obj.age); 
// it will provide output as 90 


// this is about primitive datatypes in js 









