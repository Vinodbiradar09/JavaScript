// now we will discuss about event listners 

// now we are creating a eventlistner for the <p> element 

function changeText () {
    // this is function or action for the event 
    let element = document.querySelector("#fpara");
     element.textContent ="Hello Babbar";
    //  here we used the textContent property for the changing the content of the element , when we the event is clicked 
}

const newelement = document.getElementById("fpara");
newelement.addEventListener("click", changeText);
// here we used the element id in the newelement , and in newelement we added the eventlistner , here we are passed the type of event :- click and the function or action is passed 

// newelement.removeEventListener("click", changeText); , this is used to remove the eventlistener for that element here we need to pass the accurate function ka reference , what we passed durning the addeventlistner 

// make sure we write the function for the event seperatly , if we write like below code when we try to remove the event listener we must the exact reference , if we want to remove the event and pass the function reference then it works , if we passed the whole fuction the then the reference will be different 
// newelement.addEventListener("click", function changeText () {
//     // this is function or action for the event 
//     let element = document.querySelector("#fpara");
//      element.textContent ="Hello Babbar";
//     //  here we used the textContent property for the changing the content of the element , when we the event is clicked 
// });
// when we are removing the eventListener we must pass the same reference which is passed durning the addEventListener , 


// anothere example 


const changeproducer = () =>{
    let elem = document.querySelector("#spara");
    elem.textContent = "Bharg is best";
}

const elem = document.getElementById("spara");
elem.addEventListener("mouseover",changeproducer);
// now here , when we hover on the mouse the text is changed 


// now we will discuss about event objects ,, event objects are created and passed to eventListeners function when the event is occured , it holds the details of the such as type of event:- click , target element 
// basically event object it holds all the information of the event , it is created when the event is called or perform action , the event object is passed has a parameter for the eventlistener function 

// When an event occurs (like a click), the browser creates an event object that contains information about that event (e.g., the type of event, which element was clicked, etc.).
// This event object is then passed as an argument to your event handler function. In your code, this is represented by the parameter event.

function eventobjects (event) {
   console.log(event);
   let elemobj = document.getElementById("eventobj");
   elemobj.textContent = "event object contains the details of event";

}
let elemobj = document.getElementById("eventobj");

elemobj.addEventListener("click", eventobjects);

// now the event parameter holds the the details of the event ,, here when we click on the text the event object is created and the text is changed , the event object is passed as the parameter for the addeventlistners 


// now we will discuss about default action 
// suppose we have an <a> anchor tag , the default behaviour of the anchor tag is to take provide URL or new website ,this is behaviour of anchor tag , 
// using preventMethod() we change the default behaviour of the element , the default action of any element is changed using this method 
// <div> <a id = "fanchor" href="www.codehelp.in"> </a> </div> , html code we have an anchor tag that directs to the code help website it is the normal behaviour of the anchor tag 

// {/* <div>
//         <a id="fanchor" href="https://www.codehelp.in/">Code help</a>
//      </div> */}
const defaultaction = function (event){

    event.preventDefault();
    let fanchor = document.getElementById("fanchor");
    fanchor.textContent= "click done bhai"
  
}
let fanchor = document.getElementById("fanchor");
fanchor.addEventListener("click", defaultaction);
//  The reason we use event.preventDefault() instead of something like fanchor.preventDefault() is because preventDefault() is a method on the event object, not on the DOM element itself., preventDefault() is a method available on the event object. Its purpose is to stop the browser from executing the default action that it would normally do when that event occurs.,, so the preventdefault method is used for the event not for the variable which holds the reference of the dom element 

// now the default behaviour of anchor tag is prevented now it dont redirect to the codehelp website 


// now we will discuss about avoiding to many listeners 

 