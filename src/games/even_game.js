import readlineSync from 'readline-sync';

function getRandomInt(maxValue) {
  return Math.floor(Math.random() * maxValue);
}
function calcCorrectAnswer(num) {
  if (num % 2) return 'no';
  return 'yes';
}
export default function startGame() {
  const maxNum = 10; // sets the maximum bounds of numbers
  const countIterations = 3; // sets count of question

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < countIterations; i += 1) {
    const currentNum = getRandomInt(maxNum);
    console.log(`Question: ${currentNum}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = calcCorrectAnswer(currentNum);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
