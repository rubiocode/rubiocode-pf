let allEl=document.querySelector("#all");

let proj1El=document.querySelector("#proj1");

let proj2El=document.querySelector("#proj2");

let proj4El=document.querySelector("#proj4");

let proj5El=document.querySelector("#proj5");

let results= document.querySelector("results");

let makeMyDayAppEl= document.getElementById("makeMyDayApp");

let weatherDashboardEl= document.getElementById("weatherDashboard");

let passwordGeneratorEl= document.getElementById("passwordGenerator");

let dayPlannerEl= document.getElementById("dayPlanner");

let triviaGameEl= document.getElementById("triviaGame");

let portfolioEl= document.getElementById("portfolio");

allEl.addEventListener('click', ()=>{
    makeMyDayAppEl.style.display= "";
    weatherDashboardEl.style.display= "";
    triviaGameEl.style.display= "";
    portfolioEl.style.display= "";
    passwordGeneratorEl.style.display= "";
    dayPlannerEl.style.display= "";
    portfolioEl.style.display= "";
})

proj1El.addEventListener('click', ()=>{
    makeMyDayAppEl.style.display= "";
    weatherDashboardEl.style.display= "";
    triviaGameEl.style.display= "";
    portfolioEl.style.display= "";
    passwordGeneratorEl.style.display= "";
    dayPlannerEl.style.display= "";
    portfolioEl.style.display= "";
})

proj2El.addEventListener('click', ()=>{
    portfolioEl.style.display= "none";
})

proj4El.addEventListener('click', ()=>{
    triviaGame.style.display= "none";
    passwordGeneratorEl.style.display= "none";
    portfolioEl.style.display= "none";
})

proj5El.addEventListener('click', ()=>{
    portfolioEl.style.display= "none";
    dayPlannerEl.style.display= "none";
    triviaGameEl.style.display= "none";
    passwordGeneratorEl.style.display= "none"
})