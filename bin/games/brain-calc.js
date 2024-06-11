#!/usr/bin/env node
import {askName} from "../../src/askName.js";
import {inputUserAnswer} from "../../src/userAnswer.js";
import {compareAnswers} from "../../src/compareAnswers.js";
import {getCount} from "../../src/getCount.js";
let rightAnswer ;
let firstNum = 0;
let operator = '';
let secNum = 0;
let operatorIdx;
let operators = ['+','-','*']
let start = goBrainCalc;
askName();
console.log('What is the result of the expression?')
goBrainCalc();



//.................................
function goBrainCalc(){
    getFirstNumber();
    getOperator();
    getSecNumber();
    askQuestion();
    getResultOfExpression();
    inputUserAnswer();
    compareAnswers(rightAnswer);
    getCount(start, rightAnswer);
}
function askQuestion(){
    console.log(`Question: ${firstNum} ${operator} ${secNum}` );
}
function getOperator(){
    operatorIdx = Math.floor(Math.random() * 3);
    operator = operators[operatorIdx];
    return operator;
}
function getFirstNumber(){
    firstNum = Math.floor((Math.random() * 100));
    return firstNum;
}
function getSecNumber(){
    secNum = Math.floor((Math.random() * 100));
    return secNum;
}
function getResultOfExpression (){
    switch (operatorIdx){
        case 0: rightAnswer = firstNum + secNum;
        break;
        case 1: rightAnswer = firstNum - secNum;
        break;
        case 2: rightAnswer = firstNum * secNum;
        break;
    }
   return rightAnswer;
}




