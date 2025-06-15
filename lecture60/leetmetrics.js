document.addEventListener("DOMContentLoaded" , function(){
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");




  function validateUsername(username){
      if(username.trim() === ""){
        alert("username can't be empty");
        return false;
      }
      const regex = /^[a-zA-Z0-9_-]{1,15}$/;
      const isMatching = regex.test(username);
      if(!isMatching){
        alert("invalid username");
      }
      return isMatching;
  }

  async function fetchUserDetails(username){
    try{

        searchButton.textContent = "Searching...";
        searchButton.disable = true;

       const targetUrl = `https://leetcode-stats-api.herokuapp.com/${username}`;
       const resopnse = await fetch(targetUrl);

       if(!resopnse.ok){
        throw new Error("enable to fetch the data");
        
       }
       const parsedData = await resopnse.json();
       console.log("the data received..." ,parsedData);
       displayUserData(parsedData);

    }
    catch(error){
        statsContainer.innerHTML = `<p> ${error.message} </p>`;


    }
    finally{
        searchButton.textContent = "Search";
        searchButton.disable = false;

    }
  }

  function updatedUserData(solved, total , label , circle){
      const progressDegree = (solved/total) * 100;
      circle.style.setProperty("--progress-degree", `${progressDegree}%`);
      label.textContent = `${solved} / ${total}`;
  }
    // Logging data:  {status: 'success', message: 'retrieved', totalSolved: 227, totalQuestions: 3480, easySolved: 72, …}acceptanceRate: 61.15contributionPoints: 350easySolved: 72hardSolved: 39mediumSolved: 116message: "retrieved"ranking: 484418reputation: 0status: "success"submissionCalendar: 1730246400: 131730332800: 41730419200: 11730505600: 30[[Prototype]]: ObjecttotalEasy: 864totalHard: 807totalMedium: 1809totalQuestions: 3480totalSolved: 227[[Prototype]]: Object
  function displayUserData(parsedData){
       const totalQues = parsedData.totalQuestions;
       const totalEasyQues = parsedData.totalEasy;
       const totalMediumQues = parsedData.totalMedium;
       const totalHardQues = parsedData.totalHard;


       const solvedTotalQues = parsedData.totalSolved;
       const solvedTotalEasyQues = parsedData.easySolved;
       const solvedTotalMediumQues = parsedData.mediumSolved;
       const solvedTotalHardQues = parsedData.hardSolved;


       updatedUserData(solvedTotalEasyQues, totalEasyQues , easyLabel , easyProgressCircle ); // for easy
       updatedUserData(solvedTotalMediumQues , totalMediumQues , mediumLabel ,mediumProgressCircle);
       updatedUserData(solvedTotalHardQues , totalHardQues , hardLabel , hardProgressCircle );

       const cardsData = [
        {label:"OverAll Submissions" , value:parsedData.totalSolved},
        {label:"OverAll Easy Submissions" , value:parsedData.easySolved},
        {label:"OverAll Medium Submissions" , value:parsedData.mediumSolved},
        {label:"OverAll Hard Submissions" , value:parsedData.hardSolved},
       ];
       console.log("the cards details..." , cardsData);


    //    cardStatsContainer.innerHTML = cardsData
    //    .map((data) => {
    //      return `<div class="card">
    //                <h4>${data.label}</h4>
    //                <p>${data.value}</p>
    //              </div>`;
    //    })
    //    .join("");

       
       cardStatsContainer.innerHTML = cardsData
  .map((data) => {
    return `<div class="card">
              <h4>${data.label}</h4>
              <p>${data.value}</p>
            </div>`;
  })
  .join("");  // using map method we printed one by on details 

     
    //    cardStatsContainer.innerHTML = cardsData
    //    .map(
    //      data => `<div class="card">
    //                  <h4>${data.label}</h4>
    //                  <p>${data.value}</p>
    //               </div>`
    //    )
    //    .join("");




  }

 
   
    
   
    // https://leetcode-stats-api.herokuapp.com/$

   
    // check madtin validateUsername yenre empty ada yen anth empty idre alert msg madtin , matt check madtin regex lind username correct ada yen ila anth  invalid username itu andre invalid anth print madtin 

    searchButton.addEventListener("click", function(){
        const username = usernameInput.value;
        console.log("printing username:" , username);
        if(validateUsername(username)){
            fetchUserDetails(username);

        }
        

    });


//    button mel addevent listner hakin and input tag lind access madin value 
})