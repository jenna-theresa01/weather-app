/*
what I want within this code:

onload

addEventistener()
    click event
    SVG? for images
    error event!!
    
         
async/await
appendChild

local storage?? 
    window.localStorage - stores data with no expiration date
conversions for celcius and kelvin? 
input zip box
    make this required
    potential dropdown for zip code options while one is being typed?
        top 5 matches?

"get weather" button
    document.createElement()
display box
    city
    temp (do I need conversions here?)
    condition
    other info (image)
message for unsuccessful search "invalid zip code"
call to axios npm 


*/ 

// testing axios call
// global vars
// beginning api call 
const apiKey = "67a57437454438749ceaaa4b9d41767b";
const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=40509&appid=${apiKey}`;
    //setup variables, const
    // clickhandlers
    //


async function test_axios(){
    const result = axios.get(api_url);
    console.log(result);
};


document.body.onload = addElement;

// create display box(div element), and everything that will be contained inside it
function addElement() {

    // append text to main div (currently in html) 
    // this is the absolute parent div, I want everything else inside this main div
    let mainDiv = document.getElementById("main");

    // create parent div for input box and button
    const searchBox = document.createElement("div");
    searchBox.id = "search-box"
    mainDiv.append(searchBox);
    // how do I make parent element here?


    // create input box and append to html
    const inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.id = "zipcode";
    inputBox.placeholder = "Search zip code";
    mainDiv.append(inputBox);

    // create button and append to html
    const searchBtn = document.createElement("button");
    searchBtn.id = "button";
    searchBtn.textContent = "Let's get it";
    searchBtn.addEventListener("click", () => {});
    mainDiv.append(searchBtn);

    // append child to parent div (search-box)
    document.body.appendChild(mainDiv);

    // create smaller main div to hold the called information
    // let mainDiv = document.createElement("div");
    
    // city div created here
    // nest smaller div to hold called information from api
    const cityBox = document.createElement("div");
    cityBox.id = "city-box";
    cityBox.textContent = "City"
    mainDiv.append(cityBox);

    // temperature div created here
    // nest smaller div to hold called information from api
    const tempBox = document.createElement("div");
    tempBox.id = "temperature";
    tempBox.textContent = "Temperature"
    mainDiv.append(tempBox);

    // condition div created here
    // nest smaller div to hold called information from api
    const conditionBox = document.createElement("div");
    conditionBox.id = "condition";
    conditionBox.textContent = "Condition"
    mainDiv.append(conditionBox);

    // other info div created here
    // nest smaller div to hold called information from api
    const infoBox = createElement("div");
    infoBox.id = "info-box";
    infoBox.textContent = "Other Info"
    mainDiv.append(infoBox);




// set parameters around divs to give the content space to actually be put somewhere


// add function to get the weather information from the api to my div containers
// function getWeather {

}

// what I need to do: 
/* 
add a click event to my button
--> call the data from the api, through axios, to append it to my page (or at least to the console)
--> calling the data makes it a promise
--> the promise is fulfilled when the data is appended into the html (or console)
--> get weather function needs: async/await calls 
--> this calls the promise 
--> this will be attached to the click event with the button


*/