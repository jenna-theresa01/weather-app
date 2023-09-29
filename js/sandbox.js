    // //* main div
    // // create div element
    // // const mainDivBox =document.createElement("div");
    // // // give main div an id
    // // mainDivBox.id = "main-box";
    // // add text to the div
    // const newContent = document.createTextNode("Weather App");
    // // append content
    // newDiv.appendChild(newContent);
    // const currentDiv = document.getElementById("main");
    // document.body.insertBefore(newDiv, currentDiv);

    //* zip code input and button div
    // create parent div
    const searchDiv = document.createElement("div");
        // create input box for zip code 
        const inputBox = document.createElement("input");
        inputBox.setAttribute("type", "text");
        inputBox.id = "input";
        inputBox.classList.add("text-center", "mx-auto", "d-flex");
        // set placeholder text in input box
    // document.getElementById("button").placeholder = "search zip code";
    inputBox.placeholder = "Search Zip Code";
        // create button to call info
        const searchBtn = document.createElement("button");
        searchBtn.id = "button";
        const btnContent = document.createTextNode("Let's Get It");
        searchBtn.appendChild(btnContent);
        // document.body.insertBefore(inputBox, currentDiv);
        document.getElementById("input").innerHTML


    //* secondary big info div


    //* city div
    const cityBox = document.createElement("div");
    cityBox.id = "city";
    document.getElementById("cityBox")
    const cityDiv = document.createElement("div");
    cityDiv.id = "city-name"

    //* temperature div
    const tempBox = document.createElement("div");
    tempBox.id = "temperature";
    let kelvinBox = document.createElement("div");
    kelvinBox.id = "kelvin"
    let farBox = document.createElement("div");
    farBox.id = "fahrenheit"
    let celBox = document.createElement("div");
    celBox.id = "celsius"
    const tempDiv = document.createElement("div");
    tempDiv.id = "temp"

    //* condition div
    const conditionBox = document.createElement("div");
    conditionBox.id = "condition"
    const conditionDiv = document.createElement("div");
    conditionDiv.id = "condition-div"

    //* other info div
    const infoBox = document.createElement("div");
    infoBox.id = "other-info"
    const imgDiv = document.createElement("img");
    imgDiv.id = "img-div"
    
    
    // const newDiv = document.createElement("div");

    // create main div boxes for info to live

    // cityBox.classList.add("text-center");




    // add style/parameters to created info div boxes

    // create smaller containers for information to live when it's called 

    // give it some content
    
    
    const cityContent = document.createTextNode("City");
    const tempContent = document.createTextNode("Temperature");
    const conditionContent = document.createTextNode("Condition");
    const imgContent = document.createTextNode("Other Info")

    // add text node to the newly created elements 
    
    
    cityDiv.appendChild(cityContent);
    tempDiv.appendChild(tempContent);
    conditionDiv.appendChild(conditionContent);
    imgDiv.appendChild(imgContent);

    // add the newly created elements and its content into the DOM
    
    
    
    document.body.insertBefore(searchBtn, currentDiv);
    document.body.insertBefore(cityDiv, currentDiv);
    document.body.insertBefore(tempDiv, currentDiv);
    document.body.insertBefore(conditionDiv, currentDiv);
    document.body.insertBefore(imgDiv, currentDiv);
    

    
