// now we will discuss about three extra loops 
// for each loop 

const names = ["vinod" , "Bharg" ,"veeresh"];

 names.forEach((singlenames , index)=>{
    console.log(`${singlenames} and ${index}`);
});

// anothere example 

// const fruits = ["apple" , "banana" , "chiku"];
// // const namelist = document.getElementById("namelist");


// fruits.forEach((name)=>{
//      const newelem = document.createElement("p");
//      newelem.textContent = name;
//      namelist.append(newelem);
// });

// here using foreach loop , first we created the three paragraph element and we added the textcontent in that which is name and appended it to the namelist element 

// anothere example a array of objects 
const users = [
    {name:"Bharg" , age :30},
    {name:"vinod" , age : 20},
    {name:"veeresh" , age:23},
];

users.forEach((user) =>{
  console.log(`${user.name} and ${user.age} `);
});

// for of loop 

const branches = ["cse" , "ise" , "aiml"];

for (const element of branches) {
    console.log("the branches are" , element);
};

const str = "BHARG KALE";
for(let letter of str){
    console.log("each letter is access has done",letter);
};

const user = [
    {name:"shrikar" , branch:"ise"},
    {name:"anil" , branch:"civil"},
    {name:"shridhar"  , branch :" ece"},
];

for (let obj of user){
    console.log(`${obj.name} is ${obj.branch} years old`);
};

// for in loops 

const person = {
    name : "calm",
    work:"music",
    album:"lunch break",
};

for (let key in person){
    console.log("the key is:", key); // here we can accees the key 
    console.log(`key is ${key}  ${person[key]}`) // in this line we can access the key and value also 
}

// anothere example using array 
const array = ["lunchbreak" , "nayaab" , "bayaan"];

for (let ind in array){
    console.log("the index is :" , ind);  // when we are using this in array the index are printed
    console.log(`${array[ind]}`); // now this will print the actual values of the array

}

// last example 

const base = {country:"india"};
const emp = Object.create(base);
emp.city = "bangalore";
emp.head = "gurgoan";

for (let key in emp){
    if( emp.hasOwnProperty(key)){
        console.log(`${key}`);
        console.log(`${emp[key]}`)
    }
}

