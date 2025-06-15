// why functions are called as first class citizens 
console.log("why functions are called as first class citizens");
// functions are called as first class citizens becoz 
// 1.we can assign a function to a variable 
// example for assigning function to a variable ,as u can store numbers and strings in variables we can assign function to a variable 

const variablefunction = function(name){
  return `${name} is the best producer`
}
console.log("assigning a function to a variable:", variablefunction("Bharg"));

// 2. pass function as arguments :we can pass function as the argument , we can pass function name without parenthesis as a argument , if we pass function with () parenthesis then it will execute there only first

function sayhello(){
  console.log(10+10);
}
function sayhi(func){
   func();
   console.log("namsate");
}
sayhi(sayhello);
// flow first we call sayhi function and pass argument sayhello function name , the sayhello function name is taken as a parameter in sayhi  function (the parameter is func) the parameter func contains the function of sayhello when we call try to call func() it executes the sayhello function , when sayhello function is executed it returns function resume to the sayhi function now the sayhi function executes 

function addition(a ,b){
 return a+b;
}

function multiple(add){
   console.log("now printing addition function:",add(5,5));
  console.log("now multiplication function is executed:")
}
multiple(addition)

function objs (){
  let newobj ={
    name:"Bharg",
    age:24,
    work:"artist"
  };
  console.log("printing objects properties:", newobj);
}

function objs2(object){
 object();
 let secobj = {
    name:"vinod",
    age:20,
    work:"student",
 };
 console.log("printing objs2 ka inside ka secobj ka properties:" ,secobj);

}
objs2(objs);
// flow : first we call the objs2(objs) and we pass argument as the function name of objs , when we enter the objs2 there is a function call of the objs object() here in parameter we used object so the parameter object consist of the function of objs so it call the objs the objs is executed and the it returns resume function to the objs2 and objs2 is executed

// 3.return function from other function : it means one function is returning the anothere function instead of returning a value (number or stings) as the value 

function newfunc(elem){
    console.log("element is:", elem);
    return function(value) {
         return value * value;
    }
}

 let ans = newfunc(5);
let finalans= ans(10);
console.log("final answer:", finalans);
// work flow : 1. we have defined a function called newfunc(elem) which takes elem as a parameter,2.now we printed a or consoled the elem which gives 5 , 3. now we are returning a function (value) which takes value as the parameter this function returns a value * value which is 100, 4. now we create a variable ans in that we store a newfunc(5) and pass 5 as a argument , 5. now this ans contains a returned function so now ans holds a function so we call ans(10) and pass 10 as a argument , it returns 10*10 , 6.now the finalans has 100 so when we console.log it prints 100

// anothere example 
function letobj(value){
 console.log("value is:", value+value);
 return function(elem){
    let objs10 = {
        name:"Rawal",
        age:25,
        work:"artist",
    
    };
    console.log("objs10 printing:", objs10);
    console.log(elem);
 }
}

let finalobj = letobj(2);
 finalobj("I Love You");


//  4. using functions in datastructure [arrays] using function in arrays

let arr = [
    function(a,b){
        return a+b;
    },
    function (a,b){
        return a - b;
    },
    function(a,b){
        return a*b;
    },
];

// here we have created a array which stores a three functions [at 0 index , at 1 index , at 2 index];
let zero = arr[0];
console.log("printing zero index function:", zero(5,5));
let first = arr[1];
console.log("printing first index function:", first(100,50));
let second = arr[2];
console.log("printing second index function:", second(4,4));

// 5.storing functions in objects 
let music = {
    name:"Bhargeswar",
    age:25,
    work:"artist",
    album:"sab chahiye",
    letsgo: function(a,b){
        return a + b;
    },
};

console.log("printing the object:", music["name"]);
// accessing the objects properties 
console.log("printinf objects properties:", music.age);

// now passing the arguments to the letsgo function
let result = music.letsgo(4,4);
console.log("result is:", result);
// result prints 8
console.log("passing the arguments to the function:", music.letsgo(3,3));
// the above line prints 6

// anothere example using arrow function , we can use function as the properties of the objects 

let hello = {
    height:"6ft",
    weight:66,
    age:20,
    greet: () => {
        console.log("hello jee kaise ho saarhe !!");
    },
};

console.log("object properties:" , hello.height);
 hello.greet();  
//  the above line is used for calling function for the object 

