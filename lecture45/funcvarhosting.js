console.log("function and variable hosting in js:");
// function solveaddition (a,b){
//     return a + b;
// } this full function decleration and defition is moved to top so we can call it before it is declared 
// we will discuss about function and variable hositing 
// function hosting it means moving the function decleration to the top of the scope , function decleration fully lifts it function decleration and function definition ,, function decleration are hoisted to the top of their scope before the code is executed 
// what it means 
// function decleration is fully hoisted , it means including function decleration and function definition it is fully hoisted to the top of the scope ,
// as a result we can call the function before you write its decleration code 
// example using function decleration

console.log("function hositing:",solveaddition(5,5)); 
// now the above line function hoisting using function decleration , we can function before it is declared 
// now we will understand how it work , when create function decleration in js along with function decleration and function definition it moves to the top of the scope before compling 
function solveaddition (a,b){
    return a + b;
}
// console.log("function hositing:",solveaddition(5,5));  now this is normal function call , called after function decleration and definition
// anothere example 
let answer = getfruits("banana");
console.log("function ka hostiong:", answer);
// so as usual we can function call before it is declared and defined 

function getfruits (fruitname){
 return `${fruitname} is tasty`;
}
// let answer = getfruits("banana");
// console.log("function ka hostiong:", answer); normal function call 

// using function expression we will see 
// console.log("function hosting using function expression:", multiple(5,5)); when we function call before decleration and definition it throws referenceerror becoz function expression are not hosited ,
const multiple = function(a,b){
    return a * b;
}
// console.log("function hosting using function expression:", multiple(5,5)); normal function call

// using arrow function 
// console.log("function hositing using arrow function:", day("wednesday")); in arrow function hoisting is not available
const day = (dayname) =>{
  return `${dayname} is my fav day and lucky day`;
}
// console.log("function hositing using arrow function:", day("wednesday")); normal function call

// variable hoisting 
// using var keyword 
// var decleration are hoisted to the top of global scope , note;- only decleration is hoisted not the initialization , it means variable is exist  but its initialization is undefined until the assignment is executed 
console.log("var hoisting:", age); 
// if we print the variable before decleration it gives undefined becoz only variable decleration is hoisted not the intialization 
var age = 20;
// console.log("var hoisting:", age); normal log 

console.log(message);  // Outputs: undefined (not an error!)
var message = "Hello, world!";
console.log(message);  // Outputs: "Hello, world!"
// explaination
// durning hoisting the javascript hoist or moves the variable to the top scope (var message) but not assignment is moved or hoisted, so when we first console or print it gives undefined , the message variable exist but not assigned 

// using let and const keyword 

// let and const declarations are also hoisted, but they are not initialized.
// They are placed in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration is encountered.
// Accessing them before their declaration results in a ReferenceError.

// console.log(greeting);  // ReferenceError: Cannot access 'greeting' before initialization
let greeting = "lets go!";
console.log(greeting);

// console.log(sam);  // ReferenceError: Cannot access 'greeting' before initialization
const sam = "javascript is important";
console.log(sam); 

// Explanation:

// Although let greeting is hoisted, you cannot use it until the execution reaches the actual line of code where it is declared.
// This prevents accidental usage of the variable before it’s defined.

// now we will discuss about function call stack 
// stack is a data structure it works on the basis of last in first out manner 
// when we create or decleare a function , its definition(the code and properties) are stored in heap it means actual data of the function is stored in heap 
// reference to function or a heap : when u assign it to a variable , that variable holds a reference for that stored data in heap . this reference or a variable is stored in the stack 
// the call stack : when a function is called a stack frame is created |_| , the stack frame includes the details of the 1.1. reference to the functions code which is stored in heap   ,2. local variables and parameters the variables which are declared in the function call and parameters that are passed 3. return address information of the where to function resume and when to end the function 

// 3. How They Work Together
// Function Definition:
// Stored in the heap as a function object.

// Reference to the Function:
// Stored in a variable on the stack (or as part of an object’s properties).

// Function Call (Execution Context):
// When you call a function, the JavaScript engine creates an execution context (stack frame) and pushes it onto the call stack. This frame holds information like local variables and parameters. When the function finishes executing, its frame is popped off the call stack.

// how call stack works 
// 1.when our code calls the function it is pushed in the call stack , 2. then javascript executes that function if that function contains anothere function call , that new function is pushed   , if the new function contains anothere function call , second new function is pushed in stack call . now the second new function gets executes and returns the function resume to the new function call (the second new call is removed from the stack) now the new function call is executed and it returns function resume to last function in the stack , now the last function call is executed and popped from the stack 
// example 

function firstfunc (value){
   console.log("first function:", value);
   secondfunc("karma");
}
function secondfunc(val){
    console.log("second function:",val );
    thirdfunc("Bharg");
}
function thirdfunc(elem){
    console.log("third function:", elem);
}

firstfunc("vinod");

// anothere example 

function sayhi (mes){
    
    console.log(mes);
    sayhello("good afternoon");
}

function sayhello(mes2){
    console.log(mes2);
    console.log("good evening");
    
}

sayhi("good morining");

// anothere example 
function greet() {
    console.log("Hello");
    sayGoodbye();
  }
  
  function sayGoodbye() {
    console.log("Goodbye");
  }
  
  greet();

//   Step-by-Step:
//   Starting Point:
//   The global context is loaded, and the call stack is initially empty.
  
//   Calling greet():
//   When greet() is called, it's pushed onto the call stack.
  
//   Call Stack: [greet]
//   Inside greet():
//   The first statement in greet() logs "Hello". Then greet() calls sayGoodbye().
  
//   Call Stack: [greet, sayGoodbye]
//   Inside sayGoodbye():
//   It logs "Goodbye" and then finishes.
  
//   Pop sayGoodbye:
//   The call stack goes back to [greet].
//   Returning to greet():
//   After sayGoodbye() finishes, greet() also finishes.
  
//   Pop greet:
//   The call stack becomes empty.  




