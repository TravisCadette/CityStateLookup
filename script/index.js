"use strict"

let cityStates = [

    {
        state: "Alabama",
        stateAbbr: "AL",
        cities: ["Birmingham", "Huntsville", "Montgomery"]
    }, {
        state: "Alaska",
        stateAbbr: "AK",
        cities: ["Anchorage", "Juneau", "Fairbanks", "Badger"]
    }, {
        state: "Arizona",
        stateAbbr: "AZ",
        cities: ["Phoenix", "Tucson", "Mesa", "Chandler"]
    }, {
        state: "Arkansas",
        stateAbbr: "AR",
        cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale"]
    }, {
        state: "California",
        stateAbbr: "CA",
        cities: ["Los Angeles", "San Francisco", "San Diego"]
    }, {
        state: "Colorado",
        stateAbbr: "CO",
        cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
    }, {
        state: "Connecticut",
        stateAbbr: "CT",
        cities: ["Bridgeport", "New Haven", "Stamford", "Hartford"]
    }, {
        state: "Delaware",
        stateAbbr: "DE",
        cities: ["Wilmington", "Dover", "Newark", "Middletown"]
    }, {
        state: "Florida",
        stateAbbr: "FL",
        cities: ["Jacksonville", "Miami", "Tampa", "Orlando"]
    }, {
        state: "Georgia",
        stateAbbr: "GA",
        cities: ["Atlanta", "Augusta", "Columbus", "Macon"]
    }, {
        state: "Hawaii",
        stateAbbr: "HI",
        cities: ["Honolulu", "Pearl City", "Hilo", "Waipahu"]
    }, {
        state: "Idaho",
        stateAbbr: "ID",
        cities: ["Boise City", "Meridian", "Nampa", "Idaho Falls"]
    }, {
        state: "Illinois",
        stateAbbr: "IL",
        cities: ["Chicago", "Aurora", "Joliet"]
    }, {
        state: "Indiana",
        stateAbbr: "IN",
        cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"]
    }, {
        state: "Iowa",
        stateAbbr: "IA",
        cities: ["Des Moines", "Cadar Rapids", "Davenport", "Sioux City"]
    }, {
        state: "Kansas",
        stateAbbr: "KS",
        cities: ["Wichita", "Overland Park", "Kansas City", "Olathe"]
    }, {
        state: "Kentucky",
        stateAbbr: "KY",
        cities: ["Louisville", "Lexington-Fayette", "Bowling Green"]
    }, {
        state: "Louisiana",
        stateAbbr: "LA",
        cities: ["New Orleans", "Baton Rouge", "Shreveport", "Metairie"]
    }, {
        state: "Maine",
        stateAbbr: "ME",
        cities: ["Portland", "Lewiston", "Bangor", "Auburn"]
    }, {
        state: "Maryland",
        stateAbbr: "MD",
        cities: ["Baltimore", "Columbia", "Germantown", "Silver Spring"]
    }, {
        state: "Massachusetts",
        stateAbbr: "MA",
        cities: ["Boston", "Worcester", "Springfield"]
    }, {
        state: "Michigan",
        stateAbbr: "MI",
        cities: ["Detroit", "Grand Rapids", "Warren City", "Sterling Heights"]
    }, {
        state: "Minnesota",
        stateAbbr: "MN",
        cities: ["Minneapolis", "St. Paul", "Rochester", "Duluth"]
    }, {
        state: "Mississippi",
        stateAbbr: "MS",
        cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg"]
    }, {
        state: "Missouri",
        stateAbbr: "MO",
        cities: ["Kansas City", "St. Louis", "Springfield"]
    }, {
        state: "Montana",
        stateAbbr: "MT",
        cities: ["Billings", "Missoula", "Great Falls", "Bozeman"]
    }, {
        state: "Nebraska",
        stateAbbr: "NE",
        cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island"]
    }, {
        state: "Nevada",
        stateAbbr: "NV",
        cities: ["Las Vegas", "Henderson", "Reno", "Paradise"]
    }, {
        state: "New Hampshire",
        stateAbbr: "NH",
        cities: ["Manchester", "Nashua", "Concord"]
    }, {
        state: "New Jersey",
        stateAbbr: "NJ",
        cities: ["Newark", "Jersey City", "Paterson", "Elizabeth"]
    }, {
        state: "New Mexico",
        stateAbbr: "NM",
        cities: ["Albuquerque", "Rio Rancho", "Santa Fe", "Roswell"]
    }, {
        state: "New York",
        stateAbbr: "NY",
        cities: ["New York City", "Albany", "Buffalo", "Schenectady"]
    }, {
        state: "North Carolina",
        stateAbbr: "NC",
        cities: ["Charlotte", "Raleigh", "Greensboro", "Durham"]
    }, {
        state: "North Dakota",
        stateAbbr: "ND",
        cities: ["Fargo", "Bismarck", "Grand Forks", "Minot"]
    }, {
        state: "Ohio",
        stateAbbr: "OH",
        cities: ["Colombus", "Cleveland", "Cincinnati", "Toledo"]
    }, {
        state: "Oklahoma",
        stateAbbr: "OK",
        cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"]
    }, {
        state: "Oregon",
        stateAbbr: "OR",
        cities: ["Portland", "Salem", "Eugene", "Gresham"]
    }, {
        state: "Pennsylvania",
        stateAbbr: "PA",
        cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie"]
    }, {
        state: "Rhode Island",
        stateAbbr: "RI",
        cities: ["Providence", "Cranston", "Warwick", "Pawtucket"]
    }, {
        state: "South Carolina",
        stateAbbr: "SC",
        cities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant"]
    }, {
        state: "South Dakota",
        stateAbbr: "SD",
        cities: ["Sioux Falls", "Rapid City", "Aberdeen"]
    }, {
        state: "Tennessee",
        stateAbbr: "TN",
        cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"]
    }, {
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Houston", "San Antonio", "Dallas", "Austin"]
    }, {
        state: "Utah",
        stateAbbr: "UT",
        cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan"]
    }, {
        state: "Vermont",
        stateAbbr: "VT",
        cities: ["Burlington", "Essex", "Colchester"]
    }, {
        state: "Virginia",
        stateAbbr: "VA",
        cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Arlington"]
    }, {
        state: "Washington",
        stateAbbr: "WA",
        cities: ["Seattle", "Spokane", "Tacoma", "Vancouver"]
    }, {
        state: "West Virginia",
        stateAbbr: "WV",
        cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg"]
    }, {
        state: "Wisconsin",
        stateAbbr: "WI",
        cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha"]
    }, {
        state: "Wyoming",
        stateAbbr: "WY",
        cities: ["Cheyenne", "Casper", "Gillette", "Laramie"]
    },
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