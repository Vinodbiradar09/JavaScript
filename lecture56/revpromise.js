// now we will create some promises for better understanding of promises 

// 1.basic promise that resolve after time out 



function basicprom(){
    const bsprom = new Promise((resolve,rej)=>{
        setTimeout(() => {
            console.log("run after one sec:");
            resolve("it runs after one sec hence promise is resolved or fullfilled");
        }, 1000);
    })
    return bsprom;
    // here return bsprom is returned becoz when we use then method or function it is used for the Promise so we stored the promise into the variable called bsprom , so the function returns the bsprom now we can use the then method to the function 
};


basicprom().then((message)=>{
   console.log("the answer is:", message);
});

// 2.now we create the promise using the conditions based on the condtion the promise returns the state 

function promisenewmethod(){
   let somepromise = new Promise((resolve , reject)=>{
   setTimeout((a,b) => {
      if(a+b == 8){
        resolve("this is the resolve state and i love it:");
      }  else {
        reject("this is reject state and i hate this");
      }
   }, 3000,4,4);
   })
   return somepromise
//    here we are returning the promise 
};

promisenewmethod().then((res)=>{
  
        console.log("we achived the promise", res);
    
}).then(()=>{
    console.log("these are the way to handle the promises:");
}).catch((error)=>{
    console.log("there is some error",error)
});

// 3.Basic Promise that Rejects Based on a Condition

function number(num){
    return new Promise ((resolve,reject)=>{
      setTimeout (()=>{
        if( num % 2 === 0){
            resolve(`${num} is even`);
        } else {
            reject(`${num} is odd`);
        }
      },5000);
          
    })
};

number(5).then((mes)=>{
    console.log("this is then block and number is even", mes);
}).catch((err)=>{
    console.log("this catch block and the number is odd",err);
});

// 4.  Promise Chaining now we will create the promise chaning 

function chaning(x,y){
     return new Promise ((resolve , reject)=>{
          setTimeout(()=>{
         console.log("learn promises");
         resolve ( x + y);
            },7000);
          
     })
};

chaning(1,2)
.then((res1)=>{
    console.log("the result is ", res1);
    return chaning (res1,3);
}) 
.then((res2) =>{
    console.log("the result is ", res2);
    return chaning(res2,4);
})
.then((res3)=>{
    console.log("the result is ", res3);
})
.catch((error) =>{
  console.log("there is some error", error);
})

// 5. Using Promise.all for Parallel Execution

let promise1 = new Promise((resolve, reject) =>{
    setTimeout((n,m)=>{
       let sum = n *m;
       if(sum ===1){
        resolve(`this is data ${sum}`);
       } else {
        reject("erorrrrrrrrrrrr");
       }
    },100,1,1); // here 1 ,1  is arguments for the settimeout function
});
let promise2 = new Promise((resolve, reject) =>{
    setTimeout((n,m)=>{
       let sum = n *m;
       if(sum ===2){
        resolve(`this is data ${sum}`);
       } else {
        reject("erorrrrrrrrrrrr");
       }
    },100,1,2); // here 1 ,1  is arguments for the settimeout function
});
let promise3 = new Promise((resolve, reject) =>{
    setTimeout((n,m)=>{
       let sum = n *m;
       if(sum ===3){
        resolve(`this is data ${sum}`);
       } else {
        reject("erorrrrrrrrrrrr");
       }
    },100,1,3); // here 1 ,1  is arguments for the settimeout function
});


  let allprom = Promise.all([promise1 , promise2, promise3])
allprom.then((mess)=>{
   console.log("here are the all promises:",mess);
});

// here three promises are created and the new promise (promises.all waits untill all the promises beocmes fullfiled); and it returns in array 


// nothere example for promise.all 

function newfetch (id){
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`collecting data ${id}`);
        }, 22000);
   })
};

const ids =[ 1,2 ,3];

Promise.all(ids.map((id)=>{
      return newfetch(id);
}))
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log("some bullshit error", error);
})

// anothere example Fetching Data in Parallel Using Promise.all

function fetchDatainternet (urls){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(`data from ${urls}`);
        },10);
    })
};

const urls = ["https://api.example.com/data1", "https://api.example.com/data2", "https://api.example.com/data3"];

Promise.all(urls.map((url)=>{
    return fetchDatainternet(url);
}))
.then((newurls)=>{
    console.log("fetchex from api",newurls)
})
.catch(()=>{
    console.log("error");
    
});

// checking for odd or even 


function evenodd (){
    return new Promise((resolve, reject)=>{
       setTimeout (()=>{
        let randnum = Math.random() * 10;
         let newrand = Math.floor(randnum);
            if (newrand % 2 == 0){
                resolve(`this is even number, ${newrand}`);
            }  else {
                reject(`this is odd number, ${newrand}`);
            }
       },0)  // here the timeout is given 0 it means it runs after that 
    });
};

evenodd().then((result)=>{
   console.log("this is fullfilled ", result);
   
}).catch((errors)=>{
    console.log("this is rejected", errors)
});

// last and best code for promises , Delayed Random Number

function delayrandomnumbers(){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        resolve(randomNumber);
      }, 25000);
    });
};

delayrandomnumbers().then((num1)=>{
  console.log("first number", num1);
  return delayrandomnumbers().then((num2)=>{
     return  [num1, num2];
  }).then(([num1 ,num2])=>{
       console.log("second number", num2);
       return delayrandomnumbers().then((num3)=>{
       return [num1,num2,num3];
       }) 
  }).then(([num1,num2,num3])=>{
    console.log("third number", num3);
    const sum = num1 + num2 + num3;
    console.log("sum of all the numbers is:", sum);
  })
})
.catch((error)=>{
console.log("error",error);

});

// this is all about promises 

