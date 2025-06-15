console.log("all about the functions in javascript");

function multiplication (a , b){
    let ans = a * b;
    console.log("multiple of a and b is:", ans);
}
multiplication(5,5);

function addition ( a , b){
    return a + b;
}
console.log("addition of both a and b is:", addition(20,20));

function substraction (a ,b){
    return a-b;
    // unreachable statements if we write anything below the return statement it is unreachable 
    // let a = 10;
    // console.log(a);

}
let ans = substraction(20,10);
console.log(" substraction is :",ans);


// function expressions 
// function expressions are used for assign the function to the variable 

const additions = function(a,b){
    return a + b;
}
console.log("addition in function expression:", additions(2,2));

const newmulti = function( a,b){
    return a * b;
}
console.log("multiplication in function expression:", newmulti(7,7));

// arrow functions 
const arrowAddition = (a,b) =>{
   return a + b;
}
console.log("addition in arrow functions:",arrowAddition(6,9));

const newmultiplication = (a,b) =>{
    return a * b;
}
let res = newmultiplication(1,2);
console.log("multiplication in arrow function:", res);

// now we will create function inside the function

function outerfunction ( num1 , num2){
    function innerfunction( num3, num4){
        let newans = num3 + num4;
        return newans;

    }
    console.log("inner function:", innerfunction(3,3));
    let newres = num1 * num2;
    let nwp = 10 + 40;
    return {newres,nwp};

}

console.log("outer function:", outerfunction(3,3));
