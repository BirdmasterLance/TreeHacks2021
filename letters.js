let database = [
    {"letter":"A"},
    {"letter":"B"},
    {"letter":"C"},
    {"letter":"D"},
    {"letter":"E"},
    {"letter":"F"},
    {"letter":"G"},
    {"letter":"H"},
    {"letter":"I"},
    {"letter":"J"},
    {"letter":"K"},
    {"letter":"L"},
    {"letter":"M"},
    {"letter":"N"},
    {"letter":"O"},
    {"letter":"P"},
    {"letter":"Q"},
    {"letter":"R"},
    {"letter":"S"},
    {"letter":"T"},
    {"letter":"U"},
    {"letter":"V"},
    {"letter":"W"},
    {"letter":"X"},
    {"letter":"Y"},
    {"letter":"Z"},
    {"letter":"a"},
    {"letter":"b"},
    {"letter":"c"},
    {"letter":"d"},
    {"letter":"e"},
    {"letter":"f"},
    {"letter":"g"},
    {"letter":"h"},
    {"letter":"i"},
    {"letter":"j"},
    {"letter":"k"},
    {"letter":"l"},
    {"letter":"m"},
    {"letter":"n"},
    {"letter":"o"},
    {"letter":"p"},
    {"letter":"q"},
    {"letter":"r"},
    {"letter":"s"},
    {"letter":"t"},
    {"letter":"u"},
    {"letter":"v"},
    {"letter":"w"},
    {"letter":"x"},
    {"letter":"y"},
    {"letter":"z"}
]
let totalLetters = []
let usedIndices = []
let incorrectLetters = []
let incorrectIndices = []
let currentLetter = ""
let currentIndex = 0
let firstRound = false

correctButton = document.getElementById('correct')
incorrectButton = document.getElementById('incorrect')

function loadLetters() 
{
    var i;
    let size = Object.keys(database).length;
    for(i = 0; i < size; i++)
    {
        totalLetters.push(database[i]["letter"]);
    }
    getRandomLetter()
}

correctButton.addEventListener('click', removeCorrectLetter)
incorrectButton.addEventListener('click', addIncorrectLetter)

function addIncorrectLetter()
{
    if(incorrectLetters.includes(currentLetter) == false)
    {
        incorrectLetters.push(currentLetter)
        incorrectIndices.push(currentIndex)
    }
    getRandomLetter()
}

function removeCorrectLetter()
{
    if(incorrectLetters.includes(currentLetter) == true)
    {
        incorrectLetters.splice(currentLetter)
        incorrectIndices.splice(currentIndex)
    }
    getRandomLetter()
}
function getRandomLetter()
{
    if(firstRound == false)
    {
        let size = totalLetters.length;
        let randomInt = Math.floor(Math.random() * size)
        if(usedIndices.includes(randomInt) == false)
        {
            usedIndices.push(randomInt);
            letter = database[randomInt]["letter"]
            currentLetter = letter
            currentIndex = randomInt
            document.getElementById("letter").innerHTML = letter
        }
        else
        {
            getRandomLetter()
        }
        if(usedIndices.length == database.length)
        {
            firstRound = true
            usedIndices = []
            getRandomLetter()
        }
    }
    else
    {
        let size = incorrectIndices.length;
        let randomInt = Math.floor(Math.random() * size)
        if(usedIndices.includes(randomInt) == false)
        {
            usedIndices.push(randomInt);
            letter = database[incorrectIndices[randomInt]]["letter"]
            currentLetter = letter
            currentIndex = randomInt
            document.getElementById("letter").innerHTML = letter
        }
        else
        {
            getRandomLetter()
        }
        if(usedIndices.length == incorrectIndices.length)
        {
            usedIndices = []
            getRandomLetter()
        }
    }
}
document.onload = loadLetters();