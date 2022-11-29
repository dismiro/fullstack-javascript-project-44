import getRandomInt from '../general_function.js';
import startGame from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

function calcCorrectAnswer(number1, number2) {
  let num1 = Math.abs(number1);
  let num2 = Math.abs(number2);
  while (num2 > 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
}

function getGameData() {
  const upperBoundInt = 30; // sets the upper bound of the numbers
  const firstComponent = getRandomInt(upperBoundInt);
  const secondComponent = getRandomInt(upperBoundInt);
  const question = `${firstComponent} ${secondComponent}`;
  const answer = String(calcCorrectAnswer(firstComponent, secondComponent));
  return [question, answer];
}
export default function evenGame() {
  startGame(descriptionGame, getGameData);
}
