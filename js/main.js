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
    const newDiv = document.createElement("div");

    // give it some content
    const newContent = document.createTextNode("this is some content!");

    //add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("main");
    document.body.insertBefore(newDiv, currentDiv);


}
