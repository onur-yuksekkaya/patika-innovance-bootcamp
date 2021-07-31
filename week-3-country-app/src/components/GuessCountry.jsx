import React from 'react';
import GetService from '../services/GetService';

const correctAnswer = Math.floor(Math.random() * 250);
const wrongAnswer = Math.floor(Math.random() * 250);
const wrongAnswer2 = Math.floor(Math.random() * 250);
const wrongAnswer3 = Math.floor(Math.random() * 250);
const myArray = [correctAnswer, wrongAnswer, wrongAnswer2, wrongAnswer3];
let myScore = 0;
let temp = 0;
for (let i = 0; i < 4; i += 1) {
  for (let j = i; j < 4; j += 1) {
    if (myArray[j] < myArray[i]) {
      temp = myArray[j];
      myArray[j] = myArray[i];
      myArray[i] = temp;
    }
  }
}

const GuessCountry = () => {
  const { countries } = GetService();
  const calculate = (data) => {
    if (data === countries[correctAnswer].name) {
      myScore += 1;
    }
  };
  if (!countries[correctAnswer] && myArray) {
    return <h1 className="spinner-border">.</h1>;
  }
  return (
    <div className="container">
      <h1>Your Score: {myScore}</h1>
      <div className="img-container">
        <img
          style={{ maxWidth: '25rem', height: 'auto' }}
          className="img-container"
          src={countries[correctAnswer].flag}
          alt="flags"
        />
        {countries[correctAnswer].name}
      </div>
      <button
        type="button"
        onClick={() => {
          calculate(countries[myArray[0]].name);
        }}
      >
        {countries[myArray[0]].name}
      </button>
      <button
        type="button"
        onClick={() => {
          calculate(countries[myArray[1]].name);
        }}
      >
        {countries[myArray[1]].name}
      </button>
      <button
        type="button"
        onClick={() => {
          calculate(countries[myArray[2]].name);
        }}
      >
        {countries[myArray[2]].name}
      </button>
      <button
        type="button"
        onClick={() => {
          calculate(countries[myArray[3]].name);
        }}
      >
        {countries[myArray[3]].name}
      </button>
    </div>
  );
};
export default React.memo(GuessCountry);
