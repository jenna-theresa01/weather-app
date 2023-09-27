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
function init(){
    //setup variables, const
    // clickhandlers
    //
    console.log("hello sandbox");
    test_axios();
};

async function test_axios(){
    const result = await axios.get(api_url);
    console.log(result);
};

// create display box, and everything that will be contained inside it
