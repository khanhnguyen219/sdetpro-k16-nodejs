const givenString = "Hello ban, tui ten teo ban cung ten teo luon ah?";
let indivisualWords = givenString.replace(/,/gi, "").split(" ");
const groupWords = groupWord(indivisualWords);
console.log(groupWords);


/**
 * Hello: 1
 * ban: 2
 * 
 */
function groupWord(indivisualWords) {
    let wordMap = new Map();
    for (const word of indivisualWords) {
        if(!wordMap.has(word)){
            wordMap.set(word, 1);
        }else{
            wordMap.set(word, wordMap.get(word) + 1)
        }
    }

    return wordMap;
}