// now we will discuss about fetch api , the fetch api is used to fetch or get the data from the servers or other websites , API:- means application programming interface , it is used for fetching resources (like JSON data, HTML, images, etc.) , it returns a promise that resolve or rejects  the resopnse from the api is in the form of object , the data is in the form of Json(java script object notation) and we need to parse it 
// It is promise-based, making it easier to handle asynchronous operations.
// now we will see one basic example we are using get request from 

async function getdata1(){
    let URL1 = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    let res1 = await URL1.json();
    console.log("fetching the data from getdata1", res1);
};

getdata1();  // the data is fetched from the above api link , we need to parse the result becos it is in json form and we parse it in the javascript object 

// anothere example 

const getdata2 = async () => {
    let URL2 = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
    let res2 = await URL2.json();
      console.log("fetching the second data from getdata2" , res2);
};

getdata2();

// now we will see a example for post request using promises

const newuser ={
    username: "JohnDoe",
    email: "john@example.com",
    password: "secure123"
};

fetch("https://jsonplaceholder.typicode.com/users", {
    method:"POST",  // it is used to post the new user 
    headers:{
        "Content-type":"application/json"  // telling server we are sending the json 
    }, 
    body:JSON.stringify(newuser)  // converting javascript object to the JSON string 
})
  .then((res)=>{
      if(!res.ok){
        throw new Error ("failed to post the user details");
      }
       return res.json();
  }) .then((data)=>{
     console.log("posting the user details to server:", data);
  }) .catch((error)=>{
    console.log("there is an error in posting the details:", error);
  });

//   We define a newUser object containing the user’s data.
//   We call fetch() with the target URL and specify the method as "POST".
//   The headers indicate that the request body is JSON.
//   The body is prepared by stringifying the newUser object.
//   We then check if the response is successful, parse it, and log the result.
  
// Example 2: Basic PUT Request
// using PUT method we are updating the data or sending the updated data to the specified url which consist of resources 

const updateresources = {
    username : " Bharg Kale",
    email :" bharg@com.in",
    password : "Bharg1234",
};

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method:"PUT",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(updateresources),
})
.then((res)=>{
   if(!res.ok){
    throw new Error("there is an error we cant put the request");
   }
   return res.json();
}).then((data)=>{
     console.log("using put request we are successfully updated the request:", data);
}).catch((error)=>{
   console.log("there is an error in the put request:", error);
});
// output using put request we are successfully updated the request: {
//   username: ' Bharg Kale',
//   email: ' bharg@com.in',
//   password: 'Bharg1234',
//   id: 1
// }

// Example 3: POST Request Using Async/Await
const postreq = {
    name: "Laptop",
  price: 999,
  category: "Electronics"
};

async function createproduct(){
    try{
     const URL3 = await fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify(postreq),
     });
      if(!URL3.ok){
        throw new Error("this is error for the createproduct");
      } 

      const product = await URL3.json();
      console.log("the new product is created for the createproduct function:", product);

    } catch(error) {
         console.log("there is an error in the create product ", error);
    }
};
createproduct();

// Example 4: PUT Request Using Async/Await with Error Handling
const updatedProduct = {
  name: "Laptop Pro",
  price: 1299,
  category: "Electronics"
};

async function updateproduct (){
  try{
    const URL4 = await fetch("https://jsonplaceholder.typicode.com/users/4", {
        method: "PUT",
        headers : {
           "Content-type":"application/json"
        },
        body : JSON.stringify(updatedProduct),
   });
   if(!URL4.ok){
    throw new Error("this is an error for the updatedproduct");
   } 
    

   const result = await URL4.json();
   console.log("the upadted product details for the url is " , result);

  } catch(errors){
      console.log("there is an error for the updateproduct function", errors);
  }
}
updateproduct();

// Example 5: Combining Multiple Fetch Calls with POST and PUT

const newUserData = {
    username: "NewUser",
    email: "newuser@example.com",
    password: "initialPass"
};

const updatedUserData = {
    username: "NewUserUpdated",
  email: "newuser_updated@example.com",
  password: "updatedPass"
};

async function createAndUpdateUser(){
    try{
        const URL5 = await fetch(" https://jsonplaceholder.typicode.com/users", {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(newUserData),


        });
        if(!URL5.ok){
            throw new Error("there is an error is a createAndUpdateuser function");
        }
            
        const newres = await URL5.json();
        console.log("the updated details for the function createAndUpdateUser", newres);

        const URL6 = await fetch("https://jsonplaceholder.typicode.com/users/6",{
            method : "PUT",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(updatedUserData),


        });

        if(!URL6.ok){
            throw new Error("there is an error for put req in createAndUpdateuser ");
        }
        const newresp = await URL6.json();
        console.log("the put request is successfull for the createAndUpdateuser",newresp);
    } catch (error){
       console.log("there is an error in the createAndUpdateUser function " , error);
    }
};
createAndUpdateUser();
// now we will see about delete request in api , we just specify the id or any certain details for deleting the request 
fetch("https://jsonplaceholder.typicode.com/users/8", {
    method: "DELETE"  // Using DELETE to remove the resource
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Deletion failed: " + response.status);
      }
      return response.json();  // Some APIs return a confirmation message or the deleted resource
    })
    .then(data => {
      console.log("User deleted successfully:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  
// now this is how fetch post put api calls work in js i hope this is best examples for understanding it 


// now we will learn about ajax in javascript 
// ajax means asynchronus javascript and XML is called ajax it returns promises , the ajax calls are used to fetch the data or post hte data to the specified Url
// AJAX (Asynchronous JavaScript and XML) allows you to send and receive data from a server asynchronously. Modern implementations typically use JSON instead of XML.

// It allows you to request data (like new content, user details, etc.) from the server and update your page dynamically. This is achieved through asynchronous HTTP requests.

// Asynchronous Communication:
// When you use AJAX, a request is sent to the server, and your web page can continue to be interactive while waiting for the server’s response.

// No Full Page Reload:
// Only the necessary data is fetched, and then parts of the page (DOM elements) are updated with the new data.

// Underlying Technology:
// AJAX is implemented using JavaScript. Traditionally, it was done using the XMLHttpRequest object, but now the Fetch API is a modern alternative.

// example for AJAX using XML files 
// what does AJAX do ? 
// it sends the data to the servers , it retrives the data form the servers , and it updates the content of the webpages 
// key components of AJAX 
// APIs:

// XMLHttpRequest (XHR): Older method (still used).

// Fetch API: Modern replacement for XHR (uses Promises).

// Data Formats:

// JSON (most common): { "name": "John", "age": 30 }

// XML (less common today): <user><name>John</name></user>

// How AJAX Works (Step-by-Step)
// Event Trigger: A user action occurs (e.g., clicking a button, scrolling).

// AJAX Request:

// JavaScript sends a request to a server (e.g., fetch("https://api.example.com/data")).

// The request happens asynchronously (in the background).

// Server Processing: The server handles the request (e.g., fetches data from a database).

// Response: The server sends data back (usually as JSON).

// Update Page: JavaScript processes the response and updates only part of the page.

// AJAX Flow

// now we will see the example 

// const xhr = new XMLHttpRequest()
// xhr.open("GET" , "https://jsonplaceholder.typicode.com/users");
// xhr.onload = function (){
//   if(xhr.status >= 200 && xhr.status <300){
//     const data = JSON.parse(xhr.response);
//     console.log("the data is fetched for AJAX request successfull:", data);
//   }  else {
//     console.log("there is an error in AJAX request", xhr.statusText);
//   }
// };
// xhr.onerror() = function (){
//   console.log("there is an error in ajax request");
// };
// xhr.send();

// this is how we use traditional ajax request 


