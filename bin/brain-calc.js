import runGame from '../src/index.js';

// Описание игры
const description = 'What is the result of the expression?';

// Функция генерации случайных чисел
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Генерация игрового раунда
const generateRound = () => {
  const num1 = getRandomNumber(1, 50); // Первое число
  const num2 = getRandomNumber(1, 50); // Второе число
  const operations = ['+', '-', '*']; // Список операций
  // Случайный оператор
  const randomOperation = operations[getRandomNumber(0, operations.length - 1)];
  let correctAnswer; // Здесь будет правильный ответ
  let question; // Здесь будет текст вопроса

  // Формирование вопроса и вычисление правильного ответа
  switch (randomOperation) {
    case '+':
      correctAnswer = (num1 + num2).toString(); // Преобразуем в строку для сравнения
      question = `${num1} + ${num2}`;
      break;
    case '-':
      correctAnswer = (num1 - num2).toString();
      question = `${num1} - ${num2}`;
      break;
    case '*':
      correctAnswer = (num1 * num2).toString();
      question = `${num1} * ${num2}`;
      break;
    default:
      throw new Error(`Unsupported operation: ${randomOperation}`);
  }

  return [question, correctAnswer]; // Возвращаем массив из вопроса и правильного ответа
};

// Запуск игры "Калькулятор"
const playCalculatorGame = () => {
  runGame(description, generateRound);
};
playCalculatorGame();
