console.log("we will discuss about tempororal deadzone and variable hositing");
// we will discuss about variable scoping  in javascript 
// variable scoping are divided in three ways 
// 1. global scoping 2.function scoping 3.block scoping


var age = 20;
let marks = 89;
const word = "Bharg";
// these above three decleration are global decleration , the deceleration is not done in any function and blocks so these are considered as the global variables 
// now these variables can be used in anywhere and everywhere , it can be used in functions , loops , if else statements and blocks 

const newfunc = () =>{
    console.log("age is" ,age);
    console.log("marks is:", marks);
    console.log("string is :", word);
}
newfunc();

for (let i =0; i<2; i++){
    console.log("age is" ,age);
    console.log("marks is:", marks);
    console.log("string is :", word);
}

// now we will discuss about function scoping 

function sayhello( a, b){
  var ages = 30;
  let mark = 44;
  const letter = "Rawal";
  console.log(ages); 
  console.log(mark); 
  console.log(letter); 
  return a + b;
}

 console.log(sayhello(4,4));
//  now the variables created inside these functions are accessible in the function only we cant access these variables outside the function , it can var , let , const anything 

// console.log(ages); 
//   console.log(mark); 
//   console.log(letter);  cannot be accessed 

// blocking scoping , in block scoping var can be accessed outside the block but let and const cant be accessed outside the block 
{
    var newage = 99;
    let newmark= 50;
    const newletter = "karma";

    console.log(newage);
    console.log(newmark);
    console.log(newletter);
}

    console.log(newage);
    // console.log(newmark);
    // console.log(newletter); 
    // only var keyword can be accessed outside the block scope , let and const cant be accessed

// now we will learn about tempororal dead zone 
// What Is the Temporal Dead Zone?
// Definition:
// The Temporal Dead Zone is the time between entering a block (like within {}) and when a variable declared with let or const is actually declared and initialized.

// Key Point:
// Even though the variable is "hoisted" (the engine is aware of its existence), it is not accessible until the declaration line is executed.


// Difference from var:
// Variables declared with var are hoisted and automatically initialized with undefined. In contrast, let and const are hoisted but are not initialized until their actual declaration is evaluated. Trying to access them beforehand leads to a ReferenceError.

{
    // using let keyword 
    // Trying to access 'x' before it's declared
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    console.log(x); // 10
  }

  {
    // using const keyword 
    // Trying to access 'y' before it's declared
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    const y = 20;
    console.log(y); // 20
  }
    