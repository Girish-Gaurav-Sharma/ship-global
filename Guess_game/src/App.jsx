import React, { useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(5);
  const [feedback, setFeedback] = useState('Your number is...');
  const [userGuess, setUserGuess] = useState('');

  const checkGuess = () => {
    const guess = parseInt(userGuess);

    if (isNaN(guess)) {
      setFeedback('Please enter a valid number.');
      return;
    }

    if (guess < 1 || guess > 100) {
      setFeedback('Please enter a valid number between 1 and 100.');
      return;
    }

    setAttempts(attempts - 1);

    if (guess === randomNumber) {
      setFeedback("Congratulations! You've guessed the number!");
      endGame();
    } else if (attempts === 1) {
      setFeedback(`Game Over! The number was ${randomNumber}.`);
      endGame();
    } else if (guess < randomNumber - 10) {
      setFeedback('Your number is too low.');
    } else if (guess < randomNumber) {
      setFeedback('Your number is low.');
    } else if (guess > randomNumber + 10) {
      setFeedback('Your number is too high.');
    } else {
      setFeedback('Your number is high.');
    }
  };

  const endGame = () => {
    console.log("Game Over")
  };

  const restartGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(5);
    setFeedback('Your number is...');
    setUserGuess('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      checkGuess();
    }
  };

  return (
    <div id="root" className="container">
      <h1>Guess a number from 1 to 100</h1>
      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        onKeyDown={handleKeyDown}  // Add this line
        id="guessInput"
        className="input-field"
      />
      <p id="feedback" className="feedback">{feedback}</p>
      <p id="attemptsLeft" className="attempts-left">You have {attempts} Chances</p>
      <button id="checkButton" onClick={checkGuess} className="button">Check</button>
      <button id="restartButton" onClick={restartGame} className="button">Restart</button>
    </div>
  );
}

export default App;
