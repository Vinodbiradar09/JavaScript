console.log("now we will discuss about classes in js");

// class: a class is a blueprint it is used to create a objects , the class inlcudes data members and functionalites , so class defines the structure and the instances created from it is called object
// the class include properties and behaviour or functionalites using this properties or functionalites we create a object , we can access the properties and functionalites of objects using .operator 
// syntax use class keyword followed by class name and {}
// A class is a blueprint (or template) for creating objects. It defines properties (data) and methods (functions) that the objects (instances) created from that class will have.

// creating a class 
class human{
    // properties of the class
    // public members 
    age = 66;   
    #wieght=80;
    // if we put # symbol then it becomes the private members  and this private members is accssible in the block of class only outside the class we cant access it 
    height= 180;

    // behaviour or functionalites 
    // here these are function in a classes the function are used as the methods 
 walking = (value) =>{
  console.log(" my man is walking to the store:",value);
  console.log("if we have to access private members in class", this.#wieght);
//   this is keyword means we are accessing the current properites of the class , when we are inside the class and we need to access the properteis of the class we use this keyword . dot is used for accessing the properties 
}
running (value ) {
 console.log("my man is running for the:",value)
}


// here we are created a constructor suppose we have not intialized the property then we can intialize the property by using constructor ,, we just need to call constructor function and pass parameters ,
// here this.age is current objects property and we are assigning it new value 
// same for height and weight also , we change for private fileds also 
// let classobj = new human(66,199,66); here we just need to pass the arguments these arguments comes in the constructors parameters and the properties gets changed 
constructor(newage, newht , newwt){
  this.age = newage;
  this.height= newht;
  this.#wieght = newwt;
};
// now we will discuss about getters and setters ,, if we need to aceess the value of the private field outside the class we need to use getters and setters 
// when we need to access the private field outside the class or modify the private field outside the class we will use getters and setters , using getters and setters we update our code interms of encapsulation  hamne apne code pe abstract layer bhi setup kardi hai
// getters : getters means it is used to get or fetch the value , we need to use get keyword 
// getters are the functions only this is used to get or fetch the value of the properties 

 get fetchwt(){
   return this.#wieght;
 }
//  setters : it means it is used for setting the value , or modifying the value , we need to use set keyword , we need to pass the a parameter for updating or setting the value 

set mpdifywt(val){
  this.#wieght = val;
}




};
// this above block is the class which contains properties and functionalites , this refers to current object if we want to access the properties of we use . 

// now we are creating the instances objects from the class 
//  this is the syntax for creating the objects 
let classobj = new human(66,199,66);
// now we can access the properties and function of the class using . operator
console.log("accessing the class properties :",classobj.age); 
 classobj.walking("store");

 console.log("accessig the height:", classobj.height);

 classobj.running("marathon");

  console.log("fetching private data:",classobj.fetchwt);
// while calling the getter we dont use parenthesis becoz getters are treated as a properties not as methods or functions,,
// Why No Parentheses?
// Property vs. Function Call:
// Even though a getter is implemented as a function, it is treated like a property. This means you simply write person.fetchwt rather than person.fetchwt().



// using setter we are updating the wieght value 80 to 70  ,imp setter is also used as the properties so we dont use the parentheses , so accessing classobj ka modifywt fuction and updating the value of weight to 70 
classobj.modifywt=70;
console.log("modified wieght:",classobj.modifywt)

// now the value of weight is updated 


// Notice that both the getter and setter are accessed like normal properties—no parentheses are used.

// let classobj = new human(66,199,66);
// using constructor we passed new value the final value of the properties are 
console.log("final properties and values:", classobj);