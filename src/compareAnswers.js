import { userAnswer } from './userAnswer.js';

let userCount = 0;

function compareAnswers(rightAnswer) {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return userCount++;
  }
  if (userAnswer !== rightAnswer) {
    userCount = false;
    return userCount;
  }
}
export { userCount, compareAnswers };
