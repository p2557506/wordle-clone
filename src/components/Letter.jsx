import React ,{useContext} from 'react'
import {AppContext} from "../App.js"
const Letter = ({letterPos,attemptVal}) => {
    //Letter is located on the attempt value x row axis at y position
    const {board} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
  return (
    <div className="letter">{letter}</div>
  )
}

export default Letter