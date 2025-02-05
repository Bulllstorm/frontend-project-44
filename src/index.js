import readLineSync from 'readline-sync';

// Общий движок для игр
const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const rounds = 3; // Количество раундов
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = generateRound(); // Получаем вопрос и правильный ответ
    console.log(`Question: ${question}`);

    const userAnswer = readLineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
