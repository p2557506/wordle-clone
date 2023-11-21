import "./App.css";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import {createContext,useEffect,useState} from "react"
import { boardDefault ,generateWordSet } from "../src/components/Words";


export const AppContext = createContext();

function App() {
  //Use context api to pass state across whole project
  const [board,setBoard] = useState(boardDefault);
  const [currentAttempt,setCurrentAttempt] = useState({attempt:0,letterPos:0});
  const [wordSet,setWordSet] = useState(new Set());

  const correctWord = "BEAST";

  useEffect(()=>{
    //Async function so return promise
    generateWordSet().then((words) =>{
      console.log(words.wordSet);
      setWordSet(words.wordSet)
    })
  },[])

  const onSelectLetter = (keyVal) =>{
     //Spread operator to pass object without need to pass indvidual vals    
     const currentBoardInstance = [...board];
     currentBoardInstance[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
     setBoard(currentBoardInstance);
     setCurrentAttempt({...currentAttempt, letterPos:currentAttempt.letterPos+1})
  }
  const onEnter = () =>{
    if(currentAttempt.letterPos !== 5) return;
        setCurrentAttempt({attempt:currentAttempt.attempt + 1, letterPos:0})
  }
  const onDelete = () =>{
    if(currentAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
        setBoard(newBoard);
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos - 1})
  }

  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider value={{board,setBoard , currentAttempt,setCurrentAttempt, onSelectLetter,onEnter,onDelete,correctWord}}>
        <div className="game">
          <Board/>
          <Keyboard/>
        </div>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
