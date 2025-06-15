// now we will discuss about closures in js 
// closures means when the outer function has finished it's execution and the inner function access or remebers the outer function variable that is know as closures ,, here the outer function binds the data or the variables and shares the reference to the inner function here reference are shared when the outer function varibles or data can be accessed to inner function ,,

// A closure is created when an inner function accesses variables from its outer (enclosing) function, even after the outer function has finished executing.

// Key Point:
// The inner function “closes over” (or remembers) the environment (variables, parameters, etc.) in which it was created.

// closure andre yenu : closure andre nan kade ondu function ada outerfunction anth adar nag naa ond variable declare madin or yenre data declare madin ega outer function execution mugit so the variable destroy agirla nav aa variable or data na inner function nag use madbhod edak closure antar 

// example 

function outerfunction (){
    let name = "babbar";

    function innerfunction (){
        console.log("the outer function variable is accessed here:" , name);
    }

    innerfunction();

}

outerfunction();  
// work flow first the flow of execution comes to the 25th line were function call is taken the outerfunction , now we go inside the outerfunction we initialize the name variable = "babbar" now the there is a inner function the flow of execution is given to the innerfunction() call now we go inside the innerfunction and we print the variable name which is in outerfunction which is used as closure 

// important here the reference is passed to the inner function ,, here the variable name ka reference is passed , we dont create a copy of the variable 

function outerfunction2 (){
    let newname = "Bharg";

    function innerfunction2(){
        console.log("new name is:", newname);
    }
    return innerfunction2;
}

let inner = outerfunction2();
inner();
// here the outerfunction is called first and we intialize the variable now the flow of execution is given to the innerfunction but the innerfuction isn't called so the flow of execution goes to the return innerfunction , so now the outerfunction returns the innerfunctions reference note here inner function isn't called only the outerfunction shares the reference of the innerfunction ,, the outerfunction contains the innerfucntion reference and it is assigned to the inner variable so now basically inner variable contains the inner function so when we call the inner() function it prints the name of the outer functions closure 

// here basically the the outerfunctions variable get binds with inner function the data of the outer function gets binds with the innerfunction it is know as closure when the outer function executes the variable doesnt destroy so the reason we can use it in the inner function 

// example 3 here 

let address = "kale";
function outer(){
    let address = "biradar";

    function inner(){
        let address = "carti";
        console.log("the address is:", address);
    }

    return inner;
}

let newfunc = outer();
newfunc();

// here when we print the address first the closure address is printed here closure address is carti when we print the address , if we removed that or comment the inner() function address variable then the outer function() variable address is printed  , when we remove or comment that the global varible address is printed this is how closure works 


// example with parameters 

const solve = (a ,b) =>{
   

   const mul = (c ,d) =>{
    let sum = a + b;
       console.log("sum is :",sum);
       console.log( "multiplication is :", c * d);
   }
    return mul
}

const z = solve(2,2);

z(3,3);


// here parameters of the solve function is accessed in the mul function 
// this is all about closures 
