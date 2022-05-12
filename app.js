// Задание 1

function stringCut(str) {
  return console.log(str.slice(0, 30) + "...");
}

let firstSentence = "But you have no right to call me a murderer";
let secondSentence = "Because they could stand that these were not monsters.";
let thirdSentence = "And I want to remember it. I never want to forget it.";
stringCut(firstSentence);
stringCut(secondSentence);
stringCut(thirdSentence);

// Задание 2

function registerConvert(str) {
    let resultConvert = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === str[i]) {
            resultConvert += str[i].toUpperCase();
        } else {
            resultConvert += str[i].toLowerCase();
        }
    }
    return console.log(resultConvert);
}

registerConvert("c&c rED aLERT 3")

// Задание 3

function stringAnalys(str) {
  result = {}
  result.allSymbols = allSymbols = str.length
  result.symbolsWithoutSpaces = str.replace(/\s+/g, '').length
  result.quantityOfWords = str.split(" ").length
  result.sentenceType = (str.slice(-1) === "!") ? "exclamation" : (str.slice(-1) === "?") ? "question" : (str.slice(-1) === ".") ? "dot" : null
  return console.log(result)
}
stringAnalys("Давайте жить дружно!");

// Задание 4

let firstSentences = "Follow the white raBbiT";
let secondSentences = "Call me Ishmael";
let thirdSentences = "Repent before bloody rabbit punish you!";
let bannedWord = "rabbit";

function banWordFilter(str) {
  let filter = str.split(" ");
  let filterLower = filter.join(" ").toLowerCase();
  let filterSplit = filterLower.split(" ");
  for (let i = 0; i < filterSplit.length; i++) {
    if (filterSplit[i] === bannedWord) {
      filter[i] = "******";
    }
  }
  return filter.join(" ");
}
console.log(banWordFilter(firstSentences));
console.log(banWordFilter(secondSentences));
console.log(banWordFilter(thirdSentences));

