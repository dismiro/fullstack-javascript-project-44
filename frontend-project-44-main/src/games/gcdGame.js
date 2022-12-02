import { getRandomNum } from '../cli.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (!num2 ? num1 : getGcd(num2, num1 % num2));

const gcdRound = () => {
  const firstOperand = getRandomNum(1, 100);
  const secondOperand = getRandomNum(1, 100);
  const question = `${firstOperand} ${secondOperand}`;

  const correctAnswer = `${getGcd(firstOperand, secondOperand)}`;

  return [question, correctAnswer.toString()];
};

const gcdGame = () => runGame(description, gcdRound);

export default gcdGame;
