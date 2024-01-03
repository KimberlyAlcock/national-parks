//adds a function to cut the parks descriptions at 250 chars

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content;
  }


// adds a function to display high ratings in a different style
const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    
    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
  }

// adds a display to the header indicating the number of parks available to visit
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);

//adds an event listener to log event for click of first button 
const firstBtn = document.querySelector("button"); //select the first button

firstBtn.addEventListener("click", (event) => {   //listens for the event
  console.log("You clicked the button", event);   // logs that you clicked the button
});

// adds an event listener to log events for all button clicks

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);     // by adding parentNode you get where was clicked
  });
});

const changeParentBackground = (event) => {
  console.log("I've been clicked")

  const parkCardContainer = event.target.parentNode
  parkCardContainer.style.backgroundColor = "#c8e6c9"
}

const allButtons = document.querySelectorAll('button')

allButtons.forEach(button => {
  button.addEventListener("click", 
  changeParentBackground)
})
