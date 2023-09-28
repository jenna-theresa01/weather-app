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
const api_url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;
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
    
    const mainDivBox =document.createElement("div");
    mainDivBox.id = "main-box";
    const newDiv = document.createElement("div");

    // create main div boxes for info to live
    const cityBox = document.createElement("div");
    cityBox.id = "city";
    // cityBox.classList.add("text-center");
    const tempBox = document.createElement("div");
    tempBox.id = "temperature";
    let kelvinBox = document.createElement("div");
    kelvinBox.id = "kelvin"
    let farBox = document.createElement("div");
    farBox.id = "fahrenheit"
    let celBox = document.createElement("div");
    celBox.id = "celsius"
    const conditionBox = document.createElement("div");
    conditionBox.id = "condition"
    const infoBox = document.createElement("div");
    infoBox.id = "other-info"

    // add style/parameters to created info div boxes
    document.getElementById("cityBox")

    // create parent div
    const searchDiv = document.createElement("div");
    

    // create input box for zip code 
    const inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.id = "input"
    inputBox.classList.add("text-center", "mx-auto", "d-flex");

    // set placeholder text in input box
    // document.getElementById("button").placeholder = "search zip code";
    inputBox.placeholder = "Search Zip Code"

    // create button to call info
    const searchBtn = document.createElement("button");
    searchBtn.id = "button"

    // create smaller containers for information to live when it's called 
    const cityDiv = document.createElement("div");
    cityDiv.id = "city-name"
    const tempDiv = document.createElement("div");
    tempDiv.id = "temp"
    const conditionDiv = document.createElement("div");
    conditionDiv.id = "condition-div"
    const imgDiv = document.createElement("div");
    imgDiv.id = "img-div"

    // give it some content
    const newContent = document.createTextNode("Weather App");
    const btnContent = document.createTextNode("Let's Get It");
    const cityContent = document.createTextNode("City");
    const tempContent = document.createTextNode("Temperature");
    const conditionContent = document.createTextNode("Condition");
    const imgContent = document.createTextNode("Other Info")

    // add text node to the newly created elements 
    newDiv.appendChild(newContent);
    searchBtn.appendChild(btnContent);
    cityDiv.appendChild(cityContent);
    tempDiv.appendChild(tempContent);
    conditionDiv.appendChild(conditionContent);
    imgDiv.appendChild(imgContent);

    // add the newly created elements and its content into the DOM
    const currentDiv = document.getElementById("main");
    document.body.insertBefore(newDiv, currentDiv);
    document.body.insertBefore(inputBox, currentDiv);
    document.body.insertBefore(searchBtn, currentDiv);
    document.body.insertBefore(cityDiv, currentDiv);
    document.body.insertBefore(tempDiv, currentDiv);
    document.body.insertBefore(conditionDiv, currentDiv);
    document.body.insertBefore(imgDiv, currentDiv);
    

    
};


// set parameters around divs to give the content space to actually be put somewhere


// add function to get the weather information from the api to my div containers
// function getWeather {

// }

// add click event to button
document.getElementById("button").addEventListener("click", getWeather)

// 

