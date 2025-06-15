console.log("now we will discuss about error handling in js");
// what is error handling :- error occurs when our code breaks the normal and error occurs is called error , handlig this error is called error handling 
// error handling is a process used to manage and respond the errors that occur durning the code execution Proper error handling helps prevent your program from crashing unexpectedly and makes it easier to debug issues.
// why error handling ?
// Prevent Crashes:
// Instead of the entire application stopping when an error occurs, you can catch the error and handle it gracefully.

// Debugging:
// It provides useful information about what went wrong, helping you to locate and fix issues in your code.

// User Experience:
// Proper error handling can show meaningful messages to users rather than a cryptic error or a blank screen.

// there are two types of error in js 
// 1. compile time error , this is the error occurs when the code is not parsed to compling such as syntax error these occurs without running the code 
//  console.log(1; this is the complie time error here mistake is syntax 
// 2.run time error , this type of error occurs when the code is completely parsed 

// console.log(x); here we havent declared the x it throws an reference error after parsing the code , this is called run-time error 

// now we will discuss about error handling , error har system mai occur hote hai bade se bade company ya software pe bhi error aate hai , hum error ko kaise handle karte hai whoo badi baat hai , how gracefully we handle the error is important 

// the try-catch-finally structure 

try{
    // it code that might throws an error is defined here 
}
catch(error){
//    if the error occurs for that line of code ,, these catch block code needs to be executed
}
finally{
    // if error occurs or not finally block line codes which execute , even error occurs or not 
}

// how it works 
// 1.try block: contains the code that migt throw error , if an error occurs in try block remaning line of code below the error is skipped 
// 2.catch block: the catch block runs if the error occurs in the try block , the error is catched and thromn as a parameter (error or e) in catch block parameter , here there is the lines of code that needs to be executed if the try block contains an error 
// 3.finally block: finally block executes even if error occurs or not , these line of code executes , even error occurs or not, Useful for cleanup actions (like closing connections, resetting variables, etc.).

// note:- when error occurs in try block the error is catched by the catch block , if there is no error in try block then all the lines are executed in try block and the catch block is skipped becoz there is no  error occured in try block 

// example 

try{
    // these are the lines of code that may get errors 
    console.log("im inside the try block:");
    console.log("this is the error line:", x);
    // here x is undeclared and we are printing that , ehich throws an error , below the lines are not executed when we get an error 
    console.log("these lines are never executed:");
}
catch (error){
// here need to pass the parameter becoz the error occured in try block is catched here in the parameter , now the parameter contains the error 

// define karte hai ki ham error ke sath kya karna chahte hai 
// retry logic , callback mechanism 
   console.log("now im inside the catch block:");
   console.log("now we are printing the error :", error);
//    now we are printing the error : ReferenceError: x is not defined
//     at Object.<anonymous> (/Users/vinodbiradar/Desktop/javaScript/lecture50/errorhandling.js:45:44)
//     at Module._compile (node:internal/modules/cjs/loader:1546:14)
//     at Object..js (node:internal/modules/cjs/loader:1689:10)
//     at Module.load (node:internal/modules/cjs/loader:1318:32)
//     at Function._load (node:internal/modules/cjs/loader:1128:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:315:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49 
// it is the error 
}
finally{
    // finally block runs everytime even error is occured or not 
    console.log("as i am finally block i run everytime even error occurs or not:");
}

// anothere example 



try{
  console.log("i am inside try block:");
  let result = riskyoperation(2,2);
  console.log(result);
  console.log("these line will never execute:");
}
catch (e){
   console.log("an error occured:", e.message);
}
finally{
    console.log("i will run everytime");
}


// const riskyoperation = (val1 , val2) =>{
//     x = val1 * val2;
//     return x;
// }

// throwing errors :- we can  create your custom error and throw them using throw statement or keywoord , here, we are creating our custom error and throwing them 
// example 
// throw new Error here we are creating a new object 

function divide (a,b){
   if(b==0){
    throw new Error("division by zero is not possible");
    
   }
   return a / b;
   
}

try {
   let result = divide(10,0);
   console.log("result is :", result);
}
catch (err){
    console.log("caught an error:", err.message);
    console.log("caught an error:", err.name);
    // console.log("caught an error:", err.stack);

}
finally{
    console.log("i will run everytime");
}
// output 
// caught an error: division by zero is not possible
// i will run everytime

// 4. Error Objects
// When you throw or catch an error, JavaScript creates an error object. This object usually has properties like:

// message:
// A human-readable description of the error.
// name:
// The type of error (e.g., Error, TypeError, ReferenceError).
// stack:
// A stack trace that shows the function calls leading up to the error (useful for debugging).


// lets create custom error 

try{
    console.log(x);
}
catch(e){
    throw new Error(" bhai phele declare karo , phir print karo");
    
}

 let newerror = 100;
 if(newerror==100){
    throw new Error("invalid JSON");
 }

//  this is all about errorhandling  in js 