console.log("now we discuss about primitive datatypes of stings ");
// Key Points:

// Stack Storage:

// Primitive values
// References to objects/arrays/functions here references of objects and arrays and functions are in stacked 
// Local variables in functions
// Function parameters , function solve ( num2 , num3 ){ here num2 and num3 are the parameters which are stored in stack 
// }


// Heap Storage:

// Objects 
// Arrays
// Functions
// Instance methods
// Closure variables that need to persist
// Nested objects and arrays
// Function objects
// Object methods

// some basic examples 

let num = "34";
// it is a string type 
let num2 = "34.56";
// it is a string type 
console.log("the type is string;",typeof(num));
console.log("the type is string;",typeof(num2));
// now we are converting string to numbers or integers by using parseInt 
let par = parseInt(num);
let par2= parseInt(num2);
console.log("converted string to integer:", typeof(par));
console.log("converted string to integer:", typeof(par2));
// ----------------------

// Strings
// In JavaScript, the "Strings" primitive data type represents sequences of characters. Strings are used to store and manipulate textual data, such as words, sentences, or any other sequence of characters.
// it is sequence of characters
// Creation of strings
// Creation of strings is possible in three ways, we can create a string using double-quotes(""), single-quotes('') and template literals or backticks(``).
// example

// there are four methods to create a string in JavaScript 
// basic method using double quotes 
let newSTR= "hello jee kaise ho saarhe";
console.log("basic method of string :", typeof(newSTR));

// second method using single quotes 

let newSTR1 = 'namaste duniya';
console.log(typeof(newSTR1));
// third method using backticks 
//  this is used printing how we want we can print next line here one by one  ,this type of method is used for some mathematical instructions also 
let newSTR2 = ` hanji kaise 
ho 
i hope 
badiya honge`;
console.log(typeof(newSTR2));
// fourth method using new string 
// Using String Constructor:
let newstr = new String("rust is so hard to learn");
console.log( "this string is object stores in heap ",typeof(newstr));
//  when we use new String it creates the objects of strings,,, With new (new String()): Creates a String object
// when we dont use new it creates string primitives which 
// let sum = String("rust is so hard"); this is primitive string stores in values in stack 

// we see about concatination of two strings 
// We can concatenate multiple strings in JavaScript using two different ways:
// Using the '+' operator
// String interpolation with template literals
// Let's understand the different ways of concatenation with the help of examples:

// Concatenation using '+' operator:
let naya = "hey baddie ";
let purana = "hey cutie";
let dono = naya + purana ;
console.log("concatinatiion of two strings:", dono);

// anothere example
let thi = "hello";
let me = "hey hey dollar";
let mus = thi + " sign " + me;
console.log("concatination:", mus);
// anothere example 
let opt1 = " lets begin";
let opt2 = " JavaScript";

let opt3 = opt1 + opt2;
console.log(opt3);
// used to concatenate lets begin JavaScript

// anothere example 
let string1 = "Mobile";

let string2 = "Charger";

let finalSentence = string1 + " and " + string2 + "!";

console.log(finalSentence);

//Output : Mobile and Charger!

// Concatenation using string interpolation using template literals(``):

// 
// here $ sign is used to acess the the variables value 

let back = "Tera Bhai";
let back2= "Seedhe Maut";

let out = `${back} x ${back2} `; 
console.log("using backticks :", out);
// output Tera Bhai x Seedhe Maut 

let tic = `encore abj`;
let tik = `they call me calm`;
let till =  `${tic} and ${tik}`;
console.log("backticks:", till);

// we will see about length of string 
let len = "Code Help By Babbar";
console.log("the length of string is :", len.length);
// output 19 

let len1 = "sheriyans coding school";
let newlen = len1.length;
console.log("length of string is :", newlen);

// we will see about converting upper case to lower case 
let up = "JAVASCRIPT";
let low = "react";
console.log("converting upper case to lower case", up.toLowerCase());
console.log("converting lower case to upper case", low.toUpperCase());

// 2 nd example
let messagea = "Hello coders";

let upperCaseMessage = messagea.toUpperCase();
console.log(upperCaseMessage);    // HELLO CODERS

let lowerCaseMessage = messagea.toLowerCase();
console.log(lowerCaseMessage);    // hello coders

// we will see about substring methods 
// Substring method on strings
// In JavaScript, the substring() method is used to extract a portion of a string, starting from a specified index position to another specified index position, or to the end of the string.
// string.substring(startIndex, endIndex); syntax
// startIndex : The index position at which to begin extracting characters from the string. This parameter is required.
// endIndex : The index position before which to end the extraction. If we don't mention the endIndex then, the substring() extracts characters to the end of the string.
//  note:-t's important to note that substring() extracts the characters between startIndex and endIndex but does not include the character at the endIndex position.

let substing = "I want To marry"
console.log(substing.substring(2,10));
// 2nd example
let messa = "Hello coders";

let substr1 = messa.substring(2, 8);
console.log(substr1);          // llo co

let substr2 = messa.substring(3);
console.log(substr2);         // lo coders

let sub = "I love JavaScript";
let anotsub= sub.substring(3,12);
console.log("the substring is:",anotsub);

// Split method on strings
// In JavaScript, the split() method is used to split a string into an array of substrings based on a specified separator.
// separator : Separator is a string or regular expression used to specify where to split the original string. The output is the array of substrings

let splitstr = "once upon a time in Js";
let newsplit= splitstr.split(" ");
console.log("splitting an string", newsplit);

let mess = "Once upon a time";

let splittedArray = mess.split(" ");
// here we are seperating the string on the basis of space 

console.log(splittedArray);

/*
Output
[ 'Once', 'upon', 'a', 'time' ]
*/



// Undefined
// here the variable is not asssigned the value is know as undefined
// In JavaScript, undefined is a primitive value that represents a variable that has been declared but has not been assigned a value. It also serves as the default value of variables that have not been initialized.
let range;

console.log(range);     // undefined
// Null
// In JavaScript, null is a primitive value that represents the intentional absence of any object value. It is used to signify that a variable, object, or property does not have a value.

// Unlike undefined, which typically means a variable has been declared but not initialized, null is explicitly assigned to indicate that there is no value present.
let ran = null;

console.log(ran);         // null
console.log(typeof(ran));    //object
// It's important to note that null is not the same as undefined. While both represent absence of value, null is a deliberate assignment, whereas undefined typically arises when a variable has been declared but not initialized






