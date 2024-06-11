#!/usr/bin/env node

import {askName} from "../../src/askName.js";
import {inputUserAnswer} from "../../src/userAnswer.js";
import {compareAnswers} from "../../src/compareAnswers.js";
import {getCount} from "../../src/getCount.js";

let rightAnswer = '';
let number = 0;
let start = goBrainPrime;

askName();
goBrainPrime();

function goBrainPrime() {
    getNumber();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
    askQuestion();
    inputUserAnswer();
    isPrimeNumber(number)
    compareAnswers(rightAnswer);
    getCount(start, rightAnswer);
}
function isPrimeNumber(num){
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            rightAnswer = "no";
            return rightAnswer;
        }
    }
    rightAnswer = "yes";
    return rightAnswer;
}
function askQuestion(){
    console.log(`Question ${number}`);
}
function getNumber(){
    number =  Math.floor(Math.random()*(3571 - 2) + 2);
    return number;
}