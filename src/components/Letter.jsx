import React ,{useContext} from 'react'
import {AppContext} from "../App.js"
const Letter = ({letterPos,attemptVal}) => {
    //Letter is located on the attempt value x row axis at y position
    const {board,correctWord,currentAttempt} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    //Conditonal Styling for correct letters
    const correct = correctWord[letterPos] === letter //Accesse letter at position letterPos
    const almost = !correct && letter !== "" && correctWord.includes(letter)//Letter is in word but wrong pos

    //Sets id of letter for styling / Only change colours when moved on to next attempt
    const letterState = currentAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error")
  return (
    <div className="letter" id={letterState}>{letter}</div>
  )
}

export default Letter