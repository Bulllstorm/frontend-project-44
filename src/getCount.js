import {userName} from "./askName.js";
import {userCount} from "./compareAnswers.js";

function getCount(func){
    if(userCount === 3) {
        console.log(`Congratulations, ${userName}`)
    } else {
        func();
    }
}
export {getCount};
