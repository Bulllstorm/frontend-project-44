import runGame from '../src/index.js';

// Вопрос
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Проверка, является ли число простым
const isPrime = (number) => {
  if (number <= 1) return false; // Отсеиваем 1 и отрицательные числа
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Генерация случайного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Генерация игрового раунда
const generateRound = () => {
  const number = getRandomNumber(1, 100); // Генерируем случайное число от 1 до 100
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no'; // Проверяем, простое ли число, и готовим правильный ответ
  return [question, correctAnswer]; // Возвращаем вопрос и правильный ответ
};

// Запуск игры
const playPrimeGame = () => {
  runGame(description, generateRound);
};
playPrimeGame();
