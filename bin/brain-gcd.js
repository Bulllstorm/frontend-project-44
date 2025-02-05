import runGame from '../src/index.js';

// Описание
const description = 'Find the greatest common divisor of given numbers.';

// Функция ищеи НОД по алгоритму евклида
const findGCD = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  while (secondNum !== 0) {
    const temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }
  return firstNum;
};

// Генерируем члучайное число
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Генерация игрового раунда
const generateRound = () => {
  const num1 = getRandomNumber(1, 100); // Первое случайное число
  const num2 = getRandomNumber(1, 100); // Второе случайное число

  const question = `${num1} ${num2}`; // Формируем вопрос
  const correctAnswer = findGCD(num1, num2).toString(); // Вычисляем НОД и преобразуем в строку

  return [question, correctAnswer]; // Возвращаем массив из вопроса и правильного ответа
};

// Запуск игры
const playGcdGame = () => {
  runGame(description, generateRound);
};
playGcdGame();
