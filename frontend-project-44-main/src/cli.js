import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const getRandomNum = (min, max) => Math.round(Math.random() * (max - min)) + min;
