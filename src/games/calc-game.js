import getRandomInt from '../general_function.js';
import startGame from '../index.js';

const descriptionGame = 'What is the result of the expression?';

function calcCorrectAnswer(num1, num2, operator) {
  // const answer;
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Operator selection error!!!';
  }
}

function getGameData() {
  const operators = ['+', '-', '*'];
  const firstComponent = getRandomInt();
  const secondComponent = getRandomInt();
  const operator = operators[getRandomInt(operators.length - 1)];
  const question = `${firstComponent} ${operator} ${secondComponent}`;
  const answer = String(calcCorrectAnswer(firstComponent, secondComponent, operator));
  return [question, answer];
}
export default function evenGame() {
  startGame(descriptionGame, getGameData);
}
