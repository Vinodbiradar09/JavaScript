// we will discuss about call backs in js 
// the callback function is a function that is passed as a argument to anothere function and it is called it is know as callback function , it is used to handle the api data and asynchronus calls 
// imagine we have a function that performs and executes some result and we need to perform something with result instead of writing the big code in same function we can write the code in anothere function and pass this function as a callback 
// A callback function is a function passed as an argument to another function. The callback is then executed later, often after a specific task (like fetching data, waiting for a timer, or handling user input). Think of it as a "call me back when you’re done" instruction.

// example 

function firstfunction (callback){
    console.log("this is love babbar");
    callback("vinod", "biradar");
}

function secondfunction(firstname , secondname){
      console.log("the full name is :", firstname + secondname);
};

firstfunction(secondfunction);

// flow of execution here firstfunction is called and we pass the argument as secondfunction ,, the flow of execution goes to the firstfunction it prints clg("this is love babbar"); after that it calls the secondfunction and passed the arguments as vinod biradar ,when the call back function is called the flow of execution goes to the second function and there are two parameters firstname and lastname , these parameters takes the arguments vinod biradar and it prints the code line 
// when we pass the function as callback we dont pass with parenthesis () we only pass the name of the function if we pass with parameters then the function will be called we only pass the reference of the function 

// now example with asynchronus 

function orderpizza(callback){
    console.log("we are orderning the pizza");
    setTimeout (()=>{
        const piz = "🍕";
        callback(piz);
    },3000);
    console.log("the pizza party is so cute");
};

function process(piza){
     console.log("what we have ordered is:", piza);
   
};

orderpizza(process);
// here this is line is executed first    console.log("we are orderning the pizza"); and then  console.log("the pizza party is so cute"); this line is executed after that the function settimeout is called it executes after three seconds 

// third example 
// A function that takes a callback and calls it after 1 second
function doSomething(callback) {
    setTimeout(() => {
      console.log("Operation complete!");
      callback(); // Call the callback function
    }, 4000);
  }
  
  // A callback function to be passed
  function afterOperation() {
    console.log("This runs after the operation.");
  }
  
  // Using the callback
  doSomething(afterOperation);

//   now we will discuss about high order functions in js 

// high order functions in js are the functions , that takes a function as a arguments or it returns a anothere function this is called high ordered functions 
// basically it takes one or more function as a arguments (ex:- callback) or it returns anothere function this is high order functions 
// When you pass a function as an argument or return a function from another function, you are using higher-order functions. This is common in many JavaScript APIs (like array methods, event handlers, and more).

// example function as a arguments 

function getdata(data, callback){
     const processdata = data.toUpperCase();
     callback(processdata);
}

function displayresult (someprocesseddata){
console.log("the processed data is:",someprocesseddata);
}
  
getdata("hello", displayresult);

// aothere example 
function function1 (callback){
    console.log("this is function one");
   setTimeout ((a,b)=>{
        const sum = a+b;
        callback(sum);
   },5000,5,5);
}

function function2(somesum) {
    console.log("the sum of first function is", somesum);
};

function1(function2);
// this is high order function which anothere function as a arguments 

// now we will see example were we return anothere function in one function 

function solveadd(num1){
    return function multiplication(num2) {
        return num1 * num2;
    }
};

const data = solveadd(3);
console.log("the solveadd answer is",data(4));

// A higher-order function that returns another function
function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = multiplier(2);  // double is now a function that multiplies a number by 2
  console.log(double(5));        // Outputs: 10

//   anothere example using map function 
const arr = [1,2,3,4];
 const doubles =arr.map((num)=>{
   const newarr = num * 2 ;
   return newarr
});

console.log("the answer using map function is:", doubles); // output is  [ 2, 4, 6, 8 ]

// anothere example 
// HOF: Wraps any function in error handling
function handleErrors(fn) {
    return function (...args) {
      try {
        return fn(...args);
      } catch (error) {
        console.log("Error caught:", error);
      }
    };
  }
  
  // Regular function
  function divide(a, b) {
    if (b === 0) throw new Error("Can't divide by zero!");
    return a / b;
  }
  
  // Wrap with error handling
  const safeDivide = handleErrors(divide);
  
  console.log(safeDivide(10, 0)); // "Error caught: Can't divide by zero!"
  

// this is all about high order function  