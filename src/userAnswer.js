import readlineSync from "readline-sync";

let userAnswer;
function inputUserAnswer(){
    userAnswer = readlineSync.question()
    if(userAnswer !== 'yes' || userAnswer !== 'no'){
        userAnswer = Number(userAnswer);
        return userAnswer;
    }
    return userAnswer;
}
export {userAnswer, inputUserAnswer};