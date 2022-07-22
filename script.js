const drinks = {
  coffee: [
    {
      title: 'Early Bird',
      price: '$$',
    },
    {
      title: 'Strange Love',
      price: '$$',
    },
    {
      title: 'Fahrenheit',
      price: '$$',
    },
    {
      title: 'Voodoo Child',
      price: '$$',
    },
    {
      title: 'Dark Horse',
      price: '$',
    },
    {
      title: 'Cops',
      price: '$',
    },
    {
      title: 'i deal',
      price: '$',
    },
    {
      title: 'Jimmy\'s',
      price: '$',
    }
  ],
  tea: [
    {
      title: 'Icha',
      price: '$$',
    },
    {
      title: 'Ten Ren\'s',
      price: '$$',
    },
    {
      title: "David's Tea",
      price: '$$',
    },
    {
      title: 'Bubble Lee',
      price: '$$',
    },
    {
      title: 'Chattime',
      price: '$',
    },
    {
      title: 'Tealish',
      price: '$',
    },
    {
      title: 'Kung Fu',
      price: '$',
    },
    {
      title: 'Gong Cha',
      price: '$',
    }
  ]
};

// Our code goes here:

//get data from the user
//----query select type of drink
//----query select value of drink
//----store those values in variables
//according to the values obtained from user, iterate the drink object
//ramdonly select a drink accordingly to user preferences
//display the result
//----create a new html paragraph to append the location name of the shop


//variables set by selecting DOM elements
const formEl = document.querySelector("form");
const resultSection = document.querySelector(".results");
const paragraphElmt = document.createElement("h2");

//function to get random number to use as index number
const randomChoice = (optionArray) => {
  const index = Math.floor(Math.random() * optionArray.length)
  return optionArray[index]
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const drinkUserOption = document.querySelector("input[name=beverage]:checked").value;
  const priceUserOption = document.querySelector("input[name=price]:checked").value;

  const drinkChoice = drinks[drinkUserOption];
  const options = [];

  for (let i = 0; i < drinkChoice.length; i++) {
    const currentDrink = drinkChoice[i]

    if (currentDrink.price === priceUserOption) {
      options.push(currentDrink)
    }
  }

  const suggestedPlaceToVisit = randomChoice(options);

  paragraphElmt.innerHTML = `${suggestedPlaceToVisit.title}`;
  resultSection.appendChild(paragraphElmt);
})


