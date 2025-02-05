#!/usr/bin/env node
import readLineSync from 'readline-sync';
import chalk from 'chalk';

console.log('Welcome to Brain Games!');

// Запрашиваем имя
const askName = () => {
  const userName = readLineSync.question('What is your name?');
  console.log(chalk.blue(`Hello, ${userName}`));
  return userName;
};
// Генерируем число
const getRandomNumber = () => Math.floor(Math.random() * 100);
// Определяем является ли число четным
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
// Запрос ответа пользователя
const getUserAnswer = () => readLineSync.question('Your answer: ');
const userName = askName();
// Логика игры
const playGame = () => {
  const rounds = 3;
  for (let i = 0; i < rounds; i + 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const correctAnswer = isEven(number);
    const userAnswer = getUserAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Lets try again ${userName}`);
      return;
    }
  }
  console.log('Congratulations! You won!');
};

playGame();
