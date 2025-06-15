console.log("important string here we string primitives and string objects which are non primitives ");
// in this module we discuss about strings , here we see lot of string primitives and string objects 

let n1 = "Hello";
let n2 = new String ("Hello");

console.log("type of n1 :", typeof(n1));
console.log("type of n2 :", typeof(n2));

let newstr = n1 == n2;
console.log("comparing with ==", newstr);
// returns true becoz we are comparing only values not datatype 

let newstring = n1 === n2;
console.log("comparing with ===", newstring);
// returns false becoz we are comparing both values and datatypes , here values are same but datatypes are diffrent n1 = datatype is string and n2= datatype is object 

// string primitives stores values in stack and string object stores references in stack and objects are stored in heap the reference of this heap is stored in stack 
// it contains refernces of the pointer that is stored in stack
// here we are creating an object , an object conatins key value pairs 
let obj = {
     Name : "vinod",
     Age : 20,
     Music : "seedhe maut"
};
let anotobj = obj;
// In this case:

// The object {name: "vinod", age: 20} is stored in heap memory
// The variable obj stores a reference to this heap location
// When we assign obj to anotobj, only the reference is copied, not the actual object


// we have created a obj were the  obj (object) is stored in Heap memory and the variables like obj and anotobj stores references of this objects  in stack 
// The object { name: "vinod", age: 20 , music:"seedhe maut " } is stored in the heap memory because objects are dynamically allocated.
// the variable obj stores the references of these object in stack memory, a pointer which references this objects are stored in stack memory 
// when we assign let anotobj = obj; obj to anotobj here references is assign to the anotobj now obj and anotobj stores same references for the heap object 
// Both obj and anotobj now point to the same object in the heap.

// important :- Yes, you are correct that user is a variable and not itself an object. The actual object is the data structure { age: age, name: name, address: {...} } stored in the heap memory. The user variable acts as a reference or pointer to this object.

// Detailed Explanation:
// let user is a variable:

// It resides in the stack memory and stores a reference (memory address) pointing to the object in the heap memory.
// The object itself ({ age: age, name: name, address: {...} }) is not stored in the variable user. Instead, only the reference to the object is stored in user.
// user points to an object:

// The actual object is the data structure { age: age, name: name, address: {...} }. This is dynamically created in the heap memory.


// very important code 



let strObject = new String("Hello");
// object 
let strPrimitive = "Hello";
// string primitive 

let strprimi = new String("Hello");

console.log( " compares with ==",strObject== strPrimitive);
// true 
console.log( " compares with ===",strObject=== strPrimitive);
// false
console.log("comparing same objects references:", strObject===strObject);
// true becoz boths datatypes are object and both have same references 
console.log("comparing two objects:", strPrimitive===strprimi);
// returns false becoz boths datatypes is objects but references of both objects are diffrent , here references are diffrent 
// important we can convert objects to primitive datatypes 
let stringnew = new String("CodeHelp");
let stringnew2= new String("CodeHelp");

console.log("coverting string object to primitive :", stringnew.valueOf() === stringnew2.valueOf());
// valueOf is used for converting 
console.log("coverting string object to primitive :", stringnew.toString() === stringnew2.toString());
// toString is used for also converting 

// Even different string objects with same content are equal when using valueOf()
let obj1 = new String("Hello");
let obj2 = new String("Hello");
console.log(obj1 === obj2);                    // false (different objects)
console.log(obj1.valueOf() === obj2.valueOf()); // true  (same primitive value)

// overview 
// Stack memory operations
let firstName = "John";
let lastName = firstName;    // Copy of value is created in stack
lastName = "Doe";           // Original value remains unchanged

console.log(firstName);      // "John"
console.log(lastName);       // "Doe"

// Heap memory operations (String object)
let str1 = new String("Hello");
let str2 = str1;            // Only reference is copied
console.log(str1 === str2);  // true (same reference)

// Creating new String object with same value
let str3 = new String("Hello");
console.log(str1 === str3);  // false (different references)

// using valueOf and toString 
let val = new String ("Namaste Duniya");
let tostr = String ("Namaste Duniya"); 
let newval = new String ("Namaste Duniya");
// if we not use new key word here then it will be string only 
console.log(typeof(tostr)); 
// string is typeof
let valto = val == tostr;
console.log("comapares:", valto);

console.log("anothere comapares ===", val ===tostr);
console.log("new comaparison:", val ===newval);
// returns false becoz different references the object contains different references
// now we will convert objects to primitive string values 
let val1= val.toString();
let newval1= newval.valueOf();

console.log(typeof(val1));
console.log(typeof(newval1));
// now we will again compare 
console.log("new ones comapare:", val1 ===tostr);
console.log("news ones anothere:", newval1===tostr);











