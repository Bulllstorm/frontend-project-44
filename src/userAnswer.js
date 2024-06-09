import readlineSync from "readline-sync";

let userAnswer;
function inputUserAnswer(){
    userAnswer = readlineSync.question('Your answer: ');
    if(userAnswer === "yes" || userAnswer === "no"){
        return userAnswer;
    }
    if(userAnswer !== "yes" || userAnswer !== "no"){
        userAnswer = Number(userAnswer);
        return userAnswer;
    }

}
export {userAnswer, inputUserAnswer};