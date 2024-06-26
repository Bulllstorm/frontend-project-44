#!/usr/bin/env node
import { askName } from '../../src/askName.js';
import { inputUserAnswer } from '../../src/userAnswer.js';
import { compareAnswers } from '../../src/compareAnswers.js';
import { getCount } from '../../src/getCount.js';

let firstNumber = 0;
let secondNumber = 0;
let rightAnswer;
const start = goBrainGcd;
askName();
goBrainGcd();

function goBrainGcd() {
  getFirstNumber();
  getSecNumber();
  console.log('Find the greatest common divisor of given numbers.');
  askQuestion();
  rightAnswer = getGcd(firstNumber, secondNumber);
  inputUserAnswer();
  compareAnswers(rightAnswer);
  getCount(start, rightAnswer);
}

function askQuestion() {
  console.log(`Question: ${firstNumber} ${secondNumber}`);
}

function getFirstNumber() {
  firstNumber = Math.floor((Math.random() * 100));
  return firstNumber;
}

function getSecNumber() {
  secondNumber = Math.floor((Math.random() * 100));
  return secondNumber;
}

function getGcd(firstNum, secondNum) {
  if (secondNum === 0) {
    return firstNum;
  }
  return getGcd(secondNum, firstNum % secondNum);
}
