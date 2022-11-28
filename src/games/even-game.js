import getRandomInt from '../general_function.js';
import startGame from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

function calcCorrectAnswer(num) {
  if (num % 2) return 'no';
  return 'yes';
}

function getGameData() {
  const question = getRandomInt();
  const correctAnswer = calcCorrectAnswer(question);
  return [question, correctAnswer];
}
export default function evenGame() {
  startGame(descriptionGame, getGameData);
}
