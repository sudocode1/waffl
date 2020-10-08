const r = require("randomer.js");
const fs = require("fs");
const request = require("request");

fs.writeFileSync(`what.txt`, ``);

const dict = [
    "the",
    "a",
    "oxygen",
    "sponge",
    "fish",
    "strange",
    "animals",
    "and",
    "stuff",
    "sun",
    "deadly",
    "laser",
    "lazer",
    "hello",
    "hi",
    "how",
    "are",
    "you",
    "thing",
    "heck",
    "thanks",
    "hope",
    "mentioned",
    "blade",
    "soot",
    "racism",
    "racist",
    "race",
    "white",
    "black"
];

var wordCount = Math.floor(Math.random() * 1000);
var currentWordCount = 0;
var count, word;

while(wordCount > currentWordCount) {
    count = currentWordCount;
    word = r.array(dict);
    console.log(word);
    fs.appendFileSync(`what.txt`, `${word} `);
    currentWordCount = count + 1;
};