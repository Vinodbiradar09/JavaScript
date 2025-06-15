// we will discuss about promise in js 
// promise in js means ; it is an object is used to handle the completion or failure of the asynchronus code , it is used to handle the returning value and the completion state 
// a promise has three parts , 1: pending: it is intial state , 2:fulfilled: the async code is successfully completed , 3:rejected: the async code is rejected 

// now we are creating a promise using new promise constructor which takes two parameters and function (parameters are resolve and reject)
// this is promise using synchronus code 
let firstpromise = new Promise((resolve , reject ) =>{
     console.log("love babbar");
     resolve("this is suceesful");

     reject(new Error ("this is an error"));
});

// now we will create a promise using asynchronus code 
function sayname (){
    console.log("this is the love babbar");
}
let secondpromise = new Promise((resolve ,reject) =>{
     setTimeout(sayname,5000);
     resolve("this is printed ")
});

// 

let thirdpromise = new Promise((resolve , reject) =>{
     const success = true;
     if(success){
        resolve("promise is successfull");
     }  else {
        reject("promise is unsuccessfull");
     }
});

// we can apply then and catch methods using promise , the then method is used for success for promise and the catch method is used for the failure of the promise , it is used for handling the return value of the promise 

thirdpromise.then((result) =>{
    console.log("then ka message" + result);
})
thirdpromise.catch((failure) =>{
    console.log("catch ka message" +failure);
})
// agar promise successfull hogaya tho resolve ka message hai whoo then pai ayaga , agar failure hu tho catch pai jayega 

// we will discuss about promise chaining , it means we can add multiple then methods to the promise 

let promise1 = new Promise((resolve,reject) =>{
    const sus = true;
    if (sus){
        resolve("the async promise successfull ");
    }
    else {
        reject("the async promise unsuccessfull")
    }
});

promise1.then((message) =>{
    console.log("first  msg", message);
    return "second then ka"
}).then((message) =>{
   console.log("second msg", message);
   return "third then ka"
}).then((message) =>{
    console.log("third msg", message);
})
// work flow here sus is true then the promise state is resolve or fulfilled , now then method gets "the the async promise successfull" this msg now it is passed to the then and printed now the first then returns the new msg , now the second then prints the msg and it returns new msg 
promise1.catch((error) =>{
    console.log(error);
})

promise1.finally((msg) =>{
    console.log("main tho finally hun , mai hamesha chalunga chaye whooo resolve ho ya reject ho");
})

// now we will discuss about promise.all , it is used to handle multiple promise simultaneously it creates a new promise which contains a array of all promise it waits for all the promise to be fullfilled if any one promise in rejected then it rejects the promise 

let promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000 , "second");
})

let promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve,2000 , "third");
})

let promise4 = new Promise((resolve, reject) =>{
    setTimeout(resolve,4000 ,"fourth")
})

Promise.all([promise2,promise3,promise4])
.then(( values) =>{
     console.log(values);
})

// here we are accessing the new promise.all , here all the promise are resolved so the new promise is successfully printed 

// revision of the promise 

// promise is a object in js it returns two states eithere fulfill or rejected 

function whethereApi(){
    return new Promise ((resolve , reject) =>{
     setTimeout(() =>{
         const sunnny = Math.random() ;
             if(sunnny >0.5){
                 resolve("this is hot ");
             }
             else{
                 reject("this is cold");
             }
      },2000);
    })
    
 
 };
 whethereApi().then( (res) =>{
    console.log("it is hot day:", res)
 }).catch((error)=>{
    console.log("it is cold day:", error);
 })
 

 const pro = new Promise ((resolve, reject) =>{
    setTimeout(function(a,b){
      console.log("this is promise", a+b);
    },4000,4,4);
    
    resolve("this is mast");
    reject("this is worst");
 });
 pro.then((res)=>{
console.log("input is received in data:", res);
 }).then((res)=>{
    console.log("the data is fetched:");
 }).catch((err)=>{
    console.log("the heavy network error", err);
 });

//  note when we create a promise we should pass the function for that function 


