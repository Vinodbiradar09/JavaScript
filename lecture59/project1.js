// let newobj ={
//     name:"vinod biradar",
//     address:"bangalore",
//     age:22,
//     work:"student"
// };

// for (code in newobj){
//     console.log(code);
// }


const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (select of dropdowns){
    for(currCode in countryList){
        let newoptions = document.createElement("option");
        newoptions.innerHTML = currCode;
        newoptions.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newoptions.selected = "selected";
        }  else if( select.name === "to" && currCode === "INR"){
                newoptions.selected = "selected";
        }
        select.append(newoptions);
    }
    select.addEventListener("change",(evt)=>{
       updateFlag(evt.target); 
    });
    // select.addEventListener("change", (evt) => {
    //     updateFlag(evt.target);
    // });
   
}
// let a = 10 , b = "10"  ,  a === b ,true  

const updateFlag = (element)=>{
 let currCode = element.value;

 let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
  
};
btn.addEventListener("click", async (evt)=>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtval = amount.value;
   if(amtval === "" || amtval < 1){
    amtval = 1;
    amount.value = "1";
   }
//    console.log(fromCurr.value);
//    console.log(toCurr.value);
   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
   let response = await fetch(URL);
   let data = await response.json();
   let rate = data[toCurr.value.toLowerCase()];
   
   let finalAmount = amtval * rate;
   msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
})


