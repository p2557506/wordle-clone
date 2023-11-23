import React, { useContext } from 'react'
import { AppContext } from '../App'
const GameOver = () => {
    const {gameOver,setGameOver ,correctWord,currentAttempt} = useContext(AppContext);
  return (
    <div className="gameOver">
        <h3>{gameOver.guessedWord ? "You Guessed Right" : "You Lost"}</h3>
        <h1>Word: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>You Guessed In {currentAttempt.attempt} tries</h3>)}
    </div>
  )
}

export default GameOver