import React,{ useContext } from "react"

import {AppContext} from "../App.js"
const Key = ({keyVal,bigKey, used}) => {
    const {board,setBoard,currentAttempt,setCurrentAttempt,onSelectLetter,onEnter,onDelete} = useContext(AppContext);
    const selectLetter = () =>{
      if(keyVal == "Enter"){
        onEnter();
      } else if(keyVal =="Delete"){
        onDelete();
      } 
      else{

        onSelectLetter(keyVal);
      }
    }

  return (
    <div className="key" id={bigKey ? "big": used && "used" } onClick={selectLetter}>{keyVal}</div>
  )
}

export default Key