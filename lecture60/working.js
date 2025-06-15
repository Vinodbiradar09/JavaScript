document.addEventListener("DOMContentLoaded", function() {


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

    //return true or false based on a regex
    function validateUsername(username) {
        if(username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {

        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            //statsContainer.classList.add("hidden");

            // const response = await fetch(url);
          
            const targetUrl = `https://leetcode-stats-api.herokuapp.com/${username}`
            
            // const myHeaders = new Headers();
            // myHeaders.append("content-type", "application/json");

            // const graphql = JSON.stringify({
            //     query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
            //     variables: { "username": `${username}` }
            // })
            // const requestOptions = {
            //     method: "POST",
            //     headers: myHeaders,
            //     body: graphql,
            // };

            const response = await fetch(targetUrl);
            if(!response.ok) {
                throw new Error("Unable to fetch the User details");
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData) ;

            displayUserData(parsedData);
        }
        catch(error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    // Logging data:  {status: 'success', message: 'retrieved', totalSolved: 227, totalQuestions: 3480, easySolved: 72, …}acceptanceRate: 61.15contributionPoints: 350easySolved: 72hardSolved: 39mediumSolved: 116message: "retrieved"ranking: 484418reputation: 0status: "success"submissionCalendar: 1730246400: 131730332800: 41730419200: 11730505600: 30[[Prototype]]: ObjecttotalEasy: 864totalHard: 807totalMedium: 1809totalQuestions: 3480totalSolved: 227[[Prototype]]: Object

    function displayUserData(parsedData) {
        // Directly access the properties from parsedData
        const totalQues = parsedData.totalQuestions;    // was: parsedData.Loggingdata.totalQuestions.count;
        const totalEasyQues = parsedData.totalEasy;       // was: parsedData.Loggingdata.totalEasy.count;
        const totalMediumQues = parsedData.totalMedium;   // was: parsedData.Loggingdata.totalMedium.count;
        const totalHardQues = parsedData.totalHard;       // was: parsedData.Loggingdata.totalHard.count;
    
        const solvedTotalQues = parsedData.totalSolved;   // was: parsedData.Loggingdata.totalSolved.count;
        const solvedTotalEasyQues = parsedData.easySolved;  // was: parsedData.Loggingdata.easySolved.count;
        const solvedTotalMediumQues = parsedData.mediumSolved; // was: parsedData.Loggingdata.mediumSolved.count;
        const solvedTotalHardQues = parsedData.hardSolved;  // was: parsedData.Loggingdata.hardSolved.count;
    
        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);
    
        // Adjusting cardsData – since your log shows a flat structure,
        // and you seem to be accessing data in a nested "data.matchedUser" object,
        // here’s one way to use the top-level values instead:
        const cardsData = [
            { label: "Overall Submissions", value: parsedData.totalSolved },
            { label: "Overall Easy Submissions", value: parsedData.easySolved },
            { label: "Overall Medium Submissions", value: parsedData.mediumSolved },
            { label: "Overall Hard Submissions", value: parsedData.hardSolved },
        ];
    
        console.log("Card data:", cardsData);
    
        cardStatsContainer.innerHTML = cardsData
          .map(
            data => `<div class="card">
                        <h4>${data.label}</h4>
                        <p>${data.value}</p>
                     </div>`
          )
          .join("");
    }
    

    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("logggin username: ", username);
        if(validateUsername(username)) {
            fetchUserDetails(username);
        }
    })

})

// Logging data:  {status: 'success', message: 'retrieved', totalSolved: 227, totalQuestions: 3480, easySolved: 72, …}acceptanceRate: 61.15contributionPoints: 350easySolved: 72hardSolved: 39mediumSolved: 116message: "retrieved"ranking: 484418reputation: 0status: "success"submissionCalendar: 1730246400: 131730332800: 41730419200: 11730505600: 30[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()totalEasy: 864totalHard: 807totalMedium: 1809totalQuestions: 3480totalSolved: 227[[Prototype]]: Object


// async function createAndUpdateUser(){
//     try{
//         const URL5 = await fetch(" https://jsonplaceholder.typicode.com/users", {
//             method : "POST",
//             headers : {
//                 "Content-type" : "application/json"
//             },
//             body : JSON.stringify(newUserData),


//         });
//         if(!URL5.ok){
//             throw new Error("there is an error is a createAndUpdateuser function");
//         }
            
//         const newres = await URL5.json();
//         console.log("the updated details for the function createAndUpdateUser", newres);

//         const URL6 = await fetch("https://jsonplaceholder.typicode.com/users/6",{
//             method : "PUT",
//             headers:{
//                 "Content-type":"application/json"
//             },
//             body: JSON.stringify(updatedUserData),


//         });

//         if(!URL6.ok){
//             throw new Error("there is an error for put req in createAndUpdateuser ");
//         }
//         const newresp = await URL6.json();
//         console.log("the put request is successfull for the createAndUpdateuser",newresp);
//     } catch (error){
//        console.log("there is an error in the createAndUpdateUser function " , error);
//     }
// };