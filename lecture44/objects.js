console.log("now we will learn about objeccts in detail in this");
// syntax for creating the objects 
// let obj = {

// }
// objects in js means it is a collection of key value pairs in js , collectionof releated data 
// think of the objects like real life objects ex: car , a car has properties such as color , model , year and the methos of the car are brake , accelator , drive

// key-value pairs 
// key:- it is a string or symbol , and it also acts as the identifier for the data
// value:- the actual value of the key , such as string , number , boolean , arrays, objects , and function, it represent the actual data 

let car ={
    model: "bmw",
    color: "black",
    year: 2025
};
console.log(car);

let person = {
    name:"vinod",
    age:20,
    address:"bangalore",
    lastname:'biradar'
};
// used for accessing the specific objects
console.log(person.name);
console.log(person["address"]);
// We can access the properties of an object using:

// Dot notation
// Bracket Notation
// we can dynamically add , modify and delete the properties  of objects
// adding new property
person.hobby ="playing games";
console.log(person);
// modifying the existing property
person.age=22;
// deleting the property
delete person.lastname
console.log(person);

// anothere way of creating the objects , after creating we can add the properties 

let newobj = new Object ();
newobj.names="Bharg kale";
newobj.age ="23";
newobj.work= 'music';
// accessing the objects 
 console.log(newobj.names);
 console.log(newobj["work"]);
 
console.log("creating object using new keyword:", newobj);

// now we will learn functiions in objects
// single quotes doesnt affect values in objects
let funobj = {
    name : 'rawal',
    work: "music",
    ablum: function(){
        console.log("sab chahiye album is fkin crazy !!");
    }
};
console.log(funobj);

// in js when we include functions as the properties of the objects then function acts as the methods , the methods are used to perform actions , actions can be performed in the objects using functions

let musician = {
    name : "rawal",
    genre : "pop",
    albums:"sab chahiye",
    // shorthand notations 
    // play : function() { 
    // }
    
    play ( a , b){
         console.log(`${this.name} plays ${this.genre}`);
         return a + b;
    }
};
console.log(musician);
console.log(musician.play(5,5));
console.log(musician.name)
console.log(musician.albums)
// this.name and this.genre is used for accessing the properties of current object 
// when u are inside the method (a function which is property of object) and you need to access the other properties of the same object we need to use this keyword , the this.keyword refers current object and want to access other properties 

// ere, inside the play method, this.name accesses the name property of the musician object (which is "rawal").
// Similarly, this.genre accesses the genre property (which is "pop").
// Without using this, the code wouldn't know that you mean the name and genre properties of the musician object, and it might end up looking for global variables named name or genre.

