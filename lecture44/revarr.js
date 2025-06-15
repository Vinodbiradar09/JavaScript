// most important array methods in js 
// 1.map function 
// mpa function returns new array it returns new array , it iterates over each element and performs a specific task on the each element or provide function to perform for each element 
// How It Works:
// It iterates over each element in the array.
// For each element, it calls the provided callback function with the element, its index, and the entire array.
// It collects the return values of the callback into a new array.


let arr = [3, 7, 14 , 5 , 1];
let newarr = arr.map((number) =>{
       return number + 1;
}) ;
console.log("the newarray inlcudes the +1 addition" , newarr);

// anothere example for map  ,, here squaring of numbers is taken place 
let arr1 = [ 1, 2, 3, 4, 5 ]; //output 1 , 4, 9 , 16 ,25
let newarr1 = arr1.map((num)=>{
  return num * num;
});
console.log("the new array contains the square numbers:" , newarr1);

// 2.filter method 
// the filter method is used for filterning the original array 
// it retunrs the new array were in new array includes only those elements , which are passed the test for provided function ,, basically we are filltering the array based success of the provided elements for the each element 
// it iterates over each element in the array.
// For each element, the callback function is executed.
// If the callback returns true, the element is included in the new array; otherwise, it is skipped.

let filarr = [1,2,3,4,5,6,7,8];
// here the array includes odd and even numbers now we are extracting the even numbers 

let filnew = filarr.filter((number)=>{
    return number % 2 === 0;
});
console.log("original array" , filarr);
console.log("new array ", filnew);


let fillarr1 = [1,2,3,4,5,6,7,8];
let filnew1 = fillarr1.filter((num)=>{
  let odd = (num % 2  === 1); 
  return odd;
});
console.log("the original array" , fillarr1);
console.log("the new array:" , filnew1);

let ages = [12, 18, 20 , 33 , 11 , 48];
let adults = ages.filter((element)=>{
    return element >= 18;
});
console.log("ages above 18:" , adults);


let price = [ 2000 , 4000 , "thousand" , undefined , null , 500, 7000];
function theprice(elem){
     return elem > 2000 && !Number.isNaN(elem);
}
let newprice = price.filter(theprice);
console.log("the newprice is:" , newprice);

// 3 . reducemethod  
// in reduce method there is one accumulator and current value , if we mark accumulator has 0 then the current value takes the first element of the array (the zeroth index of the array) , if we dont specify the accumulator then the accumulator will take the first element of the array and the current value will take second element of the array 

let sums = [ 1, 2, 3, 4, 5];
// the reduce method work , here the acc is 0 the curr elem is first element of array , after performing the function it collects all the values and returns the new accumulator at the end 

let newsums = sums.reduce((acc, curr)=>{
    return acc + curr
},0);
console.log("the sum of the array using reduce method:" , newsums);

// anothere example 
let sums2 = [ 1, 2, 3, 4, 5];
let newsums2 = sums2.reduce((acc, curr)=>{
     return acc + curr
});
console.log("the sum of array without accumulator  value ", newsums2);
// anothere example using objects 
let objs = [ {amount:250} , {amount:350} , {amount:100}];
let totalamount = objs.reduce((acc, order)=>{
       return acc + order.amount;
},0);

console.log("the total value for the obj are:" , totalamount);

// find method 
let words = ["apple" , "bannana" , "chiku" , "mango"];
let newwrods = words.find((word)=>{
   return word === "chiku"  // it is used to find the element in the array
});
console.log("the find method :" , newwrods);

let numb = [1, 89 , 69 , 79 -12];
let newnumbers = numb.find((num)=>{
    return num > 50;
});
console.log("the new numbers is:" , newnumbers);

// splice and slice method 
const orginalarr = [ 1, 2,3 ,4 ,5 ];
const subarr = orginalarr.slice(1,4); //slice method
console.log("the sub array:" , subarr);
console.log("the original array:" , orginalarr);
subarr.push(10);
console.log("the sub array:" , subarr);
console.log("the original array:" , orginalarr);

// splice method 
const orarr = [1,2,3,4,5];
const subarr1 = orarr.splice(1, 3, 8, 9, 7);
console.log("the subarray for splice method is:" , subarr1);
console.log("the original array for the splice method:" , orarr);
// this is all about array methods in js 

// we discuss about call() , apply () , bind method in js 
// call method , the call method is used to access the properties or the values of the other objects in any function by using call method here call(object name for which we have to access the properties) , suppose we have  a function and in that we have to access the the objects property using call method we have to pass that object and accees the property of that object 
let callobj = {
    names:"vinod biradar",
    age:21,
    work:"developer",
    printdetails : function (){  // if we use arrow function we cant use this keyword for accessing the properties 
       console.log("here if we want to access the properties of the objects means we must use this keyword:", this.names);
    }
};

callobj.printdetails();
let callobj2 = {
    names:"veeresh biradar",
    age:23,
    work:"studying",
   // now here we have anothere object and now we have to access the callobj property in callobj2 we have to use call method instead of calling the printdetails function
};

callobj.printdetails.call(callobj2);  // using this call method we can access the properties and function from one object to anothere 
// here printdetails function ka this now refers to the callobj2 object now the this points to callobj2 and prints the veeresh biradar 
// output here if we want to access the properties of the objects means we must use this keyword: vinod biradar
// here if we want to access the properties of the objects means we must use this keyword: veeresh biradar

// anothere example 

function greet(name){
  console.log(`the name is ${name} and using this ${this.job}`);
};

const per = {name:"alice" , job:"naukri"};
greet.call(per , "Bharg");  // here greet function is called and we pass argument as Bharg using call method we passed the variable per so now the function can access the obj properties using call method 

// now apply is also same as call and in apply we can pass parameters 

function newgreet (start, end){
   console.log(` greeting ${start} and ${this.name} and some  ${end}`);
};

const newper = {name:"Abhi"};
newgreet.apply(newper , ["hi how are you" , "ending !!!"]); // here in apply we pass the arguments in an array it is the difference between the call and apply method 
// call or apply ke bech mai yeh difference hota hai in apply we pass the arguments in array were as in call we pass normally 
// now bind method  
// bind method is same as the call method only but here we store the result in new variable (we take a copy in new variable) and we invoke the variable when we needed or call the variable when we needed 

function bindfun(greet , statements){
  console.log(` ${greet} and name is ${this.name} and ${statements}`);
}
const newbind = {name:"madhur"};

let bin = bindfun.bind(newbind , "hi how are you " , "have a amazing day");
bin();  // here the difference is we stored the result in new variable and we invoke the variable whenever we want or call the variable when ever we want 
// this is all about call , apply and bind method 
