// now we will discuss about async await in js 
// async await is used for async code to behave as a synchronus code ,, hum async await use karke asynchronus code ko bhi synchronus code ki taraha behave kar sakte hai 
// async function is declared with async keyword and it tells that it performs a async operations and it returns a promise 
// await keyword can be used in only async function only we have to mark the the async keyword to the function before using the await keyword 
// await keyword is used to pause the execution until it receives the data or the promise that may be resolved or rejected , using await keyword async code also behaves as a synchronus code only 

// sync code 
// async code   here this is the async code and i want it to behave as a synchronus code the i have to mark the it await , basically our flow of execution completes at a sync code and then it comes to the async code now this async code should be completed successfully then only the flow of execution should be given to next line 
// sync code 

// now we will write the first async code 

async function  getdata () {
    setTimeout(() => {
        console.log("this is async code");
    }, 3000);

    
}
getdata();

// this is the first async code 

async function getdatas (){
    setTimeout (function (){
        console.log("this is love babbar's async code");
    }, 5000)
};

 let output = getdatas();
 console.log(output);
 
// this is the second async code 

// note async function hamse ek promise return karta hai 

// we will discuss about fetch api in js 
// the fetch api is used to fetch or get the data or resource across the network , the fetch api used for getting the data and put the data and post the data 

// when ever are we are fetching data or making network call we should use async function and await keyword , now we will fetch the data 

async function fetchdata(){
    // when we are get or fetching the data it is async operation so we marks here await , make sure we can use await only in async function only 
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //   here json is a javascript object notation when we fetch the data we need to convert it into the json or we should parse the data in json 
    let data = await response.json();
    console.log(data );
}
fetchdata();
// this how we retirve the data using fetch api 

// scenario 
// 1. prepare url / api endpoint  sync code 
// 2. await ,,,, fetch data -> network call async code 
// 3.process data  ->sync code 
// here first we are fetching the data from the network 
// then we waits for the reterving the data until the data is received 
// now the received data is being is processed 

// now we will see anothere example 

async function fetchdata1(){
    let response1 =  await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data1 = await response1.json();
    console.log( "fetching data1:",data1);
}
fetchdata1();

async function fetchdata2(){
    let response2 = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    let data = await response2.json();
    console.log("fetching the data2:", data);
}
fetchdata2();
// now we understood how using async function and await keyword the async code is converted into the sync code and learnt how to fetch the api and retrive the data 

// async function solve (){ // now our flow of execution comes to the solve function ,
//     let a = await fetch('something we are fetching');  // now flow of execution is in a variable using await keyword we are waiting untill the promise is returned the promise may be fullfilled or rejected this line of code runs untill it gets the data 
//     let b = await  fetch('something we are fetching'); // same as this line , it will run untill we recive the data 
//     let c =  await fetch('something we are fetching'); 
// }

// what is post request and we will discuss about post request in js 
// a post request in js is used to send the data to the server to create or update the resource , unlike get request retirves the data , post request carries out the data to the server , a post request carries the data in its body 

// What Is a POST Request?
// Purpose:
// A POST request is used to send data to a server. For example, when a user fills out a registration form, the data (like username, email, and password) is sent to the server via a POST request to create a new account.

// Key Characteristics:

// Data in Request Body:
// The data is included in the body of the request rather than in the URL.
// Creates/Updates Resources:
// It is typically used to create a new resource or update an existing one on the server.
// Not Idempotent:
// Unlike GET requests (which can be repeated without side effects), POST requests can produce different results each time they are made (for example, creating multiple entries).

const data = {
    username: "Bharg kale",
    email: "bharg@gmail.com",
    password: "bharg cooked another one"
  };
  
  async function postData() {
    try {
      // Send a POST request to the server
      const response = await fetch("https://api.example.com/register", {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json" // Set the content type to JSON
        },
        body: JSON.stringify(data) // Convert the data object to a JSON string
      });
  
      // Check if the response is OK (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse the response as JSON
      const result = await response.json();
      console.log("Server response:", result);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  }
  
  postData();

//   we need to learn post api and put api and delete api see videos half knowledge is gained 
  