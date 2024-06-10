import {userName} from "./askName.js";
import {userCount} from "./compareAnswers.js";
import {userAnswer} from "./userAnswer.js";

function getCount(func, rightAnswer){
    if(userCount === 3) {
        console.log(`Congratulations, ${userName}!`)
    } else if (userCount === false){
        console.log(`${userAnswer} is wrong answer. Correct answer was ${rightAnswer}`);
        console.log(`Lets try again, ${userName}`)
    }else if(userCount < 3) {
        func();
    }
}
export {getCount};
