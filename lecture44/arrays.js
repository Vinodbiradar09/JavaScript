console.log("arrays in javascript detail");
// arrays are collection of items or elements , it can be of same datatypes or diffrent datatypes , arrays are stored in continous allocation in memory blocks , they can hold various datatypes such as number , strings , null , boolean , objects , and other arrays 
// each element in array has a indexs that starts from 0 for first element and 1 for second element and so on 
// creation of arrays
let arr = [1,2,3,4,5];
console.log("printing an array:", arr);
// Using the Array Constructor
let brr = new Array ("vinod" , 45, "biradar", true);
let crr = new Array(5);
// the above line creates 5 empty elements , [ <5 empty items> ]
console.log(crr);
console.log(brr);
// accessing the array elememts 
console.log("accessin the array elements:", arr[4]);
console.log("accessing the array elements:", brr[2]);
// modfiying array elements 
console.log("modifying the array of 2 index 3 to 10:", arr[2]=10);
console.log(arr);
// output [ 1, 2, 10, 4, 5 ]

brr[1] ="rawal";
console.log("after updating:", brr);

// adding new elements in array 
brr[4]="kale";
brr[6]= "bharg";
//  here we missed 5th index the array is created for 5th index but it is empty at 5th index and 6th index includes "bharg"after adding new element: [ 'vinod', 'rawal', 'biradar', true, 'kale', <1 empty item>, 'bharg' ]
console.log("after adding new element:", brr);

// now we will discuss about properties and methods in array 
// properties of array 1.length
console.log("number of elements in array:", brr.length);
// in brr there are total 7 elements in also includes empty items 
// methods in arrays
// these following methods modify original arrays

let drr = ["rawal" , 2 , 66 , "karma" , "encore", "calm"];
drr.push("artist");
// it pushes new element at the last 
drr.pop();
// it pops the last element 

drr.unshift("new");
// unshift method adds the new element at the right side
drr.shift();
// removes the element from the starting , removes first element or left most element 
console.log(drr);
// we discuss about splice method , the splice method is used to add or remove or replace the elements in the array 
// it modifies the original array and also the splice method returns the removed elments from array 

let arsplice = ["anil", "drupad", "shrikar", "shridhar", "vinod"];
// syntax arr.splice(start, deletecount , items)
// start it tell from which index it needs to be start modifying the array
// delete count means how many elements to be removed from the original array, basically it is count of removing the elements
// items it means new elements need to be added ex:- "binod" , 20
let ans1 = arsplice.splice(1,0,"shaktiman");
console.log(ans1);
// when we console ans1 it returns an empty array [] becoz aplice method returns the number of removed elements from the original array here , no element is removed so it rreturns an empty array
let ans2 = arsplice.splice(2,2,"maina","red");
console.log("ans2 is :", ans2);
// output ans2 is : [ 'drupad', 'shrikar' ] it returns 2 elements that are removed from the array
console.log(arsplice);
// output [ 'anil', 'shaktiman', 'maina', 'red', 'shridhar', 'vinod' ] it adds maina and red at removed place
// reversing the array
let reversearr = ["seedhe maut" , "rawal" , "karma" , "Bharg"];
console.log("reversing the array:", reversearr.reverse());
// sorts the array by lower to higher value
let sortarr = [87,23,90,1, 17,12];
console.log("sorts the give array:", sortarr.sort());

// fill method it is used to fill the element in the array at speicified indiceses, the fill method modifies the original array rather than creating new one 
// syntax :- arr.fill(value, start , end);
// value the static value you want to fill in the array
// start : starting of the index from where to start
// end: ending of the index at which filling needs to be stopped 
// The filling starts at the start index and goes up to, but does not include, the end index.
let fillarr = [9, 3, 8,2,5,7];
fillarr.fill(0,2,5);
console.log("fill method", fillarr);
 
let fills = [33 , 45 ,87, 67,9];
fills.fill("bharg", 1,3);
console.log(fills);

// copywithin() method it is used to copy the elements at specified position , the elements are copied from existing array only , it doesnt return new array , it just overwrites the existing elements 
// syntax: array.copyWithin(target, start, end)
// target: he index at which to start copying the elements into.
// start: The index at which to start copying from.
// end: The index at which to stop copying (this index is not included). If omitted, it defaults to the length of the array.
let copyright = [10 , 56 , 28, 81, 43, 68];
copyright.copyWithin(2,3,5);
console.log("copywithin method:", copyright);

// map functions : map function is used to transform the each element of array using provided function , it doesnt change the original array it returns new array , leaving original array unchanged 
// the map function how it works? , it iterates to each element in the array , for each element it applies the provided function .the fuunction provided transforms the each element of the array and the new array is returned 
// syntax:- element - the current element is beign processed , index - the index of the current element is beign proceed , array-the original array that is being used 
// let newArray = originalArray.map(function(element, index, array) {
//     // Transform the element and return the new value
//     return /* new value based on element */;
//   });
  
let maparr = [10 , 45, 34, 81, 63, 47];
let ans = maparr.map((number)=>{
    let mop = number + 1;
    return mop;
});
console.log("map func:", maparr);
console.log("using map function:", ans);

let maparr2= ["vinod", "karma", "rawal", "Bharg"];
let newans = maparr2.map((number) =>{
    return `${number} artist`;
});

console.log("map function method printing the name and artist:", newans);

// first 10 goes inside the map function it goes in number parameter , in mop variable it collects the 10+1 ka answer and returns the mop variable which contains the array number  , in ans array [it collects all the transformed element]. and again goes to next element in original array and so on 
// in ans [11, 46, 35, 82, 64, 48]
// some factors of map function
// 1. it doesnt modify original array , it returns new array with transformed value 
// 2.the size of new array is same as the original array 
// the function you provided to map() is applied to every element and the map() method returns new array


// now we discuss about filter method in js 
// filter method is used to create new array , the new array contains the only elements that meets the certain condition
// how filter method works ; think of a filter , and u have an array , in the original array u want to remove the certain elements which dont meet the particular requirements the filter method will provide new array , in the new array only the condition meeted elements are present 
// working
// Iterates Through the Array:
// It goes through every element in the original array.
// Tests Each Element:
// For each element, it applies a test (a callback function) that returns true or false.
// Collects the Matching Elements:
// If the test returns true for an element, that element is included in the new array. If it returns false, the element is skipped.
// Returns a New Array:
// The result is a new array that only contains the elements that passed the test. The original array remains unchanged.
// syntax ;- 
// let newArray = originalArray.filter(function(element, index, array) {
//     // Return true to keep the element, false otherwise
//     return /* condition based on element */;
//   });
  
let filterarr = [23 , 50 , 44 , 76, 12, 39 , 61];
let filans = filterarr.filter((number)=> { 
    return number % 2 === 0;
});
// filtering out only even numbers 
console.log("filter method :", filans);

// another example 
let filterarr2 = ["Bharg" , undefined , null , "siege", "rawal", 89, ];
// now i want only the string elements to remove out and make new array
let filans2 = filterarr2.filter((number) =>{
    const newelement = typeof(number) === 'string';
    return newelement;
});
// filtering out only strings , typeof is used for matching strings if we provide number then it filters out the numbers in the array 
console.log("removing only strings from the array using filter method:", filans2);
// let us consider a example , a array includes of four objects , the object contains the properties name and age .. now we are performing the filter method the age > 18 objects properties are stored in a new array variable and we print that variable 
let fillobj = [
    {name :"vinod", age : 20}, {name:"Bharg", age:22}, {name:"veeresh", age :16}, {name:"rawal", age:15}
];

let objans = fillobj.filter((number) => {
    return number.age > 18;

});
console.log("filtering the ages:", objans);

// reduce method ; the reduce is used to combine all the elements in the original array into a single element or value ,suppose we have an array of five elements now we will add all the elements and form a single value or element , it doesnt change the original array , it provides new value 
// syntax ; 
// array.reduce(function(accumulator, currentValue, currentIndex, array) {
//     // Perform some operations and return the new accumulator
// }, initialValue);

// how it works 
// accumaltor it returns the callback function , if we initialized the initial value then accumulator will take that value only , if not initialized then accumalator will considers the first element of array , and current value considers the second value , if accumlator is initialized then current value considers the first element of the array 
// key points 
// 1. original array is not changed ,,2. Providing an initialValue is important because it defines the starting point for the accumulation. Without it, the first element of the array is used, and the iteration starts with the second element.

let reducearr = [1,2,3,4,5];
let redans = reducearr.reduce((acc , curr) =>{
    return acc+curr;
},0); 

console.log("using reduce method:", redans);
// initial Setup:
// The initialValue is 0, so accumulator starts at 0.
// First Iteration:
// accumulator is 0 and currentValue is 1.
// The function returns 0 + 1 = 1.
// Second Iteration:
// Now accumulator is 1 and currentValue is 2.
// It returns 1 + 2 = 3.
// Third Iteration:
// accumulator is 3 and currentValue is 3.
// It returns 3 + 3 = 6.
// Fourth Iteration:
// accumulator is 6 and currentValue is 4.
// It returns 6 + 4 = 10.
// Fifth Iteration:
// accumulator is 10 and currentValue is 5.
// It returns 10 + 5 = 15.
// After processing all elements, reduce() returns the final accumulated value, which is 15.

// sorting from desending order from larger to smaller 
let reversesort = [9,5,1,8,3,6,2];
let revans = reversesort.sort();
console.log("reverse sort:", revans.reverse());

// indexOf it is used to find the indexOf the element in an array 
let arrindex = [1,4, 7, 3,9];
console.log("finding index of element;", arrindex.indexOf(7));

// find() method the fing method is used to find the first element that statisfies the condition , if no element is found it returns undefined ,, it only returns the first element that statisfies the condition it doesnt returns all the matched elements , it doesnt modify the original array 
// it is used to find the element in the array quickly like Id or product name ; when you need to quickly locate a single item in an array.
// syntax 
// let result = array.find(function(element, index, array) {
//     // Return true if this element meets the condition
//     return condition;
//   });
// element the current element being proposed , index ; index of the current element ; array current array which is being worked 

let findelement = [4,10, 18,5,9];
let findans = findelement.find((number)=>{
     return number > 10;
});
console.log("finding the element greater than 10:", findans);
// anothere example with objects 
let findobjs = [{name:"vinod" ,id:22} , {name:"veeresh", id:18} ,{name:"vivek", id:17} , {name:"Bharg", id : 25} ];
let resobj = findobjs.find((number)=>{
  return number.id > 20 ;
});
console.log("finding the id greater than 20 in object properties:", resobj);

// forEach loop ; for each loop it is used perform specified function for each element in the array , it doesnt create new array and it doesnt return value 
// for each is a method for arrays used to perform function for every element in array 
// for exiting the loop it doesnt use break or return value 
// syntax
// array.forEach(function(element, index, array) {
//     // Code to execute for each element
//   });
// element : current element in the array ,, index : index of the current element ,, array: current working array 


let arreach = [10, 20,30,40,50];
let sum = 0;
 arreach.forEach((number)=>{
     
     sum = sum+number;
});

console.log("for each loop :", sum);
// has it is not returning anything so we have printed sum

let fruits =["orange", "apple", "strawberrys", "banana"];
fruits.forEach((fruits)=>{
   console.log("fruits are:", fruits);
}) ;

// we can pass index parameter also 
let indarr = [1,2,3,4,5];
indarr.forEach((number,index)=>{
    console.log("number in the array is:", number ," index of the element:", index);
})

// traditional for loop 
let tradforloop = ["vinod", "veeresh", "bharg", "rawal"];
let lenofarray = tradforloop.length;
// length is used for taking the length of an array
for(let i = 0; i<lenofarray;i++){
    console.log("accessing the each element of the array:", tradforloop[i]);
}

// now we will discuss about for in loop or method in js 
// for in loop is used to iterative over enumerable properties of objects , it allows us to access the  each propertites(keys) one by one 
// it is mostly used when you want access all the keys from the object , one by one 
// for in loop it goes only on property name 
// syntax 
// for (let key in object) {
//     // Access each property name using "key"
//     // Access the property value using object[key]
// }
// let key means variable name and all the properties (keys) of objects come in this one by one , this is variable that hold the properties name of the objects 
// object means the name of the object in which u want to perform this 

let forobj ={
    name:"Bharg",
    age:24,
    id:125,
    work: "music",
};

for(let num in forobj){
    console.log("key of the objects:", num);
    console.log("accessing property values of the object:", forobj[num]);
}
// output
// key of the objects: name
// accessing property values of the object: Bharg
// key of the objects: age
// accessing property values of the object: 24

// now we will discuss about for of loop 
// for of loop is used to access or iterative over objects , arrays ,strings, maps , sets and more .. Unlike the for...in loop (which goes over property names in an object), for of loop directly gives values of each iteration
//  what is iterable:An object is iterable if it has a built-in mechanism to access its elements one by one. Examples include arrays, strings, Maps, Sets, etc.

// it provides clear way to acces the element without using indxeses
// syntax 
// for (const element of iterable) {
//     // Code to execute for each element
//   }
// element means a variable that holds a current element or value during iteration
// iterable means : arrays or strings , maps , sets

// example for array using for of loop 
let arrof = [23, 76, 55, 31,40];
for (const elem of arrof){
    console.log("each element of array using for of loop:", elem);
}
// anothere example 
let fruitss = ["apple", "banana", "cherry"];

for (const fruit of fruitss) {
  console.log(fruit);
}
// Explanation:

// The loop goes through the fruits array one element at a time.
// In each iteration, the variable fruit holds the current element (first "apple", then "banana", then "cherry").
// The loop prints each fruit directly.
// Output:
// apple
// banana
// cherry

// example using strings 

let strof = "Bhargkale";
for (val of strof){
    console.log("every single char is accessed from the string:", val);
}
// output
// every single char is accessed from the string: B
// every single char is accessed from the string: h
// every single char is accessed from the string: a
// every single char is accessed from the string: r
// every single char is accessed from the string: g
// every single char is accessed from the string: k
// every single char is accessed from the string: a
// every single char is accessed from the string: l
// every single char is accessed from the string: e










// let ans = drr.slice(2,4);
//  console.log(ans);







