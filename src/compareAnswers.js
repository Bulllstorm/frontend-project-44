import {userAnswer} from "./userAnswer.js";

let userCount = 0

function compareAnswers(rightAnswer){
    if(userAnswer === rightAnswer){
        console.log('Correct!')
        return userCount++;
    } else {
        throw new Error(`${userAnswer} is wrong answer. Correct answer was ${rightAnswer}`);
    }

}
export {userCount, compareAnswers};