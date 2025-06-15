// operators 
console.log(5+5);
let a = 2;
let b = 4;
console.log("modulus of both is:", a % b);

console.log("exponentail of both is :" , a ** b); 
//  2 ** 4 = 16 its means power of number ex; 2^4 = 16 2 power 4 is 16 ,, 2*2*2*2=16;
// increment decrement and unary operations 

let c = 5;
let d = 6;
console.log(c++);
console.log(d--);

console.log(c++);
console.log(d--);
// preincrement and decrement 
let x = 3;
let y = 7;

console.log(++x);
console.log(--y);
// preincrement  output are 4 , 6

console.log(x++);
console.log(y--);
// postincrement output are 4, 6

console.log("again",x++);
console.log("again",y--);
// postincrement output are 5, 5

// comparision operator , we wil see strict equality and loose equality 
console.log(10>5);
console.log(5<10);
console.log(10!=10);

let strict = "10";
let loose = 10;

console.log(strict == loose);
console.log(strict === loose);

// logical operators 
console.log(true && true && true );
console.log(false || false || true || true);
// working with non booleans ,, in non booleans there are two types falsy :- falsy means null , undefined , false , " empty string " , NAN , 0;

console.log( true && "Love" && 45 && "babbar");
console.log(false || null || undefined || "rawal" || NaN);
// now we will discuss about short circuiting 

console.log(false || false || "rawal" || true || "barg");
// it will stop at rawal only becoz logical or needs only one true
console.log(true && "barg" && null && "rawal" && undefined);
// it will stop at null only becoz and needs only onw false , falsy value 


// bitwise operator works on bit wise of the value 

let bit = 5;
let bit2 = 7;
console.log(bit & bit2); 
// output 5 : 1 0 1

console.log("bitwise for or ", 5 | 7);

console.log("bitwise not (~):", ~5);

console.log("bitwise xor if both are same then 0:" , 5 ^ 7);
//  left shift 
let lefshift = 5;
console.log("left shifting for 3 bits:", lefshift << 3);
// Binary representation of 5 : 0 0 0 0 1 0 1 now it will be ,, 0 0 1 0 1 0 0 which is 40
let leftshif1 = 8;
console.log(leftshif1<<2);
// Binary representation of 7 : 0 0 0 1 0 0 0 now it will be ,, 0 1 0 0 0 0 0 which is 32

// right shift 
let rightshifts1 = 4;
let rightshifts2 = 5;

console.log("after right shifthing three indivdual bits :" , rightshifts1 >> 3);
console.log("after right shifthing two indivdual bits : " , rightshifts2 >> 2);

// ternary operator 
let marks = 80;
(marks >= 85) ? (console.log("pass")) : (console.log("fail"));
// conditionals statements in js 
let age = 34;
if(age>=18){
    console.log("he can vote");
}
else {
    console.log("he cant vote");
}

let num = 10;
if(num<20){
    num += 1;
    console.log(num);
    num++;
}
else{
    console.log(num);
}
console.log(num);

let sci = 89;
let mat = 67;
let js = 97;
if (sci < 90 && js >90){
    console.log("js is the best");
}
else if(mat >70 && sci <90){
    console.log("mat is the best ");
}
else {
    console.log("sci is the best");
}
// nested else if 
let ages = 20;
let fit = 50;
if (ages <10){
    console.log("cant drive");

} else if (ages>15){
    if(fit>40){
        console.log("he is fit");
    }
}
else {
    console .log("drive");
}
// switches in js
let day = "wed";
switch (day) {
    case "mon": console.log("monday")
        
        break;
        case  "tue" : console.log("tuesday");
        break;
        case "wed" : console.log("wednesday");
        break;
        case "thur": console.log("thursday");

    default:
        break;
}




