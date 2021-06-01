"use strict"

let cityStates = [{
        state: "California",
        stateAbbr: "CA",
        cities: ["Los Angeles", "San Francisco", "San Diego"]
    },
    {
        state: "Colorado",
        stateAbbr: "CO",
        cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
    },
    {
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Austin", "Dallas", "Houston", "San Antonio"]
    },
    {
        state: "New York",
        stateAbbr: "NY",
        cities: ["New York City", "Albany", "Buffalo", "Schenectady"]
    }
];

window.onload = function () {

    // load states dropdown when page first loads
    loadStatesDropDown();

    // connect onchange event handler for the states dropdown (hook up a function to it)
    // find the state dropdown

    const stateDropDown = document.getElementById("stateDropDown");
    stateDropDown.onchange = onstateDropDownChanged;
    // connect onchange event handler for the city dropdown (hook up a function to it)
    // find the city dropdown
    const cityDropDown = document.getElementById("cityDropDown");
    cityDropDown.onchange = oncityDropDownChanged;
}

function loadStatesDropDown() {
    // find the state dropdown
    const stateDropDown = document.getElementById("stateDropDown");
    // Add a "Select one..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    stateDropDown.appendChild(selectOneOption);

    // loop thru the cityStates array to create an <option> for each state
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = document.createElement("option"); // creates <option> element
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        stateDropDown.appendChild(theOption);
    }
    // find the city dropdown
    const cityDropDown = document.getElementById("cityDropDown");
    // Add a "Select state first..." <option>
    selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select state first...";
    selectOneOption.value = "";
    cityDropDown.appendChild(selectOneOption);
}

function onstateDropDownChanged() {
    // find the state and city dropdowns
    const stateDropDown = document.getElementById("stateDropDown");
    const cityDropDown = document.getElementById("cityDropDown");
    // erase previous city message
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
    // remove the previous cities from the cities dropdown because the state has changed
    cityDropDown.options.length = 0;
    // find the state dropdown selection
    let selectedStateCode = stateDropDown.value;
    // did they pick "Select one..." option"
    if (selectedStateCode == "") {
        // Add a "Select state first..." <option>
        let selectOneOption = document.createElement("option"); // creates <option> element
        selectOneOption.textContent = "Select state first...";
        selectOneOption.value = "";
        cityDropDown.appendChild(selectOneOption);
        // if they don't pick a state, we can't load cities
        return;
    }
    // go use the selected stateCode to find the matching state from the array
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStateCode);
    // Add a "Select one..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    cityDropDown.appendChild(selectOneOption);
    // loop thru the cities in the matching state and create <option> elements for each
    for (let i = 0; i < matchingState.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingState.cities[i];
        cityDropDown.appendChild(theOption);
    }
}

function oncityDropDownChanged() {
    // find the state and city dropdowns
    const stateDropDown = document.getElementById("stateDropDown");
    const cityDropDown = document.getElementById("cityDropDown");
    // erase previous city message
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
    // get the selected city
    let selectedCity = cityDropDown.value;
    // if "Select one..." is picked, just exit the function
    if (selectedCity == "") {
        return;
    }
    // get the selected State
    let selectedStateIndex = stateDropDown.selectedIndex;
    let selectedState = stateDropDown.options[selectedStateIndex].text;
    // build a message w/ city and state info and display in <p>
    let message = "City: " + selectedCity + "<br>" +
        "State: " + selectedState;
    messagePara.innerHTML = message;
}