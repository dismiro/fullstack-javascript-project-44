import getRandomInt from '../general_function.js';
import startGame from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

function calcCorrectAnswer(num) {
  if (num % 2) return 'no';
  return 'yes';
}

function getGameData() {
  const maxNum = 10; // sets the maximum bounds of numbers
  const question = getRandomInt(maxNum);
  const correctAnswer = calcCorrectAnswer(question);
  return [question, correctAnswer];
}
export default function evenGame() {
  startGame(descriptionGame, getGameData);
}
