// now we will discuss about callback hell in js generally callback hell is not used much becoz of code readability and length syntax 
// what is callback hell in js imagine we have three tasks and we have to run these tasks sequnential one after one ,and the each task depends on the previous task if we use callback (it passes function as a argument) it called the callback hell , passing function as arguments it becomes to hard it is called callback hell


// example 



function newdata ( dataID,getnextdata){
    setTimeout(function getdata (){
        console.log("data", dataID );
        if(getnextdata){
            getnextdata();
        }
    },3000);
}

newdata(1, () =>{
    console.log("getting second data");
    newdata(2,() =>{
        console.log("getting third data");
        newdata(3,() =>{
            console.log("getting fourth data");
            newdata(4);
        })
    })
})

// this is callback were callback functions are nested in one anothere which is not readable 

// anothere example 

function food (pizza , fires){
    setTimeout(() => {
        console.log("pizzas:", pizza);
        if(fires){
            fires();
        }
    }, 15000);
};

food(1,()=>{
    console.log("preparing second pizza");
    food(2,()=>{
        console.log("preparing third pizza");
        food(3, ()=>{
            console.log("preparing fourth pizza");
            food(4);
        })
    })
});
// this is all about call back hell it is not used much 