// variables : its is a named memory locations ,, its is used for naming the memmory location becoz its easy , suppose if we want store a data we use variables..
// there are three types of variables in javascript 1. var ,, 2. let ,, 3.const ,, 
// syntax: var age = 12; ,, ; let age=33; ,let name="babbar" ,, const marks=98;
// let age=33;  here age is the variable name and the value is or data is 33 which is stored in some memmory location and we named it age,,
// now we will discuss about var();
// Variables declared with var are function-scoped or globally-scoped, but not block-scoped.
// this means if the variable is created in function we can acess that variable in that function only becoz it is funcion scoped   ex:-
// here we have created a function in that function one variable age is declared we cam acess that age variable within the parenthesis or curly braces 

// var age = 12; here we are declaring variable globally 



console.log("lecture 40>>");
// now we will discuss about variables in Java Script 

 var age = 24;
//  here age variable is declared is globally 

 function solve (){
    var name = "vinod"; 
    // here name variable is declared in function scope only 

    console.log(age);
    // age is accessed here 
    console.log(name);
    //  name is saccessed in function 


 }
//  if we try to acess it outside the function see what will happen 
console.log(age);
// here age provides output becoz it is globally decleraed 
// console.log(name);
// here name will throw the error becoz it is function scoped 
 solve();

 var example = 20;
 var example = 30;
 var uses = " vinod";
 var uses = " veeresh ";
//  reassignment and redecleration is also possible 
console.log(example);
// it prints 30
console.log(uses);
//  it prints veeresh
// Reassignment and Redefinition using var ,, Reassignment:- it means assign another time diffrent value ,,  
// Redefinition :- it means redefining the same variable another time
// examples:
// Re assignment using var
var x = 10;
console.log(x); 
// output is 10 

x = "babbar";
console.log(x);
// output is babbar

// redefnition using var
var y = 20;
console.log(y);
// output is 20

var y="love";
console.log(y);
// output is love
{
    var z = 400;
}
console.log(z);
// var is not blocked scope , it is global scoped , function scoped and not blocked scoped 

// now we will discuss about let 

// now we wil see about let variable 
// let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined.
// Variables declared with let can be reassigned, just like those declared with var, but they cannot be redeclared within the same block scope. This helps prevent accidental redeclaration of variables and can aid in writing more predictable and maintainable code.
{
    let v = 44;
    console.log(v);
    // here we are accessing it in block scope 
}
// console.log(v);  here we accessing it outsidde the blockscope so it will throw an error 

let nam = 7;
if(true){
    let sum = 9;
    console.log(nam);
    console.log(sum);

}
console.log(nam);
// console.log(sum); i tthrows error becoz it is blocked scope 
// Reassignment and Redefinition using let ,, Reassignment:- it means assign another time diffrent value
// Redefinition :- it means redefining the same variable another time
// example 
// Variables declared with let can be reassigned
let w = 77;
console.log(w);
// output 77;

w = "babbr";
console.log(w);
// output babbr;
//  here reassignment is possible we can reassign the let variable 

// redefinition here redefnition is not allowed it is not possible within the same block scope
// example
let t=44;
console.log(t); 
// let t="akshata " here it throws an error becoz we used it globaly 

if (true){
    let t = "akshata";
     // here doesnt throw error becoz let t variable is created in the if condition under brackets and we acess it in this bracket only
    console.log(t);
     // here it prints the t variable becoz it is created in block but we cant use it outside 
}

console.log(t);
// DYNAMICALLY TYPED lang it means in a variable we can assign different types of language such as numbers , strings (sequence of characters ) , boolean(true/false) null;

// example
let ex = 45;
ex = "love babbar";
ex = true;
ex = null;

console.log(ex);
// it will print null when ex is consoled becoz at last we assigned null 
// it is dynamically typed lang let is dynamically typed lang

// now we will see about const 
// now we will see about const variable which is not reassignable and not re definable it is constant we cant change the value and we cant declare another time 
// In JavaScript, the const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized. This means that once a value is assigned to a constant using const, it cannot be changed or reassigned throughout the execution of the script.
// ex
const sm=71;
console.log(sm);
// output 7

// sm=17; 
// console.log(sm);  throws error not but we can see result 

// const sm =" babbar"; cant be redeclared error

// variable naming convention
// 1. we can use number,underscore,$ at starting
// 2. no space 
// 3. camel case should be followed ( ageOfStudent);
// 4. dont use reserved keywords name as variable names ex;- float, function, null





