// now we will discuss bout event loop in js 
// now we will discuss about synchronous code and asynchronous code 
// synchronus code:- synchronus code is a code when flow of execution comes and at a same time the code executes is called synchronus code 
// Synchronous code in JavaScript means that the code is executed line by line, one after another, in the order that it appears. Each operation must complete before the next one starts. This is the default way that JavaScript code runs.

// example 
console.log("hi");
console.log("love");
console.log("babbar");
// here each line executes one after anothere , in synchronus code when the flow of execution comes and the line of code is executed is called synchronus code 


// now we will discuss about Asynchronous code 
// asynchronous code :- code is a code that doesnt run at specific time during flow of execution 
// it means Asynchronous code is designed to start an operation and then move on to the next task without waiting for the operation to complete immediately. Instead, when the operation finishes, it notifies your program (using a callback, promise, or async/await) so you can handle the result.
// asynchronous code means it performs on timer the code can be runned after the timer , suppose the timer is 5secs the asyn code can run after 5sec , or 20secs , or before 5secs there is no fixed time to run the code 


console.log("hi coders");
function saymyname (){
    console.log("love babbar");

}

setTimeout(saymyname,5000);

console.log("hello coders");
// hi coders
// hello coders
// love babbar this is the output here first sync code is runned after that there is a async code , so the async code doesnt executes imediately here blocking is avoided the next line code is runned after that async code is executed 

// why async code is needed 
// async code prevents the freezing of the web pages , suppose you want to fetch the data now you dont want to wait for responding other contents of the webpage so we write the fetching data code in async code so it doesnt block the next content whenever the data is fetched it executes at the end 

// now we will discuss about blocking 

function hellojee (){
    console.log("async code ka function:");
}

console.log("start");
setTimeout(hellojee,3000);

console.log("end");

// here blocking means , our flow of execution starts at line 41 clg("start") , now here is async code now it waits for async to fetch the function the below sync code clg("end") is blocked here due to the async code there is a method called event loop in js which helps to handle the async code separately 

// now we will discuss about setTimeOut function in js ,, settimeout func is a built-in  function in JavaScript is used to schedule a piece of code (a function or a block of code) to run after a specified delay. It’s one of the primary ways to create asynchronous behavior in JavaScript 
// settimeout function is used for handling the async code in js it is used to execute the block of code after the timeout , 

// setTimeout(callbackFunction, delay, [arg1, arg2, ]); syntax here we have to specify the function for async code and delay for that and some arguments if required 

// How Does setTimeout() Work?
// Asynchronous Behavior:
// When setTimeout() is called, it schedules the provided function to run after the delay and then immediately returns. It doesn’t pause the execution of your code.

// Non-blocking:
// The rest of your code continues to run while the timer counts down. Once the timer expires, the callback is placed in the task queue to be executed when the call stack is clear.

// passing arguments in settimeout 

function greet(name){
    console.log(`${name} biradar`);
}

setTimeout(greet,5000,"vinod");
// here we have passed the vinod as argument for the function 

// now we will dissuss about event loop it consists of there types 
// 1.call stack 2.browser 3.callback queue or task queue 
// call stack means , it is the stack in which it contains the entry of the function and other lines of code when this function or line of code is executed the the entry is removed from the call stack 
// event loop example 
function eventloop() {
    console.log("Bharg is best producer");
}
console.log("starting the code here:");
setTimeout(eventloop,3000);
console.log("code ends here");

// now we will discuss how this code is executed 
// console.log("starting the code here:"); here this line of code in entered in call stack and this line of code is executed when it is executed it removes from the call stack , now the settimeout async code it entered in the callstack when async code is entered it handovers to the browser becoz async doesnt want to make blocking of next line codes when it is handovered it is removed from callstack now the next line of code console.log("code ends here"); makes entries in the callstack and it is executed it removes from the callstack makesure there a timer for that async code now the browser handover the async code to the task queue here event loop occurs the task queus handovers or transfers the async code to the callstack if it is empty if it is empty it makes the entry of the async code now the async code is executed without blocking the other lines of code 

// this is how async code is handled in js using event loop , sync code makes entries in call stack executes the sync code and removes from the callstack now async code makes entry in the call stack the call stack handovers the async code to the browser and removes entry from it now again sync code makes entry in call stack and it is executed and removed from the call stack now when timer is over the browser handovers the async code to task queue here event loop is taken place if the call stack is empty then the async code is handed to the call stack only if the call stack is empty the async code is executed and reomves the entry from the call stack 
