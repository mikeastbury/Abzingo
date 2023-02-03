const allAnswers = [
    "Rannazzisi",
    "Unbelievable",
    "Stallone",
    "Shut it off",
    "Jon Sr.",
    "Schwarzenegger",
    "Janitors",
    "Childhood Trauma",
    "What Even Is This Movie",
    "Dar",
    "Uzis",
    "Bazookas",
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
    "The Sauna",
    "Evian Bottle",
    "Gym Stories",
    "Doing some work for the movie",
    "Dog Crashes the Show",
    "You can have it in wood...",
    "Automatic. Semi-automatic.",
    "Water Dogs",
    "I'm your dad",
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

// create slugs for card classes from array
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
    answerArray.splice(12,0,"Toxic Masculinity")
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
        card.addEventListener("click", click => card.classList.toggle("clicked"));
        bingo.appendChild(card);
    });
}

generateCards(answerArray);


