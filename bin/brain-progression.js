import runGame from '../src/index.js';

// Вопрос
const description = 'What number is missing in the progression?';

// Функция генерации случайного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации ариф. прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

// Генерация игрового раунда
const generateRound = () => {
  const start = getRandomNumber(1, 10); // Начальное число
  const step = getRandomNumber(1, 5); // Шаг прогрессии
  const length = getRandomNumber(5, 10); // Длина прогрессии (от 5 до 10 чисел)

  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1); // Случайная позиция для замены
  const correctAnswer = progression[hiddenIndex].toString(); // Запоминаем правильный ответ

  // Подменяем число на ".."
  progression[hiddenIndex] = '..';
  const question = progression.join(' '); // Создаём строку для вопроса

  return [question, correctAnswer];
};

// Запуск игры "Арифметическая прогрессия"
const playProgressionGame = () => {
  runGame(description, generateRound);
};
playProgressionGame();
