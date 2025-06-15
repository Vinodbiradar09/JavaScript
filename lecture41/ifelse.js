console.log("conditional statemments such as if else statements !");
// now we will see about if ,else, else if statements in JavaScript 
// In JavaScript, an 'if' statement is a fundamental conditional statement that allows us to execute a block of code only if the specified condition is true. If the condition is false, the code block associated with the 'if' statement is skipped.
// if condition syntax
// if (condition){
    // Code block to be executed if the condition is true
// }
// if else condtion syntax
// if (condition) {
    // Code block to be executed if condition is true
// } else {
    // Code block to be executed if condition is false
// }
// if else-if condition statement 
// if (condition1) {
    // Code block to be executed if condition1 is true
// } else if (condition2) {
    // Code block to be executed if condition2 is true
// } else {
    // Code block to be executed if all conditions are false
// }
// example 1
let a = 5;
if (a > 3){
    console.log("five is greater ");
}
else {
    console.log("five is smaller");
}

// example 2
let age = 44;
if ( age >= 18){
    console.log("i can vote ");
} else {
    console.log(" i cant vote ");
}
// example 3 
let driving = 54;

if ( driving  >= 18 && driving <= 49){
    console.log("we can get license ");
} else if ( driving >= 50 && driving<=69){

    console.log(" professinoal driver");
}
else if ( driving >= 70){
    console.log("truck driver");
}
else {
    console.log("died");
}
// example 4 
let marks1 = 89;
let marks2 = 77;
let marks3 = 91;

if (marks1 > 75 && marks2 > 90){
    console.log("he loves kannada");
}
else if ( marks3< 90 && marks2> 75){
    console.log("he loves hindi ");
}
else{
    console.log("he doesnt love anything");
}
// nested if in else if 

let b = 33;
let c = 44;
let d = 55;
let ages = 28;
if ( b>35 && c <30){
    console.log(" i love ap ");
} else if (c > 40 && d < 20){
    console.log("i loves aujla ");
}
else if (b > 30 && d < 80){
    if (ages >= 19){
        console.log("i can travel ");
    }
    console.log("i loves seedhe maut ");
}
else {
    console.log(" i loves arpit bala ");
}

// nesting else if 
let AGE = 22;
let weigth = 79;

if( AGE <=18){
    console.log("cannot vote");
}

else if(AGE >=18 && AGE <= 40 ){
if(weigth >= 65){
    console.log("he is fit");

}
else {
    console.log("he is not fit ");
}

}
else{
    console.log("he is died");
}

//  now we will learn about switches in javascript 

let days = "fri";

switch(days){
    case "mon" : console.log("day is monday");
      break ;

    case "tue" : console.log("day is tuesday ");
    break;
    case "wed" : console.log("day is wednesday");
    break;
    case "thur" : console.log("day is thursday");
    break;
    case "fri" : console.log("day is friday");
    break;
    case "sat" : console.log("day is saturday");
    break;
    default : console.log("day is sunday");

    
}

let number = 3;
switch(number){
    case 1 : console.log("number is 1 ");
    break;
    case 2 : console.log("number is 2 ");
    break;
    case 3: console.log("number is 3");
    break;
    case 4: console.log("number is 4");
    break;
}