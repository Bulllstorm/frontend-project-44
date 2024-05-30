#!/usr/bin/env node
import readlineSync from "readline-sync";
let questNum = 0;
let userScore = 0;
let rightAnswer = '';
let userName = '';
console.log('Welcome to the Brain Games');
askName()
console.log('Answer "yes" if the number is even, otherwise answer "no"')
startBrainEven();


function startBrainEven(){
    askQuestion();
    compareNumbers();
}


function compareNumbers(){
    const userAnswer = readlineSync.question('Your answer: ')
    if (questNum % 2 === 0) {
        rightAnswer = 'yes';
    } else if (questNum % 2 !== 0){
        rightAnswer = 'no';
    }
    if(userAnswer === rightAnswer){
        userScore += 1;
        console.log('Correct answer!');
        if(userScore === 3){
            console.log(`Congratulations, ${userName} `)
            return;
        }
        startBrainEven();
    } else if (userAnswer !== rightAnswer){
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    }
}
function askQuestion(){
    questNum = getNumber();
    console.log(`Question: ${questNum}`);
}


function getNumber() {
    return Math.floor(Math.random() * 100);
}
function askName (){
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}