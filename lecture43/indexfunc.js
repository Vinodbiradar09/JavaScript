console.log("functions ka deep gyaan");
// we will study about functions in Javascript 

// functions decleration

function addition ( A , B){
    let sum = A + B;
    return sum;

}
console.log(addition(5,5));

function additions( a , b) {
    let sums = a + b;
    console.log("sum is :", sums);
    
}

additions(7,7);
// function inside a function 

function fun ( m , n){
    function funs(s,n){
        let f = s * n;
        console.log( "multipications is ",f);
    }
    let f1 = m / n;
     console.log("division is :",f1);

     funs(m,n);

}

let allfun = fun(2,2);

// anothere function inside function
function newyear (ab , ba){
    console.log("happy new year Js");

    const dev = typeof(newyear);

    function years ( sa , vb){
        let sumOfYears = `${sa} "hates" ${vb}`;
        const dev1 = typeof(years);
         return {sumOfYears,dev1};
        //  we cant return multiple values more than one return is not allowed so we returned it in objects 
         

    }
    console.log("inner function:", years("shambavi" , "Vinond"));
    
    let sumofadd = ab + ba;
    return {sumofadd, dev};
}

console.log("outer function:", newyear(10 , 10));

// objects 
// let obj = {
//     name:"vinod",
//     lastname:"biradar",
//     age:20

// };

// console.log("printing objects :", obj);

function sumMultipication( mul1 , mul2){
    const multy = mul1 * mul2;
    return multy;
    let a = 33;
    let b= 44;
    let sum = a + b;
    console.log(sum);
    // after return keyword what ever we write is unreachable code it will not execute 
}

let newmulty = sumMultipication(5,5);
console.log("multiplication:", newmulty);
// note here mul1 , mul2 are the parameters and 5,5 are arguments 

// Does Passing Arguments Create a Copy or Use the Original Value?
// 1. Primitive Types (e.g., string, number, boolean, etc.) , a copy of value is passed in primitives datatypes 

function passing ( x){
    x= x +10;
    console.log("creates a copy:",x);
}

let xx = 10;
passing(xx);
console.log("original value:", xx); 
// It depends on the data type being passed:
// 1. Primitive Types (e.g., string, number, boolean, etc.)
// Arguments passed to parameters are copied into the parameters.
// Any modification inside the function does not affect the original value.
// it is like call by value first we declare variable xx =10; and we function call 10 argument is passed to the function parameter which creates a copy of 10 value in parameter when change the parameter value the copy of value is changed not the original value is changed when we print the copy parameter value it changes to 20 and when we print original value it is still 10

// 2. Reference Types (e.g., objects, arrays)
// Arguments pass a reference to the original object or array (not a copy).
// Any changes made to the object or array inside the function affect the original value.
// Example:

function referencepassing( arr){
   arr.push(20);
 console.log("references passing",arr);
}
let arrs = [1,2,3];
referencepassing(arrs);
console.log("original value for references:", arrs);
// here when we create a new arrs = [1,2,3] and this array is passed to the function call when we pass the argument to function parameter it doesnt create any copies becoz arrays are references types original reference is passed not the copy when we change the value of array by pushing 20 at last it changes in original value 

// function decleration 
// Key Features:
// Hoisting:

// Function declarations are hoisted to the top of their scope. 
// This means they can be called before they are defined in the code.

 declerationdiff("Love", "babbar");
function declerationdiff ( str1 , str2){
     let newstrs = `${str1} ${str2}`;
     console.log("differention between function decleration:", newstrs);
}
// this is function decleration it can be called before it is defining we host our function and call the function before defining it 

// now we will see about function expression
// here we use variables to assign the function instead of using function name , we can use function name also 
// example ,, we use var , let and const variable decleration best practice is use to const becoz it cant be reassign , and redefine and redeclare 
// Function Expression:
// A function expression defines a function as part of an expression, typically by assigning it to a variable. It's not hoisted, so it must be defined before it's called.
// Not hoisted; must be defined first,Available only after definition
// Hoisting: Function expressions are not hoisted. You must define the function before calling it.
// and also variable is used and best practice is to use const ,, we can use let and var also


const multipications = function (a , b){
    let answer = a * b;
    return answer;
}
 console.log("function expression:", multipications(4,4));

//  here we use variable and function is assigned to that variable , while calling that function we call that variable 

const expressionpassing = function( nums){
     nums = nums + 30;
     return nums;
}
let newnums = 20;
console.log("copy passing in function expression:", expressionpassing(20));
console.log("original value:", newnums);

const expressionstrings = function( names ){
       let newnames = `hello ${names}`;
       return newnames;
}

console.log ("expression strings:",expressionstrings("veeresh"));

const expressionMultiplication = function( aa , bb){
    let multipleanswer = aa * bb;
    return multipleanswer;
}
console.log("expression multiplication:", expressionMultiplication(10,10));

const expressionsquare = function (as , bs){
    let newsquare = as ** bs;
    return newsquare;
}
console.log("expression", expressionsquare(5, 4));


// now we will see about arrow function
// Introduced in ES6, arrow functions provide a concise syntax for writing functions, especially for short, anonymous functions.
// arrow function , here we are using => instead of writing function 
// example
// here we just used arrow and two parameters these all are assigned in a const variable 

const arrow = (name) =>{
  let newarrow = `hello ${name}`;
  return newarrow;
}

console.log("using arroe function:", arrow("vinod"));

const arrowAddition = (number1 , number2) =>{
      let newaddition = number1 + number2;
      return newaddition;
}

console.log("addition using arrow functions :", arrowAddition(90,90));

// rest parameters in js 
// const restparameters = ( firstname , ...rest) => {
//     let restvar = `${firstname} `;
//     let reduceadd = rest.reduce();
//     return {restvar , reduceadd};
// }

// console.log('using rest parameters:', restparameters("vinod", 2,4,6,8,9,10));
let acc= 0; 
let restans1 =0;
const restparameters = (...newnumbers) =>{
     for (let i = 0; i<4 ; i++){
        let restans = acc + newnumbers[i];
        console.log("rest answers :" , restans);
        
     }

     for (let m = 0 ; m<4 ; m++){
         restans1 = restans1 + newnumbers[m];
         
    
     }
     console.log("rest answer 2nd:", restans1);
   
  
}

restparameters(1,2,3,4);

// checking rest parameters are create copy of parameters or passes  original  value

const restvalue = (...restval) =>{
       restval.push(99);
       return restval;
}
let newsrest = [12,13,14];
console.log("checking rest parameters is call by value or reference", restvalue(...newsrest));

console.log("original value:",newsrest);















// function passingObjects ( objects){
//   let objs ={
//     Na : "veeresh",
//     ag : 44,
//   };
//   console.log(objs);
// }

// let object ={
//    Namw: "vinod",
//    age:33,
// };
// passingObjects(object);

// console.log(object); hold on 





