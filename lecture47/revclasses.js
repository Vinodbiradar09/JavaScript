// we will discuss about classes and constructor in js 
// classes are serves as a blueprint which consist of some methods and behaveviour and data members using this information we create a instances that are called as a object 

// now we will create a class 

class myclass{

name = "Bharg";   // here we dont need to use let const and var keyword 
#age = 33;  //if we mark the # meeans then it is marked as private now the datamember or the property is called as private key 
work = "music";


singing(){      // here function has been created 
console.log("Bharg is singing");
}

printage(){
    console.log("we are accessing the private key:" , this.#age); //using this keyword we are accessing the private filed 
}
album(num1 , num2){
  return ("Bharg has produced the sab chahiye album" , num1 + num2);
}
#randomfunction(){
    console.log("this is private method or the function :");
    console.log("private key is also accessed" , this.#age);
    return "this is returning becoz im shy"; //here in this function we use return statement becoz if we wouldn't use we get undefined so we use return 
};
callprivatemethod(){
     return this.#randomfunction(); // now this callprivate method is also returns something which private method randomfunction
}




};  // this is how we create a class 

let obj = new myclass ();   // this is how we create a obj for the class 

console.log("now we are accessing the class ka property or data members:" , obj.name);
 obj.singing();
console.log(" now we are accessing the class method:", obj.album(3,4,));
obj.printage();
console.log("we are accessing the private method:",obj.callprivatemethod()); // we are accessing the private method 
// private keys are accessed inside the class only we cant access outside the class 
// this keyword means it represent as a current object if we want to access  any property or the methods inside class we must use the this keyword 

// no we will discuss about getter and setter in the classes , in classes we have marked some private methods or the private data members we cant access them outside the class using getter and setter we can acess them outside the class also 

class human {
    age = 12;
   #height = "6 feet";
    weight = 70;

    running(){
        console.log("the person is runnig", this.#height);
    }
    #walking(){
         console.log("the person is walking");
         return "this is all about getters and setters";
    }
    accessingprivate(){
       console.log("accessing the private methods"  , this.#height); 
        newhuman.#walking();
    }; // here are fetching private members , we are putting the private memebers in a function and we are aceessing that function 
    get fetchvalue(){
        return this.#height;
    }  // we can access them using getter and setter also 

    get fetchfunc(){
        return this.#walking();
    }

    set settingdata(val){
       this.#height = val;
    }
    // here height and walking are marked as the private methods and data members 
};

// we are creating the object for the class human 
let newhuman = new human (); // we have created the object for the human class 
console.log("the weight accessing for the human class:", newhuman.weight);
newhuman.accessingprivate();
newhuman.running();
 console.log("fetching new func" ,newhuman.fetchfunc); // note for getters and setters we dont function call we just use the getter and setter name 
 console.log("fetching the value " ,newhuman.fetchvalue); // this is how private methods and data members are accessed 
 console.log("updating the value ",newhuman.settingdata = "7 feet"); // agar normal function hota function call ki taraha call karte , ye getter hai isiliye ham sirf name se call karte hai 


//  basic this keyword in objects 

const newobj = {
    fiestname:"vinod",
    lastname:"biradar",
    fullname : function (){
         return (` ${this.fiestname} and ${this.lastname}`);
    }
};

console.log(newobj.fullname());

// now we will see about constructors in class 
// constructor means when we created the data members and the data members are not intialized we can initialize them using constructor with the help object by passing as the arguments 
class Persons {
   

    constructor( name , address){
        this.newname = name;
        this.newaddress = address;
    }

    greet (){
        return (` ${this.newname } lives in  ${this.newaddress}`);
    }
}

const Bharg = new Persons("Bharg kale", "gurgoan");
const piyushgarg = new Persons ("piyush garg" , "dehli");

 console.log("using cinstructor",Bharg.greet());
 console.log("using constructor ",piyushgarg.greet());

//  anothere example using constructor 

class Newperson{
    ages;
    #ht ;
    wt;

    constructor(ages , ht , wt){
       this.ages = ages;
       this.#ht = ht;
       this.wt = wt;

    };
    walks (){
        console.log("the dog is walk");
    }

    runs(){
        console.log("the dog runs ");
    }
};

let obj1 = new Newperson( 19, 200, 34);

let obj2 = new Newperson(34 , 220, 56);
console.log("the obj1 is:" , obj1.ages);
console.log(" the obj2" , obj2.wt );

// anothere example 
class Shashank {
    constructor(name , age ){
        this.name = name;
        this.age = age;
    };
    sayhello(){
        console.log(`this is the function which says hello for the ${this.name}`);
    }

}

const vinod = new Shashank("vinod" , 22);
console.log("printing vinod age",vinod.age);
vinod.sayhello();

// for better understanding of the class we will learn more examples 

// example 1 Basic Class with Constructor and Instance Method

class TheNewperson{
    constructor(num1 , num2){
        this.nor1 = num1;
        this.nor2 = num2;
    }

    // constructor(newnames , newaddress){
    //     this.newname = newnames;
    //     this.newaddress = newaddress;
    // }  here take a note that the class can have only one constructor there cant be two constructors in a class 

    adding(){
        console.log(`this is the method which is used for adding the two numbers ${this.nor1 + this.nor2} `);
    };
    // calling(){
    //     console.log("the new name and address for the class is " , this.newname + " " + this.newaddress);
    // }
};

const add = new TheNewperson(11 ,11);
add.adding();
// add.calling();

// example  2. Class with Getters and Setters

class Getterandsetter{
    name;
    #salary;

    constructor(oldname , oldsalary ){
        this.name = oldname;
        this.#salary = oldsalary;
    }
    
    get fetchthename(){
        return this.name;
    }

    set settingthevalueforsalary(value){
        if(value > 0){
            this.#salary = value;

        } else {
            console.log("there is an error");
        }
    }

    displayinfo(){
        console.log(` the name of the person is ${this.name} and salary is ${this.#salary}`);
    }
    
};

const newgetter = new Getterandsetter("Sahaj" , 15);
newgetter.displayinfo();
newgetter.settingthevalueforsalary = 20;
newgetter.displayinfo();

// example 3 Class Inheritance (Using extends and super) 
// now we will discuss about inheritance in js 
// inheritance means we are inheriting the properties and methods from one class to anothere class (inheriting the properties and methods form parent class to child class) this helps to avoid rewriting the code form one class to anothere class 

// how does the inheritance works 
// class childclass extends parentclass 
// the child class can use parent class property and methods directly 
// we can override the properties and methods of the parent class in child class 
// if we have to access any methods and constructor of parent class in child class we use super keyword 

// basic inheritance with method overridding 

class Dog{
    constructor(dogname){
    this.name = dogname;
    }

speak(){
    console.log("the dog barks loudly");
}
}  
class Animal extends Dog {
    constructor(name , home){
        super(name); // here this super method is used to access the properties of parent class 
        
        this.home = home;
    }

    speak(){ // here we have method override the speak method of the class dog in the class animal 
        console.log("bak bak bak ");
    }
}

const newanimal = new Animal("pug" , "whitefield");
newanimal.speak(); // 
 console.log("the home place of the dog is",newanimal.home);
console.log("the name of the dog is ",newanimal.name);
// anothere example Multiple Levels of Inheritance
class shape {
    constructor(colors){
        this.color =  colors;
    }

    describe(){
        console.log("the color of the shape is " , this.color);
    }


}

class rectangle extends shape{
    constructor(color , width , height){
      super(color);
       this.width = width ;
       this.height = height;
    }
    area(){
        return this.width * this.height;
    }

}  
class square extends rectangle{
    constructor(color , width , height , side){
      super(color, width, height);
     this.side = side;

    }
}

const somepace = new square("red" , 2, 4, "newsidechick");
console.log("the area of width and height is " ,somepace.area());
console.log("the color is " ,somepace.color);
somepace.describe();

// anothere example Using super to Call Parent Methods

class device {
    constructor(devname){
        this.name = devname;
    };

    turnon(){
        console.log("turning on the device");
    }
}
class moblie extends device{
    constructor(devname, model){
     super(devname);
     this.model = model;
    }

    newmethod(){
        super.turnon();
        console.log("the device is " , this.name );
        console.log("the model  is ", this.model)
    }
}

const newmob = new moblie("iphone" , "iphone17");
newmob.newmethod();

// example 4. Class Inheritance (Using extends and super)

class Personslstexample {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("hello my name is ", this.name);
    }
}

class Employee extends Personslstexample{
    constructor(name , age , jobtitle){
      super(name, age);
      this.jobtitle = jobtitle;
    }

    employee(){
        super.greet();
        console.log(`the name is ${this.name} and the job is ${this.jobtitle}`);
    }
};

const theperson = new Employee("Karma" , 33 , "fullstack developer");
theperson.employee();

// this is all about classes in js 
