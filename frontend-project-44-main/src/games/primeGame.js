import { getRandomNum } from '../cli.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const primeRound = () => {
  const randomNumber = getRandomNum(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  return [question, correctAnswer];
};

const primeGame = () => runGame(description, primeRound);

export default primeGame;
