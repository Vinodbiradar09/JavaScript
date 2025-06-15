console.log("now we will discuss about object cloning in js");
// now mainly we will discuss about objects cloning 
// firstly we discuss about shallow and deep copy 
// shallow copy:- shallow copy creates a new object it copies the top-level-properties from the original , if the original object has nested objects the shallow doesnt create new copies for the nested objects it simply copies the reference of the nested object

let obj1 = {
    name:"bharg",
    age:25,
    wt:70,
    work: {album:"sab chaiye", subs:"138k", producer:"nithalla"},
};
// now we have cloned the obj1 to obj2 using spread operator obj2 ={...obj1}
let obj2 =  {...obj1};


obj2.age = 66;
// the above we are changing the age of the obj2 to 66, the changes made is not reflected in obj1 bcoz here properties are created new and copied , 
obj2.work.subs="244k";
// the above line changes the obj2 ka obj ka properties here changes are done in terms of shallow copy , so it reflects in the obj1 also becoz here new properties are not created , reference are shared so it reflects the obj2 , obj1 also ..

console.log("printing obj1:", obj1);
console.log("printing obj2:", obj2);

// deep cloning :- the deep clone means it creates a new object and it copies all the nested objects no reference is copied if the changes in nested takes place then the cloned object doesnt effect 
// it doesnt copy the references a new object is being created completely including all nested objects 

let obj3 = {
    name : "21 savage",
    age : 21,
    work: {album:"her loss", subs:"10million", song:"rich flex"},
};

let deepclone = JSON.parse(JSON.stringify(obj3));

deepclone.work.song= "red drum";
// the above line changes the deepclone ka nested object ka property song = "red drum" this doesnt effect in the obj3 , it means the deep clone has been done. 

console.log("printing the obj3:", obj3);
console.log("printing the deep clone object:", deepclone);

// now we will discuss about object cloning in detail and depth 

let objs = {
    name:"veeresh",
    age:22,
    work:"producer",
};

// this is the object , object are said to be dynamic in nature becoz we can add the properties of the object in run time 

objs.album = "sab chahiye";
// the above indicates that we have added the new properties of the object durining runtime only thats y objects are said to dynamic in nature 
// now there five methods of cloning the objects 
// 1.using spread operator 

let src ={
    name : "central cee",
    age:22,
    work:"artist",
    details:{ album:"cant rush", subs:"101m", bestsong:"gdp"},
};

let dest = {...src};
dest.age = 34;
// here reference are not copied completely new properties are cloned the changes occurs in only dest obj not in src object 
src.details.bestsong= "money mind";
// now cloning is done in shallow method becoz we changed the nested object ka property value it reflects in both objects , so shallow copying has been done 
// here top level properties are created new properties the nested object shares references 
console.log("printing src object:",src);
console.log("printing destination object:", dest);


// 2. Object.assign method 

let src1 ={
   name : "drake",
   age :30,
   work:"singer",
   details:{album:"her loss", subs:"87millon", bestsong:"gods plan"},
};
// syntax we need to use Object.assign({empty object}, src) here we are copying the src object into empty object

let src11 = {
    manager:"kendric lamar",
    account:"zero",
};
let dest1 = Object.assign({} , src1 , src11);  
// note we can copy multiple objects in the empty object , this is how we can copy mutiple objects 



dest1.name = "the drake";
src1.details.subs = "207million";
// here also shallow copying has been done 


console.log("printing src1 object:", src1);
console.log("printing dest1 object:", dest1);

// 3. iteration method over objects using for in loop 

let src2 = {
  name : "karan aujala",
  age: 31,
  state: " punjab",
  song: "wavy ",
};


let dest2 ={}

for (val in src2){
   let newkey = val;
   let newvalue = src2[val];
  dest2[newkey] = newvalue;
}

src2.song = "softly";

console.log("printing the src2 object:", src2);
console.log("printing destination object:", dest2);

// 4. Using JSON.parse(JSON.stringify(object)) is used for cloning the object 
// A deep clone creates a completely independent copy of the object and all objects nested within it. This means that changes to the nested objects in the clone will not affect the original object.


let src3 = {
    name : "the seige",
    age:14,
    work: "artist",
    details: {album:"seigen 2024", subs: "74k" , song:"10 peti"},
};

let dest3 = JSON.parse(JSON.stringify(src3));

src3.age = 17;

dest3.details.song = "ek din";

// when print the above only changes takes place in dest3 object becoz of deep cloning , here references are not copied for nested objects
console.log("printing src3 object:", src3);
console.log("printing dest3 object:", dest3);


// 5. structuredclone() method : - The structuredClone() function is available in modern environments (e.g., recent browsers, Node.js v17+). It creates a deep clone of many types of objects, including those with nested structures.

let src4 = {
    name : "dana",
    age : 28,
    hobbies: ["swimming" , "reading"],
    nested: {movie:"intestellar" , song:"rich flex"},
};

let dest4 = structuredClone(src4);
src4.nested.movie = "family man";

dest4.hobbies.push("running");
// here push is used becoz we use array for the value in the object
console.log("printing src4 object:", src4);
console.log("printing dest4 object:", dest4);

// 6. Using Libraries (e.g., Lodash's _.cloneDeep)

// First, include Lodash in your project.
// If using Node.js:
// const _ = require('lodash');

// In a browser, you might include it via a <script> tag.

// let original = { 
//     name: "Eve", 
//     age: 32, 
//     preferences: { food: "pasta", color: "blue" } 
//   };
  
//   let deepClone = _.cloneDeep(original);
  
//   deepClone.preferences.color = "green";
//   console.log(original.preferences.color);  
  // Output: "blue" (original remains unchanged)

//   in 6.method we need to include some libraries , here we doesnt include libraries so the reason it is showing the error 

// this is all about object cloning in js 

  