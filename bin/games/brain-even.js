#!/usr/bin/env node
import {askName} from "../../src/askName.js";
import {inputUserAnswer} from "../../src/userAnswer.js";
import {getCount} from "../../src/getCount.js";
import {compareAnswers} from "../../src/compareAnswers.js";


let start = startBrainEven;
let questNum = 0;
let rightAnswer;


askName()
console.log('Answer "yes" if the number is even, otherwise answer "no"')
startBrainEven();


function startBrainEven() {
    askQuestion();
    compareNumbers();
}


function compareNumbers() {
    inputUserAnswer()
    if (questNum % 2 === 0) {
        rightAnswer = 'yes';
    } else if (questNum % 2 !== 0) {
        rightAnswer = 'no';
    }
    compareAnswers(rightAnswer);
    getCount(start, rightAnswer);
}

function askQuestion() {
    questNum = getNumber();
    console.log(`Question: ${questNum}`);
}


function getNumber() {
    return Math.floor(Math.random() * 100);
}
