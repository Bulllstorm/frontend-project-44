#!/usr/bin/env node

import { askName } from '../../src/askName.js';
import { inputUserAnswer } from '../../src/userAnswer.js';
import { compareAnswers } from '../../src/compareAnswers.js';
import { getCount } from '../../src/getCount.js';

let startNumber = 0;
let stepOfProgression = 0;
let lengthOfProgression = 0;
let progArr = [];
let randomIdx = 0;
let rightAnswer;
let changeUn;
let arrString = '';
const start = goBrainProgression;

// ........
askName();
console.log('What number is missing in the progression?');
goBrainProgression();

// .......
function goBrainProgression() {
  progArr = [];
  getStartNumber();
  getStepOfProgression();
  getProgressionLength();
  getProgression();
  getRightAnswer();
  changeNum();
  getArrToString();
  askQuestion();
  inputUserAnswer();
  compareAnswers(rightAnswer);
  getCount(start, rightAnswer);
}

function askQuestion() {
  console.log(`Question: ${arrString}`);
}

function getArrToString() {
  arrString = progArr.join(' ');
  return arrString;
}

function changeNum() {
  changeUn = '..';
  progArr[randomIdx] = changeUn;
}

function getRightAnswer() {
  randomIdx = Math.floor(Math.random() * progArr.length);
  rightAnswer = progArr[randomIdx];
  return rightAnswer;
}

function getProgression() {
  for (let j = 0, i = startNumber; j < lengthOfProgression; j++, i += stepOfProgression) {
    progArr.push(i);
  }
  return progArr;
}

function getStepOfProgression() {
  stepOfProgression = Math.floor(Math.random() * 10);
  return stepOfProgression;
}

function getStartNumber() {
  startNumber = Math.floor(Math.random() * 10);
  return startNumber;
}

function getProgressionLength() {
  lengthOfProgression = Math.floor(Math.random() * (10 - 6) + 6);
  return lengthOfProgression;
}
