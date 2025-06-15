console.log("now we discuss about default parameters in functions");
// default parameter allow you to specify the value for the functions parameter that will be used if no argument is passed when function calling 
// when we function call we have to send a arguments , if we froget to send arguments or dont send any arguments the default value will be used , we must specify the default value 
// if the caller doesnt provide the value the js automatically uses specified default value ,, it helps to avoid errors 
// example 

function letsgo (fname = "Bharg"){
    console.log("lets go boy:", fname);
}
letsgo();
// here while function calling we didnt passed any argument so the parameter fname we have defined the default value Bharg if the we didnt pass argument the default value will be printed, if we passed any argument the default value will be ignored the argument value is printed
// example for passing the argument and ignoring the default value 
function letsgo2(fname="karma"){
    console.log("common man:", fname);
}
letsgo2("foosie gang");
// here we have passed the argument so the default value is ignored 

// example now passing undefined as the argument 

function letsgo3(fname="bhappa"){
    console.log("passing undefined as argument:", fname);

}
letsgo3(undefined);
// when we pass undefined as argument , undefined means nothing kali so the default value will be printed 

function letsgo4(fname = "arpit"){
    console.log("passing null as argument:", fname);
}
letsgo4(null);
// when we pass null as argument , null is printed default value is ignored 

// multiple default values 
 function letsgo5(fname = "vinod", lname="biradar"){
    console.log("first name is:", fname ," ", "last name is:" , lname);
}
letsgo5("Bharg", "kale");
// when we pass both arguments value the argument value is printed 
letsgo5("Bharg");
// when we one parameters value and other one not , means the paseed argument value is printed , the default parameter value is printed were not passed
letsgo5();
// when we dont pass any argument the default parameter value is printed 


function createUser(name = "Anonymous", age = 0) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  createUser();               // Output: Name: Anonymous, Age: 0
  createUser("Alice", 30);    // Output: Name: Alice, Age: 30
  createUser("Bob");          // Output: Name: Bob, Age: 0 (age uses the default)

//   example paassing objects in default parameters
function defobjs (valobj= {name:"Bharg", work:"artist"}){
    console.log("passing objects in default parameters:",valobj);
}
defobjs();
// when we dont pass any arguments default parameter which consists a object it is printed 

// example passing arrays in default parameters
function defarr (valarr=["vinod", "Bharg", 30, 44]){
    console.log("passing array in default parameters:", valarr);

}
defarr();
// when we dont pass any arguments default parameter gets printed which is array 

// example passing a function as default parameter
function deffunc (valfunc = solve(4,4)){
  console.log("passing a function in default parameters:", valfunc);
}

function solve (a,b){
    return a * b;
}

deffunc();
// here 16 is printed default parameter ka function is getting printed 

// its all about default parameters

