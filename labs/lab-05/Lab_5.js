const readline = require('readline-sync');
const userInput = readline.question("Please enter a sentence: ");

const wordsList = userInput
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .trim()
    .split(/\s+/);

const wordFrequency = countWords(wordsList);
printWordCounts(wordFrequency);

function countWords(wordsList) {
    const wordCountMap = {};
    for (const word of wordsList) {
        wordCountMap[word] = (wordCountMap[word] || 0) + 1;
    }
    return wordCountMap;
}

function printWordCounts(wordFrequency) {
    console.log("Word Frequency:");
    for (const [word, count] of Object.entries(wordFrequency)) {
        console.log(`\t${word}: ${count}`);
    }
}
