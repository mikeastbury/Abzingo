const allAnswers = [
    "Rannazzisi",
    "Unbelievable",
    "Stallone",
    "Shut it off",
    "Jon Sr.",
    "Schwarzenegger",
    "We Got Ourselves a Movie",
    "Didn't know what we had",
    "Janitors",
    "Childhood Trauma",
    "What Even Is This Movie",
    "Dar",
    "Uzis",
    "Bazookas",
    "Brandon Lee's Head",
    "Gratuitous nudity uncomfortably close to violence",
    "Master Yoda",
    "Clocked",
    "Trust Centauri",
    "Gino Felino",
    "They're thieves",
    "Grogan",
    "Pizza Parlor",
    "Market",
    "Gwildor",
    "Amy the gorilla and/or her glove",
    "Toxic Masculinity",
    "Doing some work for the movie",
    "You can have it in wood...",
    "Automatic. Semi-automatic.",
    "Water Dogs",
    "Sistine...",
    "I'm your dad",
    "Police Special",
    "Turkey",
    "Kuffs",
    "Wolfie",
    "Clint Eastwood dust pregnancies",
    "HELLO? Who is this?",
    "Height of his powers",
    "Stanger Derail",
    "Kiss Stanger",
    "Chest Hair Jealousy",
    "Poetry",
    "Betty Davis Eyes",
    "Harrison Ford coming in for a landing",
    "Ba weep granna weep ninny bong",
    "Insane plans (hero or villain)",
    "Villain watches cartoons",
    "How's your mother"
]

// create slugs for card classes from array, will use this to add as classes to each card for custom css purposes
const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

// return one random answer
function randomAnswer(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateAnswerArray() {
    const answerArray = [];
    const answerLength = 24;
    while (answerArray.length < answerLength) {
        const answerCandidate = randomAnswer(allAnswers);
        if (!answerArray.includes(answerCandidate)) {
            answerArray.push(answerCandidate);
        }        
    }
    // add the free space
    answerArray.splice(12,0,"The Sauna")
    return answerArray;
}
const answerArray = generateAnswerArray();

function generateCards(answers) {
    let i = -1;
    answers.forEach(answer => {
        i++;
        const bingo = document.querySelector(".bingo");
        let card = document.createElement("div");
        const cardClass = slugify(answerArray[i]);
        card.className = "card";
        card.textContent = answerArray[i];
        card.classList.add(cardClass);
        bingo.appendChild(card);
    });
}

// write cards to page
generateCards(answerArray);

// create a grid array, set it all to false
const winCheckArray = new Array(25).fill(false);
const allCardsArray = document.querySelectorAll(".card");

function onClick() {
    allCardsArray.forEach(card => {
        card.addEventListener("click", click => card.classList.toggle("clicked"));
    });
}
// trigger event listener
onClick();