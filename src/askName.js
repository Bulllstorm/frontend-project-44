import readlineSync from 'readline-sync';

let userName = '';
function askName() {
  console.log('Welcome to the Brain Games');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
}

export { userName, askName };
