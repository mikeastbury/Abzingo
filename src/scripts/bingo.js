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
    "Master Yoda",
    "Clocked",
    "Trust Centauri",
    "They're thieves",
    "Grogan",
    "Gwildor",
    "The Sauna",
    "Gym Trauma",
    "Dog Interruption",
    "You can have it in wood...",
    "Automatic. Semi-automatic.",
    "I'm your dad",
    "Stanger Derail",
    "Kiss Stanger",
    "Chest Hair Jealousy",
    "Poetry",
    "Betty Davis Eyes",
    "Insulting the fans",
    "Harrison Ford coming in for a landing",
    "Ba weep granna weep ninny bong",
    "Insane plans (hero or villain)",
    "Villain watches cartoons",
    "How's your mother"
]

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
        card.className = "card";
        card.textContent = answerArray[i];
        bingo.appendChild(card);
    });
}

generateCards(answerArray);

