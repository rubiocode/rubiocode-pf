// declaring variables
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

let portfoliov2El= document.getElementById("portfoliov2");


/* creating event listeners to filter projects */

//presenting all projects

allEl.addEventListener('click', ()=>{
    makeMyDayAppEl.style.display= "";
    weatherDashboardEl.style.display= "";
    triviaGameEl.style.display= "";
    portfolioEl.style.display= "";
    passwordGeneratorEl.style.display= "";
    dayPlannerEl.style.display= "";
    portfolioEl.style.display= "";
    portfoliov2El.style.display= "";
})

//presenting all projects with HTML and CSS

proj1El.addEventListener('click', ()=>{
    //Display all 
    makeMyDayAppEl.style.display= "";
    weatherDashboardEl.style.display= "";
    triviaGameEl.style.display= "";
    portfolioEl.style.display= "";
    passwordGeneratorEl.style.display= "";
    dayPlannerEl.style.display= "";
    portfolioEl.style.display= "";
    portfoliov2El.style.display= "";
})

//presenting all projects with JS and JQuery

proj2El.addEventListener('click', ()=>{
    //display
    makeMyDayAppEl.style.display= "";
    weatherDashboardEl.style.display= "";
    triviaGameEl.style.display= "";
    passwordGeneratorEl.style.display= "";
    dayPlannerEl.style.display= "";
    portfoliov2El.style.display= "";
    //hide
    portfolioEl.style.display= "none";
})

//Presenting all projects with API, AJAX,and JSON 

proj4El.addEventListener('click', ()=>{
    //display
    makeMyDayAppEl.style.display= "";
    weatherDashboardEl.style.display= "";
    dayPlannerEl.style.display= "";

    //hide
    triviaGame.style.display= "none";
    passwordGeneratorEl.style.display= "none";
    portfolioEl.style.display= "none";
    portfoliov2El.style.display= "none";
})

//presenting all projects using frameworks
proj5El.addEventListener('click', ()=>{
    //display
    makeMyDayAppEl.style.display= "";
    weatherDashboardEl.style.display= "";
    portfoliov2El.style.display= "";

    //hide
    portfolioEl.style.display= "none";
    dayPlannerEl.style.display= "none";
    triviaGameEl.style.display= "none";
    passwordGeneratorEl.style.display= "none";
})