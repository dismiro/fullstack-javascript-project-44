import { getRandomNum } from '../cli.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const progressionRound = () => {
  const start = getRandomNum(1, 100);
  const step = getRandomNum(1, 5);
  const progression = [];
  for (let i = 0; i < step * 10; i += step) {
    progression.push(start + i);
  }
  const hiddenNumber = getRandomNum(1, 9);
  const modifiedProgression = progression;
  const correctAnswer = modifiedProgression[hiddenNumber];
  modifiedProgression[hiddenNumber] = '..';
  const question = progression.join(' ').toString();

  return [question, correctAnswer.toString()];
};

const progressionGame = () => runGame(description, progressionRound);

export default progressionGame;
