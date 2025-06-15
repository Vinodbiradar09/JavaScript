// now we will discuss about reference types in javascript 
// there are mainly three types of refrence types in js 
// 1. objects 2. arrays 3.functions 
// here we will discuss about objects only 
// first we will discuss about how primitive dataypes and reference datatypes are stored in memmory , in js there are two types of memmory allocated 
//  1. stack memory , 2.heap memory 
// Do you know? When we declare variables, the JavaScript engine assigns the memory for them on two memory locations: 'STACK' and 'HEAP', depending on their datatype.
// we will discuss about the stack memory how it is stored 
// stack :- memory is used for storing local variables and primitive datatypes such numbers , strings, null, undefined,booleans , symbols , and bigints the size of the stack memory is fixed and it is determined at complie time 
let a = "vinod";
let b = 20;
let c = true;
// these types of variables are stored in stack 
// value copying 
let n = "vinod";
console.log(n);
let m = n;
console.log(m);
n ="veeresh";
console.log(n);
console.log(m);
// output 
// vinod
// vinod
// veeresh
// vinod
// in stack the copy of value is created instead of storing the original value , in stack a copy of variable is created instead of taking existing value 


// heap :- in javascript reference dataypes are also know as objects , arrays , functions ,,, heap doent have fixed memory allocation it stores dynamically during execution it has large memory capacity then stack , hence heap memory is flexible and doesnt require fixed amount of memory , it can grow dynamically durining execution 

// the variable holds a reference (or pointer) to that object in memory.


// examples 

let obj = {
    name:"vinod",
    age:20,
};
// memory allocation in heap the data or key value pairs or the content of the object or arrays is stored and the variable obj is stored in the stack , the variable doesnt contain acutal data it only contains the refrence pointer for that stored data in the heap 
// the pointer or the refrence pointing to the heaps memory is contained in the stack 
// value copying : in reference types actual value is copied , it doesnt create an new variable , 
// example

let obj1 = {
    name:"veeresh",
    age:22
};
let obj2 = obj1;
// here only the reference is copied it doesnt create new data , only reference is copied not the actual object is copied now obj1 and obj2 points same objects in the heap ,if we change the value of obj1. it will effect obj2 becoz both points same objects in heap 
obj1.name= "Bharg";
console.log(obj1);
console.log(obj2);
