// prototypes in js 
// the prototype is an object in java script , the object has prototype and this prototype is an object itself , this prototype includes methods and properties 
// here prototypes means itself is a object which consists some inbuilt objects and properties 

const employee = {
    somefunction : function (){
        console.log("salary is creadited 10%");
        return 33;
    },
    printfunction : function(name){
         console.log("i will print for employee object");
         return name
    },
};

const karanarjun = {
    salary:50000,
    printfunction: function(name){
        console.log("i will print for karanarjun object");
        return name;
    },
};

karanarjun.__proto__ = employee;  // here we prototyped the the method and properties of one object to anothere objects 
console.log(karanarjun.somefunction());

console.log("printing something:", karanarjun.printfunction("Bharg")); // here karanarjun object ka function is printed becoz it is closure for it 

// here there is a object employee which has a function somefunction , now this method or a function can be used in the other object by using this syntax .__proto__ = employee(the object which has to be prototyped) , now the method and properties of the employee object can be accessed  in the karanarjun object 

// now there is a situation were karanarjun object has a function printfunction() and the employee object has also same printfunction() now when we prototyped the the employee function in the karanarjun function , and access the printfunction() we will see what happen 


