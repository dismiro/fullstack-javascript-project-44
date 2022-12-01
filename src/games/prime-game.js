import getRandomInt from '../general_function.js';
import startGame from '../index.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i == 0) return false;
  }
  return true;
}

function getGameData() {
  // setting number limits
  const lowerBoudnInt = 1;
  const upperBoundInt = 30;
  
  const question = getRandomInt(lowerBoudnInt, upperBoundInt);
  const answer = isPrime(question)?'yes': 'no';
  return [question, answer];
}
export default function evenGame() {
  startGame(descriptionGame, getGameData);
}
