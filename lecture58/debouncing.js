// we will discuss about debouncing in js 
// debouncing is a technique it specifies how many time function executed when it is called , it ensures the function calls only one time after a specific time when there is an unactivity 
// a example for understanding the debouncing 
// imagine you are typing in  a search bar that sends a request for api every single character without debouncing you might send a request for every single character which is not required 
// debouncing helps to wait for until user stops the typing for particular settime , if the particular settime is finished then the api request is called instead of calling everytime this is called debouncing it waits untill the timeout is finished after that the request is sent for the api 
// how debouncing works 
// when an event triggers it sets a timer if the new event occurs before timer expries it resets the timer , it only executes the function when the timer is completed without any new events 
// Mechanism:
// Use setTimeout() to delay function execution.
// Use clearTimeout() to cancel the pending execution if a new event occurs within the delay period.

// Define getdata first
let counter = 0;
const getdata = () => {
    console.log("fetching the data", counter++);
};

function debouncinginjs(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Then create the debounced function
const newdebounce = debouncinginjs(getdata, 300);

// Usage example (not included in your original code)
// Call newdebounce multiple times to see debouncing in action
// newdebounce();
// newdebounce();
// newdebounce(); // Only this last call will actually execute getdata after 300ms

// i have not understood the debounce we will see later 

// now we will discuss about currying in js 
// it means instead of passing all the parameters in a single function we pass only on parameter now this function returns anothere function which takes 2 parameter , now second function returns anothere function which takes the third parameter this is called function currying 
// Currying is the process of decomposing a function that takes multiple arguments into a chain of functions that each take a single argument. The final function in the chain returns the result.

// basically currying used for taking single parameters and function returns anothere function which has anothere parameters 
// how does currying works 

function add ( a ,b,c){
    return a + b + c

}
console.log("without currying the function:", add(2,3,5));

// now the above example using currying 
function add2 (a){
  return function(b){
    return function(c){
        return a + b + c;
    }
  }
};

console.log("with currying the function:", add2(5)(5)(5));

// anothere example 
// the currying is used to gather all the parameters , suppose here we have a function which has three parameters , now this function runs only when we get all the three parameters , instead of waiting for parameters we use function currying 

function mygmail (emailid){
   return function (subject){
    return function(body){
        console.log(` the email id is ${emailid} and the subject is ${subject} the description is ${body}`);
    }
   }
};
let step1 = mygmail("piyushgarg@dev.com");
let step2 = step1("you have an new order ");
 step2("you got ur new sneakers");

//  anothere example 
function greet(greeting, name) {
    return `${greeting}, ${name}!`;
  }
  
  // Curried version
  const curriedGreet = greeting => name => `${greeting}, ${name}!`;
  
  // Create a specialized function with a fixed greeting
  const sayHello = curriedGreet("Hello");
  console.log(sayHello("Alice")); // "Hello, Alice!"
  console.log(sayHello("Bob"));   // "Hello, Bob!"
  
//  this is all about currying in js 

// now we will discuss about spread operator in js and rest operator in js 
// spread operator 
// the spread operator is used to expand the elements (it is used to expand the array objects) the spread operator is mainly used for coping the array and objects and it is also used for the combining or merging the arrays and objects 
// Copying Arrays/Objects: Create a new copy without reference.

// Combining Arrays/Objects: Merge multiple arrays/objects.

// Passing Arguments: Expand elements as function arguments.

// example for spread operator 

let sp1 = [1,2,3,4];
let newsp = [...sp1];
console.log("the new array using spread operator is:", newsp);
console.log("before pushing" , sp1);


newsp.push(5);
console.log("after pushing the new element in the new array", newsp);
console.log('the old array is:', sp1);
// here when we copy the array in anothere variable the spread operator shallow copies it means there is no reference is shared between them 

// example for merging two arrays 

let arr1 = ["vinod" , "bharg"];
let arr2 =["veeresh" , "siddanth"];
let mergearr = [...arr1 , ...arr2];
console.log("merging two arrays", mergearr);
// here it create a new array 

// copying the object to anothere obj 

let obj1 = {
    name:"vinod",
    age:20
};

let obj2 = {...obj1};
console.log("printing the object2:",obj2);
obj2.age = 22;
console.log("after reassing age:", obj2);
console.log("we will see:", obj1);
// here  when we cahnge the obj2 age we reassign the age 20 to 22 , when change this then it wont reflect in obj1 becoz here shallow copy is made there is no reference shared for this 
// The spread operator creates a new object
// For primitive values (like numbers, strings, booleans), it copies the actual values, not references
// So when you change obj2.age, it has no effect on obj1.age

// This is different from what would happen if you had objects or arrays as properties:
// suppose think we have nested objects 

let obj3 = {
    name:"veeresh",
    work:"music",
    obj4 :{ song: "timeless" , album : "rich flex"},
};

console.log("the obj3 which has nested object" , obj3);

// now we are using spread to copy the obj in anothere variable 
let obj5 = {...obj3};
obj5.obj4.album = "cant rush greatness";
console.log("after changing ", obj5);
console.log("some thing " , obj3);  
// here we make a changes in the nested object the changes are made to the original object 

// mergining the two objs 

let mobj1 = {
    name:"asap",
    addres:"LA",
};
let mobj2 = {
    name:"rawal",
    address:"banglore",
};
let merge = { ...mobj1 , ...mobj2};
console.log("merging two objects:", merge);
// when we are merginig two objects if same key [names] are present then it overwrites the new value 
// When you spread objects with the same property names, the later object's properties overwrite the earlier ones. In your case:

// First, all properties from mobj1 are added to merge: {name: "asap", addres: "LA"}
// Then, all properties from mobj2 are added: {name: "rawal", address: "banglore"}

// Since both objects have a name property, mobj2.name ("rawal") overwrites mobj1.name ("asap").
// However, addres (from mobj1) and address (from mobj2) are actually different property names because of the spelling difference (missing 's' in the first object). So both properties are included in the merged object.

let mobj11 = {
    name: "asap",
    addres: "LA",  // Notice the typo: "addres" missing an 's'
};

let mobj22 = {
    names: "rawal",
    address: "banglore", // Correctly spelled "address"
};

let mergee = { ...mobj1, ...mobj2 };
console.log("merging two objects:", merge);
// now it will merge two objects 

// now spread operators in functions example 

function mergearrays ( num , num2 , num3){
    return [...num , ...num2 , num3];

}
 let ar1 = [1,2,3];
 let ar2 =[4,5,6];
 let nu = 7;
 console.log("merginig the arrays in function",mergearrays(ar1, ar2, nu));

//  using reduce method 
function somearray(...args){
  return   args.reduce((acc, cur)=>{

        let newvariable = acc + cur;
        return newvariable;
    },0);
}
  

console.log("using reduce method we are adding the numbers in spread operator:", somearray(21, 55, 83, 14,90));

// rest operator in js 
// rest operator it collects multiple values in the single array , the indefinite arguments can be caputerd in using rest operator 
// the rest operator collects all the multiple values in to single array 
// It is used in function parameters (or destructuring assignments) to collect all remaining arguments or elements into an array.


function restoperator(...numbers){
    return numbers.reduce((acc, curr)=>{
        return acc + curr;
    },0)
};
console.log("using rest operator:", restoperator(1,2,3,4,5));

// rest operator in objects 
const someobj  = {
     name:"shashank",
     add: "Gadag",
};
const someobj2 ={
    name:"prajwal",
    add:"Gadag",
};

const restobj = {
    name:"vinod",
    add:"biradar",
    some:{name:"ECE" , pro:"none"},
};

function collectingtheobjects(obj1 , obj2 , ...restobj){
    let  names = obj1.name  + obj2.name ;
    restobj.forEach((obj)=>{
        let so = obj.name + obj.some.name;
          names = names  + so;
    });
    return names;
}
console.log("collecting all the objects:", (collectingtheobjects(someobj, someobj2 , restobj)));






