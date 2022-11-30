import getRandomInt from '../general_function.js';
import startGame from '../index.js';

const descriptionGame = 'What number is missing in the progression?';

function fillProgression(size, firstNum, step) {
  const coll = [];
  for (let i = firstNum; i < (firstNum + size * step); i += step) {
    coll.push(i);
  }
  return coll;
}

function getGameData() {
  // setting limits
  const lowerBoudnInt = 1;
  const upperBoundInt = 30;
  const minSize = 5;
  const maxSize = 10;
  const progression = fillProgression(
    getRandomInt(minSize, maxSize),
    getRandomInt(lowerBoudnInt, upperBoundInt),
    getRandomInt(),
  );
  const indexHiddenNum = getRandomInt(0, progression.length - 1);
  const hiddenNum = progression[indexHiddenNum];
  progression[indexHiddenNum] = '..';
  return [progression.join(' '), String(hiddenNum)];
}
export default function evenGame() {
  startGame(descriptionGame, getGameData);
}
