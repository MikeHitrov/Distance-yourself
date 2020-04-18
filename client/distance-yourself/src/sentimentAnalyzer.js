const AFINN = require("./AFINN.json");

function tokenize(text) {
    return text
        .toLowerCase()
        .split(" ");
}

function deleteUselessChars(word) {
    return word.replace(/[^\w]/g, "");
}

function rateWord(word) {
    return (word in AFINN) ? AFINN[word] : 0;
}

function sum(x, y) {
    return x + y;
}

function analyze(text) {
    return tokenize(text)
        .map(deleteUselessChars)
        .map(rateWord)
        .reduce(sum)
}

module.exports.analyze = function (text) {
    return tokenize(text)
        .map(deleteUselessChars)
        .map(rateWord)
        .reduce(sum)
}
