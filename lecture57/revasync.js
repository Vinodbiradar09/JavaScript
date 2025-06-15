// now we will discuss about async await in detail and understanding way 
// basically async await means the asynchronus code can be runned synchronus using async await function 
// console.log("hello");
// async code 
// console.log("hii");
// console.log("namaste");
// suppose think we have a block of code which contains some synchronus code and asynchronus code now when we run the code the async code run lately  due to the process of data , suppose think we need the asynchronus code to be runned in synchronus we should use async await 
// definition 
// async code is declared with async keyword note we should declare a async keyword for the function then only we can use await keyword
// the async function always returns a promise , the function returns a value the javascript automatically wraps the value in the promise if the value is correct or the resolve it marks the fullfilled , if the function throws an error it returns the rejected promise 
// the asynchronus code is marked await then it waits for the async code to complete it waits untill it gets the promise eithere fullfilled or rejected 
// note async function hamse ek promise return kar raha hota hai 


let func =  async () => {
    setTimeout(()=>{
        console.log("hello this async code");
    },2000);
};

func();

// there is some scenario 
// 1.prepare url/endpoint -> this synchronus code 
// 2. fetch data -> this asynchronus code 
// 3.console or print the fetched data -> synchronus code 
// here the flow of execution is given url which synchronus code , after that we are fetching the data form the api or getting the data from api here it is async code which takes time it may take 2sec , 10secs or 1min hence it is async code it is skipped and flow of execution is given to print the fetched data , if the data isnt fetched from api then also we are printing the data where the error to wait the line for fetching data we use await keyword for the asynchronus code so now the data is fetched the async code waits untill data is fetched this is the use of the await keyword 

// now we will see the example 

async function saymyname (){
   setTimeout(() => {
    console.log("this is async code"); //note the settimeout function doestn return aynthing we cant use return keyword in the setimeout becoz it doesnt return aynthing 
   }, 2500);
}
saymyname();

// fetching the data from api 

async function getData(){
    const Url = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await Url.json();
    console.log("the data fetched from api is:", data);
   // here we are fetching the data so it is async code line so we marked await here 
//    now the data fetched is converted to json (javascript object notation) 
//  once the data is completely fetched then only it moves to next line and at last we are printing the data 
}
getData();

// anothere example for the fetching the data 
async function getdata2(){
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    let final = await res.json();
    console.log("the getting data from getdata2:", final);
}
getdata2();

    async function getdata3(){
        let newres= await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
        let newfin = await newres.json();
        console.log("getting data from getdata3:",newfin );
        // if we dont use await here then see ,,, getting data from getdata3: Promise { <pending> } this is printed becoz the data might takes the time so the promise is in pending state 
    };
  getdata3();

//   in simple async await returns a promise the promise can be in any state the await keyword is used in async function only the await keyword is used to wait the untill it recevies the response using async await we can turn async code to the synchronus code it is all about async await 
// now we will discuss about try and catch block in async functions 
// the try and catch block is used to handle the errors in code basically the try block is used for the the code that might throw any errors that code are used in try block if any error occurs that are addressed or what are steps taken for that errors are specified in catch block 
// why try and catch block in promises we use multiple catch block to handle the errors in async the errors are handled in try/catch block 
// Centralized Error Handling:
// You can catch errors from any awaited operation in one place, rather than having multiple .catch() callbacks.
// we can catch the errors in catch block instead of using multiple catch block 

// how does try/catch work in async functions 
// when we mark a function as a async the errors in that function (such as promise rejected) these type of errors are handled in nearest try / catch block 

// example 1
async function simple(){
    try{
        // this code might throw an error 
        console.log("this code might throw ann error so it is written here");
    } 
    catch(error){
       console.log("if the error occurs we can handle that error");
    }
}
simple();
// try block ; contains the code that might throw an error , when you use await it waits for the promise to settle down , if the  promise is rejected then error is thrown and it is handled by catch block 
// catch Block:
// Catches any errors thrown in the try block. This includes errors from rejected promises. The error object is passed into the catch block, allowing you to handle it (e.g., log an error message or take corrective action).

// example 2
async function someAsyncOperation(){
    let value = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    const parsejson = await value.json();
    console.log("adding two numbers", 34+34);
   return parsejson; //here return statement is written becoz the the function should return something when we assign it to the variable 
};

async function myAsyncFunction(){
  try{
    //  write the code that might throw error 
    const result = await someAsyncOperation();
    console.log("operation is successfull", result);
  }
  catch(error){
    // if any error catched when can use that error and do what we want 
     console.log("the error is ", error)
  }
};

myAsyncFunction();
// a best example using try/catch block in async await 
 function bestfunction(){
    return new Promise(( resolve,reject)=>{
        setTimeout(()=>{
            const cal = Math.random();
            if(cal > 0.5){
                resolve("data received successfully");
            }  else {
                reject(new Error("this is an error"));
            }
        },6000);
    })
};

async function newbestfunction(){
    try{
        const resultvariable = await bestfunction();
        console.log("the best function answer is:", resultvariable);
    } 
    catch(error){
      console.log("the best function ka error is", error.message);
    }
    finally{
        console.log("mai tho hamesha run karta hun");
    }
};

newbestfunction();

// this is all about try and catch block 



// anothere example from deepseek and chatgpt 
async function helloprint(){
    console.log("this is first line");
    return await new Promise((resolve , reject)=>{
        setTimeout ((a,b)=>{
           console.log("the addition a and b is:", a+b);
        },3000,5,5);
        resolve("this will run after 3secs");
    })
};
helloprint().then((res)=>{
 console.log(res);  // here we are marked the promise resolve so we are using then block 
});

// 2example Example 2: Async Function with Error Handling Using Try/Catch
function checkeven(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         if(num % 2 ===0){
            resolve(`${num} is even number`);
         }  else {
            reject(`${num}  is odd number`);
         }
        },7000)
    })
};

async function errorhandlingexample(num){
    try{
        const evenchecking = await checkeven(num);
        console.log("the error can throw code is:", evenchecking);
    } catch(error){
        console.log("the error for checking even is: ", error);
    }
};

errorhandlingexample(4);
errorhandlingexample(5);

// Example 3: Sequential Async Operations (Chaining Dependent Tasks)

function fetchuser(userId){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve( {id:userId, name:"vinod"});
     },8000);
    })
};

function postuser(user){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`post 1 by ${user.name} , post 2 by ${user.name}`);
        },8000);
    })
};

async function sequentialOperations(userval){
    try{
        const newfetchuser = await fetchuser(userval);
        console.log("the fetch user answer is", newfetchuser);

        const newpostuser = await postuser(newfetchuser);
        console.log("the post user ka answer is ", newpostuser);

    }
    catch(error){
        console.log("the sequentialOperations ka error is", error);
    }
}

sequentialOperations(1);
// work flow above example sequentialOperations(1) this function is called and argument is passed as 1 , now async function sequentialOperations(userval) the flow of execution comes to here the parameter userval consist (1) now we are assign   const newfetchuser = await fetchuser(userval); the function to the variable the function fetchuser(userval) here the function fetchuser is called and the parameter 1 is passed to the function fetchuser as userId now we are assining value (1) to the key id and  this is printed the fetch user answer is { id: 1, name: 'vinod' }    ,,   now the function postuser is called we are passing the object newfetchuser{ id:1 name:vinod} now this object is passed to the postuser as a parameter , in the function postuser we access the value of the name key which is vinod no when we print the newpostuser we get value of that object basically we get the key name ka value which is vinod 

// Example 4: Running Promises in Parallel with Promise.all and Async/Await

function usingmap (data){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
           resolve(`data is ${data}`);
        },9000);
    })
};

async function mapkausekarke(){
   try{
    const arrmap = ["item1" , "item2", "item3" , "item4"];
    let newarr = arrmap.map((items)=>{
         return usingmap(items);
    });
    const alls = await Promise.all(newarr);
    console.log("the all the arrays value", alls);
   } catch(error){
    console.log("the error in using map function in async ", error);

   }
};

mapkausekarke();  // the all the arrays value [ 'data is item1', 'data is item2', 'data is item3', 'data is item4' ] output 


//Example 5: Using Async/Await in a Function that Returns a Value
async function additionoftwo(a,b){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve(`"the addition of two numbers:", ${a + b}`);
         },15000);
    })
};

async function somechecks(num1 , num2){  //these num1 , num2 parameters are passed as a arguments in additionoftwo
    try{
        const sums = await additionoftwo(num1,num2);
        console.log(sums);
         return sums;
    }
    catch(errors) {
       console.log("the errors for somechecks function is", errors);
    }
};

somechecks(9,9);


somechecks().then(result => {
        console.log("Final result received:", result);
       });
// An async function that simulates a calculation with a delay
// async function calculateSum(a, b) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(a + b);
//       }, 800);
//     });
//   }
  
//   async function processCalculation() {
//     try {
//       // Await the result of calculateSum
//       const sum = await calculateSum(10, 20);
//       console.log("Calculated sum:", sum);
//       return sum; // The async function returns a promise that resolves with the sum
//     } catch (error) {
//       console.error("Error in calculation:", error);
//     }
//   }
  
//   // Use the async function and handle its promise
//   processCalculation().then(result => {
//     console.log("Final result received:", result);
//   });
  