import React, { useCallback, useEffect ,useContext} from 'react'
import Key from '../Key';
import { AppContext } from '../../App';

const Keyboard = () => {
  const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
  const keys2 = ["A","S","D","F","G","H","J","K","L"];
  const keys3 = ["Z","X","C","V","B","N","M"];

  const {onSelectLetter,onEnter,onDelete, usedLetters,setUsedLetters} = useContext(AppContext);

  const handleKeyboardInput = useCallback((e) =>{
    if(e.key === "Enter"){
      onEnter();

    } else if(e.key === "Backspace"){
      //Delete Functionality
      onDelete();
    } else{
      keys1.forEach((key) =>{
        if(e.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key)
        }
      })
      keys2.forEach((key) =>{
        if(e.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key)
        }
      })
      keys3.forEach((key) =>{
        if(e.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key)
        }
      })
    }
  })

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyboardInput)

    return () =>{
      document.removeEventListener("keydown", handleKeyboardInput)
    }
  },[handleKeyboardInput])

  return (
    <div className="keyboard" onKeyDown={handleKeyboardInput}>
      <div className="line1">{keys1.map(key =>{
        return <Key keyVal={key} used ={usedLetters.includes(key)}/>;
      })}</div>
      <div className="line2">{keys2.map(key =>{
        return <Key keyVal={key} used ={usedLetters.includes(key)}/>;
      })}</div>
      <div className="line3">
        <Key keyVal ={"Enter"} bigKey/>
        {keys3.map(key =>{
        return <Key keyVal={key} used ={usedLetters.includes(key)}/>;
      })}
      <Key keyVal ={"Delete"} bigKey/>
    </div>
    </div>
  )
}

export default Keyboard