console.log("operators and conditionals ka gyaan");
// we will discuss about operators in JavaScript 
// what is operators : it is nothing but a set operations that are performed between two operands ,, operators are the set of symbols
// JavaScript is a dynamic programming language, has various operators to perform operations on data and manipulate values
// ex: let a=10; let b=12; let sum = a+b; console.log(sum); ,,, here a is operand and (+) is a operator and b is operand 
// main there is binary and uinary operators ,, binary means there are two operands and one operator , ex:- a+b, a-b 
// ,,,, uinary means there is one operand and two operators ex:- i++, ++i, --i, i--
// types of operators 
// these are the types of operators 

// Arithmetic Operators
// now we will see Arithmetic Operators : Arithmetic operators in JavaScript allow us to perform mathematical calculations such as addition, subtraction, multiplication, division, and modulus. These operators are important for performing basic mathematical calculations within our code.

//   addtion 
let a = 10;
let b = 20;
let c = 30;
let sum = a + b + c;

console.log(a+b+c);
console.log("the sum is :" , sum);

//   substraction 
let suba  = 12;
let subb = 87;
let subc = 31;

let minus = suba-subb-subc;
console.log(minus);

// multiplication 
let mulA = 9;
let mulB = 4;
let mulC = 2;

let multiplication = mulA*mulB*mulC;
console.log(multiplication);

// division 
let divA = 20;
let divB=5;
 
let Division = divA/divB;
console.log(Division);

// modulus  The modulus operator is denoted by '%'. It returns the division remainder i.e. the remainder of two numbers that have been divided.   4)10(2 = 8,, 10 - 8 = 2 ,, here 2 is remainder
let mod1 = 5 ;
let mod2 = 2;

let modulusss = mod1 % mod2 ;
console.log("modulus is :" , modulusss);

let mo1 = 10;
let mo2 = 5;
console.log("modulus is :" , mo1%mo2);

// Exponentiation : its means power of number ex; 2^4 = 16 2 power 4 is 16 ,, 2*2*2*2=16;
let expo1 = 2;
let expo2 = 5;
let expo = expo1 ** expo2;
console.log("exponential is :" , expo);

// now we will see increment & decrement
let inc1 = 5;
let inc2 = 4;

console.log(inc1++);
// output 5
console.log(inc2--);
// output 4
console.log("mow it is incremented :" , inc1);
// output 6
console.log("now it is decremented :" , inc2);
// output 3

// the increment and decrement operators can be classified as 'pre-increment/decrement' and 'post-increment/decrement'.
// Pre-increment/decrement : Increment/decrement the value before using.

let  preincA = 6;
let predecA = 5;
console.log(++preincA); 
// phele increment karo 6 ko ++ kiya tho 7 hoga ,, output:7
console.log(--predecA);
// phele decrement karo 5 ko -- kiya tho 4 hoga ,, output:4

console.log(preincA); 
// abb yaha pee use kar rahe hai ,, output: 7
console.log(predecA);
// abb yaha pee use kar rahe hai output:4

// Post-increment/decrement : Use the current value and then increment/decrement 

let postincA = 6;
let postdecA = 8;

console.log(postincA++);
// phele use karo 6 ko output:6 ayega kyuki hamne use kiya hai phele  yaa sabse phele 6 print hoga baad meh hi increment hoga
console.log(postdecA--);
// phele use karo 8 ko output:8 ayega kyuki hamne use kiya hai phele 

console.log(postincA);
// abb increment karo 6 ko ++ kiya tho 7 hoga ,, output 7
console.log(postdecA);
// abb decrement karo 8 ko -- kiya tho 7 hoga ,, output 7

// --------------------------
// Assignment Operators
// The assignment operator assigns value to the variables. The most common assignment operator we use is '='.
// ex: let a = 5; here let is the type of variable and a is the variable name and we are assign 5 to it.

let assign= 10;
assign = assign + 10;
//  here were are doing assign = 10 + 10;
console.log(assign);

let assignment = 23;
assignment *= 2;
// shprthand notation assignment = 23*2;
console.log(assignment);
// -----------------
// Comparison Operators
// Comparison operators, such as greater then (>), less than (<), greater than or equal (>=), less than or equal (<=), equal to (==), not equal to (!=) are used to compare values and determine the relationship between them. These return a boolean value in the output.
console.log(10 > 5);
console.log(10<5);
console.log(10>=5);
console.log(10<=5);
console.log(10!=5);
console.log(10!=10);

// Strict Equality v/s Loose Equality
// Strict equality is denoted by '==='. When we use strict equality operator, both the data-type and the value are checked to determine equality, and it returns a boolean answer.

let strict1 = 10;
let strict2 = "10";
console.log("it is strict equality both value and datatype is compared :" , strict1 === strict2);

// Loose equality is denoted by '=='. When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer.
// example 
let lose1 = 5;
let lose2 = "5";
let compare = lose1 == lose2;
console.log("it is loose equality only values is compared :" , compare);

let x = "10";
console.log(typeof(x));      
//   string

let y = 10;
console.log(typeof(y));        
//  number

console.log(x == y);            
//  true

console.log(x === y);           
//  false

// Logical Operators
// Logical operators are used to connect two or more expressions/conditions to make decisions based on the criteria employed.
// there are three types of logical operators 
// (a) AND (&&)
// The logical AND operator is denoted by '&&'. if all the conditions are true then only it returns true if any one condition is false the it returns true 
let log1 = true;
let log2 = false;
let log3 = true;

 if ( log1 && log2){
    console.log("returns true");


} else {
    console.log("returns false ");
}
console.log(log1 && log2);
//  it also returns false becoz one conditions is false 
console.log(log2 && log3);
//  it also returns false becoz one conditions is false 
console.log(log1 && log3);
//  it returns true becoz both the conditions are true 
console.log(log1 && log2 && log3);
//  it also returns false becoz one conditions is false 
// anothere examples 
let num1 = 0;
let num2 = 1;
let num3 = 1;

console.log(num1 && num2);    // 0
console.log(num2 && num3);    // 1
console.log(num1 && num3);    // 0

// (b) OR (||)
// The logical OR operator is denoted by '||' . here if any one condition is true means it returns true , if any one condition is not true means it returns false ,,, any one condition must be true 
let alert1 = true ;
let alert2 = false;
let alert4 = false;
let alert3 = true ;
console.log( alert1 || alert3); // true here one condition is true 
console.log( alert2 || alert3); // true here one condition is true 
console.log(alert2 || alert4);  // false here both conditions are false 

// (c) NOT (!)
// The logical NOT operator is denoted by '!'. It returns false if input is a true. it returns true if the input is false 

let sham= false;
let vin= true;
console.log(!sham);
// it returns true becoz input is false
console.log(!vin);
// it returns false becoz input is true 

// important working with non booleans ex;- ( false || "babbar"); ,, ( false || 3);,, (true && "hello jee");
// these are all working with non booleans it means here one condition is true or false and other condtions are non booleans ,,,like  (true && "hello jee"); true is boolean condition and " hello jee " is non boolean condition
// here there are two concepts falsy and truthy 
// falsy: undefined , false , null , 0 , NAN(not a number) , '';- empty string 
//  it means if we tried ( true || undefined ) , ( true || null), ( true || 0), ( true || nan) 
// truthy means except falsy all are truthy , which anything not falsy 
// examples 
console.log( true && null);
// output false or null 
console.log( true && "babbar")
// output true , or babbar becoz babbar is truthy so true && true is : true 
console.log( false && " babbar");
// output false 

console.log( false || 3 || false);
// output is 3
console.log(false || "babbar" || 3);
// output "babbar"

console.log( false && "ezi");
console.log( true && 99);
console.log( "sheriyans" || false);

// short circuting 
// important short-circuiting concept : it means suppose think we have two examples 
// example 1: console.log(false || "babbar" || false || 10); here in (OR ||) any one condition must be true , first it checks the false and checks the next here "babbar" is truthy it gets one true it not further checks becoz it got one true 
console.log(false || "babbaruu" || false || 10);
// output babbaruu

// example 2: console.log( true && undefined && " vinod " && null); here all must be true , first it checks true and checks the next here undefined is falsy if it gets ine falsy then condition fails and it doesnt checks further 
console.log( true && undefined && " vinod " && null);
// output undefined 

console.log( "frontend" && true && "sheriyans" && null && true && "babbar");
console.log( null || undefined || "mast" || " babbar" || true);


// Bitwise Operators
// Bitwise operators are used to do manipulation of individual bits within the binary representation of numbers. There are several bitwise operators are used in JavaScript :
// here bitwise means individual bits manipulation ,, there are six types of bitwise operator 
// ex:- suppose think 5 & 3 ,, here the  indivdual bit of 5 is 0 1 0 1 ,, the indivdual bit of 3 is 0 0 1 1
//  if we do  0 1 0 1
//                  &
//            0 0 1 1
//            0 0 0 1 
// answer is 1 and its indivdual bit is 0 0 0 1
// a) Bitwise AND (&)
// Bitwise AND is denoted by '&'. It is used between two numbers, and the bitwise AND operation is performed on each corresponding bit of the two numbers. it works on bit level of each bit if both are 1 it returns 1 , if any one bit is 0 it returns 0 
// In binary system numbers are represented in 0's and 1's, so bitwise AND(&) will return 1 only when both the corresponding bits are 1 simultaneously else it will return 0.

let bita = 5 ;
// Binary representation of 5 : 0 1 0 1
let bitb = 7;
// Binary representation of 7 : 0 1 1 1


let bitwise = bita & bitb;
console.log("the bitwise for individual bit AND is :", bitwise);
// output is 5  becoz 0 1 0 1 & 0 1 1 1 :- 0 1 0 1 so the answer is 5

// (b) Bitwise OR (|)
// Bitwise OR is denoted by '|'. It is used between two numbers, and the bitwise OR operation is performed on each corresponding bit of the two numbers.

// Bitwise OR(|) will return 1 if any one of the corresponding bits is 1, else it will return 0.

let bitor1 = 5;
let bitor2 = 8;
let bitwiseor = bitor1 | bitor2;

console.log( " the bitwisse for individual bit OR is ",bitwiseor);

// Binary representation of 5 : 0 1 0 1
//                                  |

// Binary representation of 8 : 1 0 0 0
 
//  output is 1 1 0 1 : 13


// (c) Bitwise NOT (~)
// Bitwise NOT is denoted by '~', it is used on a single number. Bitwise NOT operator inverts all the bits (0 is inverted to 1 and 1 is inverted to 0) of the given number and returns the new number as output.
//  example: 5;- 101 here each indivdual bit is inverted 0 to 1 and 1 to 0 ,, so now for 101 will be 010

let bitE = 5;
// Binary representation of 5 : 0 1 0 1

console.log(~bitE);
// output will be 0 1 0 

let num11 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num22 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

let num33 = -8;
// Binary representation of -8 : 1 1 1 1 0 0 0

console.log(~num1);    // -6
console.log(~num2);    // -9
console.log(~num3);    // 7

// (d) Bitwise XOR (^)
// here if two bits are same ( 0 ^ 0 = 0, 1 ^ 1 = 0  ) then it will be false or zero if two bits are diffrent
//  ( 0 ^ 1= 1,  1 ^ 0= 1) then answer will be true or one 
//  example:-  2 ^ 2 ; is 0  0 1 0 
//                               ^
//                           0 1 0
//  answer is                0 0 0 : answer is 0 

let bitwisexor1 = 5;
let bitwisexor2 = 7;

let bitwiseXOR = bitwisexor1 ^ bitwisexor2;
console.log("the bitwise for individual bit for XOR is :" , bitwiseXOR);

// (e) Left Shift (<<)
// Left shift operator is denoted by '<<'. It shifts the bits of the left operand to the left, by a number of positions specified by the right operand. 0 comes in the place of the least significant bit after each shifting is done.

// For example, the binary representation of 5 is '00000101',

// Now, when we use '5 << 2', it means we want to shit the binary representation of 5 left by 2 positions and then it becomes '00010100',

// The number whose binary representation is '00010100', is 20.

// Thus '5 << 2' = 20.

let leftshif = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1
let leftshif1= 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(leftshif<<3);
// Binary representation of 5 : 0 0 0 0 1 0 1 now it will be ,, 0 0 1 0 1 0 0 which is 40

console.log(leftshif1<<2);
// Binary representation of 7 : 0 0 0 1 0 0 0 now it will be ,, 0 1 0 0 0 0 0 which is 32

let left1 = 4;
let left2 = 5;

console.log("after left shifting three indivdual bits :" , left1 << 3);
console.log("after left shifting two indivdual bits :" , left2<<2);


// (f) Right Shift (>>)
//  it shifts the last bit to right and it will be lost , the shifted bit will be lost 
// Right shift operator is denoted by '>>'. It shifts the bits of the left operand to the right, by a number of positions specified by the right operand preserving the sign of the original number.

let nu1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let nu2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num1 >> 3);     // 0 ,, 0 0 0 0 0 0
console.log(num2 >> 2);     // 2,,  0 0 0 0 1 0 

let rightshifts1 = 4;
let rightshifts2 = 5;

console.log("after right shifthing three indivdual bits :" , rightshifts1 >> 3);
console.log("after right shifthing two indivdual bits : " , rightshifts2 >> 2);

// Ternary Operators
// Ternary operator is a concise way to write conditional statements, it is widely used in JavaScript. It is also known as conditional operator. It has three parts: a condition, statement to execute if the condition is true and the statement to execute if the condition is false.
// SYNTAX;- (condition) ? (statement1) : (statement2);

let myage = 21;

 (myage >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));

 let myMarks = 33;
 (myMarks> 30) ? (console.log("student is passed")) : (console.log("student is failed"));
//  here if condition is true means statement1 is printed false means statement2 is printed

// Output : Cannot Drive




// console.log("hello jee");