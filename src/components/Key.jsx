import React,{ useContext } from "react"

import {AppContext} from "../App.js"
const Key = ({keyVal,bigKey}) => {
    const {board,setBoard,currentAttempt,setCurrentAttempt} = useContext(AppContext);
    const selectLetter = () =>{
        //Spread operator to pass object without need to pass indvidual vals    
        const currentBoardInstance = [...board];
        currentBoardInstance[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
        setBoard(currentBoardInstance);
        setCurrentAttempt({...currentAttempt, letterPos:currentAttempt.letterPos+1})
    }

  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Key